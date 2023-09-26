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
import type { V1Organization } from './V1Organization';
import {
    V1OrganizationFromJSON,
    V1OrganizationFromJSONTyped,
    V1OrganizationToJSON,
} from './V1Organization';

/**
 * 
 * @export
 * @interface V1ListOrganizationsResponse
 */
export interface V1ListOrganizationsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListOrganizationsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Organization>}
     * @memberof V1ListOrganizationsResponse
     */
    results?: Array<V1Organization>;
    /**
     * 
     * @type {string}
     * @memberof V1ListOrganizationsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListOrganizationsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListOrganizationsResponse interface.
 */
export function instanceOfV1ListOrganizationsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListOrganizationsResponseFromJSON(json: any): V1ListOrganizationsResponse {
    return V1ListOrganizationsResponseFromJSONTyped(json, false);
}

export function V1ListOrganizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListOrganizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1OrganizationFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListOrganizationsResponseToJSON(value?: V1ListOrganizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1OrganizationToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

