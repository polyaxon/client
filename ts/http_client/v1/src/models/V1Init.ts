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
 * The version of the OpenAPI document: 1.20.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1ArtifactsType,
    V1ArtifactsTypeFromJSON,
    V1ArtifactsTypeFromJSONTyped,
    V1ArtifactsTypeToJSON,
    V1DockerfileType,
    V1DockerfileTypeFromJSON,
    V1DockerfileTypeFromJSONTyped,
    V1DockerfileTypeToJSON,
    V1FileType,
    V1FileTypeFromJSON,
    V1FileTypeFromJSONTyped,
    V1FileTypeToJSON,
    V1GitType,
    V1GitTypeFromJSON,
    V1GitTypeFromJSONTyped,
    V1GitTypeToJSON,
    V1TensorboardType,
    V1TensorboardTypeFromJSON,
    V1TensorboardTypeFromJSONTyped,
    V1TensorboardTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Init
 */
export interface V1Init {
    /**
     * 
     * @type {V1ArtifactsType}
     * @memberof V1Init
     */
    artifacts?: V1ArtifactsType;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1Init
     */
    paths?: Array<object>;
    /**
     * 
     * @type {V1GitType}
     * @memberof V1Init
     */
    git?: V1GitType;
    /**
     * 
     * @type {V1DockerfileType}
     * @memberof V1Init
     */
    dockerfile?: V1DockerfileType;
    /**
     * 
     * @type {V1FileType}
     * @memberof V1Init
     */
    file?: V1FileType;
    /**
     * 
     * @type {V1TensorboardType}
     * @memberof V1Init
     */
    tensorboard?: V1TensorboardType;
    /**
     * 
     * @type {string}
     * @memberof V1Init
     */
    lineageRef?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Init
     */
    artifactRef?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Init
     */
    modelRef?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Init
     */
    connection?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Init
     */
    path?: string;
    /**
     * 
     * @type {object}
     * @memberof V1Init
     */
    container?: object;
}

export function V1InitFromJSON(json: any): V1Init {
    return V1InitFromJSONTyped(json, false);
}

export function V1InitFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Init {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artifacts': !exists(json, 'artifacts') ? undefined : V1ArtifactsTypeFromJSON(json['artifacts']),
        'paths': !exists(json, 'paths') ? undefined : json['paths'],
        'git': !exists(json, 'git') ? undefined : V1GitTypeFromJSON(json['git']),
        'dockerfile': !exists(json, 'dockerfile') ? undefined : V1DockerfileTypeFromJSON(json['dockerfile']),
        'file': !exists(json, 'file') ? undefined : V1FileTypeFromJSON(json['file']),
        'tensorboard': !exists(json, 'tensorboard') ? undefined : V1TensorboardTypeFromJSON(json['tensorboard']),
        'lineageRef': !exists(json, 'lineageRef') ? undefined : json['lineageRef'],
        'artifactRef': !exists(json, 'artifactRef') ? undefined : json['artifactRef'],
        'modelRef': !exists(json, 'modelRef') ? undefined : json['modelRef'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'container': !exists(json, 'container') ? undefined : json['container'],
    };
}

export function V1InitToJSON(value?: V1Init | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artifacts': V1ArtifactsTypeToJSON(value.artifacts),
        'paths': value.paths,
        'git': V1GitTypeToJSON(value.git),
        'dockerfile': V1DockerfileTypeToJSON(value.dockerfile),
        'file': V1FileTypeToJSON(value.file),
        'tensorboard': V1TensorboardTypeToJSON(value.tensorboard),
        'lineageRef': value.lineageRef,
        'artifactRef': value.artifactRef,
        'modelRef': value.modelRef,
        'connection': value.connection,
        'path': value.path,
        'container': value.container,
    };
}

