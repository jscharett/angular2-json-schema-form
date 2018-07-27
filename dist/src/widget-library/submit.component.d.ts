import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { ButtonComponent } from './button.component';
export declare class SubmitComponent extends ButtonComponent implements OnInit {
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
}
