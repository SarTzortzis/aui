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

  private readonly theme = signal<UiTheme>("light");

  readonly currentTheme = this.theme.asReadonly();

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

    this.theme.set(theme);
  }

  toggle(): void {
    this.setTheme(this.isDark() ? "light" : "dark");
  }

  isDark(): boolean {
    return this.theme() === "dark";
  }

  isLight(): boolean {
    return this.theme() === "light";
  }

  //------------------------------------------
  // Private methods
  //------------------------------------------

  private initialize(): void {
    const savedTheme = this.storage.get<UiTheme>(this.storageKey);

    this.setTheme(savedTheme ?? "light");
  }
}
