/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1UserSingup model module.
 * @module model/V1UserSingup
 * @version 2.1.0-rc7
 */
class V1UserSingup {
    /**
     * Constructs a new <code>V1UserSingup</code>.
     * @alias module:model/V1UserSingup
     */
    constructor() {

        V1UserSingup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1UserSingup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1UserSingup} obj Optional instance to populate.
     * @return {module:model/V1UserSingup} The populated <code>V1UserSingup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1UserSingup();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('invitation_key')) {
                obj['invitation_key'] = ApiClient.convertToType(data['invitation_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1UserSingup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1UserSingup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
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
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['invitation_key'] && !(typeof data['invitation_key'] === 'string' || data['invitation_key'] instanceof String)) {
            throw new Error("Expected the field `invitation_key` to be a primitive type in the JSON string but got " + data['invitation_key']);
        }

        return true;
    }


}



/**
 * @member {String} username
 */
V1UserSingup.prototype['username'] = undefined;

/**
 * @member {String} email
 */
V1UserSingup.prototype['email'] = undefined;

/**
 * @member {String} organization
 */
V1UserSingup.prototype['organization'] = undefined;

/**
 * @member {String} password
 */
V1UserSingup.prototype['password'] = undefined;

/**
 * @member {String} invitation_key
 */
V1UserSingup.prototype['invitation_key'] = undefined;






export default V1UserSingup;

