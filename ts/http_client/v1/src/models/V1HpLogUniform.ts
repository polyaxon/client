/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0-rc3
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
 * @interface V1HpLogUniform
 */
export interface V1HpLogUniform {
    /**
     *
     * @type {string}
     * @memberof V1HpLogUniform
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpLogUniform
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpLogUniform interface.
 */
export function instanceOfV1HpLogUniform(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpLogUniformFromJSON(json: any): V1HpLogUniform {
    return V1HpLogUniformFromJSONTyped(json, false);
}

export function V1HpLogUniformFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpLogUniform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpLogUniformToJSON(value?: V1HpLogUniform | null): any {
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

