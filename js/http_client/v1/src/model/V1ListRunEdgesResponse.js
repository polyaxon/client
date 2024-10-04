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
import V1RunEdge from './V1RunEdge';

/**
 * The V1ListRunEdgesResponse model module.
 * @module model/V1ListRunEdgesResponse
 * @version 2.5.0-rc3
 */
class V1ListRunEdgesResponse {
    /**
     * Constructs a new <code>V1ListRunEdgesResponse</code>.
     * @alias module:model/V1ListRunEdgesResponse
     */
    constructor() {

        V1ListRunEdgesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1ListRunEdgesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ListRunEdgesResponse} obj Optional instance to populate.
     * @return {module:model/V1ListRunEdgesResponse} The populated <code>V1ListRunEdgesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ListRunEdgesResponse();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [V1RunEdge]);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1ListRunEdgesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1ListRunEdgesResponse</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                V1RunEdge.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
V1ListRunEdgesResponse.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/V1RunEdge>} results
 */
V1ListRunEdgesResponse.prototype['results'] = undefined;

/**
 * @member {String} previous
 */
V1ListRunEdgesResponse.prototype['previous'] = undefined;

/**
 * @member {String} next
 */
V1ListRunEdgesResponse.prototype['next'] = undefined;






export default V1ListRunEdgesResponse;

