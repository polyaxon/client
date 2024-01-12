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
/**
 *
 * @export
 * @interface V1EventsResponse
 */
export interface V1EventsResponse {
    /**
     *
     * @type {Array<object>}
     * @memberof V1EventsResponse
     */
    data?: Array<object>;
}

/**
 * Check if a given object implements the V1EventsResponse interface.
 */
export function instanceOfV1EventsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventsResponseFromJSON(json: any): V1EventsResponse {
    return V1EventsResponseFromJSONTyped(json, false);
}

export function V1EventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function V1EventsResponseToJSON(value?: V1EventsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'data': value.data,
    };
}

