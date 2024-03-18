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
import type { V1Stages } from './V1Stages';
import {
    V1StagesFromJSON,
    V1StagesFromJSONTyped,
    V1StagesToJSON,
} from './V1Stages';

/**
 *
 * @export
 * @interface V1StageCondition
 */
export interface V1StageCondition {
    /**
     *
     * @type {V1Stages}
     * @memberof V1StageCondition
     */
    type?: V1Stages;
    /**
     *
     * @type {string}
     * @memberof V1StageCondition
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof V1StageCondition
     */
    reason?: string;
    /**
     *
     * @type {string}
     * @memberof V1StageCondition
     */
    message?: string;
    /**
     *
     * @type {Date}
     * @memberof V1StageCondition
     */
    last_update_time?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1StageCondition
     */
    last_transition_time?: Date;
    /**
     *
     * @type {object}
     * @memberof V1StageCondition
     */
    meta_info?: object;
}

/**
 * Check if a given object implements the V1StageCondition interface.
 */
export function instanceOfV1StageCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1StageConditionFromJSON(json: any): V1StageCondition {
    return V1StageConditionFromJSONTyped(json, false);
}

export function V1StageConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StageCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'type': !exists(json, 'type') ? undefined : V1StagesFromJSON(json['type']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'last_update_time': !exists(json, 'last_update_time') ? undefined : (new Date(json['last_update_time'])),
        'last_transition_time': !exists(json, 'last_transition_time') ? undefined : (new Date(json['last_transition_time'])),
        'meta_info': !exists(json, 'meta_info') ? undefined : json['meta_info'],
    };
}

export function V1StageConditionToJSON(value?: V1StageCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'type': V1StagesToJSON(value.type),
        'status': value.status,
        'reason': value.reason,
        'message': value.message,
        'last_update_time': value.last_update_time === undefined ? undefined : (value.last_update_time.toISOString()),
        'last_transition_time': value.last_transition_time === undefined ? undefined : (value.last_transition_time.toISOString()),
        'meta_info': value.meta_info,
    };
}

