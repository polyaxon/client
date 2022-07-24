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
 * The version of the OpenAPI document: 1.19.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1DashboardSpec,
    V1DashboardSpecFromJSON,
    V1DashboardSpecFromJSONTyped,
    V1DashboardSpecToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Dashboard
 */
export interface V1Dashboard {
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Dashboard
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Dashboard
     */
    tags?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof V1Dashboard
     */
    live_state?: number;
    /**
     * 
     * @type {V1DashboardSpec}
     * @memberof V1Dashboard
     */
    spec?: V1DashboardSpec;
    /**
     * 
     * @type {boolean}
     * @memberof V1Dashboard
     */
    org_level?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof V1Dashboard
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Dashboard
     */
    updated_at?: Date;
}

export function V1DashboardFromJSON(json: any): V1Dashboard {
    return V1DashboardFromJSONTyped(json, false);
}

export function V1DashboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Dashboard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'spec': !exists(json, 'spec') ? undefined : V1DashboardSpecFromJSON(json['spec']),
        'org_level': !exists(json, 'org_level') ? undefined : json['org_level'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1DashboardToJSON(value?: V1Dashboard | null): any {
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
        'live_state': value.live_state,
        'spec': V1DashboardSpecToJSON(value.spec),
        'org_level': value.org_level,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}

