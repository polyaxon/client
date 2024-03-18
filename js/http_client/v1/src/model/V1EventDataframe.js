/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EventDataframe model module.
 * @module model/V1EventDataframe
 * @version 2.1.3
 */
class V1EventDataframe {
    /**
     * Constructs a new <code>V1EventDataframe</code>.
     * @alias module:model/V1EventDataframe
     */
    constructor() {

        V1EventDataframe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventDataframe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventDataframe} obj Optional instance to populate.
     * @return {module:model/V1EventDataframe} The populated <code>V1EventDataframe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventDataframe();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventDataframe</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventDataframe</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['content_type'] && !(typeof data['content_type'] === 'string' || data['content_type'] instanceof String)) {
            throw new Error("Expected the field `content_type` to be a primitive type in the JSON string but got " + data['content_type']);
        }

        return true;
    }


}



/**
 * @member {String} path
 */
V1EventDataframe.prototype['path'] = undefined;

/**
 * @member {String} content_type
 */
V1EventDataframe.prototype['content_type'] = undefined;






export default V1EventDataframe;

