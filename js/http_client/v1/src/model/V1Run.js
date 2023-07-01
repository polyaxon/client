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
import V1Cloning from './V1Cloning';
import V1ManagedBy from './V1ManagedBy';
import V1Pipeline from './V1Pipeline';
import V1RunKind from './V1RunKind';
import V1RunPending from './V1RunPending';
import V1RunResources from './V1RunResources';
import V1RunSettings from './V1RunSettings';
import V1StatusCondition from './V1StatusCondition';
import V1Statuses from './V1Statuses';

/**
 * The V1Run model module.
 * @module model/V1Run
 * @version 2.0.0-rc25
 */
class V1Run {
    /**
     * Constructs a new <code>V1Run</code>.
     * @alias module:model/V1Run
     */
    constructor() {

        V1Run.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Run} obj Optional instance to populate.
     * @return {module:model/V1Run} The populated <code>V1Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Run();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('schedule_at')) {
                obj['schedule_at'] = ApiClient.convertToType(data['schedule_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('finished_at')) {
                obj['finished_at'] = ApiClient.convertToType(data['finished_at'], 'Date');
            }
            if (data.hasOwnProperty('wait_time')) {
                obj['wait_time'] = ApiClient.convertToType(data['wait_time'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('managed_by')) {
                obj['managed_by'] = V1ManagedBy.constructFromObject(data['managed_by']);
            }
            if (data.hasOwnProperty('is_managed')) {
                obj['is_managed'] = ApiClient.convertToType(data['is_managed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_approved')) {
                obj['is_approved'] = ApiClient.convertToType(data['is_approved'], 'Boolean');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = V1RunPending.constructFromObject(data['pending']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('raw_content')) {
                obj['raw_content'] = ApiClient.convertToType(data['raw_content'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('bookmarked')) {
                obj['bookmarked'] = ApiClient.convertToType(data['bookmarked'], 'Boolean');
            }
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('readme')) {
                obj['readme'] = ApiClient.convertToType(data['readme'], 'String');
            }
            if (data.hasOwnProperty('meta_info')) {
                obj['meta_info'] = ApiClient.convertToType(data['meta_info'], Object);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1RunKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('runtime')) {
                obj['runtime'] = V1RunKind.constructFromObject(data['runtime']);
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], Object);
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], Object);
            }
            if (data.hasOwnProperty('original')) {
                obj['original'] = V1Cloning.constructFromObject(data['original']);
            }
            if (data.hasOwnProperty('pipeline')) {
                obj['pipeline'] = V1Pipeline.constructFromObject(data['pipeline']);
            }
            if (data.hasOwnProperty('status_conditions')) {
                obj['status_conditions'] = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = V1RunSettings.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = V1RunResources.constructFromObject(data['resources']);
            }
            if (data.hasOwnProperty('graph')) {
                obj['graph'] = ApiClient.convertToType(data['graph'], Object);
            }
            if (data.hasOwnProperty('merge')) {
                obj['merge'] = ApiClient.convertToType(data['merge'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Run</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Run</code>.
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
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['project'] && !(typeof data['project'] === 'string' || data['project'] instanceof String)) {
            throw new Error("Expected the field `project` to be a primitive type in the JSON string but got " + data['project']);
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['raw_content'] && !(typeof data['raw_content'] === 'string' || data['raw_content'] instanceof String)) {
            throw new Error("Expected the field `raw_content` to be a primitive type in the JSON string but got " + data['raw_content']);
        }
        // ensure the json data is a string
        if (data['readme'] && !(typeof data['readme'] === 'string' || data['readme'] instanceof String)) {
            throw new Error("Expected the field `readme` to be a primitive type in the JSON string but got " + data['readme']);
        }
        // validate the optional field `original`
        if (data['original']) { // data not null
          V1Cloning.validateJSON(data['original']);
        }
        // validate the optional field `pipeline`
        if (data['pipeline']) { // data not null
          V1Pipeline.validateJSON(data['pipeline']);
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
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // validate the optional field `settings`
        if (data['settings']) { // data not null
          V1RunSettings.validateJSON(data['settings']);
        }
        // validate the optional field `resources`
        if (data['resources']) { // data not null
          V1RunResources.validateJSON(data['resources']);
        }

        return true;
    }


}



/**
 * @member {String} uuid
 */
V1Run.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Run.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Run.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Run.prototype['tags'] = undefined;

/**
 * @member {String} user
 */
V1Run.prototype['user'] = undefined;

/**
 * @member {String} owner
 */
V1Run.prototype['owner'] = undefined;

/**
 * @member {String} project
 */
V1Run.prototype['project'] = undefined;

/**
 * @member {Date} schedule_at
 */
V1Run.prototype['schedule_at'] = undefined;

/**
 * @member {Date} created_at
 */
V1Run.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Run.prototype['updated_at'] = undefined;

/**
 * @member {Date} started_at
 */
V1Run.prototype['started_at'] = undefined;

/**
 * @member {Date} finished_at
 */
V1Run.prototype['finished_at'] = undefined;

/**
 * @member {Number} wait_time
 */
V1Run.prototype['wait_time'] = undefined;

/**
 * @member {Number} duration
 */
V1Run.prototype['duration'] = undefined;

/**
 * @member {module:model/V1ManagedBy} managed_by
 */
V1Run.prototype['managed_by'] = undefined;

/**
 * @member {Boolean} is_managed
 */
V1Run.prototype['is_managed'] = undefined;

/**
 * @member {Boolean} is_approved
 */
V1Run.prototype['is_approved'] = undefined;

/**
 * @member {module:model/V1RunPending} pending
 */
V1Run.prototype['pending'] = undefined;

/**
 * @member {String} content
 */
V1Run.prototype['content'] = undefined;

/**
 * @member {String} raw_content
 */
V1Run.prototype['raw_content'] = undefined;

/**
 * @member {module:model/V1Statuses} status
 */
V1Run.prototype['status'] = undefined;

/**
 * @member {Boolean} bookmarked
 */
V1Run.prototype['bookmarked'] = undefined;

/**
 * @member {Number} live_state
 */
V1Run.prototype['live_state'] = undefined;

/**
 * @member {String} readme
 */
V1Run.prototype['readme'] = undefined;

/**
 * @member {Object} meta_info
 */
V1Run.prototype['meta_info'] = undefined;

/**
 * @member {module:model/V1RunKind} kind
 */
V1Run.prototype['kind'] = undefined;

/**
 * @member {module:model/V1RunKind} runtime
 */
V1Run.prototype['runtime'] = undefined;

/**
 * @member {Object} inputs
 */
V1Run.prototype['inputs'] = undefined;

/**
 * @member {Object} outputs
 */
V1Run.prototype['outputs'] = undefined;

/**
 * @member {module:model/V1Cloning} original
 */
V1Run.prototype['original'] = undefined;

/**
 * @member {module:model/V1Pipeline} pipeline
 */
V1Run.prototype['pipeline'] = undefined;

/**
 * @member {Array.<module:model/V1StatusCondition>} status_conditions
 */
V1Run.prototype['status_conditions'] = undefined;

/**
 * @member {String} role
 */
V1Run.prototype['role'] = undefined;

/**
 * @member {module:model/V1RunSettings} settings
 */
V1Run.prototype['settings'] = undefined;

/**
 * @member {module:model/V1RunResources} resources
 */
V1Run.prototype['resources'] = undefined;

/**
 * @member {Object} graph
 */
V1Run.prototype['graph'] = undefined;

/**
 * @member {Boolean} merge
 */
V1Run.prototype['merge'] = undefined;






export default V1Run;

