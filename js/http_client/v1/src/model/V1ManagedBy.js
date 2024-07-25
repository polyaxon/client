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
* Enum class V1ManagedBy.
* @enum {}
* @readonly
*/
export default class V1ManagedBy {
    
        /**
         * value: "client"
         * @const
         */
        "client" = "client";

    
        /**
         * value: "cli"
         * @const
         */
        "cli" = "cli";

    
        /**
         * value: "agent"
         * @const
         */
        "agent" = "agent";

    

    /**
    * Returns a <code>V1ManagedBy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ManagedBy} The enum <code>V1ManagedBy</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

