// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc13
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListSearchesResponse from '../model/V1ListSearchesResponse';
import V1Search from '../model/V1Search';

/**
* ProjectSearchesV1 service.
* @module api/ProjectSearchesV1Api
* @version 2.0.0-rc13
*/
export default class ProjectSearchesV1Api {

    /**
    * Constructs a new ProjectSearchesV1Api.
    * Polyaxon sdk
    * @alias module:api/ProjectSearchesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~createProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~createProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    createProjectSearch(owner, project, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling createProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~deleteProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project search
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectSearchesV1Api~deleteProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProjectSearch(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteProjectSearch");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteProjectSearch");
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
        '/api/v1/{owner}/{entity}/searches/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~getProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project search
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectSearchesV1Api~getProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    getProjectSearch(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getProjectSearch");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getProjectSearch");
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{entity}/searches/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectSearchNames operation.
     * @callback module:api/ProjectSearchesV1Api~listProjectSearchNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project search names
     * @param {String} owner Owner of the namespace
     * @param {String} name Entity managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ProjectSearchesV1Api~listProjectSearchNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listProjectSearchNames(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectSearchNames");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listProjectSearchNames");
      }

      let pathParams = {
        'owner': owner,
        'name': name
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
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{name}/searches/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectSearches operation.
     * @callback module:api/ProjectSearchesV1Api~listProjectSearchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project searches
     * @param {String} owner Owner of the namespace
     * @param {String} name Entity managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/ProjectSearchesV1Api~listProjectSearchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listProjectSearches(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectSearches");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listProjectSearches");
      }

      let pathParams = {
        'owner': owner,
        'name': name
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
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{name}/searches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~patchProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~patchProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    patchProjectSearch(owner, project, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling patchProjectSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling patchProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'search.uuid': search_uuid
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{search.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the promoteProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~promoteProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Promote project search
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectSearchesV1Api~promoteProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    promoteProjectSearch(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling promoteProjectSearch");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling promoteProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling promoteProjectSearch");
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
        '/api/v1/{owner}/{entity}/searches/{uuid}/promote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~updateProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~updateProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    updateProjectSearch(owner, project, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling updateProjectSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling updateProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'search.uuid': search_uuid
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
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{search.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
