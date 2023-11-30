/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.5
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
 * @interface AgentStateResponseAgentState
 */
export interface AgentStateResponseAgentState {
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    schedules?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    hooks?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    watchdogs?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    tuners?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    queued?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    stopping?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    deleting?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    apply?: object;
    /**
     * 
     * @type {object}
     * @memberof AgentStateResponseAgentState
     */
    checks?: object;
    /**
     * 
     * @type {boolean}
     * @memberof AgentStateResponseAgentState
     */
    full?: boolean;
}

/**
 * Check if a given object implements the AgentStateResponseAgentState interface.
 */
export function instanceOfAgentStateResponseAgentState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AgentStateResponseAgentStateFromJSON(json: any): AgentStateResponseAgentState {
    return AgentStateResponseAgentStateFromJSONTyped(json, false);
}

export function AgentStateResponseAgentStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgentStateResponseAgentState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schedules': !exists(json, 'schedules') ? undefined : json['schedules'],
        'hooks': !exists(json, 'hooks') ? undefined : json['hooks'],
        'watchdogs': !exists(json, 'watchdogs') ? undefined : json['watchdogs'],
        'tuners': !exists(json, 'tuners') ? undefined : json['tuners'],
        'queued': !exists(json, 'queued') ? undefined : json['queued'],
        'stopping': !exists(json, 'stopping') ? undefined : json['stopping'],
        'deleting': !exists(json, 'deleting') ? undefined : json['deleting'],
        'apply': !exists(json, 'apply') ? undefined : json['apply'],
        'checks': !exists(json, 'checks') ? undefined : json['checks'],
        'full': !exists(json, 'full') ? undefined : json['full'],
    };
}

export function AgentStateResponseAgentStateToJSON(value?: AgentStateResponseAgentState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schedules': value.schedules,
        'hooks': value.hooks,
        'watchdogs': value.watchdogs,
        'tuners': value.tuners,
        'queued': value.queued,
        'stopping': value.stopping,
        'deleting': value.deleting,
        'apply': value.apply,
        'checks': value.checks,
        'full': value.full,
    };
}

