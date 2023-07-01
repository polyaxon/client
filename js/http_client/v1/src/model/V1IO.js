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

/**
 * The V1IO model module.
 * @module model/V1IO
 * @version 2.0.0-rc25
 */
class V1IO {
    /**
     * Constructs a new <code>V1IO</code>.
     * @alias module:model/V1IO
     */
    constructor() {

        V1IO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1IO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1IO} obj Optional instance to populate.
     * @return {module:model/V1IO} The populated <code>V1IO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1IO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('isOptional')) {
                obj['isOptional'] = ApiClient.convertToType(data['isOptional'], 'Boolean');
            }
            if (data.hasOwnProperty('isList')) {
                obj['isList'] = ApiClient.convertToType(data['isList'], 'Boolean');
            }
            if (data.hasOwnProperty('isFlag')) {
                obj['isFlag'] = ApiClient.convertToType(data['isFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('argFormat')) {
                obj['argFormat'] = ApiClient.convertToType(data['argFormat'], 'String');
            }
            if (data.hasOwnProperty('delayValidation')) {
                obj['delayValidation'] = ApiClient.convertToType(data['delayValidation'], 'Boolean');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
            if (data.hasOwnProperty('toInit')) {
                obj['toInit'] = ApiClient.convertToType(data['toInit'], 'Boolean');
            }
            if (data.hasOwnProperty('toEnv')) {
                obj['toEnv'] = ApiClient.convertToType(data['toEnv'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1IO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1IO</code>.
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
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['argFormat'] && !(typeof data['argFormat'] === 'string' || data['argFormat'] instanceof String)) {
            throw new Error("Expected the field `argFormat` to be a primitive type in the JSON string but got " + data['argFormat']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['options'])) {
            throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
        }
        // ensure the json data is a string
        if (data['connection'] && !(typeof data['connection'] === 'string' || data['connection'] instanceof String)) {
            throw new Error("Expected the field `connection` to be a primitive type in the JSON string but got " + data['connection']);
        }
        // ensure the json data is a string
        if (data['toEnv'] && !(typeof data['toEnv'] === 'string' || data['toEnv'] instanceof String)) {
            throw new Error("Expected the field `toEnv` to be a primitive type in the JSON string but got " + data['toEnv']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1IO.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1IO.prototype['description'] = undefined;

/**
 * @member {String} type
 */
V1IO.prototype['type'] = undefined;

/**
 * @member {Object} value
 */
V1IO.prototype['value'] = undefined;

/**
 * @member {Boolean} isOptional
 */
V1IO.prototype['isOptional'] = undefined;

/**
 * @member {Boolean} isList
 */
V1IO.prototype['isList'] = undefined;

/**
 * @member {Boolean} isFlag
 */
V1IO.prototype['isFlag'] = undefined;

/**
 * @member {String} argFormat
 */
V1IO.prototype['argFormat'] = undefined;

/**
 * @member {Boolean} delayValidation
 */
V1IO.prototype['delayValidation'] = undefined;

/**
 * @member {Array.<Object>} options
 */
V1IO.prototype['options'] = undefined;

/**
 * @member {String} connection
 */
V1IO.prototype['connection'] = undefined;

/**
 * @member {Boolean} toInit
 */
V1IO.prototype['toInit'] = undefined;

/**
 * @member {String} toEnv
 */
V1IO.prototype['toEnv'] = undefined;






export default V1IO;

