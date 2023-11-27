import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  fb = inject(FormBuilder);

  group = this.fb.group({
    select: ['1'],
    secretname: ['test'],
  });
}
