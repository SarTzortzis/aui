export type OverlayHorizontalAlignment = "start" | "center" | "end";

export type OverlayVerticalAlignment = "top" | "center" | "bottom";

export interface OverlayPosition {
  originX: OverlayHorizontalAlignment;
  originY: OverlayVerticalAlignment;

  overlayX: OverlayHorizontalAlignment;
  overlayY: OverlayVerticalAlignment;

  offsetX?: number;
  offsetY?: number;
}
