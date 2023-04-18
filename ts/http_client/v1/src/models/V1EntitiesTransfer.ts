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
 * The version of the OpenAPI document: 2.0.0-rc9
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
 * @interface V1EntitiesTransfer
 */
export interface V1EntitiesTransfer {
    /**
     *
     * @type {Array<string>}
     * @memberof V1EntitiesTransfer
     */
    uuids?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1EntitiesTransfer
     */
    project?: string;
}

/**
 * Check if a given object implements the V1EntitiesTransfer interface.
 */
export function instanceOfV1EntitiesTransfer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EntitiesTransferFromJSON(json: any): V1EntitiesTransfer {
    return V1EntitiesTransferFromJSONTyped(json, false);
}

export function V1EntitiesTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntitiesTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuids': !exists(json, 'uuids') ? undefined : json['uuids'],
        'project': !exists(json, 'project') ? undefined : json['project'],
    };
}

export function V1EntitiesTransferToJSON(value?: V1EntitiesTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuids': value.uuids,
        'project': value.project,
    };
}

