import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from '../json-schema-form.service';
export declare abstract class Widget implements OnInit {
    protected jsf: JsonSchemaFormService;
    boundControl: boolean;
    controlDisabled: boolean;
    controlName: string;
    controlValue: any;
    formControl: AbstractControl;
    options: any;
    layoutNode: any;
    layoutIndex: Array<number>;
    dataIndex: Array<number>;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
}
