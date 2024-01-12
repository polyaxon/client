/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import java.time.OffsetDateTime;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1EntitiesTags;
import org.openapitools.client.model.V1EntitiesTransfer;
import org.openapitools.client.model.V1ListActivitiesResponse;
import org.openapitools.client.model.V1ListOrganizationMembersResponse;
import org.openapitools.client.model.V1ListOrganizationsResponse;
import org.openapitools.client.model.V1ListProjectVersionsResponse;
import org.openapitools.client.model.V1ListRunsResponse;
import org.openapitools.client.model.V1Organization;
import org.openapitools.client.model.V1OrganizationMember;
import org.openapitools.client.model.V1Run;
import org.openapitools.client.model.V1Uuids;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for OrganizationsV1Api
 */
@Disabled
public class OrganizationsV1ApiTest {

    private final OrganizationsV1Api api = new OrganizationsV1Api();

    /**
     * Approve cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void approveOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.approveOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Archive cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void archiveOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.archiveOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Bookmark cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void bookmarkOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.bookmarkOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Create organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createOrganizationTest() throws ApiException {
        V1Organization body = null;
        V1Organization response = api.createOrganization(body);
        // TODO: test validations
    }

    /**
     * Create organization member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createOrganizationMemberTest() throws ApiException {
        String owner = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.createOrganizationMember(owner, body, email);
        // TODO: test validations
    }

    /**
     * Delete organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteOrganizationTest() throws ApiException {
        String owner = null;
        String usage = null;
        api.deleteOrganization(owner, usage);
        // TODO: test validations
    }

    /**
     * Delete organization invitation details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteOrganizationInvitationTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        String memberUserEmail = null;
        String memberRole = null;
        String memberKind = null;
        OffsetDateTime memberCreatedAt = null;
        OffsetDateTime memberUpdatedAt = null;
        String email = null;
        api.deleteOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email);
        // TODO: test validations
    }

    /**
     * Delete organization member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteOrganizationMemberTest() throws ApiException {
        String owner = null;
        String name = null;
        api.deleteOrganizationMember(owner, name);
        // TODO: test validations
    }

    /**
     * Delete cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.deleteOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Get organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationTest() throws ApiException {
        String owner = null;
        String usage = null;
        V1Organization response = api.getOrganization(owner, usage);
        // TODO: test validations
    }

    /**
     * Get organization activities
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationActivitiesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListActivitiesResponse response = api.getOrganizationActivities(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get organization invitation details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationInvitationTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        String memberUserEmail = null;
        String memberRole = null;
        String memberKind = null;
        OffsetDateTime memberCreatedAt = null;
        OffsetDateTime memberUpdatedAt = null;
        String email = null;
        V1OrganizationMember response = api.getOrganizationInvitation(owner, memberUser, memberUserEmail, memberRole, memberKind, memberCreatedAt, memberUpdatedAt, email);
        // TODO: test validations
    }

    /**
     * Get organization member details
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationMemberTest() throws ApiException {
        String owner = null;
        String name = null;
        V1OrganizationMember response = api.getOrganizationMember(owner, name);
        // TODO: test validations
    }

    /**
     * Get a run in an organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationRunTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1Run response = api.getOrganizationRun(owner, uuid);
        // TODO: test validations
    }

    /**
     * Get all runs in an organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationRunsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListRunsResponse response = api.getOrganizationRuns(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get organization settings
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationSettingsTest() throws ApiException {
        String owner = null;
        String organizationUser = null;
        String organizationUserEmail = null;
        String organizationName = null;
        Boolean organizationIsPublic = null;
        OffsetDateTime organizationCreatedAt = null;
        OffsetDateTime organizationUpdatedAt = null;
        OffsetDateTime organizationSupportRevokeAt = null;
        Integer organizationExpiration = null;
        String organizationRole = null;
        String organizationQueue = null;
        String organizationPreset = null;
        Boolean organizationIsCloudViewable = null;
        Integer organizationArchivedDeletionInterval = null;
        V1Organization response = api.getOrganizationSettings(owner, organizationUser, organizationUserEmail, organizationName, organizationIsPublic, organizationCreatedAt, organizationUpdatedAt, organizationSupportRevokeAt, organizationExpiration, organizationRole, organizationQueue, organizationPreset, organizationIsCloudViewable, organizationArchivedDeletionInterval);
        // TODO: test validations
    }

    /**
     * Get organization stats
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationStatsTest() throws ApiException {
        String owner = null;
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
        Object response = api.getOrganizationStats(owner, offset, limit, sort, query, bookmarks, mode, kind, aggregate, groupby, trunc);
        // TODO: test validations
    }

    /**
     * Get all runs in an organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getOrganizationVersionsTest() throws ApiException {
        String owner = null;
        String kind = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean noPage = null;
        V1ListProjectVersionsResponse response = api.getOrganizationVersions(owner, kind, offset, limit, sort, query, noPage);
        // TODO: test validations
    }

    /**
     * Invalidate cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void invalidateOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.invalidateOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Get organization member names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listOrganizationMemberNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListOrganizationMembersResponse response = api.listOrganizationMemberNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Get organization members
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listOrganizationMembersTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListOrganizationMembersResponse response = api.listOrganizationMembers(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List organizations names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listOrganizationNamesTest() throws ApiException {
        V1ListOrganizationsResponse response = api.listOrganizationNames();
        // TODO: test validations
    }

    /**
     * List organizations
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listOrganizationsTest() throws ApiException {
        V1ListOrganizationsResponse response = api.listOrganizations();
        // TODO: test validations
    }

    /**
     * Organization license
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void organizationLicenseTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.organizationLicense(owner, body);
        // TODO: test validations
    }

    /**
     * Organization plan
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void organizationPlanTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.organizationPlan(owner, body);
        // TODO: test validations
    }

    /**
     * Patch organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchOrganizationTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.patchOrganization(owner, body);
        // TODO: test validations
    }

    /**
     * Patch organization invitation
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchOrganizationInvitationTest() throws ApiException {
        String owner = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.patchOrganizationInvitation(owner, body, email);
        // TODO: test validations
    }

    /**
     * Patch organization member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchOrganizationMemberTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.patchOrganizationMember(owner, memberUser, body, email);
        // TODO: test validations
    }

    /**
     * Patch oranization settings
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchOrganizationSettingsTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.patchOrganizationSettings(owner, body);
        // TODO: test validations
    }

    /**
     * Resend organization invitation
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void resendOrganizationInvitationTest() throws ApiException {
        String owner = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.resendOrganizationInvitation(owner, body, email);
        // TODO: test validations
    }

    /**
     * Restore cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void restoreOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.restoreOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Skip cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void skipOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.skipOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Stop cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void stopOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1Uuids body = null;
        api.stopOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Tag cross-project runs selection
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void tagOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1EntitiesTags body = null;
        api.tagOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Transfer cross-project runs selection to a new project
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void transferOrganizationRunsTest() throws ApiException {
        String owner = null;
        V1EntitiesTransfer body = null;
        api.transferOrganizationRuns(owner, body);
        // TODO: test validations
    }

    /**
     * Update organization
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrganizationTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.updateOrganization(owner, body);
        // TODO: test validations
    }

    /**
     * Update organization invitation
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrganizationInvitationTest() throws ApiException {
        String owner = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.updateOrganizationInvitation(owner, body, email);
        // TODO: test validations
    }

    /**
     * Update organization member
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrganizationMemberTest() throws ApiException {
        String owner = null;
        String memberUser = null;
        V1OrganizationMember body = null;
        String email = null;
        V1OrganizationMember response = api.updateOrganizationMember(owner, memberUser, body, email);
        // TODO: test validations
    }

    /**
     * Update organization settings
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrganizationSettingsTest() throws ApiException {
        String owner = null;
        V1Organization body = null;
        V1Organization response = api.updateOrganizationSettings(owner, body);
        // TODO: test validations
    }

}
