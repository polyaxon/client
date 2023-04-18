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
import type { SparkDeployMode } from './SparkDeployMode';
import {
    SparkDeployModeFromJSON,
    SparkDeployModeFromJSONTyped,
    SparkDeployModeToJSON,
} from './SparkDeployMode';
import type { V1SparkReplica } from './V1SparkReplica';
import {
    V1SparkReplicaFromJSON,
    V1SparkReplicaFromJSONTyped,
    V1SparkReplicaToJSON,
} from './V1SparkReplica';
import type { V1SparkType } from './V1SparkType';
import {
    V1SparkTypeFromJSON,
    V1SparkTypeFromJSONTyped,
    V1SparkTypeToJSON,
} from './V1SparkType';

/**
 *
 * @export
 * @interface V1Spark
 */
export interface V1Spark {
    /**
     *
     * @type {string}
     * @memberof V1Spark
     */
    kind?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Spark
     */
    connections?: Array<string>;
    /**
     * Volumes is a list of volumes that can be mounted.
     * @type {Array<object>}
     * @memberof V1Spark
     */
    volumes?: Array<object>;
    /**
     *
     * @type {V1SparkType}
     * @memberof V1Spark
     */
    type?: V1SparkType;
    /**
     * Spark version is the version of Spark the application uses.
     * @type {string}
     * @memberof V1Spark
     */
    sparkVersion?: string;
    /**
     * Spark version is the version of Spark the application uses.
     * @type {string}
     * @memberof V1Spark
     */
    pythonVersion?: string;
    /**
     *
     * @type {SparkDeployMode}
     * @memberof V1Spark
     */
    deployMode?: SparkDeployMode;
    /**
     * MainClass is the fully-qualified main class of the Spark application.
     * This only applies to Java/Scala Spark applications.
     * @type {string}
     * @memberof V1Spark
     */
    mainClass?: string;
    /**
     * MainFile is the path to a bundled JAR, Python, or R file of the application.
     * @type {string}
     * @memberof V1Spark
     */
    mainApplicationFile?: string;
    /**
     * Arguments is a list of arguments to be passed to the application.
     * @type {Array<string>}
     * @memberof V1Spark
     */
    arguments?: Array<string>;
    /**
     * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the "--conf" option
     * in spark-submit.  The SparkApplication controller automatically adds prefix "spark.hadoop." to Hadoop
     * configuration properties.
     * @type {{ [key: string]: string; }}
     * @memberof V1Spark
     */
    hadoopConf?: { [key: string]: string; };
    /**
     * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the "--conf" option
     * in spark-submit.  The SparkApplication controller automatically adds prefix "spark.hadoop." to Hadoop
     * configuration properties.
     * @type {{ [key: string]: string; }}
     * @memberof V1Spark
     */
    sparkConf?: { [key: string]: string; };
    /**
     * SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties.
     * The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.
     * @type {string}
     * @memberof V1Spark
     */
    sparkConfigMap?: string;
    /**
     * HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml.
     * The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.
     * @type {string}
     * @memberof V1Spark
     */
    hadoopConfigMap?: string;
    /**
     *
     * @type {V1SparkReplica}
     * @memberof V1Spark
     */
    executor?: V1SparkReplica;
    /**
     *
     * @type {V1SparkReplica}
     * @memberof V1Spark
     */
    driver?: V1SparkReplica;
}

/**
 * Check if a given object implements the V1Spark interface.
 */
export function instanceOfV1Spark(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SparkFromJSON(json: any): V1Spark {
    return V1SparkFromJSONTyped(json, false);
}

export function V1SparkFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Spark {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'connections': !exists(json, 'connections') ? undefined : json['connections'],
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
        'type': !exists(json, 'type') ? undefined : V1SparkTypeFromJSON(json['type']),
        'sparkVersion': !exists(json, 'sparkVersion') ? undefined : json['sparkVersion'],
        'pythonVersion': !exists(json, 'pythonVersion') ? undefined : json['pythonVersion'],
        'deployMode': !exists(json, 'deployMode') ? undefined : SparkDeployModeFromJSON(json['deployMode']),
        'mainClass': !exists(json, 'mainClass') ? undefined : json['mainClass'],
        'mainApplicationFile': !exists(json, 'mainApplicationFile') ? undefined : json['mainApplicationFile'],
        'arguments': !exists(json, 'arguments') ? undefined : json['arguments'],
        'hadoopConf': !exists(json, 'hadoopConf') ? undefined : json['hadoopConf'],
        'sparkConf': !exists(json, 'sparkConf') ? undefined : json['sparkConf'],
        'sparkConfigMap': !exists(json, 'sparkConfigMap') ? undefined : json['sparkConfigMap'],
        'hadoopConfigMap': !exists(json, 'hadoopConfigMap') ? undefined : json['hadoopConfigMap'],
        'executor': !exists(json, 'executor') ? undefined : V1SparkReplicaFromJSON(json['executor']),
        'driver': !exists(json, 'driver') ? undefined : V1SparkReplicaFromJSON(json['driver']),
    };
}

export function V1SparkToJSON(value?: V1Spark | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'connections': value.connections,
        'volumes': value.volumes,
        'type': V1SparkTypeToJSON(value.type),
        'sparkVersion': value.sparkVersion,
        'pythonVersion': value.pythonVersion,
        'deployMode': SparkDeployModeToJSON(value.deployMode),
        'mainClass': value.mainClass,
        'mainApplicationFile': value.mainApplicationFile,
        'arguments': value.arguments,
        'hadoopConf': value.hadoopConf,
        'sparkConf': value.sparkConf,
        'sparkConfigMap': value.sparkConfigMap,
        'hadoopConfigMap': value.hadoopConfigMap,
        'executor': V1SparkReplicaToJSON(value.executor),
        'driver': V1SparkReplicaToJSON(value.driver),
    };
}

