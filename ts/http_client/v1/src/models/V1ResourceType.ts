/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc37
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * - int: Int resource
 *  - float: Float resource
 * @export
 */
export const V1ResourceType = {
    Int: 'int',
    Float: 'float'
} as const;
export type V1ResourceType = typeof V1ResourceType[keyof typeof V1ResourceType];


export function V1ResourceTypeFromJSON(json: any): V1ResourceType {
    return V1ResourceTypeFromJSONTyped(json, false);
}

export function V1ResourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ResourceType {
    return json as V1ResourceType;
}

export function V1ResourceTypeToJSON(value?: V1ResourceType | null): any {
    return value as any;
}

