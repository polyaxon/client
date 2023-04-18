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
 * @interface V1Auth
 */
export interface V1Auth {
    /**
     *
     * @type {string}
     * @memberof V1Auth
     */
    token?: string;
}

/**
 * Check if a given object implements the V1Auth interface.
 */
export function instanceOfV1Auth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AuthFromJSON(json: any): V1Auth {
    return V1AuthFromJSONTyped(json, false);
}

export function V1AuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Auth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function V1AuthToJSON(value?: V1Auth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'token': value.token,
    };
}

