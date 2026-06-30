export interface OverlayConfig {
  /**
   * Element the overlay should be attached to.
   */
  origin?: HTMLElement;

  /**
   * Preferred overlay position.
   */
  position?: OverlayPositionName;

  /**
   * Distance between origin and overlay.
   */
  offset?: number;

  /**
   * Shows a backdrop behind the overlay.
   */
  hasBackdrop?: boolean;

  /**
   * Closes when backdrop is clicked.
   */
  closeOnBackdropClick?: boolean;

  /**
   * Closes when Escape is pressed.
   */
  closeOnEscape?: boolean;

  /**
   * Restores focus when closed.
   */
  restoreFocus?: boolean;

  /**
   * Panel css classes.
   */
  panelClass?: string | string[];

  /**
   * Backdrop css classes.
   */
  backdropClass?: string | string[];

  width?: number | string;
  height?: number | string;

  minWidth?: number | string;
  minHeight?: number | string;

  maxWidth?: number | string;
  maxHeight?: number | string;
}

export type OverlayPositionName = "top" | "bottom" | "left" | "right";
