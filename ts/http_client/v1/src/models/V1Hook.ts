// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 2.0.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Param } from './V1Param';
import {
    V1ParamFromJSON,
    V1ParamFromJSONTyped,
    V1ParamToJSON,
} from './V1Param';
import type { V1Statuses } from './V1Statuses';
import {
    V1StatusesFromJSON,
    V1StatusesFromJSONTyped,
    V1StatusesToJSON,
} from './V1Statuses';

/**
 * 
 * @export
 * @interface V1Hook
 */
export interface V1Hook {
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    hubRef?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    connection?: string;
    /**
     * 
     * @type {V1Statuses}
     * @memberof V1Hook
     */
    trigger?: V1Statuses;
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    conditions?: string;
    /**
     * 
     * @type {{ [key: string]: V1Param; }}
     * @memberof V1Hook
     */
    params?: { [key: string]: V1Param; };
    /**
     * 
     * @type {string}
     * @memberof V1Hook
     */
    queue?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Hook
     */
    presets?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1Hook
     */
    disableDefaults?: boolean;
}

/**
 * Check if a given object implements the V1Hook interface.
 */
export function instanceOfV1Hook(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HookFromJSON(json: any): V1Hook {
    return V1HookFromJSONTyped(json, false);
}

export function V1HookFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hubRef': !exists(json, 'hubRef') ? undefined : json['hubRef'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'trigger': !exists(json, 'trigger') ? undefined : V1StatusesFromJSON(json['trigger']),
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1ParamFromJSON)),
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'disableDefaults': !exists(json, 'disableDefaults') ? undefined : json['disableDefaults'],
    };
}

export function V1HookToJSON(value?: V1Hook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hubRef': value.hubRef,
        'connection': value.connection,
        'trigger': V1StatusesToJSON(value.trigger),
        'conditions': value.conditions,
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1ParamToJSON)),
        'queue': value.queue,
        'presets': value.presets,
        'disableDefaults': value.disableDefaults,
    };
}

