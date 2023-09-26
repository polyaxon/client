/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc48
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Environment from './V1Environment';
import V1Init from './V1Init';

/**
 * The V1Job model module.
 * @module model/V1Job
 * @version 2.0.0-rc48
 */
class V1Job {
    /**
     * Constructs a new <code>V1Job</code>.
     * @alias module:model/V1Job
     */
    constructor() { 
        
        V1Job.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Job} obj Optional instance to populate.
     * @return {module:model/V1Job} The populated <code>V1Job</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Job();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = V1Environment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [Object]);
            }
            if (data.hasOwnProperty('init')) {
                obj['init'] = ApiClient.convertToType(data['init'], [V1Init]);
            }
            if (data.hasOwnProperty('sidecars')) {
                obj['sidecars'] = ApiClient.convertToType(data['sidecars'], [Object]);
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Job</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Job</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          V1Environment.validateJSON(data['environment']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volumes'])) {
            throw new Error("Expected the field `volumes` to be an array in the JSON data but got " + data['volumes']);
        }
        if (data['init']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['init'])) {
                throw new Error("Expected the field `init` to be an array in the JSON data but got " + data['init']);
            }
            // validate the optional field `init` (array)
            for (const item of data['init']) {
                V1Init.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sidecars'])) {
            throw new Error("Expected the field `sidecars` to be an array in the JSON data but got " + data['sidecars']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'job'
 */
V1Job.prototype['kind'] = 'job';

/**
 * @member {module:model/V1Environment} environment
 */
V1Job.prototype['environment'] = undefined;

/**
 * @member {Array.<String>} connections
 */
V1Job.prototype['connections'] = undefined;

/**
 * Volumes is a list of volumes that can be mounted.
 * @member {Array.<Object>} volumes
 */
V1Job.prototype['volumes'] = undefined;

/**
 * @member {Array.<module:model/V1Init>} init
 */
V1Job.prototype['init'] = undefined;

/**
 * @member {Array.<Object>} sidecars
 */
V1Job.prototype['sidecars'] = undefined;

/**
 * @member {Object} container
 */
V1Job.prototype['container'] = undefined;






export default V1Job;

