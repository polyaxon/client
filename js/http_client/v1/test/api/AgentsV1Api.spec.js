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
    instance = new PolyaxonSdk.AgentsV1Api();
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

  describe('AgentsV1Api', function() {
    describe('createAgent', function() {
      it('should call createAgent successfully', function(done) {
        //uncomment below and update the code to test createAgent
        //instance.createAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAgentStatus', function() {
      it('should call createAgentStatus successfully', function(done) {
        //uncomment below and update the code to test createAgentStatus
        //instance.createAgentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAgent', function() {
      it('should call deleteAgent successfully', function(done) {
        //uncomment below and update the code to test deleteAgent
        //instance.deleteAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgent', function() {
      it('should call getAgent successfully', function(done) {
        //uncomment below and update the code to test getAgent
        //instance.getAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgentConfig', function() {
      it('should call getAgentConfig successfully', function(done) {
        //uncomment below and update the code to test getAgentConfig
        //instance.getAgentConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgentState', function() {
      it('should call getAgentState successfully', function(done) {
        //uncomment below and update the code to test getAgentState
        //instance.getAgentState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgentToken', function() {
      it('should call getAgentToken successfully', function(done) {
        //uncomment below and update the code to test getAgentToken
        //instance.getAgentToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGlobalState', function() {
      it('should call getGlobalState successfully', function(done) {
        //uncomment below and update the code to test getGlobalState
        //instance.getGlobalState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAgentNames', function() {
      it('should call listAgentNames successfully', function(done) {
        //uncomment below and update the code to test listAgentNames
        //instance.listAgentNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAgents', function() {
      it('should call listAgents successfully', function(done) {
        //uncomment below and update the code to test listAgents
        //instance.listAgents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAgent', function() {
      it('should call patchAgent successfully', function(done) {
        //uncomment below and update the code to test patchAgent
        //instance.patchAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAgentToken', function() {
      it('should call patchAgentToken successfully', function(done) {
        //uncomment below and update the code to test patchAgentToken
        //instance.patchAgentToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncAgent', function() {
      it('should call syncAgent successfully', function(done) {
        //uncomment below and update the code to test syncAgent
        //instance.syncAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAgent', function() {
      it('should call updateAgent successfully', function(done) {
        //uncomment below and update the code to test updateAgent
        //instance.updateAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAgentConfig', function() {
      it('should call updateAgentConfig successfully', function(done) {
        //uncomment below and update the code to test updateAgentConfig
        //instance.updateAgentConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAgentToken', function() {
      it('should call updateAgentToken successfully', function(done) {
        //uncomment below and update the code to test updateAgentToken
        //instance.updateAgentToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
