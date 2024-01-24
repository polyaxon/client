/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc12
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1SchedulingPolicy model module.
 * @module model/V1SchedulingPolicy
 * @version 2.1.0-rc12
 */
class V1SchedulingPolicy {
    /**
     * Constructs a new <code>V1SchedulingPolicy</code>.
     * @alias module:model/V1SchedulingPolicy
     */
    constructor() {

        V1SchedulingPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1SchedulingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1SchedulingPolicy} obj Optional instance to populate.
     * @return {module:model/V1SchedulingPolicy} The populated <code>V1SchedulingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SchedulingPolicy();

            if (data.hasOwnProperty('minAvailable')) {
                obj['minAvailable'] = ApiClient.convertToType(data['minAvailable'], 'Number');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('minResources')) {
                obj['minResources'] = ApiClient.convertToType(data['minResources'], Object);
            }
            if (data.hasOwnProperty('priorityClass')) {
                obj['priorityClass'] = ApiClient.convertToType(data['priorityClass'], 'String');
            }
            if (data.hasOwnProperty('scheduleTimeoutSeconds')) {
                obj['scheduleTimeoutSeconds'] = ApiClient.convertToType(data['scheduleTimeoutSeconds'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1SchedulingPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1SchedulingPolicy</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['queue'] && !(typeof data['queue'] === 'string' || data['queue'] instanceof String)) {
            throw new Error("Expected the field `queue` to be a primitive type in the JSON string but got " + data['queue']);
        }
        // ensure the json data is a string
        if (data['priorityClass'] && !(typeof data['priorityClass'] === 'string' || data['priorityClass'] instanceof String)) {
            throw new Error("Expected the field `priorityClass` to be a primitive type in the JSON string but got " + data['priorityClass']);
        }

        return true;
    }


}



/**
 * @member {Number} minAvailable
 */
V1SchedulingPolicy.prototype['minAvailable'] = undefined;

/**
 * @member {String} queue
 */
V1SchedulingPolicy.prototype['queue'] = undefined;

/**
 * @member {Object} minResources
 */
V1SchedulingPolicy.prototype['minResources'] = undefined;

/**
 * @member {String} priorityClass
 */
V1SchedulingPolicy.prototype['priorityClass'] = undefined;

/**
 * @member {Number} scheduleTimeoutSeconds
 */
V1SchedulingPolicy.prototype['scheduleTimeoutSeconds'] = undefined;






export default V1SchedulingPolicy;

