/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
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
 * @interface V1Uuids
 */
export interface V1Uuids {
    /**
     *
     * @type {Array<string>}
     * @memberof V1Uuids
     */
    uuids?: Array<string>;
}

/**
 * Check if a given object implements the V1Uuids interface.
 */
export function instanceOfV1Uuids(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UuidsFromJSON(json: any): V1Uuids {
    return V1UuidsFromJSONTyped(json, false);
}

export function V1UuidsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Uuids {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuids': !exists(json, 'uuids') ? undefined : json['uuids'],
    };
}

export function V1UuidsToJSON(value?: V1Uuids | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuids': value.uuids,
    };
}

