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
import type { V1Notification } from './V1Notification';
import {
    V1NotificationFromJSON,
    V1NotificationFromJSONTyped,
    V1NotificationToJSON,
} from './V1Notification';
import type { V1PolyaxonSidecarContainer } from './V1PolyaxonSidecarContainer';
import {
    V1PolyaxonSidecarContainerFromJSON,
    V1PolyaxonSidecarContainerFromJSONTyped,
    V1PolyaxonSidecarContainerToJSON,
} from './V1PolyaxonSidecarContainer';

/**
 *
 * @export
 * @interface V1Plugins
 */
export interface V1Plugins {
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    auth?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    docker?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    shm?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    mountArtifactsStore?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    collectArtifacts?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    collectLogs?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    collectResources?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    syncStatuses?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    autoResume?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1Plugins
     */
    logLevel?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Plugins
     */
    externalHost?: boolean;
    /**
     *
     * @type {V1PolyaxonSidecarContainer}
     * @memberof V1Plugins
     */
    sidecar?: V1PolyaxonSidecarContainer;
    /**
     *
     * @type {Array<V1Notification>}
     * @memberof V1Plugins
     */
    notifications?: Array<V1Notification>;
}

/**
 * Check if a given object implements the V1Plugins interface.
 */
export function instanceOfV1Plugins(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PluginsFromJSON(json: any): V1Plugins {
    return V1PluginsFromJSONTyped(json, false);
}

export function V1PluginsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Plugins {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'auth': !exists(json, 'auth') ? undefined : json['auth'],
        'docker': !exists(json, 'docker') ? undefined : json['docker'],
        'shm': !exists(json, 'shm') ? undefined : json['shm'],
        'mountArtifactsStore': !exists(json, 'mountArtifactsStore') ? undefined : json['mountArtifactsStore'],
        'collectArtifacts': !exists(json, 'collectArtifacts') ? undefined : json['collectArtifacts'],
        'collectLogs': !exists(json, 'collectLogs') ? undefined : json['collectLogs'],
        'collectResources': !exists(json, 'collectResources') ? undefined : json['collectResources'],
        'syncStatuses': !exists(json, 'syncStatuses') ? undefined : json['syncStatuses'],
        'autoResume': !exists(json, 'autoResume') ? undefined : json['autoResume'],
        'logLevel': !exists(json, 'logLevel') ? undefined : json['logLevel'],
        'externalHost': !exists(json, 'externalHost') ? undefined : json['externalHost'],
        'sidecar': !exists(json, 'sidecar') ? undefined : V1PolyaxonSidecarContainerFromJSON(json['sidecar']),
        'notifications': !exists(json, 'notifications') ? undefined : ((json['notifications'] as Array<any>).map(V1NotificationFromJSON)),
    };
}

export function V1PluginsToJSON(value?: V1Plugins | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'auth': value.auth,
        'docker': value.docker,
        'shm': value.shm,
        'mountArtifactsStore': value.mountArtifactsStore,
        'collectArtifacts': value.collectArtifacts,
        'collectLogs': value.collectLogs,
        'collectResources': value.collectResources,
        'syncStatuses': value.syncStatuses,
        'autoResume': value.autoResume,
        'logLevel': value.logLevel,
        'externalHost': value.externalHost,
        'sidecar': V1PolyaxonSidecarContainerToJSON(value.sidecar),
        'notifications': value.notifications === undefined ? undefined : ((value.notifications as Array<any>).map(V1NotificationToJSON)),
    };
}

