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
 * The version of the OpenAPI document: 1.14.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1Preset
 */
export interface V1Preset {
    /**
     * 
     * @type {string}
     * @memberof V1Preset
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Preset
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Preset
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Preset
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof V1Preset
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Preset
     */
    updated_at?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof V1Preset
     */
    frozen?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1Preset
     */
    live_state?: number;
    /**
     * 
     * @type {string}
     * @memberof V1Preset
     */
    content?: string;
}

export function V1PresetFromJSON(json: any): V1Preset {
    return V1PresetFromJSONTyped(json, false);
}

export function V1PresetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Preset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'frozen': !exists(json, 'frozen') ? undefined : json['frozen'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function V1PresetToJSON(value?: V1Preset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'frozen': value.frozen,
        'live_state': value.live_state,
        'content': value.content,
    };
}

