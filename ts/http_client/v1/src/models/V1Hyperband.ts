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
import type { V1OptimizationMetric } from './V1OptimizationMetric';
import {
    V1OptimizationMetricFromJSON,
    V1OptimizationMetricFromJSONTyped,
    V1OptimizationMetricToJSON,
} from './V1OptimizationMetric';
import type { V1OptimizationResource } from './V1OptimizationResource';
import {
    V1OptimizationResourceFromJSON,
    V1OptimizationResourceFromJSONTyped,
    V1OptimizationResourceToJSON,
} from './V1OptimizationResource';
import type { V1Tuner } from './V1Tuner';
import {
    V1TunerFromJSON,
    V1TunerFromJSONTyped,
    V1TunerToJSON,
} from './V1Tuner';

/**
 *
 * @export
 * @interface V1Hyperband
 */
export interface V1Hyperband {
    /**
     *
     * @type {string}
     * @memberof V1Hyperband
     */
    kind?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof V1Hyperband
     */
    params?: { [key: string]: object; };
    /**
     *
     * @type {number}
     * @memberof V1Hyperband
     */
    maxIterations?: number;
    /**
     *
     * @type {number}
     * @memberof V1Hyperband
     */
    eta?: number;
    /**
     *
     * @type {V1OptimizationResource}
     * @memberof V1Hyperband
     */
    resource?: V1OptimizationResource;
    /**
     *
     * @type {V1OptimizationMetric}
     * @memberof V1Hyperband
     */
    metric?: V1OptimizationMetric;
    /**
     *
     * @type {boolean}
     * @memberof V1Hyperband
     */
    resume?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1Hyperband
     */
    seed?: number;
    /**
     *
     * @type {number}
     * @memberof V1Hyperband
     */
    concurrency?: number;
    /**
     *
     * @type {V1Tuner}
     * @memberof V1Hyperband
     */
    tuner?: V1Tuner;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Hyperband
     */
    earlyStopping?: Array<object>;
}

/**
 * Check if a given object implements the V1Hyperband interface.
 */
export function instanceOfV1Hyperband(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HyperbandFromJSON(json: any): V1Hyperband {
    return V1HyperbandFromJSONTyped(json, false);
}

export function V1HyperbandFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hyperband {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'maxIterations': !exists(json, 'maxIterations') ? undefined : json['maxIterations'],
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'resource': !exists(json, 'resource') ? undefined : V1OptimizationResourceFromJSON(json['resource']),
        'metric': !exists(json, 'metric') ? undefined : V1OptimizationMetricFromJSON(json['metric']),
        'resume': !exists(json, 'resume') ? undefined : json['resume'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'tuner': !exists(json, 'tuner') ? undefined : V1TunerFromJSON(json['tuner']),
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1HyperbandToJSON(value?: V1Hyperband | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'params': value.params,
        'maxIterations': value.maxIterations,
        'eta': value.eta,
        'resource': V1OptimizationResourceToJSON(value.resource),
        'metric': V1OptimizationMetricToJSON(value.metric),
        'resume': value.resume,
        'seed': value.seed,
        'concurrency': value.concurrency,
        'tuner': V1TunerToJSON(value.tuner),
        'earlyStopping': value.earlyStopping,
    };
}

