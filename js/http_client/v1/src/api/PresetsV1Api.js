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
 * The version of the OpenAPI document: 2.0.0-rc9
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListPresetsResponse from '../model/V1ListPresetsResponse';
import V1Preset from '../model/V1Preset';

/**
* PresetsV1 service.
* @module api/PresetsV1Api
* @version 2.0.0-rc9
*/
export default class PresetsV1Api {

    /**
    * Constructs a new PresetsV1Api.
    * Polyaxon sdk
    * @alias module:api/PresetsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPreset operation.
     * @callback module:api/PresetsV1Api~createPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Preset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create scheduling presets
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Preset} body Preset body
     * @param {module:api/PresetsV1Api~createPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Preset}
     */
    createPreset(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createPreset");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPreset");
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
      let returnType = V1Preset;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePreset operation.
     * @callback module:api/PresetsV1Api~deletePresetCallback
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
     * @param {module:api/PresetsV1Api~deletePresetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePreset(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deletePreset");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deletePreset");
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
        '/api/v1/orgs/{owner}/presets/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPreset operation.
     * @callback module:api/PresetsV1Api~getPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Preset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get scheduling preset
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the sub-entity
     * @param {Object} opts Optional parameters
     * @param {String} [entity] Entity: project name, hub name, registry name, ...
     * @param {module:api/PresetsV1Api~getPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Preset}
     */
    getPreset(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getPreset");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getPreset");
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
      let returnType = V1Preset;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPresetNames operation.
     * @callback module:api/PresetsV1Api~listPresetNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListPresetsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List scheduling presets names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/PresetsV1Api~listPresetNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListPresetsResponse}
     */
    listPresetNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listPresetNames");
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
      let returnType = V1ListPresetsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listPresets operation.
     * @callback module:api/PresetsV1Api~listPresetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListPresetsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List scheduling presets
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} [offset] Pagination offset.
     * @param {Number} [limit] Limit size.
     * @param {String} [sort] Sort to order the search.
     * @param {String} [query] Query filter the search.
     * @param {Boolean} [bookmarks] Filter by bookmarks.
     * @param {String} [mode] Mode of the search.
     * @param {Boolean} [no_page] No pagination.
     * @param {module:api/PresetsV1Api~listPresetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListPresetsResponse}
     */
    listPresets(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listPresets");
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
      let returnType = V1ListPresetsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchPreset operation.
     * @callback module:api/PresetsV1Api~patchPresetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Preset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch scheduling preset
     * @param {String} owner Owner of the namespace
     * @param {String} preset_uuid UUID
     * @param {module:model/V1Preset} body Preset body
     * @param {module:api/PresetsV1Api~patchPresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Preset}
     */
    patchPreset(owner, preset_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchPreset");
      }
      // verify the required parameter 'preset_uuid' is set
      if (preset_uuid === undefined || preset_uuid === null) {
        throw new Error("Missing the required parameter 'preset_uuid' when calling patchPreset");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchPreset");
      }

      let pathParams = {
        'owner': owner,
        'preset.uuid': preset_uuid
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
      let returnType = V1Preset;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets/{preset.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePreset operation.
     * @callback module:api/PresetsV1Api~updatePresetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Preset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update scheduling preset
     * @param {String} owner Owner of the namespace
     * @param {String} preset_uuid UUID
     * @param {module:model/V1Preset} body Preset body
     * @param {module:api/PresetsV1Api~updatePresetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Preset}
     */
    updatePreset(owner, preset_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updatePreset");
      }
      // verify the required parameter 'preset_uuid' is set
      if (preset_uuid === undefined || preset_uuid === null) {
        throw new Error("Missing the required parameter 'preset_uuid' when calling updatePreset");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePreset");
      }

      let pathParams = {
        'owner': owner,
        'preset.uuid': preset_uuid
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
      let returnType = V1Preset;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/presets/{preset.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
