// Constants:
import { remoteFontTasks } from '../constants/fonts';
import useBoundStore from '../store/boundStore';
// Types, interfaces and enumns:
// import type {  RemoteFontNames } from '../constants/fonts';
const MAX_CONCURRENT_DOWNLOADS = navigator.userAgent.includes('Firefox')
  ? 4
  : 7;

async function loadFontSubsetWithRetry(
  fontName: string,
  url: string,
  attempt = 1
): Promise<void> {
  const fontFace = new FontFace(fontName, url, {
    weight: '600',
    display: 'block',
  });

  return fontFace
    .load()
    .then((loadedFace) => {
      document.fonts.add(loadedFace);

      return new Promise<void>((resolve) => {
        const check = () => {
          if (document.fonts.check(`600 16px "${fontName}"`)) {
            resolve();
            // console.log(`Font variant (${url}) was installed.`)
          } else {
            requestAnimationFrame(check);
          }
        };
        check();
      });
    })
    .catch((err) => {
      console.warn(`Subset load failed (attempt ${attempt}): ${url}`, err);

      return new Promise<void>((resolve) => {
        const backoff = Math.min(60000, 1000 * 2 ** attempt);
        setTimeout(() => {
          loadFontSubsetWithRetry(fontName, url, attempt + 1).then(resolve);
        }, backoff);
      });
    });
}

export default async function initiateFontLoading() {
  const markLoadedURL = useBoundStore.getState().markLoadedURL;

  const queue = [...remoteFontTasks];
  let active = 0;

  return new Promise<void>((resolveAll) => {
    const scheduleNextTasks = () => {
      while (active < MAX_CONCURRENT_DOWNLOADS && queue.length > 0) {
        const { fontName, url } = queue.shift()!;
        active++;

        loadFontSubsetWithRetry(fontName, url).then(() => {
          markLoadedURL({ fontName, url });
          //   console.log(`url ${url} loaded !`);
          active--;
          scheduleNextTasks();
          if (active === 0 && queue.length === 0) {
            resolveAll();
          }
        });
      }
    };

    scheduleNextTasks();
  });
}
