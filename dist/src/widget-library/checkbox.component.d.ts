import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class CheckboxComponent extends Widget implements OnInit {
    trueValue: any;
    falseValue: any;
    constructor(jsf: JsonSchemaFormService);
    readonly isChecked: boolean;
    ngOnInit(): void;
    updateValue(event: any): void;
}
