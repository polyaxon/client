/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.0
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
 * @interface V1UserAccessData
 */
export interface V1UserAccessData {
    /**
     *
     * @type {string}
     * @memberof V1UserAccessData
     */
    username?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1UserAccessData
     */
    is_sa?: boolean;
}

/**
 * Check if a given object implements the V1UserAccessData interface.
 */
export function instanceOfV1UserAccessData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UserAccessDataFromJSON(json: any): V1UserAccessData {
    return V1UserAccessDataFromJSONTyped(json, false);
}

export function V1UserAccessDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserAccessData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'username': !exists(json, 'username') ? undefined : json['username'],
        'is_sa': !exists(json, 'is_sa') ? undefined : json['is_sa'],
    };
}

export function V1UserAccessDataToJSON(value?: V1UserAccessData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'username': value.username,
        'is_sa': value.is_sa,
    };
}

