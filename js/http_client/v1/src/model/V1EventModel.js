/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc48
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EventModel model module.
 * @module model/V1EventModel
 * @version 2.0.0-rc48
 */
class V1EventModel {
    /**
     * Constructs a new <code>V1EventModel</code>.
     * @alias module:model/V1EventModel
     */
    constructor() { 
        
        V1EventModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1EventModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventModel} obj Optional instance to populate.
     * @return {module:model/V1EventModel} The populated <code>V1EventModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventModel();

            if (data.hasOwnProperty('framework')) {
                obj['framework'] = ApiClient.convertToType(data['framework'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = ApiClient.convertToType(data['spec'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['framework'] && !(typeof data['framework'] === 'string' || data['framework'] instanceof String)) {
            throw new Error("Expected the field `framework` to be a primitive type in the JSON string but got " + data['framework']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * @member {String} framework
 */
V1EventModel.prototype['framework'] = undefined;

/**
 * @member {String} path
 */
V1EventModel.prototype['path'] = undefined;

/**
 * @member {Object} spec
 */
V1EventModel.prototype['spec'] = undefined;






export default V1EventModel;

