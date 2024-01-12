/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Token } from './V1Token';
import {
    V1TokenFromJSON,
    V1TokenFromJSONTyped,
    V1TokenToJSON,
} from './V1Token';

/**
 *
 * @export
 * @interface V1ListTokenResponse
 */
export interface V1ListTokenResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListTokenResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1Token>}
     * @memberof V1ListTokenResponse
     */
    results?: Array<V1Token>;
    /**
     *
     * @type {string}
     * @memberof V1ListTokenResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListTokenResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListTokenResponse interface.
 */
export function instanceOfV1ListTokenResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListTokenResponseFromJSON(json: any): V1ListTokenResponse {
    return V1ListTokenResponseFromJSONTyped(json, false);
}

export function V1ListTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1TokenFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListTokenResponseToJSON(value?: V1ListTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1TokenToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

