/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Log from './V1Log';

/**
 * The V1Logs model module.
 * @module model/V1Logs
 * @version 2.5.1
 */
class V1Logs {
    /**
     * Constructs a new <code>V1Logs</code>.
     * @alias module:model/V1Logs
     */
    constructor() {

        V1Logs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Logs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Logs} obj Optional instance to populate.
     * @return {module:model/V1Logs} The populated <code>V1Logs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Logs();

            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [V1Log]);
            }
            if (data.hasOwnProperty('last_time')) {
                obj['last_time'] = ApiClient.convertToType(data['last_time'], 'Date');
            }
            if (data.hasOwnProperty('last_file')) {
                obj['last_file'] = ApiClient.convertToType(data['last_file'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Logs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Logs</code>.
     */
    static validateJSON(data) {
        if (data['logs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['logs'])) {
                throw new Error("Expected the field `logs` to be an array in the JSON data but got " + data['logs']);
            }
            // validate the optional field `logs` (array)
            for (const item of data['logs']) {
                V1Log.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['last_file'] && !(typeof data['last_file'] === 'string' || data['last_file'] instanceof String)) {
            throw new Error("Expected the field `last_file` to be a primitive type in the JSON string but got " + data['last_file']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['files'])) {
            throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/V1Log>} logs
 */
V1Logs.prototype['logs'] = undefined;

/**
 * @member {Date} last_time
 */
V1Logs.prototype['last_time'] = undefined;

/**
 * @member {String} last_file
 */
V1Logs.prototype['last_file'] = undefined;

/**
 * @member {Array.<String>} files
 */
V1Logs.prototype['files'] = undefined;






export default V1Logs;

