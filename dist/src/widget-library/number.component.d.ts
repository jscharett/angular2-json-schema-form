import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class NumberComponent extends Widget implements OnInit {
    allowDecimal: boolean;
    allowExponents: boolean;
    allowNegative: boolean;
    lastValidNumber: string;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
