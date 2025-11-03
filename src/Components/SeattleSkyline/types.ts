import { SVGProps } from "react";

export type SeattleSkylineProps = SVGProps<SVGSVGElement> & {
  /** Any valid CSS height value: 220, "220px", "40vh", "12rem", etc. */
  height?: number | string;
  /** Optional accessible title. Omit if purely decorative. */
  title?: string;
  /** If true, hides from screen readers (overrides `title`). */
  decorative?: boolean;
};
