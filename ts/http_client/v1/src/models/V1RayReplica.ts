/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Environment } from './V1Environment';
import {
    V1EnvironmentFromJSON,
    V1EnvironmentFromJSONTyped,
    V1EnvironmentToJSON,
} from './V1Environment';
import type { V1Init } from './V1Init';
import {
    V1InitFromJSON,
    V1InitFromJSONTyped,
    V1InitToJSON,
} from './V1Init';

/**
 * 
 * @export
 * @interface V1RayReplica
 */
export interface V1RayReplica {
    /**
     * 
     * @type {number}
     * @memberof V1RayReplica
     */
    replicas?: number;
    /**
     * 
     * @type {number}
     * @memberof V1RayReplica
     */
    minReplicas?: number;
    /**
     * 
     * @type {number}
     * @memberof V1RayReplica
     */
    maxReplicas?: number;
    /**
     * 
     * @type {string}
     * @memberof V1RayReplica
     */
    groupName?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof V1RayReplica
     */
    rayStartParams?: { [key: string]: string; };
    /**
     * 
     * @type {V1Environment}
     * @memberof V1RayReplica
     */
    environment?: V1Environment;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1RayReplica
     */
    connections?: Array<string>;
    /**
     * Volumes is a list of volumes that can be mounted.
     * @type {Array<object>}
     * @memberof V1RayReplica
     */
    volumes?: Array<object>;
    /**
     * 
     * @type {Array<V1Init>}
     * @memberof V1RayReplica
     */
    init?: Array<V1Init>;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1RayReplica
     */
    sidecars?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof V1RayReplica
     */
    container?: object;
}

/**
 * Check if a given object implements the V1RayReplica interface.
 */
export function instanceOfV1RayReplica(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RayReplicaFromJSON(json: any): V1RayReplica {
    return V1RayReplicaFromJSONTyped(json, false);
}

export function V1RayReplicaFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RayReplica {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'minReplicas': !exists(json, 'minReplicas') ? undefined : json['minReplicas'],
        'maxReplicas': !exists(json, 'maxReplicas') ? undefined : json['maxReplicas'],
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'rayStartParams': !exists(json, 'rayStartParams') ? undefined : json['rayStartParams'],
        'environment': !exists(json, 'environment') ? undefined : V1EnvironmentFromJSON(json['environment']),
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
        'init': !exists(json, 'init') ? undefined : ((json['init'] as Array<any>).map(V1InitFromJSON)),
        'sidecars': !exists(json, 'sidecars') ? undefined : json['sidecars'],
        'container': !exists(json, 'container') ? undefined : json['container'],
    };
}

export function V1RayReplicaToJSON(value?: V1RayReplica | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'replicas': value.replicas,
        'minReplicas': value.minReplicas,
        'maxReplicas': value.maxReplicas,
        'groupName': value.groupName,
        'rayStartParams': value.rayStartParams,
        'environment': V1EnvironmentToJSON(value.environment),
        'connections': value.connections,
        'volumes': value.volumes,
        'init': value.init === undefined ? undefined : ((value.init as Array<any>).map(V1InitToJSON)),
        'sidecars': value.sidecars,
        'container': value.container,
    };
}

