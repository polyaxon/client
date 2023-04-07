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
import type { V1K8sResourceSchema } from './V1K8sResourceSchema';
import {
    V1K8sResourceSchemaFromJSON,
    V1K8sResourceSchemaFromJSONTyped,
    V1K8sResourceSchemaToJSON,
} from './V1K8sResourceSchema';

/**
 * 
 * @export
 * @interface V1K8sResourceType
 */
export interface V1K8sResourceType {
    /**
     * 
     * @type {string}
     * @memberof V1K8sResourceType
     */
    name?: string;
    /**
     * 
     * @type {V1K8sResourceSchema}
     * @memberof V1K8sResourceType
     */
    schema?: V1K8sResourceSchema;
    /**
     * 
     * @type {boolean}
     * @memberof V1K8sResourceType
     */
    isRequested?: boolean;
}

/**
 * Check if a given object implements the V1K8sResourceType interface.
 */
export function instanceOfV1K8sResourceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1K8sResourceTypeFromJSON(json: any): V1K8sResourceType {
    return V1K8sResourceTypeFromJSONTyped(json, false);
}

export function V1K8sResourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1K8sResourceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'schema': !exists(json, 'schema') ? undefined : V1K8sResourceSchemaFromJSON(json['schema']),
        'isRequested': !exists(json, 'isRequested') ? undefined : json['isRequested'],
    };
}

export function V1K8sResourceTypeToJSON(value?: V1K8sResourceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'schema': V1K8sResourceSchemaToJSON(value.schema),
        'isRequested': value.isRequested,
    };
}

