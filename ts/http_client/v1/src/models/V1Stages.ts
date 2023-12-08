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


/**
 *
 * @export
 */
export const V1Stages = {
    Testing: 'testing',
    Staging: 'staging',
    Production: 'production',
    Disabled: 'disabled'
} as const;
export type V1Stages = typeof V1Stages[keyof typeof V1Stages];


export function V1StagesFromJSON(json: any): V1Stages {
    return V1StagesFromJSONTyped(json, false);
}

export function V1StagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Stages {
    return json as V1Stages;
}

export function V1StagesToJSON(value?: V1Stages | null): any {
    return value as any;
}

