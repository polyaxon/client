/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1TrialStart model module.
 * @module model/V1TrialStart
 * @version 2.1.3-rc3
 */
class V1TrialStart {
    /**
     * Constructs a new <code>V1TrialStart</code>.
     * @alias module:model/V1TrialStart
     */
    constructor() {

        V1TrialStart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1TrialStart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1TrialStart} obj Optional instance to populate.
     * @return {module:model/V1TrialStart} The populated <code>V1TrialStart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1TrialStart();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ApiClient.convertToType(data['plan'], 'String');
            }
            if (data.hasOwnProperty('seats')) {
                obj['seats'] = ApiClient.convertToType(data['seats'], 'Number');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1TrialStart</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1TrialStart</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['organization'] && !(typeof data['organization'] === 'string' || data['organization'] instanceof String)) {
            throw new Error("Expected the field `organization` to be a primitive type in the JSON string but got " + data['organization']);
        }
        // ensure the json data is a string
        if (data['plan'] && !(typeof data['plan'] === 'string' || data['plan'] instanceof String)) {
            throw new Error("Expected the field `plan` to be a primitive type in the JSON string but got " + data['plan']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
V1TrialStart.prototype['name'] = undefined;

/**
 * @member {String} email
 */
V1TrialStart.prototype['email'] = undefined;

/**
 * @member {String} organization
 */
V1TrialStart.prototype['organization'] = undefined;

/**
 * @member {String} plan
 */
V1TrialStart.prototype['plan'] = undefined;

/**
 * @member {Number} seats
 */
V1TrialStart.prototype['seats'] = undefined;

/**
 * @member {Object} details
 */
V1TrialStart.prototype['details'] = undefined;






export default V1TrialStart;

