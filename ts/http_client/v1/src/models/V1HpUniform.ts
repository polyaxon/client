/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc12
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
 * @interface V1HpUniform
 */
export interface V1HpUniform {
    /**
     *
     * @type {string}
     * @memberof V1HpUniform
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpUniform
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpUniform interface.
 */
export function instanceOfV1HpUniform(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpUniformFromJSON(json: any): V1HpUniform {
    return V1HpUniformFromJSONTyped(json, false);
}

export function V1HpUniformFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpUniform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpUniformToJSON(value?: V1HpUniform | null): any {
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

