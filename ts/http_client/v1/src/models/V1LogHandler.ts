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
/**
 *
 * @export
 * @interface V1LogHandler
 */
export interface V1LogHandler {
    /**
     *
     * @type {string}
     * @memberof V1LogHandler
     */
    dsn?: string;
    /**
     *
     * @type {string}
     * @memberof V1LogHandler
     */
    environment?: string;
}

/**
 * Check if a given object implements the V1LogHandler interface.
 */
export function instanceOfV1LogHandler(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LogHandlerFromJSON(json: any): V1LogHandler {
    return V1LogHandlerFromJSONTyped(json, false);
}

export function V1LogHandlerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LogHandler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'dsn': !exists(json, 'dsn') ? undefined : json['dsn'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
    };
}

export function V1LogHandlerToJSON(value?: V1LogHandler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'dsn': value.dsn,
        'environment': value.environment,
    };
}

