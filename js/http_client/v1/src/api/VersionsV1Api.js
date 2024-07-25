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


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1Compatibility from '../model/V1Compatibility';
import V1Installation from '../model/V1Installation';
import V1LogHandler from '../model/V1LogHandler';

/**
* VersionsV1 service.
* @module api/VersionsV1Api
* @version 2.3.0-rc0
*/
export default class VersionsV1Api {

    /**
    * Constructs a new VersionsV1Api. 
    * Polyaxon sdk
    * @alias module:api/VersionsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCompatibility operation.
     * @callback module:api/VersionsV1Api~getCompatibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Compatibility} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get compatibility versions
     * @param {String} uuid UUid
     * @param {String} version Version
     * @param {String} service Service
     * @param {module:api/VersionsV1Api~getCompatibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Compatibility}
     */
    getCompatibility(uuid, version, service, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getCompatibility");
      }
      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getCompatibility");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling getCompatibility");
      }

      let pathParams = {
        'uuid': uuid,
        'version': version,
        'service': service
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Compatibility;
      return this.apiClient.callApi(
        '/api/v1/compatibility/{uuid}/{version}/{service}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstallation operation.
     * @callback module:api/VersionsV1Api~getInstallationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Installation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get installation versions
     * @param {Object} opts Optional parameters
     * @param {Boolean} [auth] auth.
     * @param {Boolean} [orgs] orgs.
     * @param {module:api/VersionsV1Api~getInstallationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Installation}
     */
    getInstallation(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'auth': opts['auth'],
        'orgs': opts['orgs']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Installation;
      return this.apiClient.callApi(
        '/api/v1/installation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLogHandler operation.
     * @callback module:api/VersionsV1Api~getLogHandlerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1LogHandler} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get log handler versions
     * @param {module:api/VersionsV1Api~getLogHandlerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1LogHandler}
     */
    getLogHandler(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1LogHandler;
      return this.apiClient.callApi(
        '/api/v1/log_handler', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
