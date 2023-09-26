/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc48
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1SectionSpec
 */
export interface V1SectionSpec {
    /**
     * 
     * @type {string}
     * @memberof V1SectionSpec
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1SectionSpec
     */
    is_minimized?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    columns?: number;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    height?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1SectionSpec
     */
    widgets?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof V1SectionSpec
     */
    pageSize?: number;
}

/**
 * Check if a given object implements the V1SectionSpec interface.
 */
export function instanceOfV1SectionSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SectionSpecFromJSON(json: any): V1SectionSpec {
    return V1SectionSpecFromJSONTyped(json, false);
}

export function V1SectionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SectionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_minimized': !exists(json, 'is_minimized') ? undefined : json['is_minimized'],
        'columns': !exists(json, 'columns') ? undefined : json['columns'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'widgets': !exists(json, 'widgets') ? undefined : json['widgets'],
        'pageIndex': !exists(json, 'pageIndex') ? undefined : json['pageIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
    };
}

export function V1SectionSpecToJSON(value?: V1SectionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'is_minimized': value.is_minimized,
        'columns': value.columns,
        'height': value.height,
        'widgets': value.widgets,
        'pageIndex': value.pageIndex,
        'pageSize': value.pageSize,
    };
}

