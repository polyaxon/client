/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
import type { V1PytorchElasticPolicy } from './V1PytorchElasticPolicy';
import {
    V1PytorchElasticPolicyFromJSON,
    V1PytorchElasticPolicyFromJSONTyped,
    V1PytorchElasticPolicyToJSON,
} from './V1PytorchElasticPolicy';
import type { V1SchedulingPolicy } from './V1SchedulingPolicy';
import {
    V1SchedulingPolicyFromJSON,
    V1SchedulingPolicyFromJSONTyped,
    V1SchedulingPolicyToJSON,
} from './V1SchedulingPolicy';

/**
 *
 * @export
 * @interface V1PytorchJob
 */
export interface V1PytorchJob {
    /**
     *
     * @type {string}
     * @memberof V1PytorchJob
     */
    kind?: string;
    /**
     *
     * @type {V1CleanPodPolicy}
     * @memberof V1PytorchJob
     */
    cleanPodPolicy?: V1CleanPodPolicy;
    /**
     *
     * @type {V1SchedulingPolicy}
     * @memberof V1PytorchJob
     */
    schedulingPolicy?: V1SchedulingPolicy;
    /**
     *
     * @type {V1PytorchElasticPolicy}
     * @memberof V1PytorchJob
     */
    elasticPolicy?: V1PytorchElasticPolicy;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1PytorchJob
     */
    master?: V1KFReplica;
    /**
     *
     * @type {V1KFReplica}
     * @memberof V1PytorchJob
     */
    worker?: V1KFReplica;
    /**
     *
     * @type {string}
     * @memberof V1PytorchJob
     */
    nProcPerNode?: string;
}

/**
 * Check if a given object implements the V1PytorchJob interface.
 */
export function instanceOfV1PytorchJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PytorchJobFromJSON(json: any): V1PytorchJob {
    return V1PytorchJobFromJSONTyped(json, false);
}

export function V1PytorchJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PytorchJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'cleanPodPolicy': !exists(json, 'cleanPodPolicy') ? undefined : V1CleanPodPolicyFromJSON(json['cleanPodPolicy']),
        'schedulingPolicy': !exists(json, 'schedulingPolicy') ? undefined : V1SchedulingPolicyFromJSON(json['schedulingPolicy']),
        'elasticPolicy': !exists(json, 'elasticPolicy') ? undefined : V1PytorchElasticPolicyFromJSON(json['elasticPolicy']),
        'master': !exists(json, 'master') ? undefined : V1KFReplicaFromJSON(json['master']),
        'worker': !exists(json, 'worker') ? undefined : V1KFReplicaFromJSON(json['worker']),
        'nProcPerNode': !exists(json, 'nProcPerNode') ? undefined : json['nProcPerNode'],
    };
}

export function V1PytorchJobToJSON(value?: V1PytorchJob | null): any {
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
        'elasticPolicy': V1PytorchElasticPolicyToJSON(value.elasticPolicy),
        'master': V1KFReplicaToJSON(value.master),
        'worker': V1KFReplicaToJSON(value.worker),
        'nProcPerNode': value.nProcPerNode,
    };
}

