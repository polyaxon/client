/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PolyaxonInitContainer model module.
 * @module model/V1PolyaxonInitContainer
 * @version 2.3.0-rc0
 */
class V1PolyaxonInitContainer {
    /**
     * Constructs a new <code>V1PolyaxonInitContainer</code>.
     * @alias module:model/V1PolyaxonInitContainer
     */
    constructor() { 
        
        V1PolyaxonInitContainer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PolyaxonInitContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PolyaxonInitContainer} obj Optional instance to populate.
     * @return {module:model/V1PolyaxonInitContainer} The populated <code>V1PolyaxonInitContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PolyaxonInitContainer();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageTag')) {
                obj['imageTag'] = ApiClient.convertToType(data['imageTag'], 'String');
            }
            if (data.hasOwnProperty('imagePullPolicy')) {
                obj['imagePullPolicy'] = ApiClient.convertToType(data['imagePullPolicy'], 'String');
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1PolyaxonInitContainer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1PolyaxonInitContainer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['imageTag'] && !(typeof data['imageTag'] === 'string' || data['imageTag'] instanceof String)) {
            throw new Error("Expected the field `imageTag` to be a primitive type in the JSON string but got " + data['imageTag']);
        }
        // ensure the json data is a string
        if (data['imagePullPolicy'] && !(typeof data['imagePullPolicy'] === 'string' || data['imagePullPolicy'] instanceof String)) {
            throw new Error("Expected the field `imagePullPolicy` to be a primitive type in the JSON string but got " + data['imagePullPolicy']);
        }

        return true;
    }


}



/**
 * @member {String} image
 */
V1PolyaxonInitContainer.prototype['image'] = undefined;

/**
 * @member {String} imageTag
 */
V1PolyaxonInitContainer.prototype['imageTag'] = undefined;

/**
 * @member {String} imagePullPolicy
 */
V1PolyaxonInitContainer.prototype['imagePullPolicy'] = undefined;

/**
 * @member {Object} resources
 */
V1PolyaxonInitContainer.prototype['resources'] = undefined;






export default V1PolyaxonInitContainer;

