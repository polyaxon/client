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
 * The version of the OpenAPI document: 1.19.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1StatusCondition from './V1StatusCondition';

/**
 * The V1EntityNotificationBody model module.
 * @module model/V1EntityNotificationBody
 * @version 1.19.0
 */
class V1EntityNotificationBody {
    /**
     * Constructs a new <code>V1EntityNotificationBody</code>.
     * @alias module:model/V1EntityNotificationBody
     */
    constructor() { 
        
        V1EntityNotificationBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1EntityNotificationBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EntityNotificationBody} obj Optional instance to populate.
     * @return {module:model/V1EntityNotificationBody} The populated <code>V1EntityNotificationBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EntityNotificationBody();

            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = V1StatusCondition.constructFromObject(data['condition']);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} namespace
 */
V1EntityNotificationBody.prototype['namespace'] = undefined;

/**
 * @member {String} owner
 */
V1EntityNotificationBody.prototype['owner'] = undefined;

/**
 * @member {String} project
 */
V1EntityNotificationBody.prototype['project'] = undefined;

/**
 * @member {String} uuid
 */
V1EntityNotificationBody.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1EntityNotificationBody.prototype['name'] = undefined;

/**
 * @member {module:model/V1StatusCondition} condition
 */
V1EntityNotificationBody.prototype['condition'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1EntityNotificationBody.prototype['connections'] = undefined;






export default V1EntityNotificationBody;

