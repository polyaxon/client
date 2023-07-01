/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc25
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1StageCondition from './V1StageCondition';
import V1Stages from './V1Stages';

/**
 * The V1Stage model module.
 * @module model/V1Stage
 * @version 2.0.0-rc25
 */
class V1Stage {
    /**
     * Constructs a new <code>V1Stage</code>.
     * @alias module:model/V1Stage
     */
    constructor() {

        V1Stage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Stage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Stage} obj Optional instance to populate.
     * @return {module:model/V1Stage} The populated <code>V1Stage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Stage();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = V1Stages.constructFromObject(data['stage']);
            }
            if (data.hasOwnProperty('stage_conditions')) {
                obj['stage_conditions'] = ApiClient.convertToType(data['stage_conditions'], [V1StageCondition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Stage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Stage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        if (data['stage_conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stage_conditions'])) {
                throw new Error("Expected the field `stage_conditions` to be an array in the JSON data but got " + data['stage_conditions']);
            }
            // validate the optional field `stage_conditions` (array)
            for (const item of data['stage_conditions']) {
                V1StageCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Stage.prototype['uuid'] = undefined;

/**
 * @member {module:model/V1Stages} stage
 */
V1Stage.prototype['stage'] = undefined;

/**
 * @member {Array.<module:model/V1StageCondition>} stage_conditions
 */
V1Stage.prototype['stage_conditions'] = undefined;






export default V1Stage;

