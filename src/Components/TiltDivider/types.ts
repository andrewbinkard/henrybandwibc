export type TiltDividerType = (params: {
  /** Visible height of the divider in CSS px (default 80). */
  heightPx?: number;

  /** Colors (can pass CSS variables like "var(--section-bg)" if you want). */
  topColor?: string; // color above the border band
  bottomColor?: string; // color below the border band
  bandColor?: string; // the contrasting band color

  /** Band thickness in CSS px (default 6). */
  bandPx?: number;

  /**
   * Control the tilt by specifying where the diagonal meets
   * the left & right edges as percentages of the divider height.
   * 0 = very top, 100 = very bottom.
   * Defaults match your sample path (left ≈ 14%, right = 100%).
   */
  leftYPercent?: number; // default 14
  rightYPercent?: number; // default 100

  /** Make the divider span the viewport even inside a centered container. */
  fullBleed?: boolean;
  className?: string;
}) => JSX.Element;
