/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1CleanPodPolicy from './V1CleanPodPolicy';
import V1KFReplica from './V1KFReplica';
import V1SchedulingPolicy from './V1SchedulingPolicy';

/**
 * The V1MPIJob model module.
 * @module model/V1MPIJob
 * @version 2.1.0-rc3
 */
class V1MPIJob {
    /**
     * Constructs a new <code>V1MPIJob</code>.
     * @alias module:model/V1MPIJob
     */
    constructor() {

        V1MPIJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1MPIJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1MPIJob} obj Optional instance to populate.
     * @return {module:model/V1MPIJob} The populated <code>V1MPIJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1MPIJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('schedulingPolicy')) {
                obj['schedulingPolicy'] = V1SchedulingPolicy.constructFromObject(data['schedulingPolicy']);
            }
            if (data.hasOwnProperty('slotsPerWorker')) {
                obj['slotsPerWorker'] = ApiClient.convertToType(data['slotsPerWorker'], 'Number');
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
            if (data.hasOwnProperty('launcher')) {
                obj['launcher'] = V1KFReplica.constructFromObject(data['launcher']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1MPIJob</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1MPIJob</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `schedulingPolicy`
        if (data['schedulingPolicy']) { // data not null
          V1SchedulingPolicy.validateJSON(data['schedulingPolicy']);
        }
        // validate the optional field `worker`
        if (data['worker']) { // data not null
          V1KFReplica.validateJSON(data['worker']);
        }
        // validate the optional field `launcher`
        if (data['launcher']) { // data not null
          V1KFReplica.validateJSON(data['launcher']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'mpijob'
 */
V1MPIJob.prototype['kind'] = 'mpijob';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1MPIJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1MPIJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {Number} slotsPerWorker
 */
V1MPIJob.prototype['slotsPerWorker'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1MPIJob.prototype['worker'] = undefined;

/**
 * @member {module:model/V1KFReplica} launcher
 */
V1MPIJob.prototype['launcher'] = undefined;






export default V1MPIJob;

