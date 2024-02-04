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
import type { V1Run } from './V1Run';
import {
    V1RunFromJSON,
    V1RunFromJSONTyped,
    V1RunToJSON,
} from './V1Run';

/**
 * 
 * @export
 * @interface V1ListRunsResponse
 */
export interface V1ListRunsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListRunsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Run>}
     * @memberof V1ListRunsResponse
     */
    results?: Array<V1Run>;
    /**
     * 
     * @type {string}
     * @memberof V1ListRunsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListRunsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListRunsResponse interface.
 */
export function instanceOfV1ListRunsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListRunsResponseFromJSON(json: any): V1ListRunsResponse {
    return V1ListRunsResponseFromJSONTyped(json, false);
}

export function V1ListRunsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListRunsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1RunFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListRunsResponseToJSON(value?: V1ListRunsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1RunToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

