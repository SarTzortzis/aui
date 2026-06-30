import { ComponentRef } from "@angular/core";
import { Observable, Subject } from "rxjs";

export class OverlayRef<TResult = unknown> {
  private readonly afterClosedSubject = new Subject<TResult | undefined>();

  private closed = false;

  constructor(
    private readonly componentRef: ComponentRef<unknown>,
    private readonly disposeFn: () => void,
  ) {}

  close(result?: TResult): void {
    if (this.closed) {
      return;
    }

    this.closed = true;

    this.disposeFn();

    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  afterClosed(): Observable<TResult | undefined> {
    return this.afterClosedSubject.asObservable();
  }

  getComponentRef<T>(): ComponentRef<T> {
    return this.componentRef as ComponentRef<T>;
  }

  isClosed(): boolean {
    return this.closed;
  }
}
