/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc7
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class V1ScheduleKind.
* @enum {}
* @readonly
*/
export default class V1ScheduleKind {

        /**
         * value: "cron"
         * @const
         */
        "cron" = "cron";


        /**
         * value: "interval"
         * @const
         */
        "interval" = "interval";


        /**
         * value: "datetime"
         * @const
         */
        "datetime" = "datetime";



    /**
    * Returns a <code>V1ScheduleKind</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/V1ScheduleKind} The enum <code>V1ScheduleKind</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

