import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class AddReferenceComponent extends Widget {
    itemCount: number;
    previousLayoutIndex: number[];
    previousDataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    readonly showAddButton: boolean;
    readonly buttonText: string;
    addItem(event: any): void;
}
