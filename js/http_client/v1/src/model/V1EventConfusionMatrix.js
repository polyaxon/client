/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc40
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1EventConfusionMatrix model module.
 * @module model/V1EventConfusionMatrix
 * @version 2.0.0-rc40
 */
class V1EventConfusionMatrix {
    /**
     * Constructs a new <code>V1EventConfusionMatrix</code>.
     * @alias module:model/V1EventConfusionMatrix
     */
    constructor() {

        V1EventConfusionMatrix.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventConfusionMatrix</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventConfusionMatrix} obj Optional instance to populate.
     * @return {module:model/V1EventConfusionMatrix} The populated <code>V1EventConfusionMatrix</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventConfusionMatrix();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], [Object]);
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], [Object]);
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventConfusionMatrix</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventConfusionMatrix</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['x'])) {
            throw new Error("Expected the field `x` to be an array in the JSON data but got " + data['x']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['y'])) {
            throw new Error("Expected the field `y` to be an array in the JSON data but got " + data['y']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['z'])) {
            throw new Error("Expected the field `z` to be an array in the JSON data but got " + data['z']);
        }

        return true;
    }


}



/**
 * @member {Array.<Object>} x
 */
V1EventConfusionMatrix.prototype['x'] = undefined;

/**
 * @member {Array.<Object>} y
 */
V1EventConfusionMatrix.prototype['y'] = undefined;

/**
 * @member {Array.<Object>} z
 */
V1EventConfusionMatrix.prototype['z'] = undefined;






export default V1EventConfusionMatrix;

