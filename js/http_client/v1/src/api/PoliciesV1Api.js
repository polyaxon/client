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
import V1ListPoliciesResponse from '../model/V1ListPoliciesResponse';
import V1Policy from '../model/V1Policy';

/**
* PoliciesV1 service.
* @module api/PoliciesV1Api
* @version 2.3.0-rc0
*/
export default class PoliciesV1Api {

    /**
    * Constructs a new PoliciesV1Api. 
    * Polyaxon sdk
    * @alias module:api/PoliciesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPolicy operation.
     * @callback module:api/PoliciesV1Api~createPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Policy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Policy
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Policy} body Policy body
     * @param {module:api/PoliciesV1Api~createPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Policy}
     */
    createPolicy(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createPolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPolicy");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Policy;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePolicy operation.
     * @callback module:api/PoliciesV1Api~deletePolicyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete scheduling preset
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {Object} opts Optional parameters
     * @param {String} [entity] Entity: project name, hub name, registry name, ...
     * @param {module:api/PoliciesV1Api~deletePolicyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePolicy(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deletePolicy");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deletePolicy");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
        'entity': opts['entity']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPolicy operation.
     * @callback module:api/PoliciesV1Api~getPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Policy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Policy
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {Object} opts Optional parameters
     * @param {String} [entity] Entity: project name, hub name, registry name, ...
     * @param {module:api/PoliciesV1Api~getPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Policy}
     */
    getPolicy(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getPolicy");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getPolicy");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
        'entity': opts['entity']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Policy;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPolicies operation.
     * @callback module:api/PoliciesV1Api~listPoliciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListPoliciesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Policies
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/PoliciesV1Api~listPoliciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListPoliciesResponse}
     */
    listPolicies(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listPolicies");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListPoliciesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPolicyNames operation.
     * @callback module:api/PoliciesV1Api~listPolicyNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListPoliciesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List scheduling policies names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/PoliciesV1Api~listPolicyNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListPoliciesResponse}
     */
    listPolicyNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listPolicyNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListPoliciesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchPolicy operation.
     * @callback module:api/PoliciesV1Api~patchPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Policy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch Policy
     * @param {String} owner Owner of the namespace
     * @param {String} policy_uuid UUID
     * @param {module:model/V1Policy} body Policy body
     * @param {module:api/PoliciesV1Api~patchPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Policy}
     */
    patchPolicy(owner, policy_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchPolicy");
      }
      // verify the required parameter 'policy_uuid' is set
      if (policy_uuid === undefined || policy_uuid === null) {
        throw new Error("Missing the required parameter 'policy_uuid' when calling patchPolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchPolicy");
      }

      let pathParams = {
        'owner': owner,
        'policy.uuid': policy_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Policy;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies/{policy.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePolicy operation.
     * @callback module:api/PoliciesV1Api~updatePolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Policy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Policy
     * @param {String} owner Owner of the namespace
     * @param {String} policy_uuid UUID
     * @param {module:model/V1Policy} body Policy body
     * @param {module:api/PoliciesV1Api~updatePolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Policy}
     */
    updatePolicy(owner, policy_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updatePolicy");
      }
      // verify the required parameter 'policy_uuid' is set
      if (policy_uuid === undefined || policy_uuid === null) {
        throw new Error("Missing the required parameter 'policy_uuid' when calling updatePolicy");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePolicy");
      }

      let pathParams = {
        'owner': owner,
        'policy.uuid': policy_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Policy;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/policies/{policy.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
