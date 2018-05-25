import { Component } from '@angular/core';

import { JsonSchemaFormService } from '../json-schema-form.service';
import { AbstractWidget } from '.';

@Component({
  selector: 'hidden-widget',
  template: `
    <input *ngIf="boundControl"
      [formControl]="formControl"
      [id]="'control' + layoutNode?._id"
      [name]="controlName"
      type="hidden">
    <input *ngIf="!boundControl"
      [disabled]="controlDisabled"
      [name]="controlName"
      [id]="'control' + layoutNode?._id"
      type="hidden"
      [value]="controlValue">`,
})
export class HiddenComponent extends AbstractWidget {

  constructor(jsf: JsonSchemaFormService) {
    super(jsf);
  }

}
