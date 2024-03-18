/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3-rc3
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
 * @interface V1RunEdgeLineage
 */
export interface V1RunEdgeLineage {
    /**
     *
     * @type {string}
     * @memberof V1RunEdgeLineage
     */
    uuid?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1RunEdgeLineage
     */
    is_upstream?: boolean;
    /**
     *
     * @type {object}
     * @memberof V1RunEdgeLineage
     */
    values?: object;
}

/**
 * Check if a given object implements the V1RunEdgeLineage interface.
 */
export function instanceOfV1RunEdgeLineage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunEdgeLineageFromJSON(json: any): V1RunEdgeLineage {
    return V1RunEdgeLineageFromJSONTyped(json, false);
}

export function V1RunEdgeLineageFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunEdgeLineage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'is_upstream': !exists(json, 'is_upstream') ? undefined : json['is_upstream'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function V1RunEdgeLineageToJSON(value?: V1RunEdgeLineage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'is_upstream': value.is_upstream,
        'values': value.values,
    };
}

