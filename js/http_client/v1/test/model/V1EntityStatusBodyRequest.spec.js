/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc37
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
    instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
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

  describe('V1EntityStatusBodyRequest', function() {
    it('should create an instance of V1EntityStatusBodyRequest', function() {
      // uncomment below and update the code to test V1EntityStatusBodyRequest
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be.a(PolyaxonSdk.V1EntityStatusBodyRequest);
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be();
    });

    it('should have the property force (base name: "force")', function() {
      // uncomment below and update the code to test the property force
      //var instance = new PolyaxonSdk.V1EntityStatusBodyRequest();
      //expect(instance).to.be();
    });

  });

}));
