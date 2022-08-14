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
 *
 */

import ApiClient from '../ApiClient';
import V1Tuner from './V1Tuner';

/**
 * The V1Iterative model module.
 * @module model/V1Iterative
 * @version 1.20.0
 */
class V1Iterative {
    /**
     * Constructs a new <code>V1Iterative</code>.
     * @alias module:model/V1Iterative
     */
    constructor() { 
        
        V1Iterative.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Iterative</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Iterative} obj Optional instance to populate.
     * @return {module:model/V1Iterative} The populated <code>V1Iterative</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Iterative();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
            }
            if (data.hasOwnProperty('maxIterations')) {
                obj['maxIterations'] = ApiClient.convertToType(data['maxIterations'], 'Number');
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
            }
            if (data.hasOwnProperty('concurrency')) {
                obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
            }
            if (data.hasOwnProperty('tuner')) {
                obj['tuner'] = V1Tuner.constructFromObject(data['tuner']);
            }
            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = ApiClient.convertToType(data['earlyStopping'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'iterative'
 */
V1Iterative.prototype['kind'] = 'iterative';

/**
 * @member {Object.<String, Object>} params
 */
V1Iterative.prototype['params'] = undefined;

/**
 * @member {Number} maxIterations
 */
V1Iterative.prototype['maxIterations'] = undefined;

/**
 * @member {Number} seed
 */
V1Iterative.prototype['seed'] = undefined;

/**
 * @member {Number} concurrency
 */
V1Iterative.prototype['concurrency'] = undefined;

/**
 * @member {module:model/V1Tuner} tuner
 */
V1Iterative.prototype['tuner'] = undefined;

/**
 * @member {Array.<Object>} earlyStopping
 */
V1Iterative.prototype['earlyStopping'] = undefined;






export default V1Iterative;

