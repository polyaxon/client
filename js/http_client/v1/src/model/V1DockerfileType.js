/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1DockerfileType model module.
 * @module model/V1DockerfileType
 * @version 2.6.0
 */
class V1DockerfileType {
    /**
     * Constructs a new <code>V1DockerfileType</code>.
     * @alias module:model/V1DockerfileType
     */
    constructor() {

        V1DockerfileType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1DockerfileType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1DockerfileType} obj Optional instance to populate.
     * @return {module:model/V1DockerfileType} The populated <code>V1DockerfileType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DockerfileType();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], {'String': 'String'});
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], ['String']);
            }
            if (data.hasOwnProperty('copy')) {
                obj['copy'] = ApiClient.convertToType(data['copy'], [Object]);
            }
            if (data.hasOwnProperty('post_run_copy')) {
                obj['post_run_copy'] = ApiClient.convertToType(data['post_run_copy'], [Object]);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], ['String']);
            }
            if (data.hasOwnProperty('langEnv')) {
                obj['langEnv'] = ApiClient.convertToType(data['langEnv'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'Number');
            }
            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'Number');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('workdir')) {
                obj['workdir'] = ApiClient.convertToType(data['workdir'], 'String');
            }
            if (data.hasOwnProperty('workdirPath')) {
                obj['workdirPath'] = ApiClient.convertToType(data['workdirPath'], 'String');
            }
            if (data.hasOwnProperty('shell')) {
                obj['shell'] = ApiClient.convertToType(data['shell'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1DockerfileType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1DockerfileType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['path'])) {
            throw new Error("Expected the field `path` to be an array in the JSON data but got " + data['path']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['copy'])) {
            throw new Error("Expected the field `copy` to be an array in the JSON data but got " + data['copy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['post_run_copy'])) {
            throw new Error("Expected the field `post_run_copy` to be an array in the JSON data but got " + data['post_run_copy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['run'])) {
            throw new Error("Expected the field `run` to be an array in the JSON data but got " + data['run']);
        }
        // ensure the json data is a string
        if (data['langEnv'] && !(typeof data['langEnv'] === 'string' || data['langEnv'] instanceof String)) {
            throw new Error("Expected the field `langEnv` to be a primitive type in the JSON string but got " + data['langEnv']);
        }
        // ensure the json data is a string
        if (data['filename'] && !(typeof data['filename'] === 'string' || data['filename'] instanceof String)) {
            throw new Error("Expected the field `filename` to be a primitive type in the JSON string but got " + data['filename']);
        }
        // ensure the json data is a string
        if (data['workdir'] && !(typeof data['workdir'] === 'string' || data['workdir'] instanceof String)) {
            throw new Error("Expected the field `workdir` to be a primitive type in the JSON string but got " + data['workdir']);
        }
        // ensure the json data is a string
        if (data['workdirPath'] && !(typeof data['workdirPath'] === 'string' || data['workdirPath'] instanceof String)) {
            throw new Error("Expected the field `workdirPath` to be a primitive type in the JSON string but got " + data['workdirPath']);
        }
        // ensure the json data is a string
        if (data['shell'] && !(typeof data['shell'] === 'string' || data['shell'] instanceof String)) {
            throw new Error("Expected the field `shell` to be a primitive type in the JSON string but got " + data['shell']);
        }

        return true;
    }


}



/**
 * @member {String} image
 */
V1DockerfileType.prototype['image'] = undefined;

/**
 * @member {Object.<String, String>} env
 */
V1DockerfileType.prototype['env'] = undefined;

/**
 * @member {Array.<String>} path
 */
V1DockerfileType.prototype['path'] = undefined;

/**
 * @member {Array.<Object>} copy
 */
V1DockerfileType.prototype['copy'] = undefined;

/**
 * @member {Array.<Object>} post_run_copy
 */
V1DockerfileType.prototype['post_run_copy'] = undefined;

/**
 * @member {Array.<String>} run
 */
V1DockerfileType.prototype['run'] = undefined;

/**
 * @member {String} langEnv
 */
V1DockerfileType.prototype['langEnv'] = undefined;

/**
 * @member {Number} uid
 */
V1DockerfileType.prototype['uid'] = undefined;

/**
 * @member {Number} gid
 */
V1DockerfileType.prototype['gid'] = undefined;

/**
 * @member {Number} username
 */
V1DockerfileType.prototype['username'] = undefined;

/**
 * @member {String} filename
 */
V1DockerfileType.prototype['filename'] = undefined;

/**
 * @member {String} workdir
 */
V1DockerfileType.prototype['workdir'] = undefined;

/**
 * @member {String} workdirPath
 */
V1DockerfileType.prototype['workdirPath'] = undefined;

/**
 * @member {String} shell
 */
V1DockerfileType.prototype['shell'] = undefined;






export default V1DockerfileType;

