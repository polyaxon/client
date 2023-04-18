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
 * The version of the OpenAPI document: 2.0.0-rc9
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Environment from './V1Environment';
import V1Init from './V1Init';

/**
 * The V1KFReplica model module.
 * @module model/V1KFReplica
 * @version 2.0.0-rc9
 */
class V1KFReplica {
    /**
     * Constructs a new <code>V1KFReplica</code>.
     * @alias module:model/V1KFReplica
     */
    constructor() {

        V1KFReplica.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1KFReplica</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1KFReplica} obj Optional instance to populate.
     * @return {module:model/V1KFReplica} The populated <code>V1KFReplica</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1KFReplica();

            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = V1Environment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [Object]);
            }
            if (data.hasOwnProperty('init')) {
                obj['init'] = ApiClient.convertToType(data['init'], [V1Init]);
            }
            if (data.hasOwnProperty('sidecars')) {
                obj['sidecars'] = ApiClient.convertToType(data['sidecars'], [Object]);
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1KFReplica</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1KFReplica</code>.
     */
    static validateJSON(data) {
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          V1Environment.validateJSON(data['environment']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volumes'])) {
            throw new Error("Expected the field `volumes` to be an array in the JSON data but got " + data['volumes']);
        }
        if (data['init']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['init'])) {
                throw new Error("Expected the field `init` to be an array in the JSON data but got " + data['init']);
            }
            // validate the optional field `init` (array)
            for (const item of data['init']) {
                V1Init.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sidecars'])) {
            throw new Error("Expected the field `sidecars` to be an array in the JSON data but got " + data['sidecars']);
        }

        return true;
    }


}



/**
 * @member {Number} replicas
 */
V1KFReplica.prototype['replicas'] = undefined;

/**
 * @member {module:model/V1Environment} environment
 */
V1KFReplica.prototype['environment'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1KFReplica.prototype['connections'] = undefined;

/**
 * @member {Array.<Object>} volumes
 */
V1KFReplica.prototype['volumes'] = undefined;

/**
 * @member {Array.<module:model/V1Init>} init
 */
V1KFReplica.prototype['init'] = undefined;

/**
 * @member {Array.<Object>} sidecars
 */
V1KFReplica.prototype['sidecars'] = undefined;

/**
 * @member {Object} container
 */
V1KFReplica.prototype['container'] = undefined;






export default V1KFReplica;

