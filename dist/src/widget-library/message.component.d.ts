import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class MessageComponent extends Widget implements OnInit {
    message: string;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
