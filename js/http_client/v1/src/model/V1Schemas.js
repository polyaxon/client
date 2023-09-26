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
import V1ArtifactsMount from './V1ArtifactsMount';
import V1ArtifactsType from './V1ArtifactsType';
import V1AuthType from './V1AuthType';
import V1CompiledOperation from './V1CompiledOperation';
import V1ConnectionResource from './V1ConnectionResource';
import V1ConnectionSchema from './V1ConnectionSchema';
import V1ConnectionType from './V1ConnectionType';
import V1EarlyStopping from './V1EarlyStopping';
import V1Event from './V1Event';
import V1EventType from './V1EventType';
import V1GcsType from './V1GcsType';
import V1HpParams from './V1HpParams';
import V1Matrix from './V1Matrix';
import V1MatrixKind from './V1MatrixKind';
import V1Operation from './V1Operation';
import V1PolyaxonInitContainer from './V1PolyaxonInitContainer';
import V1PolyaxonSidecarContainer from './V1PolyaxonSidecarContainer';
import V1Reference from './V1Reference';
import V1RunSchema from './V1RunSchema';
import V1S3Type from './V1S3Type';
import V1Schedule from './V1Schedule';
import V1ScheduleKind from './V1ScheduleKind';
import V1UriType from './V1UriType';
import V1WasbType from './V1WasbType';

/**
 * The V1Schemas model module.
 * @module model/V1Schemas
 * @version 2.0.0-rc48
 */
class V1Schemas {
    /**
     * Constructs a new <code>V1Schemas</code>.
     * @alias module:model/V1Schemas
     */
    constructor() { 
        
        V1Schemas.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Schemas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Schemas} obj Optional instance to populate.
     * @return {module:model/V1Schemas} The populated <code>V1Schemas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Schemas();

            if (data.hasOwnProperty('earlyStopping')) {
                obj['earlyStopping'] = V1EarlyStopping.constructFromObject(data['earlyStopping']);
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = V1Matrix.constructFromObject(data['matrix']);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = V1RunSchema.constructFromObject(data['run']);
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = V1Operation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('compiledOperation')) {
                obj['compiledOperation'] = V1CompiledOperation.constructFromObject(data['compiledOperation']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = V1Schedule.constructFromObject(data['schedule']);
            }
            if (data.hasOwnProperty('connectionSchema')) {
                obj['connectionSchema'] = V1ConnectionSchema.constructFromObject(data['connectionSchema']);
            }
            if (data.hasOwnProperty('hpParams')) {
                obj['hpParams'] = V1HpParams.constructFromObject(data['hpParams']);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = V1Reference.constructFromObject(data['reference']);
            }
            if (data.hasOwnProperty('artifactsMount')) {
                obj['artifactsMount'] = V1ArtifactsMount.constructFromObject(data['artifactsMount']);
            }
            if (data.hasOwnProperty('polyaxonSidecarContainer')) {
                obj['polyaxonSidecarContainer'] = V1PolyaxonSidecarContainer.constructFromObject(data['polyaxonSidecarContainer']);
            }
            if (data.hasOwnProperty('polyaxonInitContainer')) {
                obj['polyaxonInitContainer'] = V1PolyaxonInitContainer.constructFromObject(data['polyaxonInitContainer']);
            }
            if (data.hasOwnProperty('artifacs')) {
                obj['artifacs'] = V1ArtifactsType.constructFromObject(data['artifacs']);
            }
            if (data.hasOwnProperty('wasb')) {
                obj['wasb'] = V1WasbType.constructFromObject(data['wasb']);
            }
            if (data.hasOwnProperty('gcs')) {
                obj['gcs'] = V1GcsType.constructFromObject(data['gcs']);
            }
            if (data.hasOwnProperty('s3')) {
                obj['s3'] = V1S3Type.constructFromObject(data['s3']);
            }
            if (data.hasOwnProperty('auth')) {
                obj['auth'] = V1AuthType.constructFromObject(data['auth']);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = V1UriType.constructFromObject(data['uri']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = V1ConnectionResource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = V1ConnectionType.constructFromObject(data['connection']);
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = V1EventType.constructFromObject(data['eventType']);
            }
            if (data.hasOwnProperty('matrixKind')) {
                obj['matrixKind'] = V1MatrixKind.constructFromObject(data['matrixKind']);
            }
            if (data.hasOwnProperty('scheduleKind')) {
                obj['scheduleKind'] = V1ScheduleKind.constructFromObject(data['scheduleKind']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = V1Event.constructFromObject(data['event']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Schemas</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Schemas</code>.
     */
    static validateJSON(data) {
        // validate the optional field `earlyStopping`
        if (data['earlyStopping']) { // data not null
          V1EarlyStopping.validateJSON(data['earlyStopping']);
        }
        // validate the optional field `matrix`
        if (data['matrix']) { // data not null
          V1Matrix.validateJSON(data['matrix']);
        }
        // validate the optional field `run`
        if (data['run']) { // data not null
          V1RunSchema.validateJSON(data['run']);
        }
        // validate the optional field `operation`
        if (data['operation']) { // data not null
          V1Operation.validateJSON(data['operation']);
        }
        // validate the optional field `compiledOperation`
        if (data['compiledOperation']) { // data not null
          V1CompiledOperation.validateJSON(data['compiledOperation']);
        }
        // validate the optional field `schedule`
        if (data['schedule']) { // data not null
          V1Schedule.validateJSON(data['schedule']);
        }
        // validate the optional field `connectionSchema`
        if (data['connectionSchema']) { // data not null
          V1ConnectionSchema.validateJSON(data['connectionSchema']);
        }
        // validate the optional field `hpParams`
        if (data['hpParams']) { // data not null
          V1HpParams.validateJSON(data['hpParams']);
        }
        // validate the optional field `reference`
        if (data['reference']) { // data not null
          V1Reference.validateJSON(data['reference']);
        }
        // validate the optional field `artifactsMount`
        if (data['artifactsMount']) { // data not null
          V1ArtifactsMount.validateJSON(data['artifactsMount']);
        }
        // validate the optional field `polyaxonSidecarContainer`
        if (data['polyaxonSidecarContainer']) { // data not null
          V1PolyaxonSidecarContainer.validateJSON(data['polyaxonSidecarContainer']);
        }
        // validate the optional field `polyaxonInitContainer`
        if (data['polyaxonInitContainer']) { // data not null
          V1PolyaxonInitContainer.validateJSON(data['polyaxonInitContainer']);
        }
        // validate the optional field `artifacs`
        if (data['artifacs']) { // data not null
          V1ArtifactsType.validateJSON(data['artifacs']);
        }
        // validate the optional field `wasb`
        if (data['wasb']) { // data not null
          V1WasbType.validateJSON(data['wasb']);
        }
        // validate the optional field `gcs`
        if (data['gcs']) { // data not null
          V1GcsType.validateJSON(data['gcs']);
        }
        // validate the optional field `s3`
        if (data['s3']) { // data not null
          V1S3Type.validateJSON(data['s3']);
        }
        // validate the optional field `auth`
        if (data['auth']) { // data not null
          V1AuthType.validateJSON(data['auth']);
        }
        // validate the optional field `uri`
        if (data['uri']) { // data not null
          V1UriType.validateJSON(data['uri']);
        }
        // validate the optional field `resource`
        if (data['resource']) { // data not null
          V1ConnectionResource.validateJSON(data['resource']);
        }
        // validate the optional field `connection`
        if (data['connection']) { // data not null
          V1ConnectionType.validateJSON(data['connection']);
        }
        // validate the optional field `eventType`
        if (data['eventType']) { // data not null
          V1EventType.validateJSON(data['eventType']);
        }
        // validate the optional field `event`
        if (data['event']) { // data not null
          V1Event.validateJSON(data['event']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1EarlyStopping} earlyStopping
 */
V1Schemas.prototype['earlyStopping'] = undefined;

/**
 * @member {module:model/V1Matrix} matrix
 */
V1Schemas.prototype['matrix'] = undefined;

/**
 * @member {module:model/V1RunSchema} run
 */
V1Schemas.prototype['run'] = undefined;

/**
 * @member {module:model/V1Operation} operation
 */
V1Schemas.prototype['operation'] = undefined;

/**
 * @member {module:model/V1CompiledOperation} compiledOperation
 */
V1Schemas.prototype['compiledOperation'] = undefined;

/**
 * @member {module:model/V1Schedule} schedule
 */
V1Schemas.prototype['schedule'] = undefined;

/**
 * @member {module:model/V1ConnectionSchema} connectionSchema
 */
V1Schemas.prototype['connectionSchema'] = undefined;

/**
 * @member {module:model/V1HpParams} hpParams
 */
V1Schemas.prototype['hpParams'] = undefined;

/**
 * @member {module:model/V1Reference} reference
 */
V1Schemas.prototype['reference'] = undefined;

/**
 * @member {module:model/V1ArtifactsMount} artifactsMount
 */
V1Schemas.prototype['artifactsMount'] = undefined;

/**
 * @member {module:model/V1PolyaxonSidecarContainer} polyaxonSidecarContainer
 */
V1Schemas.prototype['polyaxonSidecarContainer'] = undefined;

/**
 * @member {module:model/V1PolyaxonInitContainer} polyaxonInitContainer
 */
V1Schemas.prototype['polyaxonInitContainer'] = undefined;

/**
 * @member {module:model/V1ArtifactsType} artifacs
 */
V1Schemas.prototype['artifacs'] = undefined;

/**
 * @member {module:model/V1WasbType} wasb
 */
V1Schemas.prototype['wasb'] = undefined;

/**
 * @member {module:model/V1GcsType} gcs
 */
V1Schemas.prototype['gcs'] = undefined;

/**
 * @member {module:model/V1S3Type} s3
 */
V1Schemas.prototype['s3'] = undefined;

/**
 * @member {module:model/V1AuthType} auth
 */
V1Schemas.prototype['auth'] = undefined;

/**
 * @member {module:model/V1UriType} uri
 */
V1Schemas.prototype['uri'] = undefined;

/**
 * @member {module:model/V1ConnectionResource} resource
 */
V1Schemas.prototype['resource'] = undefined;

/**
 * @member {module:model/V1ConnectionType} connection
 */
V1Schemas.prototype['connection'] = undefined;

/**
 * @member {module:model/V1EventType} eventType
 */
V1Schemas.prototype['eventType'] = undefined;

/**
 * @member {module:model/V1MatrixKind} matrixKind
 */
V1Schemas.prototype['matrixKind'] = undefined;

/**
 * @member {module:model/V1ScheduleKind} scheduleKind
 */
V1Schemas.prototype['scheduleKind'] = undefined;

/**
 * @member {module:model/V1Event} event
 */
V1Schemas.prototype['event'] = undefined;






export default V1Schemas;

