/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc7
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
    instance = new PolyaxonSdk.V1RunSchema();
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

  describe('V1RunSchema', function() {
    it('should create an instance of V1RunSchema', function() {
      // uncomment below and update the code to test V1RunSchema
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be.a(PolyaxonSdk.V1RunSchema);
    });

    it('should have the property job (base name: "job")', function() {
      // uncomment below and update the code to test the property job
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property dag (base name: "dag")', function() {
      // uncomment below and update the code to test the property dag
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property tfJob (base name: "tfJob")', function() {
      // uncomment below and update the code to test the property tfJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property pytorchJob (base name: "pytorchJob")', function() {
      // uncomment below and update the code to test the property pytorchJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property mpiJob (base name: "mpiJob")', function() {
      // uncomment below and update the code to test the property mpiJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property mxJob (base name: "mxJob")', function() {
      // uncomment below and update the code to test the property mxJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property xgboostJob (base name: "xgboostJob")', function() {
      // uncomment below and update the code to test the property xgboostJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property paddleJob (base name: "paddleJob")', function() {
      // uncomment below and update the code to test the property paddleJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property daskJob (base name: "daskJob")', function() {
      // uncomment below and update the code to test the property daskJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

    it('should have the property rayJob (base name: "rayJob")', function() {
      // uncomment below and update the code to test the property rayJob
      //var instance = new PolyaxonSdk.V1RunSchema();
      //expect(instance).to.be();
    });

  });

}));
