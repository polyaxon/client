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
    instance = new PolyaxonSdk.V1CronSchedule();
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

  describe('V1CronSchedule', function() {
    it('should create an instance of V1CronSchedule', function() {
      // uncomment below and update the code to test V1CronSchedule
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be.a(PolyaxonSdk.V1CronSchedule);
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

    it('should have the property startAt (base name: "startAt")', function() {
      // uncomment below and update the code to test the property startAt
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "endAt")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

    it('should have the property maxRuns (base name: "maxRuns")', function() {
      // uncomment below and update the code to test the property maxRuns
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

    it('should have the property cron (base name: "cron")', function() {
      // uncomment below and update the code to test the property cron
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

    it('should have the property dependsOnPast (base name: "dependsOnPast")', function() {
      // uncomment below and update the code to test the property dependsOnPast
      //var instance = new PolyaxonSdk.V1CronSchedule();
      //expect(instance).to.be();
    });

  });

}));
