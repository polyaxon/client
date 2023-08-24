/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc37
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1EventCurveKind.
* @enum {}
* @readonly
*/
export default class V1EventCurveKind {

        /**
         * value: "roc"
         * @const
         */
        "roc" = "roc";


        /**
         * value: "pr"
         * @const
         */
        "pr" = "pr";


        /**
         * value: "custom"
         * @const
         */
        "custom" = "custom";



    /**
    * Returns a <code>V1EventCurveKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1EventCurveKind} The enum <code>V1EventCurveKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

