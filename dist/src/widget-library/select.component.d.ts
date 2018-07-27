import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { isArray } from '../shared';
import { Widget } from './widget';
export declare class SelectComponent extends Widget implements OnInit {
    selectList: any[];
    isArray: typeof isArray;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
