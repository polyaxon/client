/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1EntitiesTags;
import org.openapitools.client.model.V1EntitiesTransfer;
import org.openapitools.client.model.V1ListActivitiesResponse;
import org.openapitools.client.model.V1ListProjectVersionsResponse;
import org.openapitools.client.model.V1ListRunArtifactsResponse;
import org.openapitools.client.model.V1ListRunsResponse;
import org.openapitools.client.model.V1ListTeamMembersResponse;
import org.openapitools.client.model.V1ListTeamsResponse;
import org.openapitools.client.model.V1MultiEventsResponse;
import org.openapitools.client.model.V1Run;
import org.openapitools.client.model.V1Team;
import org.openapitools.client.model.V1TeamMember;
import org.openapitools.client.model.V1Uuids;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TeamsV1Api
 */
@Disabled
public class TeamsV1ApiTest {

    private final TeamsV1Api api = new TeamsV1Api();

    /**
     * Approve cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void approveTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.approveTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Archive cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void archiveTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.archiveTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Bookmark cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void bookmarkTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.bookmarkTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Create team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createTeamTest() throws ApiException {
        String owner = null;
        V1Team body = null;
        V1Team response = api.createTeam(owner, body);
        // TODO: test validations
    }

    /**
     * Create team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        V1TeamMember body = null;
        V1TeamMember response = api.createTeamMember(owner, team, body);
        // TODO: test validations
    }

    /**
     * Delete team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        api.deleteTeam(owner, name);
        // TODO: test validations
    }

    /**
     * Delete team member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        api.deleteTeamMember(owner, team, user);
        // TODO: test validations
    }

    /**
     * Delete cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.deleteTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Get team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Team response = api.getTeam(owner, name);
        // TODO: test validations
    }

    /**
     * Get organization activities
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamActivitiesTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListActivitiesResponse response = api.getTeamActivities(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get team member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String user = null;
        V1TeamMember response = api.getTeamMember(owner, team, user);
        // TODO: test validations
    }

    /**
     * Get multi runs events
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamMultiRunEventsTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String entity = null;
        String kind = null;
        String names = null;
        String runs = null;
        String orient = null;
        Boolean force = null;
        Integer sample = null;
        String connection = null;
        String status = null;
        V1MultiEventsResponse response = api.getTeamMultiRunEvents(namespace, owner, entity, kind, names, runs, orient, force, sample, connection, status);
        // TODO: test validations
    }

    /**
     * Get multi run importance
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamMultiRunImportanceTest() throws ApiException {
        String namespace = null;
        String owner = null;
        String entity = null;
        Object body = null;
        V1MultiEventsResponse response = api.getTeamMultiRunImportance(namespace, owner, entity, body);
        // TODO: test validations
    }

    /**
     * Get a run in a team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamRunTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1Run response = api.getTeamRun(owner, entity, uuid);
        // TODO: test validations
    }

    /**
     * Get all runs in a team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListRunsResponse response = api.getTeamRuns(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get runs artifacts lineage
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamRunsArtifactsLineageTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListRunArtifactsResponse response = api.getTeamRunsArtifactsLineage(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get team stats
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamStatsTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        String kind = null;
        String aggregate = null;
        String groupby = null;
        String trunc = null;
        Object response = api.getTeamStats(owner, name, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc);
        // TODO: test validations
    }

    /**
     * Get all runs in a team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTeamVersionsTest() throws ApiException {
        String owner = null;
        String entity = null;
        String kind = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
        V1ListProjectVersionsResponse response = api.getTeamVersions(owner, entity, kind, offset, limit, sort, query, noPage);
        // TODO: test validations
    }

    /**
     * Invalidate cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void invalidateTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.invalidateTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Get team members
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamMembersTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamMembersResponse response = api.listTeamMembers(owner, name, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List teams names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamsResponse response = api.listTeamNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List teams
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listTeamsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListTeamsResponse response = api.listTeams(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.patchTeam(owner, teamName, body);
        // TODO: test validations
    }

    /**
     * Patch team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.patchTeamMember(owner, team, memberUser, body);
        // TODO: test validations
    }

    /**
     * Restore cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void restoreTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.restoreTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Skip cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void skipTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.skipTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Stop cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void stopTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1Uuids body = null;
        api.stopTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Tag cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void tagTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1EntitiesTags body = null;
        api.tagTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Transfer cross-project runs selection to a new project
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void transferTeamRunsTest() throws ApiException {
        String owner = null;
        String name = null;
        V1EntitiesTransfer body = null;
        api.transferTeamRuns(owner, name, body);
        // TODO: test validations
    }

    /**
     * Update team
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateTeamTest() throws ApiException {
        String owner = null;
        String teamName = null;
        V1Team body = null;
        V1Team response = api.updateTeam(owner, teamName, body);
        // TODO: test validations
    }

    /**
     * Update team member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateTeamMemberTest() throws ApiException {
        String owner = null;
        String team = null;
        String memberUser = null;
        V1TeamMember body = null;
        V1TeamMember response = api.updateTeamMember(owner, team, memberUser, body);
        // TODO: test validations
    }

}
