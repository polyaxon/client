/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * - any: Any view
 *  - runs: Runs view
 *  - selection: Selection view
 *  - analytics: Analytics view
 *  - components: Components view
 *  - models: Models view
 *  - artifacts: Artifacts view
 *  - projects: Projects view
 * @export
 */
export const SearchView = {
    Any: 'any',
    Runs: 'runs',
    Selection: 'selection',
    Analytics: 'analytics',
    Components: 'components',
    Models: 'models',
    Artifacts: 'artifacts',
    Projects: 'projects'
} as const;
export type SearchView = typeof SearchView[keyof typeof SearchView];


export function SearchViewFromJSON(json: any): SearchView {
    return SearchViewFromJSONTyped(json, false);
}

export function SearchViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchView {
    return json as SearchView;
}

export function SearchViewToJSON(value?: SearchView | null): any {
    return value as any;
}

