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
 * The version of the OpenAPI document: 2.0.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Optimization from './V1Optimization';

/**
 * The V1OptimizationMetric model module.
 * @module model/V1OptimizationMetric
 * @version 2.0.0-rc0
 */
class V1OptimizationMetric {
    /**
     * Constructs a new <code>V1OptimizationMetric</code>.
     * @alias module:model/V1OptimizationMetric
     */
    constructor() { 
        
        V1OptimizationMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1OptimizationMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1OptimizationMetric} obj Optional instance to populate.
     * @return {module:model/V1OptimizationMetric} The populated <code>V1OptimizationMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1OptimizationMetric();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('optimization')) {
                obj['optimization'] = V1Optimization.constructFromObject(data['optimization']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1OptimizationMetric</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1OptimizationMetric</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1OptimizationMetric.prototype['name'] = undefined;

/**
 * @member {module:model/V1Optimization} optimization
 */
V1OptimizationMetric.prototype['optimization'] = undefined;






export default V1OptimizationMetric;

