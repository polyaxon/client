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
import type { V1Queue } from './V1Queue';
import {
    V1QueueFromJSON,
    V1QueueFromJSONTyped,
    V1QueueToJSON,
} from './V1Queue';

/**
 * 
 * @export
 * @interface V1ListQueuesResponse
 */
export interface V1ListQueuesResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListQueuesResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Queue>}
     * @memberof V1ListQueuesResponse
     */
    results?: Array<V1Queue>;
    /**
     * 
     * @type {string}
     * @memberof V1ListQueuesResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListQueuesResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListQueuesResponse interface.
 */
export function instanceOfV1ListQueuesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListQueuesResponseFromJSON(json: any): V1ListQueuesResponse {
    return V1ListQueuesResponseFromJSONTyped(json, false);
}

export function V1ListQueuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListQueuesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1QueueFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListQueuesResponseToJSON(value?: V1ListQueuesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1QueueToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

