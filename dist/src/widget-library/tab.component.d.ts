import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class TabComponent extends Widget implements OnInit {
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
