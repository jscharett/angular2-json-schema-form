import { ComponentFactoryResolver, ComponentRef, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class TemplateComponent extends Widget implements OnInit, OnChanges {
    protected componentFactory: ComponentFactoryResolver;
    newComponent: ComponentRef<any>;
    widgetContainer: ViewContainerRef;
    constructor(jsf: JsonSchemaFormService, componentFactory: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnChanges(): void;
    protected updateComponent(): void;
    protected createComponent(): void;
}
