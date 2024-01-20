/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc7
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
 * @interface V1HpChoice
 */
export interface V1HpChoice {
    /**
     *
     * @type {string}
     * @memberof V1HpChoice
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpChoice
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpChoice interface.
 */
export function instanceOfV1HpChoice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpChoiceFromJSON(json: any): V1HpChoice {
    return V1HpChoiceFromJSONTyped(json, false);
}

export function V1HpChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpChoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpChoiceToJSON(value?: V1HpChoice | null): any {
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

