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
import type { MXJobMode } from './MXJobMode';
import {
    MXJobModeFromJSON,
    MXJobModeFromJSONTyped,
    MXJobModeToJSON,
} from './MXJobMode';
import type { V1CleanPodPolicy } from './V1CleanPodPolicy';
import {
    V1CleanPodPolicyFromJSON,
    V1CleanPodPolicyFromJSONTyped,
    V1CleanPodPolicyToJSON,
} from './V1CleanPodPolicy';
import type { V1KFReplica } from './V1KFReplica';
import {
    V1KFReplicaFromJSON,
    V1KFReplicaFromJSONTyped,
    V1KFReplicaToJSON,
} from './V1KFReplica';
import type { V1SchedulingPolicy } from './V1SchedulingPolicy';
import {
    V1SchedulingPolicyFromJSON,
    V1SchedulingPolicyFromJSONTyped,
    V1SchedulingPolicyToJSON,
} from './V1SchedulingPolicy';

/**
 *
 * @export
 * @interface V1MXJob
 */
export interface V1MXJob {
    /**
     *
     * @type {string}
     * @memberof V1MXJob
     */
    kind?: string;
    /**
     *
     * @type {V1CleanPodPolicy}
     * @memberof V1MXJob
     */
    cleanPodPolicy?: V1CleanPodPolicy;
    /**
     *
     * @type {V1SchedulingPolicy}
     * @memberof V1MXJob
     */
    schedulingPolicy?: V1SchedulingPolicy;
    /**
     *
     * @type {MXJobMode}
     * @memberof V1MXJob
     */
    mode?: MXJobMode;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    scheduler?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    server?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    worker?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    tuner_tracker?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    tuner_server?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1MXJob
     */
    tuner?: V1KFReplica;
}

/**
 * Check if a given object implements the V1MXJob interface.
 */
export function instanceOfV1MXJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1MXJobFromJSON(json: any): V1MXJob {
    return V1MXJobFromJSONTyped(json, false);
}

export function V1MXJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1MXJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'cleanPodPolicy': !exists(json, 'cleanPodPolicy') ? undefined : V1CleanPodPolicyFromJSON(json['cleanPodPolicy']),
        'schedulingPolicy': !exists(json, 'schedulingPolicy') ? undefined : V1SchedulingPolicyFromJSON(json['schedulingPolicy']),
        'mode': !exists(json, 'mode') ? undefined : MXJobModeFromJSON(json['mode']),
        'scheduler': !exists(json, 'scheduler') ? undefined : V1KFReplicaFromJSON(json['scheduler']),
        'server': !exists(json, 'server') ? undefined : V1KFReplicaFromJSON(json['server']),
        'worker': !exists(json, 'worker') ? undefined : V1KFReplicaFromJSON(json['worker']),
        'tuner_tracker': !exists(json, 'tuner_tracker') ? undefined : V1KFReplicaFromJSON(json['tuner_tracker']),
        'tuner_server': !exists(json, 'tuner_server') ? undefined : V1KFReplicaFromJSON(json['tuner_server']),
        'tuner': !exists(json, 'tuner') ? undefined : V1KFReplicaFromJSON(json['tuner']),
    };
}

export function V1MXJobToJSON(value?: V1MXJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'cleanPodPolicy': V1CleanPodPolicyToJSON(value.cleanPodPolicy),
        'schedulingPolicy': V1SchedulingPolicyToJSON(value.schedulingPolicy),
        'mode': MXJobModeToJSON(value.mode),
        'scheduler': V1KFReplicaToJSON(value.scheduler),
        'server': V1KFReplicaToJSON(value.server),
        'worker': V1KFReplicaToJSON(value.worker),
        'tuner_tracker': V1KFReplicaToJSON(value.tuner_tracker),
        'tuner_server': V1KFReplicaToJSON(value.tuner_server),
        'tuner': V1KFReplicaToJSON(value.tuner),
    };
}

