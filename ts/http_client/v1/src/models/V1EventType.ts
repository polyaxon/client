/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc12
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ArtifactKind } from './V1ArtifactKind';
import {
    V1ArtifactKindFromJSON,
    V1ArtifactKindFromJSONTyped,
    V1ArtifactKindToJSON,
} from './V1ArtifactKind';

/**
 *
 * @export
 * @interface V1EventType
 */
export interface V1EventType {
    /**
     *
     * @type {string}
     * @memberof V1EventType
     */
    name?: string;
    /**
     *
     * @type {V1ArtifactKind}
     * @memberof V1EventType
     */
    kind?: V1ArtifactKind;
}

/**
 * Check if a given object implements the V1EventType interface.
 */
export function instanceOfV1EventType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventTypeFromJSON(json: any): V1EventType {
    return V1EventTypeFromJSONTyped(json, false);
}

export function V1EventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : V1ArtifactKindFromJSON(json['kind']),
    };
}

export function V1EventTypeToJSON(value?: V1EventType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'kind': V1ArtifactKindToJSON(value.kind),
    };
}

