/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ArtifactKind from './V1ArtifactKind';

/**
 * The V1EventArtifact model module.
 * @module model/V1EventArtifact
 * @version 2.1.6
 */
class V1EventArtifact {
    /**
     * Constructs a new <code>V1EventArtifact</code>.
     * @alias module:model/V1EventArtifact
     */
    constructor() {

        V1EventArtifact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>V1EventArtifact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1EventArtifact} obj Optional instance to populate.
     * @return {module:model/V1EventArtifact} The populated <code>V1EventArtifact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EventArtifact();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1ArtifactKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1EventArtifact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1EventArtifact</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1ArtifactKind} kind
 */
V1EventArtifact.prototype['kind'] = undefined;

/**
 * @member {String} path
 */
V1EventArtifact.prototype['path'] = undefined;






export default V1EventArtifact;

