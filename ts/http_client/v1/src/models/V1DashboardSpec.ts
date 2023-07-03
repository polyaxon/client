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
import type { V1SectionSpec } from './V1SectionSpec';
import {
    V1SectionSpecFromJSON,
    V1SectionSpecFromJSONTyped,
    V1SectionSpecToJSON,
} from './V1SectionSpec';

/**
 *
 * @export
 * @interface V1DashboardSpec
 */
export interface V1DashboardSpec {
    /**
     *
     * @type {Array<V1SectionSpec>}
     * @memberof V1DashboardSpec
     */
    sections?: Array<V1SectionSpec>;
}

/**
 * Check if a given object implements the V1DashboardSpec interface.
 */
export function instanceOfV1DashboardSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1DashboardSpecFromJSON(json: any): V1DashboardSpec {
    return V1DashboardSpecFromJSONTyped(json, false);
}

export function V1DashboardSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'sections': !exists(json, 'sections') ? undefined : ((json['sections'] as Array<any>).map(V1SectionSpecFromJSON)),
    };
}

export function V1DashboardSpecToJSON(value?: V1DashboardSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'sections': value.sections === undefined ? undefined : ((value.sections as Array<any>).map(V1SectionSpecToJSON)),
    };
}

