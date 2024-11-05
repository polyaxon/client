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
/**
 *
 * @export
 * @interface V1BucketConnection
 */
export interface V1BucketConnection {
    /**
     *
     * @type {string}
     * @memberof V1BucketConnection
     */
    bucket?: string;
}

/**
 * Check if a given object implements the V1BucketConnection interface.
 */
export function instanceOfV1BucketConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1BucketConnectionFromJSON(json: any): V1BucketConnection {
    return V1BucketConnectionFromJSONTyped(json, false);
}

export function V1BucketConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1BucketConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'bucket': !exists(json, 'bucket') ? undefined : json['bucket'],
    };
}

export function V1BucketConnectionToJSON(value?: V1BucketConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'bucket': value.bucket,
    };
}

