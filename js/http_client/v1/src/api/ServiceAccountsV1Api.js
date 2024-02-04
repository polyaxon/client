/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListServiceAccountsResponse from '../model/V1ListServiceAccountsResponse';
import V1ListTokenResponse from '../model/V1ListTokenResponse';
import V1ServiceAccount from '../model/V1ServiceAccount';
import V1Token from '../model/V1Token';

/**
* ServiceAccountsV1 service.
* @module api/ServiceAccountsV1Api
* @version 2.1.1
*/
export default class ServiceAccountsV1Api {

    /**
    * Constructs a new ServiceAccountsV1Api.
    * Polyaxon sdk
    * @alias module:api/ServiceAccountsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createServiceAccount operation.
     * @callback module:api/ServiceAccountsV1Api~createServiceAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ServiceAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create service account
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1ServiceAccount} body ServiceAccount body
     * @param {module:api/ServiceAccountsV1Api~createServiceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ServiceAccount}
     */
    createServiceAccount(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createServiceAccount");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createServiceAccount");
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
      let returnType = V1ServiceAccount;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createServiceAccountToken operation.
     * @callback module:api/ServiceAccountsV1Api~createServiceAccountTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create service account token
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity
     * @param {module:model/V1Token} body Token body
     * @param {module:api/ServiceAccountsV1Api~createServiceAccountTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    createServiceAccountToken(owner, entity, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createServiceAccountToken");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling createServiceAccountToken");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createServiceAccountToken");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{entity}/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceAccount operation.
     * @callback module:api/ServiceAccountsV1Api~deleteServiceAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete service account
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ServiceAccountsV1Api~deleteServiceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteServiceAccount(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteServiceAccount");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteServiceAccount");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServiceAccountToken operation.
     * @callback module:api/ServiceAccountsV1Api~deleteServiceAccountTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete service account token
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ServiceAccountsV1Api~deleteServiceAccountTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteServiceAccountToken(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteServiceAccountToken");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteServiceAccountToken");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteServiceAccountToken");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'uuid': uuid
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceAccount operation.
     * @callback module:api/ServiceAccountsV1Api~getServiceAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ServiceAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get service account
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ServiceAccountsV1Api~getServiceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ServiceAccount}
     */
    getServiceAccount(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getServiceAccount");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getServiceAccount");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
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
      let returnType = V1ServiceAccount;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceAccountToken operation.
     * @callback module:api/ServiceAccountsV1Api~getServiceAccountTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get service account token
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ServiceAccountsV1Api~getServiceAccountTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    getServiceAccountToken(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getServiceAccountToken");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getServiceAccountToken");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getServiceAccountToken");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'uuid': uuid
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{entity}/tokens/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listServiceAccountNames operation.
     * @callback module:api/ServiceAccountsV1Api~listServiceAccountNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListServiceAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List service accounts names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ServiceAccountsV1Api~listServiceAccountNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListServiceAccountsResponse}
     */
    listServiceAccountNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listServiceAccountNames");
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
      let returnType = V1ListServiceAccountsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listServiceAccountTokens operation.
     * @callback module:api/ServiceAccountsV1Api~listServiceAccountTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List service account tokens
     * @param {String} owner Owner of the namespace
     * @param {String} uuid SubEntity uuid
     * @param {Object} opts Optional parameters
     * @param {String} [entity] Entity name under namesapce.
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ServiceAccountsV1Api~listServiceAccountTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTokenResponse}
     */
    listServiceAccountTokens(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listServiceAccountTokens");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling listServiceAccountTokens");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
        'entity': opts['entity'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListTokenResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{uuid}/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listServiceAccounts operation.
     * @callback module:api/ServiceAccountsV1Api~listServiceAccountsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListServiceAccountsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List service accounts
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ServiceAccountsV1Api~listServiceAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListServiceAccountsResponse}
     */
    listServiceAccounts(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listServiceAccounts");
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
      let returnType = V1ListServiceAccountsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchServiceAccount operation.
     * @callback module:api/ServiceAccountsV1Api~patchServiceAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ServiceAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch service account
     * @param {String} owner Owner of the namespace
     * @param {String} sa_uuid UUID
     * @param {module:model/V1ServiceAccount} body ServiceAccount body
     * @param {module:api/ServiceAccountsV1Api~patchServiceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ServiceAccount}
     */
    patchServiceAccount(owner, sa_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchServiceAccount");
      }
      // verify the required parameter 'sa_uuid' is set
      if (sa_uuid === undefined || sa_uuid === null) {
        throw new Error("Missing the required parameter 'sa_uuid' when calling patchServiceAccount");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchServiceAccount");
      }

      let pathParams = {
        'owner': owner,
        'sa.uuid': sa_uuid
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
      let returnType = V1ServiceAccount;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{sa.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchServiceAccountToken operation.
     * @callback module:api/ServiceAccountsV1Api~patchServiceAccountTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch service account token
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity
     * @param {String} token_uuid UUID
     * @param {module:model/V1Token} body Token body
     * @param {module:api/ServiceAccountsV1Api~patchServiceAccountTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    patchServiceAccountToken(owner, entity, token_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchServiceAccountToken");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling patchServiceAccountToken");
      }
      // verify the required parameter 'token_uuid' is set
      if (token_uuid === undefined || token_uuid === null) {
        throw new Error("Missing the required parameter 'token_uuid' when calling patchServiceAccountToken");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchServiceAccountToken");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'token.uuid': token_uuid
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{entity}/tokens/{token.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceAccount operation.
     * @callback module:api/ServiceAccountsV1Api~updateServiceAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ServiceAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update service account
     * @param {String} owner Owner of the namespace
     * @param {String} sa_uuid UUID
     * @param {module:model/V1ServiceAccount} body ServiceAccount body
     * @param {module:api/ServiceAccountsV1Api~updateServiceAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ServiceAccount}
     */
    updateServiceAccount(owner, sa_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateServiceAccount");
      }
      // verify the required parameter 'sa_uuid' is set
      if (sa_uuid === undefined || sa_uuid === null) {
        throw new Error("Missing the required parameter 'sa_uuid' when calling updateServiceAccount");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServiceAccount");
      }

      let pathParams = {
        'owner': owner,
        'sa.uuid': sa_uuid
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
      let returnType = V1ServiceAccount;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{sa.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceAccountToken operation.
     * @callback module:api/ServiceAccountsV1Api~updateServiceAccountTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update service account token
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity
     * @param {String} token_uuid UUID
     * @param {module:model/V1Token} body Token body
     * @param {module:api/ServiceAccountsV1Api~updateServiceAccountTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Token}
     */
    updateServiceAccountToken(owner, entity, token_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateServiceAccountToken");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling updateServiceAccountToken");
      }
      // verify the required parameter 'token_uuid' is set
      if (token_uuid === undefined || token_uuid === null) {
        throw new Error("Missing the required parameter 'token_uuid' when calling updateServiceAccountToken");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServiceAccountToken");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'token.uuid': token_uuid
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
      let returnType = V1Token;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/sa/{entity}/tokens/{token.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
