import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, signal } from "@angular/core";

import { StorageService } from "../storage";
import { UiTheme } from "./theme.types";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  //------------------------------------------
  // Constants
  //------------------------------------------

  private readonly storageKey = "ui-theme";

  //------------------------------------------
  // State
  //------------------------------------------

  private readonly _theme = signal<UiTheme>("light");

  readonly theme = this._theme.asReadonly();

  //------------------------------------------
  // Constructor
  //------------------------------------------

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly storage: StorageService,
  ) {
    this.initialize();
  }

  //------------------------------------------
  // Public API
  //------------------------------------------

  setTheme(theme: UiTheme): void {
    this.document.documentElement.setAttribute("data-ui-theme", theme);

    this.storage.set(this.storageKey, theme);

    this._theme.set(theme);
  }

  toggle(): void {
    this.setTheme(this._theme() === "dark" ? "light" : "dark");
  }

  //------------------------------------------
  // Private methods
  //------------------------------------------

  private initialize(): void {
    const savedTheme = this.storage.get<UiTheme>(this.storageKey);

    this.setTheme(savedTheme ?? "light");
  }
}
