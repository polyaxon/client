/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ConnectionKind from './V1ConnectionKind';
import V1ConnectionResource from './V1ConnectionResource';

/**
 * The V1ConnectionType model module.
 * @module model/V1ConnectionType
 * @version 2.1.0-rc2
 */
class V1ConnectionType {
    /**
     * Constructs a new <code>V1ConnectionType</code>.
     * @alias module:model/V1ConnectionType
     */
    constructor() {

        V1ConnectionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ConnectionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ConnectionType} obj Optional instance to populate.
     * @return {module:model/V1ConnectionType} The populated <code>V1ConnectionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ConnectionType();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1ConnectionKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], Object);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = V1ConnectionResource.constructFromObject(data['secret']);
            }
            if (data.hasOwnProperty('configMap')) {
                obj['configMap'] = V1ConnectionResource.constructFromObject(data['configMap']);
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], [Object]);
            }
            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ConnectionType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ConnectionType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['tags'] && !(typeof data['tags'] === 'string' || data['tags'] instanceof String)) {
            throw new Error("Expected the field `tags` to be a primitive type in the JSON string but got " + data['tags']);
        }
        // validate the optional field `secret`
        if (data['secret']) { // data not null
          V1ConnectionResource.validateJSON(data['secret']);
        }
        // validate the optional field `configMap`
        if (data['configMap']) { // data not null
          V1ConnectionResource.validateJSON(data['configMap']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['env'])) {
            throw new Error("Expected the field `env` to be an array in the JSON data but got " + data['env']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1ConnectionType.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1ConnectionType.prototype['description'] = undefined;

/**
 * @member {String} tags
 */
V1ConnectionType.prototype['tags'] = undefined;

/**
 * @member {module:model/V1ConnectionKind} kind
 */
V1ConnectionType.prototype['kind'] = undefined;

/**
 * @member {Object} schema
 */
V1ConnectionType.prototype['schema'] = undefined;

/**
 * @member {module:model/V1ConnectionResource} secret
 */
V1ConnectionType.prototype['secret'] = undefined;

/**
 * @member {module:model/V1ConnectionResource} configMap
 */
V1ConnectionType.prototype['configMap'] = undefined;

/**
 * @member {Array.<Object>} env
 */
V1ConnectionType.prototype['env'] = undefined;

/**
 * @member {Object.<String, String>} annotations
 */
V1ConnectionType.prototype['annotations'] = undefined;






export default V1ConnectionType;

