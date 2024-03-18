/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3
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
 * @interface V1ProjectSettings
 */
export interface V1ProjectSettings {
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    connections?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1ProjectSettings
     */
    preset?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    presets?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1ProjectSettings
     */
    queue?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    queues?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    agents?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    namespaces?: Array<string>;
    /**
     *
     * @type {Array<V1UserAccess>}
     * @memberof V1ProjectSettings
     */
    user_accesses?: Array<V1UserAccess>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    teams?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ProjectSettings
     */
    projects?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1ProjectSettings
     */
    policy?: string;
}

/**
 * Check if a given object implements the V1ProjectSettings interface.
 */
export function instanceOfV1ProjectSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ProjectSettingsFromJSON(json: any): V1ProjectSettings {
    return V1ProjectSettingsFromJSONTyped(json, false);
}

export function V1ProjectSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProjectSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

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
        'policy': !exists(json, 'policy') ? undefined : json['policy'],
    };
}

export function V1ProjectSettingsToJSON(value?: V1ProjectSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

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
        'policy': value.policy,
    };
}

