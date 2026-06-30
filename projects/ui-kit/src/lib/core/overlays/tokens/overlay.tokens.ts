import { InjectionToken } from "@angular/core";

import { OverlayConfig } from "../models/overlay-config";
import { OverlayRef } from "../models/overlay-ref";

/**
 * Injected into dynamically created overlay components.
 */
export const AUI_OVERLAY_REF = new InjectionToken<OverlayRef>(
  "AUI_OVERLAY_REF",
);

/**
 * Injected overlay configuration.
 */
export const AUI_OVERLAY_CONFIG = new InjectionToken<OverlayConfig>(
  "AUI_OVERLAY_CONFIG",
);
