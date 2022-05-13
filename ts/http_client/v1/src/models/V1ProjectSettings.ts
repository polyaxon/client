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
    V1ProjectUserAccess,
    V1ProjectUserAccessFromJSON,
    V1ProjectUserAccessFromJSONTyped,
    V1ProjectUserAccessToJSON,
} from './';

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
     * @type {Array<V1ProjectUserAccess>}
     * @memberof V1ProjectSettings
     */
    user_accesses?: Array<V1ProjectUserAccess>;
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
        'user_accesses': !exists(json, 'user_accesses') ? undefined : ((json['user_accesses'] as Array<any>).map(V1ProjectUserAccessFromJSON)),
        'teams': !exists(json, 'teams') ? undefined : json['teams'],
        'projects': !exists(json, 'projects') ? undefined : json['projects'],
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
        'user_accesses': value.user_accesses === undefined ? undefined : ((value.user_accesses as Array<any>).map(V1ProjectUserAccessToJSON)),
        'teams': value.teams,
        'projects': value.projects,
    };
}

