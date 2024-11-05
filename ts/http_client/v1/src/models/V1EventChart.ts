/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1EventChartKind } from './V1EventChartKind';
import {
    V1EventChartKindFromJSON,
    V1EventChartKindFromJSONTyped,
    V1EventChartKindToJSON,
} from './V1EventChartKind';

/**
 *
 * @export
 * @interface V1EventChart
 */
export interface V1EventChart {
    /**
     *
     * @type {V1EventChartKind}
     * @memberof V1EventChart
     */
    kind?: V1EventChartKind;
    /**
     *
     * @type {object}
     * @memberof V1EventChart
     */
    figure?: object;
}

/**
 * Check if a given object implements the V1EventChart interface.
 */
export function instanceOfV1EventChart(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventChartFromJSON(json: any): V1EventChart {
    return V1EventChartFromJSONTyped(json, false);
}

export function V1EventChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventChart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : V1EventChartKindFromJSON(json['kind']),
        'figure': !exists(json, 'figure') ? undefined : json['figure'],
    };
}

export function V1EventChartToJSON(value?: V1EventChart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': V1EventChartKindToJSON(value.kind),
        'figure': value.figure,
    };
}

