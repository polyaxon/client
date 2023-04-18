// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc9
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Early stopping with truncation stopping, this policy stops a percentage of
 * all running runs at every evaluation.
 * @export
 * @interface V1TruncationStoppingPolicy
 */
export interface V1TruncationStoppingPolicy {
    /**
     *
     * @type {string}
     * @memberof V1TruncationStoppingPolicy
     */
    kind?: string;
    /**
     * The percentage of runs to stop, at each evaluation interval.
     * e.g. 1 - 99.
     * @type {number}
     * @memberof V1TruncationStoppingPolicy
     */
    percent?: number;
    /**
     * Interval/Frequency for applying the policy.
     * @type {number}
     * @memberof V1TruncationStoppingPolicy
     */
    evaluationInterval?: number;
    /**
     *
     * @type {number}
     * @memberof V1TruncationStoppingPolicy
     */
    minInterval?: number;
    /**
     *
     * @type {number}
     * @memberof V1TruncationStoppingPolicy
     */
    minSamples?: number;
    /**
     *
     * @type {boolean}
     * @memberof V1TruncationStoppingPolicy
     */
    includeSucceeded?: boolean;
}

/**
 * Check if a given object implements the V1TruncationStoppingPolicy interface.
 */
export function instanceOfV1TruncationStoppingPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TruncationStoppingPolicyFromJSON(json: any): V1TruncationStoppingPolicy {
    return V1TruncationStoppingPolicyFromJSONTyped(json, false);
}

export function V1TruncationStoppingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TruncationStoppingPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
        'evaluationInterval': !exists(json, 'evaluationInterval') ? undefined : json['evaluationInterval'],
        'minInterval': !exists(json, 'minInterval') ? undefined : json['minInterval'],
        'minSamples': !exists(json, 'minSamples') ? undefined : json['minSamples'],
        'includeSucceeded': !exists(json, 'includeSucceeded') ? undefined : json['includeSucceeded'],
    };
}

export function V1TruncationStoppingPolicyToJSON(value?: V1TruncationStoppingPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'percent': value.percent,
        'evaluationInterval': value.evaluationInterval,
        'minInterval': value.minInterval,
        'minSamples': value.minSamples,
        'includeSucceeded': value.includeSucceeded,
    };
}

