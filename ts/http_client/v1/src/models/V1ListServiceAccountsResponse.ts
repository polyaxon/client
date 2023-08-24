/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc37
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ServiceAccount } from './V1ServiceAccount';
import {
    V1ServiceAccountFromJSON,
    V1ServiceAccountFromJSONTyped,
    V1ServiceAccountToJSON,
} from './V1ServiceAccount';

/**
 *
 * @export
 * @interface V1ListServiceAccountsResponse
 */
export interface V1ListServiceAccountsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListServiceAccountsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1ServiceAccount>}
     * @memberof V1ListServiceAccountsResponse
     */
    results?: Array<V1ServiceAccount>;
    /**
     *
     * @type {string}
     * @memberof V1ListServiceAccountsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListServiceAccountsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListServiceAccountsResponse interface.
 */
export function instanceOfV1ListServiceAccountsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListServiceAccountsResponseFromJSON(json: any): V1ListServiceAccountsResponse {
    return V1ListServiceAccountsResponseFromJSONTyped(json, false);
}

export function V1ListServiceAccountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListServiceAccountsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1ServiceAccountFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListServiceAccountsResponseToJSON(value?: V1ListServiceAccountsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1ServiceAccountToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

