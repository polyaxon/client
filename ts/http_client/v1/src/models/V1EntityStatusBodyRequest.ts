/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc40
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1StatusCondition } from './V1StatusCondition';
import {
    V1StatusConditionFromJSON,
    V1StatusConditionFromJSONTyped,
    V1StatusConditionToJSON,
} from './V1StatusCondition';

/**
 *
 * @export
 * @interface V1EntityStatusBodyRequest
 */
export interface V1EntityStatusBodyRequest {
    /**
     *
     * @type {string}
     * @memberof V1EntityStatusBodyRequest
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1EntityStatusBodyRequest
     */
    project?: string;
    /**
     *
     * @type {string}
     * @memberof V1EntityStatusBodyRequest
     */
    uuid?: string;
    /**
     *
     * @type {V1StatusCondition}
     * @memberof V1EntityStatusBodyRequest
     */
    condition?: V1StatusCondition;
    /**
     *
     * @type {boolean}
     * @memberof V1EntityStatusBodyRequest
     */
    force?: boolean;
}

/**
 * Check if a given object implements the V1EntityStatusBodyRequest interface.
 */
export function instanceOfV1EntityStatusBodyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EntityStatusBodyRequestFromJSON(json: any): V1EntityStatusBodyRequest {
    return V1EntityStatusBodyRequestFromJSONTyped(json, false);
}

export function V1EntityStatusBodyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntityStatusBodyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'condition': !exists(json, 'condition') ? undefined : V1StatusConditionFromJSON(json['condition']),
        'force': !exists(json, 'force') ? undefined : json['force'],
    };
}

export function V1EntityStatusBodyRequestToJSON(value?: V1EntityStatusBodyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'owner': value.owner,
        'project': value.project,
        'uuid': value.uuid,
        'condition': V1StatusConditionToJSON(value.condition),
        'force': value.force,
    };
}

