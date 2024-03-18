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
import V1EventSpanKind from './V1EventSpanKind';
import V1StatusCondition from './V1StatusCondition';
import V1Statuses from './V1Statuses';

/**
 * The V1EventSpan model module.
 * @module model/V1EventSpan
 * @version 2.1.3
 */
class V1EventSpan {
    /**
     * Constructs a new <code>V1EventSpan</code>.
     * @alias module:model/V1EventSpan
     */
    constructor() {

        V1EventSpan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventSpan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventSpan} obj Optional instance to populate.
     * @return {module:model/V1EventSpan} The populated <code>V1EventSpan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventSpan();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('finished_at')) {
                obj['finished_at'] = ApiClient.convertToType(data['finished_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_conditions')) {
                obj['status_conditions'] = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], Object);
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], Object);
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [V1EventSpan]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1EventSpanKind.constructFromObject(data['kind']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventSpan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventSpan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        if (data['status_conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['status_conditions'])) {
                throw new Error("Expected the field `status_conditions` to be an array in the JSON data but got " + data['status_conditions']);
            }
            // validate the optional field `status_conditions` (array)
            for (const item of data['status_conditions']) {
                V1StatusCondition.validateJSON(item);
            };
        }
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                V1EventSpan.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1EventSpan.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1EventSpan.prototype['name'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1EventSpan.prototype['tags'] = undefined;

/**
 * @member {Date} started_at
 */
V1EventSpan.prototype['started_at'] = undefined;

/**
 * @member {Date} finished_at
 */
V1EventSpan.prototype['finished_at'] = undefined;

/**
 * @member {module:model/V1Statuses} status
 */
V1EventSpan.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/V1StatusCondition>} status_conditions
 */
V1EventSpan.prototype['status_conditions'] = undefined;

/**
 * @member {Object} metadata
 */
V1EventSpan.prototype['metadata'] = undefined;

/**
 * @member {Object} inputs
 */
V1EventSpan.prototype['inputs'] = undefined;

/**
 * @member {Object} outputs
 */
V1EventSpan.prototype['outputs'] = undefined;

/**
 * @member {Array.<module:model/V1EventSpan>} children
 */
V1EventSpan.prototype['children'] = undefined;

/**
 * @member {module:model/V1EventSpanKind} kind
 */
V1EventSpan.prototype['kind'] = undefined;






export default V1EventSpan;

