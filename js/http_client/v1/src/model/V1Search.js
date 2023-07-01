/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc25
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SearchView from './SearchView';
import V1SearchSpec from './V1SearchSpec';

/**
 * The V1Search model module.
 * @module model/V1Search
 * @version 2.0.0-rc25
 */
class V1Search {
    /**
     * Constructs a new <code>V1Search</code>.
     * @alias module:model/V1Search
     */
    constructor() {

        V1Search.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Search</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Search} obj Optional instance to populate.
     * @return {module:model/V1Search} The populated <code>V1Search</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Search();

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
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('view')) {
                obj['view'] = SearchView.constructFromObject(data['view']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = V1SearchSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('org_level')) {
                obj['org_level'] = ApiClient.convertToType(data['org_level'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Search</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Search</code>.
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
        // validate the optional field `spec`
        if (data['spec']) { // data not null
          V1SearchSpec.validateJSON(data['spec']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Search.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Search.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Search.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Search.prototype['tags'] = undefined;

/**
 * @member {Number} live_state
 */
V1Search.prototype['live_state'] = undefined;

/**
 * @member {module:model/SearchView} view
 */
V1Search.prototype['view'] = undefined;

/**
 * @member {module:model/V1SearchSpec} spec
 */
V1Search.prototype['spec'] = undefined;

/**
 * @member {Boolean} org_level
 */
V1Search.prototype['org_level'] = undefined;

/**
 * @member {Date} created_at
 */
V1Search.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Search.prototype['updated_at'] = undefined;






export default V1Search;

