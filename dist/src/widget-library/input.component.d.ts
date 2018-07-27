import { JsonSchemaFormService } from '../json-schema-form.service';
import { Widget } from './widget';
export declare class InputComponent extends Widget {
    autoCompleteList: string[];
    constructor(jsf: JsonSchemaFormService);
}
