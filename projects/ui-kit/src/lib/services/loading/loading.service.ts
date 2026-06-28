import { Injectable, computed, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  //------------------------------------------
  // State
  //------------------------------------------

  private readonly _loadingCount = signal(0);

  readonly isLoading = computed(() => this._loadingCount() > 0);

  //------------------------------------------
  // Public API
  //------------------------------------------

  show(): void {
    this._loadingCount.update((count) => count + 1);
  }

  hide(): void {
    this._loadingCount.update((count) => Math.max(0, count - 1));
  }

  reset(): void {
    this._loadingCount.set(0);
  }

  track<T>(promise: Promise<T>): Promise<T> {
    this.show();

    return promise.finally(() => this.hide());
  }
}
