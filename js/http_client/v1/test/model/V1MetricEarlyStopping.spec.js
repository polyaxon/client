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
    instance = new PolyaxonSdk.V1MetricEarlyStopping();
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

  describe('V1MetricEarlyStopping', function() {
    it('should create an instance of V1MetricEarlyStopping', function() {
      // uncomment below and update the code to test V1MetricEarlyStopping
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be.a(PolyaxonSdk.V1MetricEarlyStopping);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property optimization (base name: "optimization")', function() {
      // uncomment below and update the code to test the property optimization
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property policy (base name: "policy")', function() {
      // uncomment below and update the code to test the property policy
      //var instance = new PolyaxonSdk.V1MetricEarlyStopping();
      //expect(instance).to.be();
    });

  });

}));
