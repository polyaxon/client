/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ProjectSettings from './V1ProjectSettings';

/**
 * The V1Project model module.
 * @module model/V1Project
 * @version 2.1.1
 */
class V1Project {
    /**
     * Constructs a new <code>V1Project</code>.
     * @alias module:model/V1Project
     */
    constructor() {

        V1Project.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Project} obj Optional instance to populate.
     * @return {module:model/V1Project} The populated <code>V1Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Project();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('bookmarked')) {
                obj['bookmarked'] = ApiClient.convertToType(data['bookmarked'], 'Boolean');
            }
            if (data.hasOwnProperty('readme')) {
                obj['readme'] = ApiClient.convertToType(data['readme'], 'String');
            }
            if (data.hasOwnProperty('excluded_features')) {
                obj['excluded_features'] = ApiClient.convertToType(data['excluded_features'], ['String']);
            }
            if (data.hasOwnProperty('excluded_runtimes')) {
                obj['excluded_runtimes'] = ApiClient.convertToType(data['excluded_runtimes'], ['String']);
            }
            if (data.hasOwnProperty('archived_deletion_interval')) {
                obj['archived_deletion_interval'] = ApiClient.convertToType(data['archived_deletion_interval'], 'Number');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = V1ProjectSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('contributors')) {
                obj['contributors'] = ApiClient.convertToType(data['contributors'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Project</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Project</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
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
        if (data['readme'] && !(typeof data['readme'] === 'string' || data['readme'] instanceof String)) {
            throw new Error("Expected the field `readme` to be a primitive type in the JSON string but got " + data['readme']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excluded_features'])) {
            throw new Error("Expected the field `excluded_features` to be an array in the JSON data but got " + data['excluded_features']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['excluded_runtimes'])) {
            throw new Error("Expected the field `excluded_runtimes` to be an array in the JSON data but got " + data['excluded_runtimes']);
        }
        // validate the optional field `settings`
        if (data['settings']) { // data not null
          V1ProjectSettings.validateJSON(data['settings']);
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
V1Project.prototype['uuid'] = undefined;

/**
 * @member {String} owner
 */
V1Project.prototype['owner'] = undefined;

/**
 * @member {String} name
 */
V1Project.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Project.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Project.prototype['tags'] = undefined;

/**
 * @member {Date} created_at
 */
V1Project.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Project.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} is_public
 */
V1Project.prototype['is_public'] = undefined;

/**
 * @member {Boolean} bookmarked
 */
V1Project.prototype['bookmarked'] = undefined;

/**
 * @member {String} readme
 */
V1Project.prototype['readme'] = undefined;

/**
 * @member {Array.<String>} excluded_features
 */
V1Project.prototype['excluded_features'] = undefined;

/**
 * @member {Array.<String>} excluded_runtimes
 */
V1Project.prototype['excluded_runtimes'] = undefined;

/**
 * @member {Number} archived_deletion_interval
 */
V1Project.prototype['archived_deletion_interval'] = undefined;

/**
 * @member {module:model/V1ProjectSettings} settings
 */
V1Project.prototype['settings'] = undefined;

/**
 * @member {String} role
 */
V1Project.prototype['role'] = undefined;

/**
 * @member {Number} live_state
 */
V1Project.prototype['live_state'] = undefined;

/**
 * @member {Array.<Object>} contributors
 */
V1Project.prototype['contributors'] = undefined;






export default V1Project;

