import { Injectable } from "@angular/core";

export interface AuiChartTheme {
  colors: {
    primary: string;
    success: string;
    warning: string;
    danger: string;

    text: string;
    textSecondary: string;

    border: string;

    surface: string;
  };

  typography: {
    fontFamily: string;
    fontSize: number;
  };
}

@Injectable({
  providedIn: "root",
})
export class ChartThemeService {
  theme(): AuiChartTheme {
    const styles = getComputedStyle(document.documentElement);

    return {
      colors: {
        primary: this.css(styles, "--ui-color-primary"),
        success: this.css(styles, "--ui-color-success"),
        warning: this.css(styles, "--ui-color-warning"),
        danger: this.css(styles, "--ui-color-danger"),

        text: this.css(styles, "--ui-color-text"),
        textSecondary: this.css(styles, "--ui-color-text-secondary"),

        border: this.css(styles, "--ui-color-border"),
        surface: this.css(styles, "--ui-color-surface"),
      },

      typography: {
        fontFamily: this.css(styles, "--ui-font-family") || "Inter, sans-serif",

        fontSize: 12,
      },
    };
  }

  private css(styles: CSSStyleDeclaration, variable: string): string {
    return styles.getPropertyValue(variable).trim();
  }
}
