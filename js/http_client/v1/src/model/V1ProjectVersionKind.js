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
* Enum class V1ProjectVersionKind.
* @enum {}
* @readonly
*/
export default class V1ProjectVersionKind {

        /**
         * value: "component"
         * @const
         */
        "component" = "component";


        /**
         * value: "model"
         * @const
         */
        "model" = "model";


        /**
         * value: "artifact"
         * @const
         */
        "artifact" = "artifact";



    /**
    * Returns a <code>V1ProjectVersionKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ProjectVersionKind} The enum <code>V1ProjectVersionKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

