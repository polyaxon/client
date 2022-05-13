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
 * The version of the OpenAPI document: 1.18.0
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
    instance = new PolyaxonSdk.V1Spark();
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

  describe('V1Spark', function() {
    it('should create an instance of V1Spark', function() {
      // uncomment below and update the code to test V1Spark
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be.a(PolyaxonSdk.V1Spark);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property connections (base name: "connections")', function() {
      // uncomment below and update the code to test the property connections
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property sparkVersion (base name: "sparkVersion")', function() {
      // uncomment below and update the code to test the property sparkVersion
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property pythonVersion (base name: "pythonVersion")', function() {
      // uncomment below and update the code to test the property pythonVersion
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property deployMode (base name: "deployMode")', function() {
      // uncomment below and update the code to test the property deployMode
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property mainClass (base name: "mainClass")', function() {
      // uncomment below and update the code to test the property mainClass
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property mainApplicationFile (base name: "mainApplicationFile")', function() {
      // uncomment below and update the code to test the property mainApplicationFile
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property _arguments (base name: "arguments")', function() {
      // uncomment below and update the code to test the property _arguments
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property hadoopConf (base name: "hadoopConf")', function() {
      // uncomment below and update the code to test the property hadoopConf
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property sparkConf (base name: "sparkConf")', function() {
      // uncomment below and update the code to test the property sparkConf
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property sparkConfigMap (base name: "sparkConfigMap")', function() {
      // uncomment below and update the code to test the property sparkConfigMap
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property hadoopConfigMap (base name: "hadoopConfigMap")', function() {
      // uncomment below and update the code to test the property hadoopConfigMap
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property executor (base name: "executor")', function() {
      // uncomment below and update the code to test the property executor
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instance = new PolyaxonSdk.V1Spark();
      //expect(instance).to.be();
    });

  });

}));
