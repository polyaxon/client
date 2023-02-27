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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.22.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1RunKind.
* @enum {}
* @readonly
*/
export default class V1RunKind {
    
        /**
         * value: "job"
         * @const
         */
        "job" = "job";

    
        /**
         * value: "service"
         * @const
         */
        "service" = "service";

    
        /**
         * value: "dag"
         * @const
         */
        "dag" = "dag";

    
        /**
         * value: "spark"
         * @const
         */
        "spark" = "spark";

    
        /**
         * value: "dask"
         * @const
         */
        "dask" = "dask";

    
        /**
         * value: "flink"
         * @const
         */
        "flink" = "flink";

    
        /**
         * value: "ray"
         * @const
         */
        "ray" = "ray";

    
        /**
         * value: "mpijob"
         * @const
         */
        "mpijob" = "mpijob";

    
        /**
         * value: "tfjob"
         * @const
         */
        "tfjob" = "tfjob";

    
        /**
         * value: "pytorchjob"
         * @const
         */
        "pytorchjob" = "pytorchjob";

    
        /**
         * value: "paddlejob"
         * @const
         */
        "paddlejob" = "paddlejob";

    
        /**
         * value: "mxjob"
         * @const
         */
        "mxjob" = "mxjob";

    
        /**
         * value: "xgbjob"
         * @const
         */
        "xgbjob" = "xgbjob";

    
        /**
         * value: "matrix"
         * @const
         */
        "matrix" = "matrix";

    
        /**
         * value: "schedule"
         * @const
         */
        "schedule" = "schedule";

    
        /**
         * value: "tuner"
         * @const
         */
        "tuner" = "tuner";

    
        /**
         * value: "watchdog"
         * @const
         */
        "watchdog" = "watchdog";

    
        /**
         * value: "notifier"
         * @const
         */
        "notifier" = "notifier";

    
        /**
         * value: "cleaner"
         * @const
         */
        "cleaner" = "cleaner";

    
        /**
         * value: "builder"
         * @const
         */
        "builder" = "builder";

    

    /**
    * Returns a <code>V1RunKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1RunKind} The enum <code>V1RunKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

