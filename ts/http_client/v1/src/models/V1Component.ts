/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc25
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Build } from './V1Build';
import {
    V1BuildFromJSON,
    V1BuildFromJSONTyped,
    V1BuildToJSON,
} from './V1Build';
import type { V1Cache } from './V1Cache';
import {
    V1CacheFromJSON,
    V1CacheFromJSONTyped,
    V1CacheToJSON,
} from './V1Cache';
import type { V1Hook } from './V1Hook';
import {
    V1HookFromJSON,
    V1HookFromJSONTyped,
    V1HookToJSON,
} from './V1Hook';
import type { V1IO } from './V1IO';
import {
    V1IOFromJSON,
    V1IOFromJSONTyped,
    V1IOToJSON,
} from './V1IO';
import type { V1Plugins } from './V1Plugins';
import {
    V1PluginsFromJSON,
    V1PluginsFromJSONTyped,
    V1PluginsToJSON,
} from './V1Plugins';
import type { V1Template } from './V1Template';
import {
    V1TemplateFromJSON,
    V1TemplateFromJSONTyped,
    V1TemplateToJSON,
} from './V1Template';
import type { V1Termination } from './V1Termination';
import {
    V1TerminationFromJSON,
    V1TerminationFromJSONTyped,
    V1TerminationToJSON,
} from './V1Termination';

/**
 *
 * @export
 * @interface V1Component
 */
export interface V1Component {
    /**
     *
     * @type {number}
     * @memberof V1Component
     */
    version?: number;
    /**
     *
     * @type {string}
     * @memberof V1Component
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1Component
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Component
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Component
     */
    tags?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Component
     */
    presets?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1Component
     */
    queue?: string;
    /**
     *
     * @type {V1Cache}
     * @memberof V1Component
     */
    cache?: V1Cache;
    /**
     *
     * @type {V1Termination}
     * @memberof V1Component
     */
    termination?: V1Termination;
    /**
     *
     * @type {V1Plugins}
     * @memberof V1Component
     */
    plugins?: V1Plugins;
    /**
     *
     * @type {Array<V1Hook>}
     * @memberof V1Component
     */
    hooks?: Array<V1Hook>;
    /**
     *
     * @type {Array<V1IO>}
     * @memberof V1Component
     */
    inputs?: Array<V1IO>;
    /**
     *
     * @type {Array<V1IO>}
     * @memberof V1Component
     */
    outputs?: Array<V1IO>;
    /**
     *
     * @type {V1Build}
     * @memberof V1Component
     */
    build?: V1Build;
    /**
     *
     * @type {object}
     * @memberof V1Component
     */
    run?: object;
    /**
     *
     * @type {V1Template}
     * @memberof V1Component
     */
    template?: V1Template;
    /**
     *
     * @type {boolean}
     * @memberof V1Component
     */
    isApproved?: boolean;
    /**
     *
     * @type {number}
     * @memberof V1Component
     */
    cost?: number;
}

/**
 * Check if a given object implements the V1Component interface.
 */
export function instanceOfV1Component(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ComponentFromJSON(json: any): V1Component {
    return V1ComponentFromJSONTyped(json, false);
}

export function V1ComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Component {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'version': !exists(json, 'version') ? undefined : json['version'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'presets': !exists(json, 'presets') ? undefined : json['presets'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'cache': !exists(json, 'cache') ? undefined : V1CacheFromJSON(json['cache']),
        'termination': !exists(json, 'termination') ? undefined : V1TerminationFromJSON(json['termination']),
        'plugins': !exists(json, 'plugins') ? undefined : V1PluginsFromJSON(json['plugins']),
        'hooks': !exists(json, 'hooks') ? undefined : ((json['hooks'] as Array<any>).map(V1HookFromJSON)),
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(V1IOFromJSON)),
        'outputs': !exists(json, 'outputs') ? undefined : ((json['outputs'] as Array<any>).map(V1IOFromJSON)),
        'build': !exists(json, 'build') ? undefined : V1BuildFromJSON(json['build']),
        'run': !exists(json, 'run') ? undefined : json['run'],
        'template': !exists(json, 'template') ? undefined : V1TemplateFromJSON(json['template']),
        'isApproved': !exists(json, 'isApproved') ? undefined : json['isApproved'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function V1ComponentToJSON(value?: V1Component | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'version': value.version,
        'kind': value.kind,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'presets': value.presets,
        'queue': value.queue,
        'cache': V1CacheToJSON(value.cache),
        'termination': V1TerminationToJSON(value.termination),
        'plugins': V1PluginsToJSON(value.plugins),
        'hooks': value.hooks === undefined ? undefined : ((value.hooks as Array<any>).map(V1HookToJSON)),
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(V1IOToJSON)),
        'outputs': value.outputs === undefined ? undefined : ((value.outputs as Array<any>).map(V1IOToJSON)),
        'build': V1BuildToJSON(value.build),
        'run': value.run,
        'template': V1TemplateToJSON(value.template),
        'isApproved': value.isApproved,
        'cost': value.cost,
    };
}

