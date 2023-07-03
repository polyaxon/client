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
    instance = new PolyaxonSdk.V1Component();
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

  describe('V1Component', function() {
    it('should create an instance of V1Component', function() {
      // uncomment below and update the code to test V1Component
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be.a(PolyaxonSdk.V1Component);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property presets (base name: "presets")', function() {
      // uncomment below and update the code to test the property presets
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property cache (base name: "cache")', function() {
      // uncomment below and update the code to test the property cache
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property termination (base name: "termination")', function() {
      // uncomment below and update the code to test the property termination
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property hooks (base name: "hooks")', function() {
      // uncomment below and update the code to test the property hooks
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property build (base name: "build")', function() {
      // uncomment below and update the code to test the property build
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property isApproved (base name: "isApproved")', function() {
      // uncomment below and update the code to test the property isApproved
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instance = new PolyaxonSdk.V1Component();
      //expect(instance).to.be();
    });

  });

}));
