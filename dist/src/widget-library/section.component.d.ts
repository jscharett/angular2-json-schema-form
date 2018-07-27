import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class SectionComponent extends Widget implements OnInit {
    expanded: boolean;
    containerType: string;
    constructor(jsf: JsonSchemaFormService);
    readonly sectionTitle: string;
    ngOnInit(): void;
    toggleExpanded(): void;
    getFlexAttribute(attribute: string): any;
}
