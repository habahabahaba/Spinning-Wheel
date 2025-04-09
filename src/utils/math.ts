// Angle 0 is at 3:00, positive clockwise
export function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number
): { x: number; y: number } {
  const angleRad = (angleDeg - 90) * (Math.PI / 180); // rotate so 0° = 12:00
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

/**
 * Calculates maximum rectangle dimensions fitting in a sector with given aspect ratio
 * @param angleDeg - Sector angle in degrees
 * @param radius - Sector radius
 * @param aspectRatio - Width/height ratio (must be > 0)
 * @returns { maxWidth: number; maxHeight: number  }
 */
export function maxInscribedRectangle(
  angleDeg: number,
  radius: number,
  aspectRatio: number
): { maxHeight: number; maxWidth: number } {
  if (angleDeg <= 0 || angleDeg > 360 || radius <= 0 || aspectRatio <= 0) {
    return { maxWidth: 0, maxHeight: 0 };
  }

  const angleRad = (angleDeg * Math.PI) / 180;
  const halfAngleRad = angleRad / 2;
  const tanHalfAngleRad = Math.tan(halfAngleRad);

  if (angleDeg >= 180) {
    // Case 1: Sector angle >= 180°
    const denom = 1 + 1 / (aspectRatio * aspectRatio);
    const maxWidth = radius / Math.sqrt(denom);
    const maxHeight = maxWidth / aspectRatio;
    return { maxWidth, maxHeight };
  } else {
    // Case 2: Sector angle < 180°
    const A = 2 * aspectRatio * tanHalfAngleRad;
    const maxWidth = (A * radius) / (1 + A);
    const maxHeight = maxWidth / aspectRatio;
    return { maxWidth, maxHeight };
  }
}

/**
 * Evaluates if a given rectangle fits inside a circular sector, and computes fit metrics.
 *
 * @param angleDeg - Sector angle in degrees
 * @param radius - Sector radius
 * @param height - Rectangle height (perpendicular to central radius)
 * @param width - Rectangle width (parallel to central radius)
 * @returns {
 *   validHeight: boolean;           // whether rectangle is short enough to fit
 *   distanceFromApex: number;       // distance from apex to center of rectangle height
 *   arcOvershoot: number;           // how much width needs to change for perfect arc contact
 * }
 */
export function evaluateRectangleInSector(
  angleDeg: number,
  radius: number,
  height: number,
  width: number
): { validHeight: boolean; distanceFromApex: number; arcOvershoot: number } {
  const angleRad = (angleDeg * Math.PI) / 180;
  const halfAngleRad = angleRad / 2;
  const halfHeight = height / 2;

  // If rectangle is to high to be placed inside the sector:
  const maxAvailableHeight = 2 * Math.sin(halfAngleRad) * radius;
  const validHeight = height < maxAvailableHeight;

  if (
    angleDeg <= 0 ||
    angleDeg > 360 ||
    radius <= 0 ||
    height <= 0 ||
    width <= 0 ||
    !validHeight
  ) {
    return {
      validHeight: false,
      distanceFromApex: 0,
      arcOvershoot: 0,
    };
  }

  // If the rectangle had the width to be perfectly inscribed, what would be the distance between the apex and its arc-facing side:
  const fromApexToPerfectFitArcSide = Math.sqrt(radius ** 2 - halfHeight ** 2);
  // To find arc-side overshoot:
  const getArcOvershoot = (distanceFromApex: number) =>
    width + distanceFromApex - fromApexToPerfectFitArcSide;

  if (angleDeg >= 180) {
    // For wide sectors, rectangle's back side touches apex
    const distanceFromApex = 0;

    const arcOvershoot = getArcOvershoot(distanceFromApex);

    return {
      validHeight,
      distanceFromApex: 1, // leave a small padding
      arcOvershoot,
    };
  } else {
    // For narrow sectors
    const distanceFromApex = halfHeight / Math.tan(halfAngleRad);
    // console.log(
    //   `[evaluateRectangleInSector] distanceFromApex: ${distanceFromApex}`
    // );

    // Check how far the arc-facing side is from the apex
    const arcOvershoot = getArcOvershoot(distanceFromApex);

    return {
      validHeight,
      distanceFromApex: distanceFromApex,
      arcOvershoot,
    };
  }
}
