import { fakeAsync, tick } from '@angular/core/testing';
import { SomeService } from './someService.service';

describe('doing some service', () => {
  let service: SomeService;

  beforeEach(() => {
    service = new SomeService();
    jest.useFakeTimers();
  });

  it('should trigger timer', fakeAsync(() => {
    let spyDoStuff = jest.spyOn(service, 'doStuff');

    service.startATimerWith(1000);
    jest.runOnlyPendingTimersAsync();
    tick();

    expect(spyDoStuff).toBeCalled();
  }));
});
