import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
 
  template: `
  <ix-basic-navigation
  data-testid="crsp-main-navigation"
  hideHeader="false"
  breakpoints="sm|md"
>
  <div class="placeholder-logo" slot="logo">some fance Titel <ix-pill icon="disconnected"> Test </ix-pill></div>
  <ix-menu>
    <ix-menu-item tabIcon="home"> Home </ix-menu-item>
  </ix-menu>

   
</ix-basic-navigation>

  
  `
})
export class AppComponent {
  fb = inject(FormBuilder);

  group = this.fb.group({
    select: ['1'],
    secretname: ['test'],
  });
}
