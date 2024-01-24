/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc12
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1DiffStoppingPolicy } from './V1DiffStoppingPolicy';
import {
    V1DiffStoppingPolicyFromJSON,
    V1DiffStoppingPolicyFromJSONTyped,
    V1DiffStoppingPolicyToJSON,
} from './V1DiffStoppingPolicy';
import type { V1FailureEarlyStopping } from './V1FailureEarlyStopping';
import {
    V1FailureEarlyStoppingFromJSON,
    V1FailureEarlyStoppingFromJSONTyped,
    V1FailureEarlyStoppingToJSON,
} from './V1FailureEarlyStopping';
import type { V1MedianStoppingPolicy } from './V1MedianStoppingPolicy';
import {
    V1MedianStoppingPolicyFromJSON,
    V1MedianStoppingPolicyFromJSONTyped,
    V1MedianStoppingPolicyToJSON,
} from './V1MedianStoppingPolicy';
import type { V1MetricEarlyStopping } from './V1MetricEarlyStopping';
import {
    V1MetricEarlyStoppingFromJSON,
    V1MetricEarlyStoppingFromJSONTyped,
    V1MetricEarlyStoppingToJSON,
} from './V1MetricEarlyStopping';
import type { V1TruncationStoppingPolicy } from './V1TruncationStoppingPolicy';
import {
    V1TruncationStoppingPolicyFromJSON,
    V1TruncationStoppingPolicyFromJSONTyped,
    V1TruncationStoppingPolicyToJSON,
} from './V1TruncationStoppingPolicy';

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

/**
 * Check if a given object implements the V1EarlyStopping interface.
 */
export function instanceOfV1EarlyStopping(value: object): boolean {
    let isInstance = true;

    return isInstance;
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

