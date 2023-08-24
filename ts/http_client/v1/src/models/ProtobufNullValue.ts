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
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 *  - NULL_VALUE: Null value.
 * @export
 */
export const ProtobufNullValue = {
    NullValue: 'NULL_VALUE'
} as const;
export type ProtobufNullValue = typeof ProtobufNullValue[keyof typeof ProtobufNullValue];


export function ProtobufNullValueFromJSON(json: any): ProtobufNullValue {
    return ProtobufNullValueFromJSONTyped(json, false);
}

export function ProtobufNullValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtobufNullValue {
    return json as ProtobufNullValue;
}

export function ProtobufNullValueToJSON(value?: ProtobufNullValue | null): any {
    return value as any;
}

