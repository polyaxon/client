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

import { exists, mapValues } from '../runtime';
import type { V1ProjectSettings } from './V1ProjectSettings';
import {
    V1ProjectSettingsFromJSON,
    V1ProjectSettingsFromJSONTyped,
    V1ProjectSettingsToJSON,
} from './V1ProjectSettings';

/**
 *
 * @export
 * @interface V1Project
 */
export interface V1Project {
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Project
     */
    tags?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof V1Project
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1Project
     */
    updated_at?: Date;
    /**
     *
     * @type {boolean}
     * @memberof V1Project
     */
    is_public?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Project
     */
    bookmarked?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    readme?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Project
     */
    excluded_features?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof V1Project
     */
    excluded_runtimes?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof V1Project
     */
    archived_deletion_interval?: number;
    /**
     *
     * @type {V1ProjectSettings}
     * @memberof V1Project
     */
    settings?: V1ProjectSettings;
    /**
     *
     * @type {string}
     * @memberof V1Project
     */
    role?: string;
    /**
     *
     * @type {number}
     * @memberof V1Project
     */
    live_state?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1Project
     */
    contributors?: Array<object>;
}

/**
 * Check if a given object implements the V1Project interface.
 */
export function instanceOfV1Project(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ProjectFromJSON(json: any): V1Project {
    return V1ProjectFromJSONTyped(json, false);
}

export function V1ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'is_public': !exists(json, 'is_public') ? undefined : json['is_public'],
        'bookmarked': !exists(json, 'bookmarked') ? undefined : json['bookmarked'],
        'readme': !exists(json, 'readme') ? undefined : json['readme'],
        'excluded_features': !exists(json, 'excluded_features') ? undefined : json['excluded_features'],
        'excluded_runtimes': !exists(json, 'excluded_runtimes') ? undefined : json['excluded_runtimes'],
        'archived_deletion_interval': !exists(json, 'archived_deletion_interval') ? undefined : json['archived_deletion_interval'],
        'settings': !exists(json, 'settings') ? undefined : V1ProjectSettingsFromJSON(json['settings']),
        'role': !exists(json, 'role') ? undefined : json['role'],
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'contributors': !exists(json, 'contributors') ? undefined : json['contributors'],
    };
}

export function V1ProjectToJSON(value?: V1Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'is_public': value.is_public,
        'bookmarked': value.bookmarked,
        'readme': value.readme,
        'excluded_features': value.excluded_features,
        'excluded_runtimes': value.excluded_runtimes,
        'archived_deletion_interval': value.archived_deletion_interval,
        'settings': V1ProjectSettingsToJSON(value.settings),
        'role': value.role,
        'live_state': value.live_state,
        'contributors': value.contributors,
    };
}

