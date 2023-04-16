// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 2.0.0-rc8
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1TFJob();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1TFJob', function() {
    it('should create an instance of V1TFJob', function() {
      // uncomment below and update the code to test V1TFJob
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be.a(PolyaxonSdk.V1TFJob);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property cleanPodPolicy (base name: "cleanPodPolicy")', function() {
      // uncomment below and update the code to test the property cleanPodPolicy
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property schedulingPolicy (base name: "schedulingPolicy")', function() {
      // uncomment below and update the code to test the property schedulingPolicy
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property enableDynamicWorker (base name: "enableDynamicWorker")', function() {
      // uncomment below and update the code to test the property enableDynamicWorker
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property chief (base name: "chief")', function() {
      // uncomment below and update the code to test the property chief
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property worker (base name: "worker")', function() {
      // uncomment below and update the code to test the property worker
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property ps (base name: "ps")', function() {
      // uncomment below and update the code to test the property ps
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

    it('should have the property evaluator (base name: "evaluator")', function() {
      // uncomment below and update the code to test the property evaluator
      //var instance = new PolyaxonSdk.V1TFJob();
      //expect(instance).to.be();
    });

  });

}));
