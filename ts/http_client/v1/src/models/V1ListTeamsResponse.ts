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
import type { V1Team } from './V1Team';
import {
    V1TeamFromJSON,
    V1TeamFromJSONTyped,
    V1TeamToJSON,
} from './V1Team';

/**
 * 
 * @export
 * @interface V1ListTeamsResponse
 */
export interface V1ListTeamsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListTeamsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Team>}
     * @memberof V1ListTeamsResponse
     */
    results?: Array<V1Team>;
    /**
     * 
     * @type {string}
     * @memberof V1ListTeamsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListTeamsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListTeamsResponse interface.
 */
export function instanceOfV1ListTeamsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListTeamsResponseFromJSON(json: any): V1ListTeamsResponse {
    return V1ListTeamsResponseFromJSONTyped(json, false);
}

export function V1ListTeamsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListTeamsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1TeamFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListTeamsResponseToJSON(value?: V1ListTeamsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1TeamToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

