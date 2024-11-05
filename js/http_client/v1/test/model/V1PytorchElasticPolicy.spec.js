/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
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
    instance = new PolyaxonSdk.V1PytorchElasticPolicy();
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

  describe('V1PytorchElasticPolicy', function() {
    it('should create an instance of V1PytorchElasticPolicy', function() {
      // uncomment below and update the code to test V1PytorchElasticPolicy
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be.a(PolyaxonSdk.V1PytorchElasticPolicy);
    });

    it('should have the property minReplicas (base name: "minReplicas")', function() {
      // uncomment below and update the code to test the property minReplicas
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property maxReplicas (base name: "maxReplicas")', function() {
      // uncomment below and update the code to test the property maxReplicas
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property rdvzBackend (base name: "rdvzBackend")', function() {
      // uncomment below and update the code to test the property rdvzBackend
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property rdvzPort (base name: "rdvzPort")', function() {
      // uncomment below and update the code to test the property rdvzPort
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property rdvzHost (base name: "rdvzHost")', function() {
      // uncomment below and update the code to test the property rdvzHost
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property rdvzId (base name: "rdvzId")', function() {
      // uncomment below and update the code to test the property rdvzId
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property rdvzConf (base name: "rdvzConf")', function() {
      // uncomment below and update the code to test the property rdvzConf
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property standalone (base name: "standalone")', function() {
      // uncomment below and update the code to test the property standalone
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property nProcPerNode (base name: "nProcPerNode")', function() {
      // uncomment below and update the code to test the property nProcPerNode
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property maxRestarts (base name: "maxRestarts")', function() {
      // uncomment below and update the code to test the property maxRestarts
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

    it('should have the property Metrics (base name: "Metrics")', function() {
      // uncomment below and update the code to test the property Metrics
      //var instance = new PolyaxonSdk.V1PytorchElasticPolicy();
      //expect(instance).to.be();
    });

  });

}));
