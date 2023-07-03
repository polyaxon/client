/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
    instance = new PolyaxonSdk.V1Activity();
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

  describe('V1Activity', function() {
    it('should create an instance of V1Activity', function() {
      // uncomment below and update the code to test V1Activity
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be.a(PolyaxonSdk.V1Activity);
    });

    it('should have the property actor (base name: "actor")', function() {
      // uncomment below and update the code to test the property actor
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property created_at (base name: "created_at")', function() {
      // uncomment below and update the code to test the property created_at
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property event_action (base name: "event_action")', function() {
      // uncomment below and update the code to test the property event_action
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property event_subject (base name: "event_subject")', function() {
      // uncomment below and update the code to test the property event_subject
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property object_name (base name: "object_name")', function() {
      // uncomment below and update the code to test the property object_name
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property object_uuid (base name: "object_uuid")', function() {
      // uncomment below and update the code to test the property object_uuid
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

    it('should have the property object_parent (base name: "object_parent")', function() {
      // uncomment below and update the code to test the property object_parent
      //var instance = new PolyaxonSdk.V1Activity();
      //expect(instance).to.be();
    });

  });

}));
