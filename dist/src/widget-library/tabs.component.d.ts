import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class TabsComponent extends Widget implements OnInit {
    itemCount: number;
    selectedItem: number;
    showAddTab: boolean;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    select(index: any): void;
    updateControl(): void;
    setTabTitle(item: any, index: number): string;
}
