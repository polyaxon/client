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
import V1Build from './V1Build';
import V1Cache from './V1Cache';
import V1EventTrigger from './V1EventTrigger';
import V1Hook from './V1Hook';
import V1IO from './V1IO';
import V1Join from './V1Join';
import V1Plugins from './V1Plugins';
import V1Termination from './V1Termination';
import V1TriggerPolicy from './V1TriggerPolicy';

/**
 * The V1CompiledOperation model module.
 * @module model/V1CompiledOperation
 * @version 1.19.0
 */
class V1CompiledOperation {
    /**
     * Constructs a new <code>V1CompiledOperation</code>.
     * @alias module:model/V1CompiledOperation
     */
    constructor() { 
        
        V1CompiledOperation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1CompiledOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1CompiledOperation} obj Optional instance to populate.
     * @return {module:model/V1CompiledOperation} The populated <code>V1CompiledOperation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CompiledOperation();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('presets')) {
                obj['presets'] = ApiClient.convertToType(data['presets'], ['String']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = V1Cache.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('termination')) {
                obj['termination'] = V1Termination.constructFromObject(data['termination']);
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = V1Plugins.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], Object);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [V1EventTrigger]);
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = V1Build.constructFromObject(data['build']);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = ApiClient.convertToType(data['hooks'], [V1Hook]);
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], ['String']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = V1TriggerPolicy.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], 'String');
            }
            if (data.hasOwnProperty('skipOnUpstreamSkip')) {
                obj['skipOnUpstreamSkip'] = ApiClient.convertToType(data['skipOnUpstreamSkip'], 'Boolean');
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = ApiClient.convertToType(data['matrix'], Object);
            }
            if (data.hasOwnProperty('joins')) {
                obj['joins'] = ApiClient.convertToType(data['joins'], {'String': V1Join});
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], [V1IO]);
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], [V1IO]);
            }
            if (data.hasOwnProperty('contexts')) {
                obj['contexts'] = ApiClient.convertToType(data['contexts'], [V1IO]);
            }
            if (data.hasOwnProperty('isApproved')) {
                obj['isApproved'] = ApiClient.convertToType(data['isApproved'], 'Boolean');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} version
 */
V1CompiledOperation.prototype['version'] = undefined;

/**
 * @member {String} kind
 */
V1CompiledOperation.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
V1CompiledOperation.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1CompiledOperation.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1CompiledOperation.prototype['tags'] = undefined;

/**
 * @member {Array.<String>} presets
 */
V1CompiledOperation.prototype['presets'] = undefined;

/**
 * @member {String} queue
 */
V1CompiledOperation.prototype['queue'] = undefined;

/**
 * @member {module:model/V1Cache} cache
 */
V1CompiledOperation.prototype['cache'] = undefined;

/**
 * @member {module:model/V1Termination} termination
 */
V1CompiledOperation.prototype['termination'] = undefined;

/**
 * @member {module:model/V1Plugins} plugins
 */
V1CompiledOperation.prototype['plugins'] = undefined;

/**
 * @member {Object} schedule
 */
V1CompiledOperation.prototype['schedule'] = undefined;

/**
 * @member {Array.<module:model/V1EventTrigger>} events
 */
V1CompiledOperation.prototype['events'] = undefined;

/**
 * @member {module:model/V1Build} build
 */
V1CompiledOperation.prototype['build'] = undefined;

/**
 * @member {Array.<module:model/V1Hook>} hooks
 */
V1CompiledOperation.prototype['hooks'] = undefined;

/**
 * @member {Array.<String>} dependencies
 */
V1CompiledOperation.prototype['dependencies'] = undefined;

/**
 * @member {module:model/V1TriggerPolicy} trigger
 */
V1CompiledOperation.prototype['trigger'] = undefined;

/**
 * @member {String} conditions
 */
V1CompiledOperation.prototype['conditions'] = undefined;

/**
 * @member {Boolean} skipOnUpstreamSkip
 */
V1CompiledOperation.prototype['skipOnUpstreamSkip'] = undefined;

/**
 * @member {Object} matrix
 */
V1CompiledOperation.prototype['matrix'] = undefined;

/**
 * @member {Object.<String, module:model/V1Join>} joins
 */
V1CompiledOperation.prototype['joins'] = undefined;

/**
 * @member {Array.<module:model/V1IO>} inputs
 */
V1CompiledOperation.prototype['inputs'] = undefined;

/**
 * @member {Array.<module:model/V1IO>} outputs
 */
V1CompiledOperation.prototype['outputs'] = undefined;

/**
 * @member {Array.<module:model/V1IO>} contexts
 */
V1CompiledOperation.prototype['contexts'] = undefined;

/**
 * @member {Boolean} isApproved
 */
V1CompiledOperation.prototype['isApproved'] = undefined;

/**
 * @member {Number} cost
 */
V1CompiledOperation.prototype['cost'] = undefined;

/**
 * @member {Object} run
 */
V1CompiledOperation.prototype['run'] = undefined;






export default V1CompiledOperation;

