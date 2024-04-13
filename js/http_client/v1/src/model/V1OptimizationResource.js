/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ResourceType from './V1ResourceType';

/**
 * The V1OptimizationResource model module.
 * @module model/V1OptimizationResource
 * @version 2.1.6
 */
class V1OptimizationResource {
    /**
     * Constructs a new <code>V1OptimizationResource</code>.
     * @alias module:model/V1OptimizationResource
     */
    constructor() {

        V1OptimizationResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1OptimizationResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1OptimizationResource} obj Optional instance to populate.
     * @return {module:model/V1OptimizationResource} The populated <code>V1OptimizationResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1OptimizationResource();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = V1ResourceType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1OptimizationResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1OptimizationResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1OptimizationResource.prototype['name'] = undefined;

/**
 * @member {module:model/V1ResourceType} type
 */
V1OptimizationResource.prototype['type'] = undefined;






export default V1OptimizationResource;

