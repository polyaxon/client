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

/**
 * The V1Activity model module.
 * @module model/V1Activity
 * @version 1.19.0
 */
class V1Activity {
    /**
     * Constructs a new <code>V1Activity</code>.
     * @alias module:model/V1Activity
     */
    constructor() { 
        
        V1Activity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Activity} obj Optional instance to populate.
     * @return {module:model/V1Activity} The populated <code>V1Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Activity();

            if (data.hasOwnProperty('actor')) {
                obj['actor'] = ApiClient.convertToType(data['actor'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('event_action')) {
                obj['event_action'] = ApiClient.convertToType(data['event_action'], 'String');
            }
            if (data.hasOwnProperty('event_subject')) {
                obj['event_subject'] = ApiClient.convertToType(data['event_subject'], 'String');
            }
            if (data.hasOwnProperty('object_name')) {
                obj['object_name'] = ApiClient.convertToType(data['object_name'], 'String');
            }
            if (data.hasOwnProperty('object_uuid')) {
                obj['object_uuid'] = ApiClient.convertToType(data['object_uuid'], 'String');
            }
            if (data.hasOwnProperty('object_parent')) {
                obj['object_parent'] = ApiClient.convertToType(data['object_parent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} actor
 */
V1Activity.prototype['actor'] = undefined;

/**
 * @member {String} owner
 */
V1Activity.prototype['owner'] = undefined;

/**
 * @member {Date} created_at
 */
V1Activity.prototype['created_at'] = undefined;

/**
 * @member {String} event_action
 */
V1Activity.prototype['event_action'] = undefined;

/**
 * @member {String} event_subject
 */
V1Activity.prototype['event_subject'] = undefined;

/**
 * @member {String} object_name
 */
V1Activity.prototype['object_name'] = undefined;

/**
 * @member {String} object_uuid
 */
V1Activity.prototype['object_uuid'] = undefined;

/**
 * @member {String} object_parent
 */
V1Activity.prototype['object_parent'] = undefined;






export default V1Activity;

