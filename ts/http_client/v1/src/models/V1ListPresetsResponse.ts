/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.1-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Preset } from './V1Preset';
import {
    V1PresetFromJSON,
    V1PresetFromJSONTyped,
    V1PresetToJSON,
} from './V1Preset';

/**
 * 
 * @export
 * @interface V1ListPresetsResponse
 */
export interface V1ListPresetsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListPresetsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Preset>}
     * @memberof V1ListPresetsResponse
     */
    results?: Array<V1Preset>;
    /**
     * 
     * @type {string}
     * @memberof V1ListPresetsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListPresetsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListPresetsResponse interface.
 */
export function instanceOfV1ListPresetsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListPresetsResponseFromJSON(json: any): V1ListPresetsResponse {
    return V1ListPresetsResponseFromJSONTyped(json, false);
}

export function V1ListPresetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListPresetsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1PresetFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListPresetsResponseToJSON(value?: V1ListPresetsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1PresetToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

