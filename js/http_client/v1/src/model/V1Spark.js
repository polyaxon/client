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
import SparkDeployMode from './SparkDeployMode';
import V1SparkReplica from './V1SparkReplica';
import V1SparkType from './V1SparkType';

/**
 * The V1Spark model module.
 * @module model/V1Spark
 * @version 2.0.0-rc25
 */
class V1Spark {
    /**
     * Constructs a new <code>V1Spark</code>.
     * @alias module:model/V1Spark
     */
    constructor() {

        V1Spark.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1Spark</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Spark} obj Optional instance to populate.
     * @return {module:model/V1Spark} The populated <code>V1Spark</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Spark();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], ['String']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], [Object]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = V1SparkType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('sparkVersion')) {
                obj['sparkVersion'] = ApiClient.convertToType(data['sparkVersion'], 'String');
            }
            if (data.hasOwnProperty('pythonVersion')) {
                obj['pythonVersion'] = ApiClient.convertToType(data['pythonVersion'], 'String');
            }
            if (data.hasOwnProperty('deployMode')) {
                obj['deployMode'] = SparkDeployMode.constructFromObject(data['deployMode']);
            }
            if (data.hasOwnProperty('mainClass')) {
                obj['mainClass'] = ApiClient.convertToType(data['mainClass'], 'String');
            }
            if (data.hasOwnProperty('mainApplicationFile')) {
                obj['mainApplicationFile'] = ApiClient.convertToType(data['mainApplicationFile'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('hadoopConf')) {
                obj['hadoopConf'] = ApiClient.convertToType(data['hadoopConf'], {'String': 'String'});
            }
            if (data.hasOwnProperty('sparkConf')) {
                obj['sparkConf'] = ApiClient.convertToType(data['sparkConf'], {'String': 'String'});
            }
            if (data.hasOwnProperty('sparkConfigMap')) {
                obj['sparkConfigMap'] = ApiClient.convertToType(data['sparkConfigMap'], 'String');
            }
            if (data.hasOwnProperty('hadoopConfigMap')) {
                obj['hadoopConfigMap'] = ApiClient.convertToType(data['hadoopConfigMap'], 'String');
            }
            if (data.hasOwnProperty('executor')) {
                obj['executor'] = V1SparkReplica.constructFromObject(data['executor']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = V1SparkReplica.constructFromObject(data['driver']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Spark</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Spark</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connections'])) {
            throw new Error("Expected the field `connections` to be an array in the JSON data but got " + data['connections']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volumes'])) {
            throw new Error("Expected the field `volumes` to be an array in the JSON data but got " + data['volumes']);
        }
        // ensure the json data is a string
        if (data['sparkVersion'] && !(typeof data['sparkVersion'] === 'string' || data['sparkVersion'] instanceof String)) {
            throw new Error("Expected the field `sparkVersion` to be a primitive type in the JSON string but got " + data['sparkVersion']);
        }
        // ensure the json data is a string
        if (data['pythonVersion'] && !(typeof data['pythonVersion'] === 'string' || data['pythonVersion'] instanceof String)) {
            throw new Error("Expected the field `pythonVersion` to be a primitive type in the JSON string but got " + data['pythonVersion']);
        }
        // ensure the json data is a string
        if (data['mainClass'] && !(typeof data['mainClass'] === 'string' || data['mainClass'] instanceof String)) {
            throw new Error("Expected the field `mainClass` to be a primitive type in the JSON string but got " + data['mainClass']);
        }
        // ensure the json data is a string
        if (data['mainApplicationFile'] && !(typeof data['mainApplicationFile'] === 'string' || data['mainApplicationFile'] instanceof String)) {
            throw new Error("Expected the field `mainApplicationFile` to be a primitive type in the JSON string but got " + data['mainApplicationFile']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['arguments'])) {
            throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
        }
        // ensure the json data is a string
        if (data['sparkConfigMap'] && !(typeof data['sparkConfigMap'] === 'string' || data['sparkConfigMap'] instanceof String)) {
            throw new Error("Expected the field `sparkConfigMap` to be a primitive type in the JSON string but got " + data['sparkConfigMap']);
        }
        // ensure the json data is a string
        if (data['hadoopConfigMap'] && !(typeof data['hadoopConfigMap'] === 'string' || data['hadoopConfigMap'] instanceof String)) {
            throw new Error("Expected the field `hadoopConfigMap` to be a primitive type in the JSON string but got " + data['hadoopConfigMap']);
        }
        // validate the optional field `executor`
        if (data['executor']) { // data not null
          V1SparkReplica.validateJSON(data['executor']);
        }
        // validate the optional field `driver`
        if (data['driver']) { // data not null
          V1SparkReplica.validateJSON(data['driver']);
        }

        return true;
    }


}



/**
 * @member {String} kind
 * @default 'spark'
 */
V1Spark.prototype['kind'] = 'spark';

/**
 * @member {Array.<String>} connections
 */
V1Spark.prototype['connections'] = undefined;

/**
 * Volumes is a list of volumes that can be mounted.
 * @member {Array.<Object>} volumes
 */
V1Spark.prototype['volumes'] = undefined;

/**
 * @member {module:model/V1SparkType} type
 */
V1Spark.prototype['type'] = undefined;

/**
 * Spark version is the version of Spark the application uses.
 * @member {String} sparkVersion
 */
V1Spark.prototype['sparkVersion'] = undefined;

/**
 * Spark version is the version of Spark the application uses.
 * @member {String} pythonVersion
 */
V1Spark.prototype['pythonVersion'] = undefined;

/**
 * @member {module:model/SparkDeployMode} deployMode
 */
V1Spark.prototype['deployMode'] = undefined;

/**
 * MainClass is the fully-qualified main class of the Spark application. This only applies to Java/Scala Spark applications.
 * @member {String} mainClass
 */
V1Spark.prototype['mainClass'] = undefined;

/**
 * MainFile is the path to a bundled JAR, Python, or R file of the application.
 * @member {String} mainApplicationFile
 */
V1Spark.prototype['mainApplicationFile'] = undefined;

/**
 * Arguments is a list of arguments to be passed to the application.
 * @member {Array.<String>} arguments
 */
V1Spark.prototype['arguments'] = undefined;

/**
 * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
 * @member {Object.<String, String>} hadoopConf
 */
V1Spark.prototype['hadoopConf'] = undefined;

/**
 * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
 * @member {Object.<String, String>} sparkConf
 */
V1Spark.prototype['sparkConf'] = undefined;

/**
 * SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties. The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.
 * @member {String} sparkConfigMap
 */
V1Spark.prototype['sparkConfigMap'] = undefined;

/**
 * HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml. The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.
 * @member {String} hadoopConfigMap
 */
V1Spark.prototype['hadoopConfigMap'] = undefined;

/**
 * @member {module:model/V1SparkReplica} executor
 */
V1Spark.prototype['executor'] = undefined;

/**
 * @member {module:model/V1SparkReplica} driver
 */
V1Spark.prototype['driver'] = undefined;






export default V1Spark;

