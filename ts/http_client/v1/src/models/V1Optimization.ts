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


/**
 * - maximize: Minimize a metric
 *  - minimize: Minimize a metric
 * @export
 */
export const V1Optimization = {
    Maximize: 'maximize',
    Minimize: 'minimize'
} as const;
export type V1Optimization = typeof V1Optimization[keyof typeof V1Optimization];


export function V1OptimizationFromJSON(json: any): V1Optimization {
    return V1OptimizationFromJSONTyped(json, false);
}

export function V1OptimizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Optimization {
    return json as V1Optimization;
}

export function V1OptimizationToJSON(value?: V1Optimization | null): any {
    return value as any;
}

