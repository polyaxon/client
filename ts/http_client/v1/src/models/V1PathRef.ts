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
 * @interface V1PathRef
 */
export interface V1PathRef {
    /**
     *
     * @type {string}
     * @memberof V1PathRef
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1PathRef
     */
    path?: string;
}

/**
 * Check if a given object implements the V1PathRef interface.
 */
export function instanceOfV1PathRef(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PathRefFromJSON(json: any): V1PathRef {
    return V1PathRefFromJSONTyped(json, false);
}

export function V1PathRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PathRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1PathRefToJSON(value?: V1PathRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'path': value.path,
    };
}

