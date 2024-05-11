import { Injectable, WritableSignal, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewModeService {
  private _reviewMode: WritableSignal<boolean> = signal(false);
  readonly reviewMode$: Observable<boolean> = toObservable(this._reviewMode);

  get reviewMode(): boolean {
    return this._reviewMode();
  }

  set reviewMode(value: boolean) {
    this._reviewMode.set(value);
  }
}
