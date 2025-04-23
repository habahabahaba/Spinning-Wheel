/**
 * Converts an angle in degrees into angle in radians
 * @param degrees - Angle in degrees
 * @returns number
 */
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Converts polar coordinates to Cartesian (x, y) coordinates.
 *
 * @param cx - X-coordinate of the center point (origin of polar system)
 * @param cy - Y-coordinate of the center point (origin of polar system)
 * @param radius - Distance from the center (magnitude of the vector)
 * @param angleDeg - Angle in degrees (0° is upward, increases clockwise)
 * @returns Cartesian coordinates { x, y } corresponding to the polar input
 *
 * Note:
 * - 0° points to 12:00 (upward direction), increasing clockwise like a clock.
 * - This is commonly used in graphics (e.g., pie charts, circular dials).
 */
export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number
): { x: number; y: number } {
  // Angle 0 is at 3:00, positive clockwise
  const angleRad = degreesToRadians(angleDeg - 90); // rotate so 0° = 12:00
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
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
    const maxHeight = (maxWidth / aspectRatio) * 0.94; // leave space for a spin button.
    return { maxWidth, maxHeight };
  }
}

/**
 * Evaluates if a given rectangle fits inside a circular sector, (placed on top of the central radius of the sector and parallel to it,) and computes fit metrics.
 *
 * @param angleDeg - Sector angle in degrees
 * @param radius - Sector radius
 * @param height - Rectangle height (perpendicular to central radius)
 * @param width - Rectangle width (parallel to central radius)
 * @returns {
 *   validHeight: boolean;           // whether rectangle is short enough to fit inside the sector
 *   distanceFromApex: number;       // distance from apex to center of rectangle side, closest to the apex, with its corners touching radii
 *   arcOvershoot: number;           // how much width needs to change for the rectangle to be perfectly inscribed
 * }
 */
export function evaluateRectangleInSector(
  angleDeg: number,
  radius: number,
  height: number,
  width: number
): { validHeight: boolean; distanceFromApex: number; arcOvershoot: number } {
  const angleRad = degreesToRadians(angleDeg);
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
  const apexToHeightOnArcDistance = Math.sqrt(radius ** 2 - halfHeight ** 2);
  // To find arc-side overshoot:
  const getArcOvershoot = (distanceFromApex: number) =>
    width + distanceFromApex - apexToHeightOnArcDistance;

  if (angleDeg >= 180) {
    // For wide sectors, rectangle's back side touches apex
    const distanceFromApex = 0;

    const arcOvershoot = getArcOvershoot(distanceFromApex);

    return {
      validHeight,
      distanceFromApex: radius * 0.15, // leave a small padding
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
