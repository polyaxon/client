// Copyright 2018-2022 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.20.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1CleanPodPolicy from './V1CleanPodPolicy';
import V1KFReplica from './V1KFReplica';
import V1SchedulingPolicy from './V1SchedulingPolicy';

/**
 * The V1PytorchJob model module.
 * @module model/V1PytorchJob
 * @version 1.20.0
 */
class V1PytorchJob {
    /**
     * Constructs a new <code>V1PytorchJob</code>.
     * @alias module:model/V1PytorchJob
     */
    constructor() { 
        
        V1PytorchJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PytorchJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PytorchJob} obj Optional instance to populate.
     * @return {module:model/V1PytorchJob} The populated <code>V1PytorchJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PytorchJob();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('cleanPodPolicy')) {
                obj['cleanPodPolicy'] = V1CleanPodPolicy.constructFromObject(data['cleanPodPolicy']);
            }
            if (data.hasOwnProperty('schedulingPolicy')) {
                obj['schedulingPolicy'] = V1SchedulingPolicy.constructFromObject(data['schedulingPolicy']);
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = V1KFReplica.constructFromObject(data['master']);
            }
            if (data.hasOwnProperty('worker')) {
                obj['worker'] = V1KFReplica.constructFromObject(data['worker']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'pytorch_job'
 */
V1PytorchJob.prototype['kind'] = 'pytorch_job';

/**
 * @member {module:model/V1CleanPodPolicy} cleanPodPolicy
 */
V1PytorchJob.prototype['cleanPodPolicy'] = undefined;

/**
 * @member {module:model/V1SchedulingPolicy} schedulingPolicy
 */
V1PytorchJob.prototype['schedulingPolicy'] = undefined;

/**
 * @member {module:model/V1KFReplica} master
 */
V1PytorchJob.prototype['master'] = undefined;

/**
 * @member {module:model/V1KFReplica} worker
 */
V1PytorchJob.prototype['worker'] = undefined;






export default V1PytorchJob;

