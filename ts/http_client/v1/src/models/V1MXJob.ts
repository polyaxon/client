// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.14.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MXJobMode,
    MXJobModeFromJSON,
    MXJobModeFromJSONTyped,
    MXJobModeToJSON,
    V1CleanPodPolicy,
    V1CleanPodPolicyFromJSON,
    V1CleanPodPolicyFromJSONTyped,
    V1CleanPodPolicyToJSON,
    V1KFReplica,
    V1KFReplicaFromJSON,
    V1KFReplicaFromJSONTyped,
    V1KFReplicaToJSON,
    V1SchedulingPolicy,
    V1SchedulingPolicyFromJSON,
    V1SchedulingPolicyFromJSONTyped,
    V1SchedulingPolicyToJSON,
} from './';

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

