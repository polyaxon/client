// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.18.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1DiffStoppingPolicy,
    V1DiffStoppingPolicyFromJSON,
    V1DiffStoppingPolicyFromJSONTyped,
    V1DiffStoppingPolicyToJSON,
    V1FailureEarlyStopping,
    V1FailureEarlyStoppingFromJSON,
    V1FailureEarlyStoppingFromJSONTyped,
    V1FailureEarlyStoppingToJSON,
    V1MedianStoppingPolicy,
    V1MedianStoppingPolicyFromJSON,
    V1MedianStoppingPolicyFromJSONTyped,
    V1MedianStoppingPolicyToJSON,
    V1MetricEarlyStopping,
    V1MetricEarlyStoppingFromJSON,
    V1MetricEarlyStoppingFromJSONTyped,
    V1MetricEarlyStoppingToJSON,
    V1TruncationStoppingPolicy,
    V1TruncationStoppingPolicyFromJSON,
    V1TruncationStoppingPolicyFromJSONTyped,
    V1TruncationStoppingPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1EarlyStopping
 */
export interface V1EarlyStopping {
    /**
     * 
     * @type {V1MedianStoppingPolicy}
     * @memberof V1EarlyStopping
     */
    median?: V1MedianStoppingPolicy;
    /**
     * 
     * @type {V1DiffStoppingPolicy}
     * @memberof V1EarlyStopping
     */
    diff?: V1DiffStoppingPolicy;
    /**
     * 
     * @type {V1TruncationStoppingPolicy}
     * @memberof V1EarlyStopping
     */
    truncation?: V1TruncationStoppingPolicy;
    /**
     * 
     * @type {V1MetricEarlyStopping}
     * @memberof V1EarlyStopping
     */
    metric?: V1MetricEarlyStopping;
    /**
     * 
     * @type {V1FailureEarlyStopping}
     * @memberof V1EarlyStopping
     */
    failure?: V1FailureEarlyStopping;
}

export function V1EarlyStoppingFromJSON(json: any): V1EarlyStopping {
    return V1EarlyStoppingFromJSONTyped(json, false);
}

export function V1EarlyStoppingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EarlyStopping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'median': !exists(json, 'median') ? undefined : V1MedianStoppingPolicyFromJSON(json['median']),
        'diff': !exists(json, 'diff') ? undefined : V1DiffStoppingPolicyFromJSON(json['diff']),
        'truncation': !exists(json, 'truncation') ? undefined : V1TruncationStoppingPolicyFromJSON(json['truncation']),
        'metric': !exists(json, 'metric') ? undefined : V1MetricEarlyStoppingFromJSON(json['metric']),
        'failure': !exists(json, 'failure') ? undefined : V1FailureEarlyStoppingFromJSON(json['failure']),
    };
}

export function V1EarlyStoppingToJSON(value?: V1EarlyStopping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'median': V1MedianStoppingPolicyToJSON(value.median),
        'diff': V1DiffStoppingPolicyToJSON(value.diff),
        'truncation': V1TruncationStoppingPolicyToJSON(value.truncation),
        'metric': V1MetricEarlyStoppingToJSON(value.metric),
        'failure': V1FailureEarlyStoppingToJSON(value.failure),
    };
}

