import { Injectable, OnDestroy } from '@angular/core';
import { concatMap, defer, Subscription, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  timersupscription!: Subscription;

  async doStuff() {
    console.log('do stuff');
  }
  async doStuff2() {
    console.log('do other stuff');
  }

  startATimerWith(period: number) {
    this.timersupscription = timer(0, period)
      .pipe(
        concatMap(() => [
          defer(() => this.doStuff()),
          defer(() => this.doStuff2()),
        ])
      )
      .subscribe();
  }
}
