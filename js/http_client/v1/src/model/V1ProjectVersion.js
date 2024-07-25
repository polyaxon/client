/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ProjectVersionKind from './V1ProjectVersionKind';
import V1StageCondition from './V1StageCondition';
import V1Stages from './V1Stages';

/**
 * The V1ProjectVersion model module.
 * @module model/V1ProjectVersion
 * @version 2.3.0-rc0
 */
class V1ProjectVersion {
    /**
     * Constructs a new <code>V1ProjectVersion</code>.
     * @alias module:model/V1ProjectVersion
     */
    constructor() { 
        
        V1ProjectVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ProjectVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ProjectVersion} obj Optional instance to populate.
     * @return {module:model/V1ProjectVersion} The populated <code>V1ProjectVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ProjectVersion();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
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
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], 'String');
            }
            if (data.hasOwnProperty('artifacts')) {
                obj['artifacts'] = ApiClient.convertToType(data['artifacts'], ['String']);
            }
            if (data.hasOwnProperty('meta_info')) {
                obj['meta_info'] = ApiClient.convertToType(data['meta_info'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = V1Stages.constructFromObject(data['stage']);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1ProjectVersionKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('stage_conditions')) {
                obj['stage_conditions'] = ApiClient.convertToType(data['stage_conditions'], [V1StageCondition]);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('readme')) {
                obj['readme'] = ApiClient.convertToType(data['readme'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('contributors')) {
                obj['contributors'] = ApiClient.convertToType(data['contributors'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ProjectVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ProjectVersion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['connection'] && !(typeof data['connection'] === 'string' || data['connection'] instanceof String)) {
            throw new Error("Expected the field `connection` to be a primitive type in the JSON string but got " + data['connection']);
        }
        // ensure the json data is a string
        if (data['run'] && !(typeof data['run'] === 'string' || data['run'] instanceof String)) {
            throw new Error("Expected the field `run` to be a primitive type in the JSON string but got " + data['run']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['artifacts'])) {
            throw new Error("Expected the field `artifacts` to be an array in the JSON data but got " + data['artifacts']);
        }
        if (data['stage_conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stage_conditions'])) {
                throw new Error("Expected the field `stage_conditions` to be an array in the JSON data but got " + data['stage_conditions']);
            }
            // validate the optional field `stage_conditions` (array)
            for (const item of data['stage_conditions']) {
                V1StageCondition.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['readme'] && !(typeof data['readme'] === 'string' || data['readme'] instanceof String)) {
            throw new Error("Expected the field `readme` to be a primitive type in the JSON string but got " + data['readme']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contributors'])) {
            throw new Error("Expected the field `contributors` to be an array in the JSON data but got " + data['contributors']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1ProjectVersion.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1ProjectVersion.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1ProjectVersion.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1ProjectVersion.prototype['tags'] = undefined;

/**
 * @member {String} owner
 */
V1ProjectVersion.prototype['owner'] = undefined;

/**
 * @member {String} project
 */
V1ProjectVersion.prototype['project'] = undefined;

/**
 * @member {String} connection
 */
V1ProjectVersion.prototype['connection'] = undefined;

/**
 * @member {String} run
 */
V1ProjectVersion.prototype['run'] = undefined;

/**
 * @member {Array.<String>} artifacts
 */
V1ProjectVersion.prototype['artifacts'] = undefined;

/**
 * Extra information related to the run, lineage, artifacts, ...
 * @member {Object} meta_info
 */
V1ProjectVersion.prototype['meta_info'] = undefined;

/**
 * @member {Date} created_at
 */
V1ProjectVersion.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1ProjectVersion.prototype['updated_at'] = undefined;

/**
 * @member {module:model/V1Stages} stage
 */
V1ProjectVersion.prototype['stage'] = undefined;

/**
 * @member {module:model/V1ProjectVersionKind} kind
 */
V1ProjectVersion.prototype['kind'] = undefined;

/**
 * @member {Array.<module:model/V1StageCondition>} stage_conditions
 */
V1ProjectVersion.prototype['stage_conditions'] = undefined;

/**
 * @member {String} content
 */
V1ProjectVersion.prototype['content'] = undefined;

/**
 * @member {String} readme
 */
V1ProjectVersion.prototype['readme'] = undefined;

/**
 * @member {String} state
 */
V1ProjectVersion.prototype['state'] = undefined;

/**
 * @member {String} role
 */
V1ProjectVersion.prototype['role'] = undefined;

/**
 * @member {Array.<Object>} contributors
 */
V1ProjectVersion.prototype['contributors'] = undefined;






export default V1ProjectVersion;

