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
 * - plotly: Plotly chart
 *  - bokeh: Bokeh chart
 *  - vega: Vega chart
 * @export
 */
export const V1EventChartKind = {
    Plotly: 'plotly',
    Bokeh: 'bokeh',
    Vega: 'vega'
} as const;
export type V1EventChartKind = typeof V1EventChartKind[keyof typeof V1EventChartKind];


export function V1EventChartKindFromJSON(json: any): V1EventChartKind {
    return V1EventChartKindFromJSONTyped(json, false);
}

export function V1EventChartKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventChartKind {
    return json as V1EventChartKind;
}

export function V1EventChartKindToJSON(value?: V1EventChartKind | null): any {
    return value as any;
}

