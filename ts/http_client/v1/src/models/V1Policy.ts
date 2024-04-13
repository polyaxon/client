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
import type { V1UserAccess } from './V1UserAccess';
import {
    V1UserAccessFromJSON,
    V1UserAccessFromJSONTyped,
    V1UserAccessToJSON,
} from './V1UserAccess';

/**
 *
 * @export
 * @interface V1Policy
 */
export interface V1Policy {
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    tags?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof V1Policy
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Policy
     */
    updated_at?: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    excluded_features?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    excluded_runtimes?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof V1Policy
     */
    archived_deletion_interval?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    connections?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    preset?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    presets?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1Policy
     */
    queue?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    queues?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    agents?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    namespaces?: Array<string>;
    /**
     *
     * @type {Array<V1UserAccess>}
     * @memberof V1Policy
     */
    user_accesses?: Array<V1UserAccess>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    teams?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    projects?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Policy
     */
    connected_projects?: Array<string>;
}

/**
 * Check if a given object implements the V1Policy interface.
 */
export function instanceOfV1Policy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PolicyFromJSON(json: any): V1Policy {
    return V1PolicyFromJSONTyped(json, false);
}

export function V1PolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Policy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'excluded_features': !exists(json, 'excluded_features') ? undefined : json['excluded_features'],
        'excluded_runtimes': !exists(json, 'excluded_runtimes') ? undefined : json['excluded_runtimes'],
        'archived_deletion_interval': !exists(json, 'archived_deletion_interval') ? undefined : json['archived_deletion_interval'],
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'preset': !exists(json, 'preset') ? undefined : json['preset'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'queues': !exists(json, 'queues') ? undefined : json['queues'],
        'agents': !exists(json, 'agents') ? undefined : json['agents'],
        'namespaces': !exists(json, 'namespaces') ? undefined : json['namespaces'],
        'user_accesses': !exists(json, 'user_accesses') ? undefined : ((json['user_accesses'] as Array<any>).map(V1UserAccessFromJSON)),
        'teams': !exists(json, 'teams') ? undefined : json['teams'],
        'projects': !exists(json, 'projects') ? undefined : json['projects'],
        'connected_projects': !exists(json, 'connected_projects') ? undefined : json['connected_projects'],
    };
}

export function V1PolicyToJSON(value?: V1Policy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'excluded_features': value.excluded_features,
        'excluded_runtimes': value.excluded_runtimes,
        'archived_deletion_interval': value.archived_deletion_interval,
        'connections': value.connections,
        'preset': value.preset,
        'presets': value.presets,
        'queue': value.queue,
        'queues': value.queues,
        'agents': value.agents,
        'namespaces': value.namespaces,
        'user_accesses': value.user_accesses === undefined ? undefined : ((value.user_accesses as Array<any>).map(V1UserAccessToJSON)),
        'teams': value.teams,
        'projects': value.projects,
        'connected_projects': value.connected_projects,
    };
}

