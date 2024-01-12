/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Param model module.
 * @module model/V1Param
 * @version 2.1.0-rc3
 */
class V1Param {
    /**
     * Constructs a new <code>V1Param</code>.
     * @alias module:model/V1Param
     */
    constructor() {

        V1Param.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Param</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Param} obj Optional instance to populate.
     * @return {module:model/V1Param} The populated <code>V1Param</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Param();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
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
            if (data.hasOwnProperty('contextOnly')) {
                obj['contextOnly'] = ApiClient.convertToType(data['contextOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Param</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Param</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ref'] && !(typeof data['ref'] === 'string' || data['ref'] instanceof String)) {
            throw new Error("Expected the field `ref` to be a primitive type in the JSON string but got " + data['ref']);
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
 * @member {Object} value
 */
V1Param.prototype['value'] = undefined;

/**
 * @member {String} ref
 */
V1Param.prototype['ref'] = undefined;

/**
 * @member {String} connection
 */
V1Param.prototype['connection'] = undefined;

/**
 * @member {Boolean} toInit
 */
V1Param.prototype['toInit'] = undefined;

/**
 * @member {String} toEnv
 */
V1Param.prototype['toEnv'] = undefined;

/**
 * @member {Boolean} contextOnly
 */
V1Param.prototype['contextOnly'] = undefined;






export default V1Param;

