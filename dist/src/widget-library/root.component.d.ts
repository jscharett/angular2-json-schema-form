import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class RootComponent extends Widget implements OnInit {
    isOrderable: boolean;
    isFlexItem: boolean;
    layout: any[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    isDraggable(node: any): boolean;
    getFlexAttribute(node: any, attribute: string): string;
    showWidget(layoutNode: any): boolean;
}
