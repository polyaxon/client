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
    instance = new PolyaxonSdk.ProjectsV1Api();
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

  describe('ProjectsV1Api', function() {
    describe('archiveProject', function() {
      it('should call archiveProject successfully', function(done) {
        //uncomment below and update the code to test archiveProject
        //instance.archiveProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bookmarkProject', function() {
      it('should call bookmarkProject successfully', function(done) {
        //uncomment below and update the code to test bookmarkProject
        //instance.bookmarkProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProject', function() {
      it('should call createProject successfully', function(done) {
        //uncomment below and update the code to test createProject
        //instance.createProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVersion', function() {
      it('should call createVersion successfully', function(done) {
        //uncomment below and update the code to test createVersion
        //instance.createVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVersionStage', function() {
      it('should call createVersionStage successfully', function(done) {
        //uncomment below and update the code to test createVersionStage
        //instance.createVersionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProject', function() {
      it('should call deleteProject successfully', function(done) {
        //uncomment below and update the code to test deleteProject
        //instance.deleteProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVersion', function() {
      it('should call deleteVersion successfully', function(done) {
        //uncomment below and update the code to test deleteVersion
        //instance.deleteVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('disableProjectCI', function() {
      it('should call disableProjectCI successfully', function(done) {
        //uncomment below and update the code to test disableProjectCI
        //instance.disableProjectCI(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableProjectCI', function() {
      it('should call enableProjectCI successfully', function(done) {
        //uncomment below and update the code to test enableProjectCI
        //instance.enableProjectCI(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProject', function() {
      it('should call getProject successfully', function(done) {
        //uncomment below and update the code to test getProject
        //instance.getProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectActivities', function() {
      it('should call getProjectActivities successfully', function(done) {
        //uncomment below and update the code to test getProjectActivities
        //instance.getProjectActivities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectSettings', function() {
      it('should call getProjectSettings successfully', function(done) {
        //uncomment below and update the code to test getProjectSettings
        //instance.getProjectSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectStats', function() {
      it('should call getProjectStats successfully', function(done) {
        //uncomment below and update the code to test getProjectStats
        //instance.getProjectStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVersion', function() {
      it('should call getVersion successfully', function(done) {
        //uncomment below and update the code to test getVersion
        //instance.getVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVersionStages', function() {
      it('should call getVersionStages successfully', function(done) {
        //uncomment below and update the code to test getVersionStages
        //instance.getVersionStages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listArchivedProjects', function() {
      it('should call listArchivedProjects successfully', function(done) {
        //uncomment below and update the code to test listArchivedProjects
        //instance.listArchivedProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBookmarkedProjects', function() {
      it('should call listBookmarkedProjects successfully', function(done) {
        //uncomment below and update the code to test listBookmarkedProjects
        //instance.listBookmarkedProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProjectNames', function() {
      it('should call listProjectNames successfully', function(done) {
        //uncomment below and update the code to test listProjectNames
        //instance.listProjectNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProjects', function() {
      it('should call listProjects successfully', function(done) {
        //uncomment below and update the code to test listProjects
        //instance.listProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listVersionNames', function() {
      it('should call listVersionNames successfully', function(done) {
        //uncomment below and update the code to test listVersionNames
        //instance.listVersionNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listVersions', function() {
      it('should call listVersions successfully', function(done) {
        //uncomment below and update the code to test listVersions
        //instance.listVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProject', function() {
      it('should call patchProject successfully', function(done) {
        //uncomment below and update the code to test patchProject
        //instance.patchProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProjectSettings', function() {
      it('should call patchProjectSettings successfully', function(done) {
        //uncomment below and update the code to test patchProjectSettings
        //instance.patchProjectSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchVersion', function() {
      it('should call patchVersion successfully', function(done) {
        //uncomment below and update the code to test patchVersion
        //instance.patchVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreProject', function() {
      it('should call restoreProject successfully', function(done) {
        //uncomment below and update the code to test restoreProject
        //instance.restoreProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferVersion', function() {
      it('should call transferVersion successfully', function(done) {
        //uncomment below and update the code to test transferVersion
        //instance.transferVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unbookmarkProject', function() {
      it('should call unbookmarkProject successfully', function(done) {
        //uncomment below and update the code to test unbookmarkProject
        //instance.unbookmarkProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProject', function() {
      it('should call updateProject successfully', function(done) {
        //uncomment below and update the code to test updateProject
        //instance.updateProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProjectSettings', function() {
      it('should call updateProjectSettings successfully', function(done) {
        //uncomment below and update the code to test updateProjectSettings
        //instance.updateProjectSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVersion', function() {
      it('should call updateVersion successfully', function(done) {
        //uncomment below and update the code to test updateVersion
        //instance.updateVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadProjectArtifact', function() {
      it('should call uploadProjectArtifact successfully', function(done) {
        //uncomment below and update the code to test uploadProjectArtifact
        //instance.uploadProjectArtifact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
