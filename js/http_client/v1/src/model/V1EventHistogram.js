/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EventHistogram model module.
 * @module model/V1EventHistogram
 * @version 2.5.0-rc3
 */
class V1EventHistogram {
    /**
     * Constructs a new <code>V1EventHistogram</code>.
     * @alias module:model/V1EventHistogram
     */
    constructor() {

        V1EventHistogram.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventHistogram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventHistogram} obj Optional instance to populate.
     * @return {module:model/V1EventHistogram} The populated <code>V1EventHistogram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventHistogram();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['Number']);
            }
            if (data.hasOwnProperty('counts')) {
                obj['counts'] = ApiClient.convertToType(data['counts'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventHistogram</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventHistogram</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['counts'])) {
            throw new Error("Expected the field `counts` to be an array in the JSON data but got " + data['counts']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} values
 */
V1EventHistogram.prototype['values'] = undefined;

/**
 * @member {Array.<Number>} counts
 */
V1EventHistogram.prototype['counts'] = undefined;






export default V1EventHistogram;

