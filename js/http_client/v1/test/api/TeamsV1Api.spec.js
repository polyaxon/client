/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.8
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
    instance = new PolyaxonSdk.TeamsV1Api();
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

  describe('TeamsV1Api', function() {
    describe('approveTeamRuns', function() {
      it('should call approveTeamRuns successfully', function(done) {
        //uncomment below and update the code to test approveTeamRuns
        //instance.approveTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('archiveTeamRuns', function() {
      it('should call archiveTeamRuns successfully', function(done) {
        //uncomment below and update the code to test archiveTeamRuns
        //instance.archiveTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkTeamRuns', function() {
      it('should call bookmarkTeamRuns successfully', function(done) {
        //uncomment below and update the code to test bookmarkTeamRuns
        //instance.bookmarkTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTeam', function() {
      it('should call createTeam successfully', function(done) {
        //uncomment below and update the code to test createTeam
        //instance.createTeam(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTeamMember', function() {
      it('should call createTeamMember successfully', function(done) {
        //uncomment below and update the code to test createTeamMember
        //instance.createTeamMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTeam', function() {
      it('should call deleteTeam successfully', function(done) {
        //uncomment below and update the code to test deleteTeam
        //instance.deleteTeam(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTeamMember', function() {
      it('should call deleteTeamMember successfully', function(done) {
        //uncomment below and update the code to test deleteTeamMember
        //instance.deleteTeamMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTeamRuns', function() {
      it('should call deleteTeamRuns successfully', function(done) {
        //uncomment below and update the code to test deleteTeamRuns
        //instance.deleteTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeam', function() {
      it('should call getTeam successfully', function(done) {
        //uncomment below and update the code to test getTeam
        //instance.getTeam(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamActivities', function() {
      it('should call getTeamActivities successfully', function(done) {
        //uncomment below and update the code to test getTeamActivities
        //instance.getTeamActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamMember', function() {
      it('should call getTeamMember successfully', function(done) {
        //uncomment below and update the code to test getTeamMember
        //instance.getTeamMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamRun', function() {
      it('should call getTeamRun successfully', function(done) {
        //uncomment below and update the code to test getTeamRun
        //instance.getTeamRun(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamRuns', function() {
      it('should call getTeamRuns successfully', function(done) {
        //uncomment below and update the code to test getTeamRuns
        //instance.getTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamStats', function() {
      it('should call getTeamStats successfully', function(done) {
        //uncomment below and update the code to test getTeamStats
        //instance.getTeamStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamVersions', function() {
      it('should call getTeamVersions successfully', function(done) {
        //uncomment below and update the code to test getTeamVersions
        //instance.getTeamVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invalidateTeamRuns', function() {
      it('should call invalidateTeamRuns successfully', function(done) {
        //uncomment below and update the code to test invalidateTeamRuns
        //instance.invalidateTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTeamMembers', function() {
      it('should call listTeamMembers successfully', function(done) {
        //uncomment below and update the code to test listTeamMembers
        //instance.listTeamMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTeamNames', function() {
      it('should call listTeamNames successfully', function(done) {
        //uncomment below and update the code to test listTeamNames
        //instance.listTeamNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTeams', function() {
      it('should call listTeams successfully', function(done) {
        //uncomment below and update the code to test listTeams
        //instance.listTeams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchTeam', function() {
      it('should call patchTeam successfully', function(done) {
        //uncomment below and update the code to test patchTeam
        //instance.patchTeam(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchTeamMember', function() {
      it('should call patchTeamMember successfully', function(done) {
        //uncomment below and update the code to test patchTeamMember
        //instance.patchTeamMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreTeamRuns', function() {
      it('should call restoreTeamRuns successfully', function(done) {
        //uncomment below and update the code to test restoreTeamRuns
        //instance.restoreTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('skipTeamRuns', function() {
      it('should call skipTeamRuns successfully', function(done) {
        //uncomment below and update the code to test skipTeamRuns
        //instance.skipTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopTeamRuns', function() {
      it('should call stopTeamRuns successfully', function(done) {
        //uncomment below and update the code to test stopTeamRuns
        //instance.stopTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tagTeamRuns', function() {
      it('should call tagTeamRuns successfully', function(done) {
        //uncomment below and update the code to test tagTeamRuns
        //instance.tagTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferTeamRuns', function() {
      it('should call transferTeamRuns successfully', function(done) {
        //uncomment below and update the code to test transferTeamRuns
        //instance.transferTeamRuns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTeam', function() {
      it('should call updateTeam successfully', function(done) {
        //uncomment below and update the code to test updateTeam
        //instance.updateTeam(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTeamMember', function() {
      it('should call updateTeamMember successfully', function(done) {
        //uncomment below and update the code to test updateTeamMember
        //instance.updateTeamMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
