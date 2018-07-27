import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class RadiosComponent extends Widget implements OnInit {
    layoutOrientation: string;
    radiosList: any[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
