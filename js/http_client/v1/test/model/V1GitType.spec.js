/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.0-rc0
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
    instance = new PolyaxonSdk.V1GitType();
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

  describe('V1GitType', function() {
    it('should create an instance of V1GitType', function() {
      // uncomment below and update the code to test V1GitType
      //var instance = new PolyaxonSdk.V1GitType();
      //expect(instance).to.be.a(PolyaxonSdk.V1GitType);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new PolyaxonSdk.V1GitType();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instance = new PolyaxonSdk.V1GitType();
      //expect(instance).to.be();
    });

    it('should have the property flags (base name: "flags")', function() {
      // uncomment below and update the code to test the property flags
      //var instance = new PolyaxonSdk.V1GitType();
      //expect(instance).to.be();
    });

  });

}));
