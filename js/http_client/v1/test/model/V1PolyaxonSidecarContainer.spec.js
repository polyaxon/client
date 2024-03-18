/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3
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
    instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
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

  describe('V1PolyaxonSidecarContainer', function() {
    it('should create an instance of V1PolyaxonSidecarContainer', function() {
      // uncomment below and update the code to test V1PolyaxonSidecarContainer
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be.a(PolyaxonSdk.V1PolyaxonSidecarContainer);
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property imageTag (base name: "imageTag")', function() {
      // uncomment below and update the code to test the property imageTag
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property imagePullPolicy (base name: "imagePullPolicy")', function() {
      // uncomment below and update the code to test the property imagePullPolicy
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property sleepInterval (base name: "sleepInterval")', function() {
      // uncomment below and update the code to test the property sleepInterval
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property syncInterval (base name: "syncInterval")', function() {
      // uncomment below and update the code to test the property syncInterval
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property monitorLogs (base name: "monitorLogs")', function() {
      // uncomment below and update the code to test the property monitorLogs
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property monitorSpec (base name: "monitorSpec")', function() {
      // uncomment below and update the code to test the property monitorSpec
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new PolyaxonSdk.V1PolyaxonSidecarContainer();
      //expect(instance).to.be();
    });

  });

}));
