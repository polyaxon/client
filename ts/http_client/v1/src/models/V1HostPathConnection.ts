/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.4
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
 * @interface V1HostPathConnection
 */
export interface V1HostPathConnection {
    /**
     * 
     * @type {string}
     * @memberof V1HostPathConnection
     */
    hostPath?: string;
    /**
     * 
     * @type {string}
     * @memberof V1HostPathConnection
     */
    mountPath?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1HostPathConnection
     */
    readOnly?: boolean;
    /**
     * 
     * @type {object}
     * @memberof V1HostPathConnection
     */
    kind?: object;
}

/**
 * Check if a given object implements the V1HostPathConnection interface.
 */
export function instanceOfV1HostPathConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HostPathConnectionFromJSON(json: any): V1HostPathConnection {
    return V1HostPathConnectionFromJSONTyped(json, false);
}

export function V1HostPathConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostPathConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostPath': !exists(json, 'hostPath') ? undefined : json['hostPath'],
        'mountPath': !exists(json, 'mountPath') ? undefined : json['mountPath'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1HostPathConnectionToJSON(value?: V1HostPathConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostPath': value.hostPath,
        'mountPath': value.mountPath,
        'readOnly': value.readOnly,
        'kind': value.kind,
    };
}

