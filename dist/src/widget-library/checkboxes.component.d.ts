import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService, TitleMapItem } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class CheckboxesComponent extends Widget implements OnInit {
    layoutOrientation: string;
    formArray: AbstractControl;
    checkboxList: TitleMapItem[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
}
