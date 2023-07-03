/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc26
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Param } from './V1Param';
import {
    V1ParamFromJSON,
    V1ParamFromJSONTyped,
    V1ParamToJSON,
} from './V1Param';

/**
 *
 * @export
 * @interface V1Tuner
 */
export interface V1Tuner {
    /**
     *
     * @type {string}
     * @memberof V1Tuner
     */
    hubRef?: string;
    /**
     *
     * @type {string}
     * @memberof V1Tuner
     */
    queue?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Tuner
     */
    presets?: Array<string>;
    /**
     *
     * @type {{ [key: string]: V1Param; }}
     * @memberof V1Tuner
     */
    params?: { [key: string]: V1Param; };
}

/**
 * Check if a given object implements the V1Tuner interface.
 */
export function instanceOfV1Tuner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TunerFromJSON(json: any): V1Tuner {
    return V1TunerFromJSONTyped(json, false);
}

export function V1TunerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Tuner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'hubRef': !exists(json, 'hubRef') ? undefined : json['hubRef'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1ParamFromJSON)),
    };
}

export function V1TunerToJSON(value?: V1Tuner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'hubRef': value.hubRef,
        'queue': value.queue,
        'presets': value.presets,
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1ParamToJSON)),
    };
}

