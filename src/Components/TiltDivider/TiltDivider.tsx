import styles from "./TiltDivider.module.scss";
import { TiltDividerType } from "./types";

const TiltDivider: TiltDividerType = ({
  heightPx = 90,
  topColor = "var(--top-color, #000)",
  bottomColor = "var(--bottom-color, #000)",
  bandColor = "var(--band-color, #fff)",
  bandPx = 10,
  leftYPercent = 95,
  rightYPercent = 5,
  fullBleed = true,
  className,
}) => {
  // We draw in a stable 1200x120 viewBox and scale to fit.
  const VB_W = 1200;
  const VB_H = 120;

  // Convert percentages into viewBox units.
  const yL = Math.max(0, Math.min(VB_H, (leftYPercent / 100) * VB_H));
  const yR = Math.max(0, Math.min(VB_H, (rightYPercent / 100) * VB_H));

  // Top polygon (same shape as your example)
  const topPath = `M0 0 L${VB_W} 0 L${VB_W} ${yR} L0 ${yL} Z`;

  // Border band path is the diagonal line between (0,yL) → (VB_W,yR)
  const bandPath = `M0 ${yL} L${VB_W} ${yR}`;

  return (
    <div
      className={`${styles.wrap} ${fullBleed ? styles.fullBleed : ""} ${
        className ?? ""
      }`}
      style={{ height: `${heightPx}px` }}
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
      >
        {/* Bottom color fills entire box first */}
        <rect x="0" y="0" width={VB_W} height={VB_H} fill={bottomColor} />

        {/* Top color clipped by the tilted polygon */}
        <path d={topPath} fill={topColor} />

        {/* Contrasting band drawn on the dividing edge, stays constant pixel width */}
        <path
          d={bandPath}
          fill="none"
          stroke={bandColor}
          strokeWidth={bandPx}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="butt"
        />
      </svg>
    </div>
  );
};

export default TiltDivider;
