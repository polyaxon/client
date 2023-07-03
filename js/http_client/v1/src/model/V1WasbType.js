/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc26
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1WasbType model module.
 * @module model/V1WasbType
 * @version 2.0.0-rc26
 */
class V1WasbType {
    /**
     * Constructs a new <code>V1WasbType</code>.
     * @alias module:model/V1WasbType
     */
    constructor() {

        V1WasbType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1WasbType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1WasbType} obj Optional instance to populate.
     * @return {module:model/V1WasbType} The populated <code>V1WasbType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1WasbType();

            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('storageAccount')) {
                obj['storageAccount'] = ApiClient.convertToType(data['storageAccount'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1WasbType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1WasbType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }
        // ensure the json data is a string
        if (data['storageAccount'] && !(typeof data['storageAccount'] === 'string' || data['storageAccount'] instanceof String)) {
            throw new Error("Expected the field `storageAccount` to be a primitive type in the JSON string but got " + data['storageAccount']);
        }

        return true;
    }


}



/**
 * @member {String} container
 */
V1WasbType.prototype['container'] = undefined;

/**
 * @member {String} storageAccount
 */
V1WasbType.prototype['storageAccount'] = undefined;

/**
 * @member {Boolean} path
 */
V1WasbType.prototype['path'] = undefined;






export default V1WasbType;

