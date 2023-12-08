/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1Dashboard from '../model/V1Dashboard';
import V1ListDashboardsResponse from '../model/V1ListDashboardsResponse';

/**
* ProjectDashboardsV1 service.
* @module api/ProjectDashboardsV1Api
* @version 2.0.6-rc3
*/
export default class ProjectDashboardsV1Api {

    /**
    * Constructs a new ProjectDashboardsV1Api.
    * Polyaxon sdk
    * @alias module:api/ProjectDashboardsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~createProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/ProjectDashboardsV1Api~createProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    createProjectDashboard(owner, project, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createProjectDashboard");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling createProjectDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProjectDashboard");
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/dashboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~deleteProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectDashboardsV1Api~deleteProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProjectDashboard(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteProjectDashboard");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteProjectDashboard");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteProjectDashboard");
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
        '/api/v1/{owner}/{entity}/dashboards/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~getProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectDashboardsV1Api~getProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    getProjectDashboard(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getProjectDashboard");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getProjectDashboard");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getProjectDashboard");
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{entity}/dashboards/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectDashboardNames operation.
     * @callback module:api/ProjectDashboardsV1Api~listProjectDashboardNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project dashboard
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
     * @param {module:api/ProjectDashboardsV1Api~listProjectDashboardNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    listProjectDashboardNames(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectDashboardNames");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listProjectDashboardNames");
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
      let returnType = V1ListDashboardsResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{name}/dashboards/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectDashboards operation.
     * @callback module:api/ProjectDashboardsV1Api~listProjectDashboardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListDashboardsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project dashboards
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
     * @param {module:api/ProjectDashboardsV1Api~listProjectDashboardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListDashboardsResponse}
     */
    listProjectDashboards(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectDashboards");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listProjectDashboards");
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
      let returnType = V1ListDashboardsResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{name}/dashboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~patchProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/ProjectDashboardsV1Api~patchProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    patchProjectDashboard(owner, project, dashboard_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchProjectDashboard");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling patchProjectDashboard");
      }
      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling patchProjectDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchProjectDashboard");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'dashboard.uuid': dashboard_uuid
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the promoteProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~promoteProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Promote project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} entity Entity: project name, hub name, registry name, ...
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {module:api/ProjectDashboardsV1Api~promoteProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     */
    promoteProjectDashboard(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling promoteProjectDashboard");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling promoteProjectDashboard");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling promoteProjectDashboard");
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
        '/api/v1/{owner}/{entity}/dashboards/{uuid}/promote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProjectDashboard operation.
     * @callback module:api/ProjectDashboardsV1Api~updateProjectDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project dashboard
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} dashboard_uuid UUID
     * @param {module:model/V1Dashboard} body Dashboard body
     * @param {module:api/ProjectDashboardsV1Api~updateProjectDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Dashboard}
     */
    updateProjectDashboard(owner, project, dashboard_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateProjectDashboard");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling updateProjectDashboard");
      }
      // verify the required parameter 'dashboard_uuid' is set
      if (dashboard_uuid === undefined || dashboard_uuid === null) {
        throw new Error("Missing the required parameter 'dashboard_uuid' when calling updateProjectDashboard");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProjectDashboard");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'dashboard.uuid': dashboard_uuid
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
      let returnType = V1Dashboard;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/dashboards/{dashboard.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
