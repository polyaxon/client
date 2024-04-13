/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.6
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
 * @interface V1SchedulingPolicy
 */
export interface V1SchedulingPolicy {
    /**
     *
     * @type {number}
     * @memberof V1SchedulingPolicy
     */
    minAvailable?: number;
    /**
     *
     * @type {string}
     * @memberof V1SchedulingPolicy
     */
    queue?: string;
    /**
     *
     * @type {object}
     * @memberof V1SchedulingPolicy
     */
    minResources?: object;
    /**
     *
     * @type {string}
     * @memberof V1SchedulingPolicy
     */
    priorityClass?: string;
    /**
     *
     * @type {number}
     * @memberof V1SchedulingPolicy
     */
    scheduleTimeoutSeconds?: number;
}

/**
 * Check if a given object implements the V1SchedulingPolicy interface.
 */
export function instanceOfV1SchedulingPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SchedulingPolicyFromJSON(json: any): V1SchedulingPolicy {
    return V1SchedulingPolicyFromJSONTyped(json, false);
}

export function V1SchedulingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SchedulingPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'minAvailable': !exists(json, 'minAvailable') ? undefined : json['minAvailable'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'minResources': !exists(json, 'minResources') ? undefined : json['minResources'],
        'priorityClass': !exists(json, 'priorityClass') ? undefined : json['priorityClass'],
        'scheduleTimeoutSeconds': !exists(json, 'scheduleTimeoutSeconds') ? undefined : json['scheduleTimeoutSeconds'],
    };
}

export function V1SchedulingPolicyToJSON(value?: V1SchedulingPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'minAvailable': value.minAvailable,
        'queue': value.queue,
        'minResources': value.minResources,
        'priorityClass': value.priorityClass,
        'scheduleTimeoutSeconds': value.scheduleTimeoutSeconds,
    };
}

