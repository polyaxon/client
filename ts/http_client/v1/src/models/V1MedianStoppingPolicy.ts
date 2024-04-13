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
 * Early stopping with median stopping, this policy computes running medians across
 * all runs and stops those whose best performance is worse than the median
 * of the running runs.
 * @export
 * @interface V1MedianStoppingPolicy
 */
export interface V1MedianStoppingPolicy {
    /**
     *
     * @type {string}
     * @memberof V1MedianStoppingPolicy
     */
    kind?: string;
    /**
     * Interval/Frequency for applying the policy.
     * @type {number}
     * @memberof V1MedianStoppingPolicy
     */
    evaluationInterval?: number;
    /**
     *
     * @type {number}
     * @memberof V1MedianStoppingPolicy
     */
    minInterval?: number;
    /**
     *
     * @type {number}
     * @memberof V1MedianStoppingPolicy
     */
    minSamples?: number;
}

/**
 * Check if a given object implements the V1MedianStoppingPolicy interface.
 */
export function instanceOfV1MedianStoppingPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1MedianStoppingPolicyFromJSON(json: any): V1MedianStoppingPolicy {
    return V1MedianStoppingPolicyFromJSONTyped(json, false);
}

export function V1MedianStoppingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MedianStoppingPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'evaluationInterval': !exists(json, 'evaluationInterval') ? undefined : json['evaluationInterval'],
        'minInterval': !exists(json, 'minInterval') ? undefined : json['minInterval'],
        'minSamples': !exists(json, 'minSamples') ? undefined : json['minSamples'],
    };
}

export function V1MedianStoppingPolicyToJSON(value?: V1MedianStoppingPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'evaluationInterval': value.evaluationInterval,
        'minInterval': value.minInterval,
        'minSamples': value.minSamples,
    };
}

