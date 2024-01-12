/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc3
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
    instance = new PolyaxonSdk.PresetsV1Api();
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

  describe('PresetsV1Api', function() {
    describe('createPreset', function() {
      it('should call createPreset successfully', function(done) {
        //uncomment below and update the code to test createPreset
        //instance.createPreset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePreset', function() {
      it('should call deletePreset successfully', function(done) {
        //uncomment below and update the code to test deletePreset
        //instance.deletePreset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPreset', function() {
      it('should call getPreset successfully', function(done) {
        //uncomment below and update the code to test getPreset
        //instance.getPreset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPresetNames', function() {
      it('should call listPresetNames successfully', function(done) {
        //uncomment below and update the code to test listPresetNames
        //instance.listPresetNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPresets', function() {
      it('should call listPresets successfully', function(done) {
        //uncomment below and update the code to test listPresets
        //instance.listPresets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchPreset', function() {
      it('should call patchPreset successfully', function(done) {
        //uncomment below and update the code to test patchPreset
        //instance.patchPreset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePreset', function() {
      it('should call updatePreset successfully', function(done) {
        //uncomment below and update the code to test updatePreset
        //instance.updatePreset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
