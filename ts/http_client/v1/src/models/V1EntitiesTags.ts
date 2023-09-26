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
 * @interface V1EntitiesTags
 */
export interface V1EntitiesTags {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1EntitiesTags
     */
    uuids?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1EntitiesTags
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the V1EntitiesTags interface.
 */
export function instanceOfV1EntitiesTags(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EntitiesTagsFromJSON(json: any): V1EntitiesTags {
    return V1EntitiesTagsFromJSONTyped(json, false);
}

export function V1EntitiesTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntitiesTags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuids': !exists(json, 'uuids') ? undefined : json['uuids'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function V1EntitiesTagsToJSON(value?: V1EntitiesTags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuids': value.uuids,
        'tags': value.tags,
    };
}

