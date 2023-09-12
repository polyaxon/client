/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc40
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
    instance = new PolyaxonSdk.V1EarlyStopping();
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

  describe('V1EarlyStopping', function() {
    it('should create an instance of V1EarlyStopping', function() {
      // uncomment below and update the code to test V1EarlyStopping
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be.a(PolyaxonSdk.V1EarlyStopping);
    });

    it('should have the property median (base name: "median")', function() {
      // uncomment below and update the code to test the property median
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property diff (base name: "diff")', function() {
      // uncomment below and update the code to test the property diff
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property truncation (base name: "truncation")', function() {
      // uncomment below and update the code to test the property truncation
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be();
    });

    it('should have the property failure (base name: "failure")', function() {
      // uncomment below and update the code to test the property failure
      //var instance = new PolyaxonSdk.V1EarlyStopping();
      //expect(instance).to.be();
    });

  });

}));
