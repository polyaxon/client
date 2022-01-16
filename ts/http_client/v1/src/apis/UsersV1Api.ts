// Copyright 2018-2021 Polyaxon, Inc.
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

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.14.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListTokenResponse,
    V1ListTokenResponseFromJSON,
    V1ListTokenResponseToJSON,
    V1Token,
    V1TokenFromJSON,
    V1TokenToJSON,
    V1User,
    V1UserFromJSON,
    V1UserToJSON,
} from '../models';

export interface CreateTokenRequest {
    body: V1Token;
}

export interface DeleteTokenRequest {
    uuid: string;
}

export interface GetTokenRequest {
    uuid: string;
}

export interface ListTokensRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
    noPage?: boolean;
}

export interface PatchTokenRequest {
    tokenUuid: string;
    body: V1Token;
}

export interface PatchUserRequest {
    body: V1User;
}

export interface UpdateTokenRequest {
    tokenUuid: string;
    body: V1Token;
}

export interface UpdateUserRequest {
    body: V1User;
}

/**
 * 
 */
export class UsersV1Api extends runtime.BaseAPI {

    /**
     * Create token
     */
    async createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1TokenToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Create token
     */
    async createToken(requestParameters: CreateTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.createTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete token
     */
    async deleteTokenRaw(requestParameters: DeleteTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete token
     */
    async deleteToken(requestParameters: DeleteTokenRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteTokenRaw(requestParameters, initOverrides);
    }

    /**
     * Get token
     */
    async getTokenRaw(requestParameters: GetTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Get token
     */
    async getToken(requestParameters: GetTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.getTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get current user
     */
    async getUserRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1User>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserFromJSON(jsonValue));
    }

    /**
     * Get current user
     */
    async getUser(initOverrides?: RequestInit): Promise<V1User> {
        const response = await this.getUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * List tokens
     */
    async listTokensRaw(requestParameters: ListTokensRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1ListTokenResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.noPage !== undefined) {
            queryParameters['no_page'] = requestParameters.noPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListTokenResponseFromJSON(jsonValue));
    }

    /**
     * List tokens
     */
    async listTokens(requestParameters: ListTokensRequest, initOverrides?: RequestInit): Promise<V1ListTokenResponse> {
        const response = await this.listTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch token
     */
    async patchTokenRaw(requestParameters: PatchTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.tokenUuid === null || requestParameters.tokenUuid === undefined) {
            throw new runtime.RequiredError('tokenUuid','Required parameter requestParameters.tokenUuid was null or undefined when calling patchToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens/{token.uuid}`.replace(`{${"token.uuid"}}`, encodeURIComponent(String(requestParameters.tokenUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1TokenToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Patch token
     */
    async patchToken(requestParameters: PatchTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.patchTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Patch current user
     */
    async patchUserRaw(requestParameters: PatchUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1User>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserFromJSON(jsonValue));
    }

    /**
     * Patch current user
     */
    async patchUser(requestParameters: PatchUserRequest, initOverrides?: RequestInit): Promise<V1User> {
        const response = await this.patchUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update token
     */
    async updateTokenRaw(requestParameters: UpdateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1Token>> {
        if (requestParameters.tokenUuid === null || requestParameters.tokenUuid === undefined) {
            throw new runtime.RequiredError('tokenUuid','Required parameter requestParameters.tokenUuid was null or undefined when calling updateToken.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users/tokens/{token.uuid}`.replace(`{${"token.uuid"}}`, encodeURIComponent(String(requestParameters.tokenUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1TokenToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1TokenFromJSON(jsonValue));
    }

    /**
     * Update token
     */
    async updateToken(requestParameters: UpdateTokenRequest, initOverrides?: RequestInit): Promise<V1Token> {
        const response = await this.updateTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update current user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<V1User>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/users`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserFromJSON(jsonValue));
    }

    /**
     * Update current user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit): Promise<V1User> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
