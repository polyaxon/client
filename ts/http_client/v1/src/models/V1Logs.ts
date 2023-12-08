/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import type { V1Log } from './V1Log';
import {
    V1LogFromJSON,
    V1LogFromJSONTyped,
    V1LogToJSON,
} from './V1Log';

/**
 *
 * @export
 * @interface V1Logs
 */
export interface V1Logs {
    /**
     *
     * @type {Array<V1Log>}
     * @memberof V1Logs
     */
    logs?: Array<V1Log>;
    /**
     *
     * @type {Date}
     * @memberof V1Logs
     */
    last_time?: Date;
    /**
     *
     * @type {string}
     * @memberof V1Logs
     */
    last_file?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Logs
     */
    files?: Array<string>;
}

/**
 * Check if a given object implements the V1Logs interface.
 */
export function instanceOfV1Logs(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LogsFromJSON(json: any): V1Logs {
    return V1LogsFromJSONTyped(json, false);
}

export function V1LogsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Logs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<any>).map(V1LogFromJSON)),
        'last_time': !exists(json, 'last_time') ? undefined : (new Date(json['last_time'])),
        'last_file': !exists(json, 'last_file') ? undefined : json['last_file'],
        'files': !exists(json, 'files') ? undefined : json['files'],
    };
}

export function V1LogsToJSON(value?: V1Logs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(V1LogToJSON)),
        'last_time': value.last_time === undefined ? undefined : (value.last_time.toISOString()),
        'last_file': value.last_file,
        'files': value.files,
    };
}

