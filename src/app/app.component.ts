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
  <div class="placeholder-logo" slot="logo">some fance Titel</div>
  <ix-menu>
    <ix-menu-item tabIcon="home"> Home </ix-menu-item>
  </ix-menu>

  <form [formGroup]="group" class="m-2">
    <ix-layout-grid class="border">
      <ix-row>
        <ix-col class="col-md-4">
          <ix-select
            [formControlName]="'select'"
            style="width: 100%"
            label="Select Target"
            variant="primary"
          >
            <ix-select-item
              label="aa"
              value="1"
              [selected]="true"
            ></ix-select-item>

            <ix-select-item label="bb" value="2"></ix-select-item>

            <ix-select-item label="cc" value="3"></ix-select-item>

            <ix-select-item label="Custom " value="4"></ix-select-item>
          </ix-select>
        </ix-col>
      </ix-row>
      <ix-row>
        <ix-col class="col-md-4">
          <ix-input-group style="width:100%" class="needs-validation">
            <input
              placeholder="Enter stuff"
              type="text"
              formControlName="secretname"
            />
          </ix-input-group>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  </form>
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
