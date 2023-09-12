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
import type { V1DaskReplica } from './V1DaskReplica';
import {
    V1DaskReplicaFromJSON,
    V1DaskReplicaFromJSONTyped,
    V1DaskReplicaToJSON,
} from './V1DaskReplica';

/**
 *
 * @export
 * @interface V1DaskJob
 */
export interface V1DaskJob {
    /**
     *
     * @type {string}
     * @memberof V1DaskJob
     */
    kind?: string;
    /**
     *
     * @type {V1DaskReplica}
     * @memberof V1DaskJob
     */
    job?: V1DaskReplica;
    /**
     *
     * @type {V1DaskReplica}
     * @memberof V1DaskJob
     */
    worker?: V1DaskReplica;
    /**
     *
     * @type {V1DaskReplica}
     * @memberof V1DaskJob
     */
    scheduler?: V1DaskReplica;
}

/**
 * Check if a given object implements the V1DaskJob interface.
 */
export function instanceOfV1DaskJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1DaskJobFromJSON(json: any): V1DaskJob {
    return V1DaskJobFromJSONTyped(json, false);
}

export function V1DaskJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DaskJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'job': !exists(json, 'job') ? undefined : V1DaskReplicaFromJSON(json['job']),
        'worker': !exists(json, 'worker') ? undefined : V1DaskReplicaFromJSON(json['worker']),
        'scheduler': !exists(json, 'scheduler') ? undefined : V1DaskReplicaFromJSON(json['scheduler']),
    };
}

export function V1DaskJobToJSON(value?: V1DaskJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'job': V1DaskReplicaToJSON(value.job),
        'worker': V1DaskReplicaToJSON(value.worker),
        'scheduler': V1DaskReplicaToJSON(value.scheduler),
    };
}

