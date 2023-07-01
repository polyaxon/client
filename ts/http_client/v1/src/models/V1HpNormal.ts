/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc25
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
 * @interface V1HpNormal
 */
export interface V1HpNormal {
    /**
     *
     * @type {string}
     * @memberof V1HpNormal
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpNormal
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpNormal interface.
 */
export function instanceOfV1HpNormal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpNormalFromJSON(json: any): V1HpNormal {
    return V1HpNormalFromJSONTyped(json, false);
}

export function V1HpNormalFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpNormal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpNormalToJSON(value?: V1HpNormal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'value': value.value,
    };
}

