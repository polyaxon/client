/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1RunArtifact } from './V1RunArtifact';
import {
    V1RunArtifactFromJSON,
    V1RunArtifactFromJSONTyped,
    V1RunArtifactToJSON,
} from './V1RunArtifact';

/**
 *
 * @export
 * @interface V1ListRunArtifactsResponse
 */
export interface V1ListRunArtifactsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListRunArtifactsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1RunArtifact>}
     * @memberof V1ListRunArtifactsResponse
     */
    results?: Array<V1RunArtifact>;
    /**
     *
     * @type {string}
     * @memberof V1ListRunArtifactsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListRunArtifactsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListRunArtifactsResponse interface.
 */
export function instanceOfV1ListRunArtifactsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListRunArtifactsResponseFromJSON(json: any): V1ListRunArtifactsResponse {
    return V1ListRunArtifactsResponseFromJSONTyped(json, false);
}

export function V1ListRunArtifactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListRunArtifactsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1RunArtifactFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListRunArtifactsResponseToJSON(value?: V1ListRunArtifactsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1RunArtifactToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

