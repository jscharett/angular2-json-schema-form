import { Pointer } from './jsonpointer.functions';
/**
 * JSON Schema function library:
 *
 * buildSchemaFromLayout:   TODO: Write this function
 *
 * buildSchemaFromData:
 *
 * getFromSchema:
 *
 * removeRecursiveReferences:
 *
 * getInputType:
 *
 * checkInlineType:
 *
 * isInputRequired:
 *
 * updateInputOptions:
 *
 * getTitleMapFromOneOf:
 *
 * getControlValidators:
 *
 * resolveSchemaReferences:
 *
 * getSubSchema:
 *
 * combineAllOf:
 *
 * fixRequiredArrayProperties:
 */
/**
 * 'buildSchemaFromLayout' function
 *
 * TODO: Build a JSON Schema from a JSON Form layout
 *
 * @param {any[]} layout - The JSON Form layout
 * @return {JSON Schema} - The new JSON Schema
 */
export declare function buildSchemaFromLayout(layout: any[]): any;
/**
 * 'buildSchemaFromData' function
 *
 * Build a JSON Schema from a data object
 *
 * @param {any} data - The data object
 * @return {JSON Schema} - The new JSON Schema
 */
export declare function buildSchemaFromData(data: any, requireAllFields?: boolean, isRoot?: boolean): any;
/**
 * 'getFromSchema' function
 *
 * Uses a JSON Pointer for a value within a data object to retrieve
 * the schema for that value within schema for the data object.
 *
 * The optional third parameter can also be set to return something else:
 * 'schema' (default): the schema for the value indicated by the data pointer
 * 'parentSchema': the schema for the value's parent object or array
 * 'schemaPointer': a pointer to the value's schema within the object's schema
 * 'parentSchemaPointer': a pointer to the schema for the value's parent object or array
 *
 * @param {JSON Schema} schema - The schema to get the sub-schema from
 * @param {Pointer} dataPointer - JSON Pointer (string or array)
 * @param {boolean = false} returnContainer - Return containing object instead?
 * @return {schema} - The located sub-schema
 */
export declare function getFromSchema(schema: any, dataPointer: Pointer, returnType?: string): any;
/**
 * 'removeRecursiveReferences' function
 *
 * Checks a JSON Pointer against a map of recursive references and returns
 * a JSON Pointer to the shallowest equivalent location in the same object.
 *
 * Using this functions enables an object to be constructed with unlimited
 * recursion, while maintaing a fixed set of metadata, such as field data types.
 * The object can grow as large as it wants, and deeply recursed nodes can
 * just refer to the metadata for their shallow equivalents, instead of having
 * to add additional redundant metadata for each recursively added node.
 *
 * Example:
 *
 * pointer:         '/stuff/and/more/and/more/and/more/and/more/stuff'
 * recursiveRefMap: [['/stuff/and/more/and/more', '/stuff/and/more/']]
 * returned:        '/stuff/and/more/stuff'
 *
 * @param  {Pointer} pointer -
 * @param  {Map<string, string>} recursiveRefMap -
 * @param  {Map<string, number>} arrayMap - optional
 * @return {string} -
 */
export declare function removeRecursiveReferences(pointer: Pointer, recursiveRefMap: Map<string, string>, arrayMap?: Map<string, any>): string;
/**
 * 'getInputType' function
 *
 * @param {any} schema
 * @return {string}
 */
export declare function getInputType(schema: any, layoutNode?: any): string;
/**
 * 'checkInlineType' function
 *
 * Checks layout and schema nodes for 'inline: true', and converts
 * 'radios' or 'checkboxes' to 'radios-inline' or 'checkboxes-inline'
 *
 * @param {string} controlType -
 * @param {JSON Schema} schema -
 * @return {string}
 */
export declare function checkInlineType(controlType: string, schema: any, layoutNode?: any): string;
/**
 * 'isInputRequired' function
 *
 * Checks a JSON Schema to see if an item is required
 *
 * @param {schema} schema - the schema to check
 * @param {string} pointer - the pointer to the item to check
 * @return {boolean} - true if the item is required, false if not
 */
export declare function isInputRequired(schema: any, schemaPointer: string): boolean;
/**
 * 'updateInputOptions' function
 *
 * @param {any} layoutNode
 * @param {any} schema
 * @param {any} jsf
 * @return {void}
 */
export declare function updateInputOptions(layoutNode: any, schema: any, jsf: any): void;
/**
 * 'getTitleMapFromOneOf' function
 *
 * @param {schema} schema
 * @param {boolean = null} flatList
 * @param {boolean = false} validateOnly
 * @return {validators}
 */
export declare function getTitleMapFromOneOf(schema?: any, flatList?: boolean, validateOnly?: boolean): any;
/**
 * 'getControlValidators' function
 *
 * @param {schema} schema
 * @return {validators}
 */
export declare function getControlValidators(schema: any): any;
/**
 * 'resolveSchemaReferences' function
 *
 * Find all $ref links in schema and save links and referenced schemas in
 * schemaRefLibrary, schemaRecursiveRefMap, and dataRecursiveRefMap
 *
 * @param {schema} schema
 * @return {void}
 */
export declare function resolveSchemaReferences(schema: any, schemaRefLibrary: any, schemaRecursiveRefMap: Map<string, string>, dataRecursiveRefMap: Map<string, string>, arrayMap: Map<string, number>): any;
/**
 * 'getSubSchema' function
 *
 * @param {schema} schema
 * @param {Pointer} pointer
 * @param {object} schemaRefLibrary
 * @param {Map<string, string>} schemaRecursiveRefMap
 * @param {boolean = true} compile
 * @param {Pointer = pointer} initialPointer
 * @return {schema}
 */
export declare function getSubSchema(schema: any, pointer: Pointer, schemaRefLibrary?: any, schemaRecursiveRefMap?: Map<string, string>, usedPointers?: string[]): any;
/**
 * 'combineAllOf' function
 *
 * Attempt to convert an allOf schema object into
 * a non-allOf schema object with equivalent rules.
 *
 * @param {any} schema - allOf schema object
 * @return {any} - converted schema object
 */
export declare function combineAllOf(schema: any): any;
/**
 * 'fixRequiredArrayProperties' function
 *
 * Fixes an incorrectly placed required list inside an array schema, by moving
 * it into items.properties or additionalItems.properties, where it belongs.
 *
 * @param {any} schema - allOf schema object
 * @return {any} - converted schema object
 */
export declare function fixRequiredArrayProperties(schema: any): any;
