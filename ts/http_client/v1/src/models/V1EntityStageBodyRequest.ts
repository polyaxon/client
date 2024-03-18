/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1StageCondition } from './V1StageCondition';
import {
    V1StageConditionFromJSON,
    V1StageConditionFromJSONTyped,
    V1StageConditionToJSON,
} from './V1StageCondition';

/**
 *
 * @export
 * @interface V1EntityStageBodyRequest
 */
export interface V1EntityStageBodyRequest {
    /**
     *
     * @type {string}
     * @memberof V1EntityStageBodyRequest
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1EntityStageBodyRequest
     */
    entity?: string;
    /**
     *
     * @type {string}
     * @memberof V1EntityStageBodyRequest
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1EntityStageBodyRequest
     */
    name?: string;
    /**
     *
     * @type {V1StageCondition}
     * @memberof V1EntityStageBodyRequest
     */
    condition?: V1StageCondition;
}

/**
 * Check if a given object implements the V1EntityStageBodyRequest interface.
 */
export function instanceOfV1EntityStageBodyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EntityStageBodyRequestFromJSON(json: any): V1EntityStageBodyRequest {
    return V1EntityStageBodyRequestFromJSONTyped(json, false);
}

export function V1EntityStageBodyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntityStageBodyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'condition': !exists(json, 'condition') ? undefined : V1StageConditionFromJSON(json['condition']),
    };
}

export function V1EntityStageBodyRequestToJSON(value?: V1EntityStageBodyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'owner': value.owner,
        'entity': value.entity,
        'kind': value.kind,
        'name': value.name,
        'condition': V1StageConditionToJSON(value.condition),
    };
}

