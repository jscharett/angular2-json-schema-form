import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class ButtonComponent extends Widget {
    constructor(jsf: JsonSchemaFormService);
    updateValue(event: any): void;
}
