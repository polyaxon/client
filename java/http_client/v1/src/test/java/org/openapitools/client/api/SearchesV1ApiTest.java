/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListSearchesResponse;
import org.openapitools.client.model.V1Search;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SearchesV1Api
 */
@Disabled
public class SearchesV1ApiTest {

    private final SearchesV1Api api = new SearchesV1Api();

    /**
     * Create search
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createSearchTest() throws ApiException {
        String owner = null;
        V1Search body = null;
        V1Search response = api.createSearch(owner, body);
        // TODO: test validations
    }

    /**
     * Delete search
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteSearchTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteSearch(owner, uuid);
        // TODO: test validations
    }

    /**
     * Get search
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getSearchTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1Search response = api.getSearch(owner, uuid);
        // TODO: test validations
    }

    /**
     * List search names
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listSearchNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListSearchesResponse response = api.listSearchNames(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * List searches
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listSearchesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        Boolean bookmarks = null;
        String mode = null;
        Boolean noPage = null;
        V1ListSearchesResponse response = api.listSearches(owner, offset, limit, sort, query, bookmarks, mode, noPage);
        // TODO: test validations
    }

    /**
     * Patch search
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void patchSearchTest() throws ApiException {
        String owner = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.patchSearch(owner, searchUuid, body);
        // TODO: test validations
    }

    /**
     * Update search
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateSearchTest() throws ApiException {
        String owner = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.updateSearch(owner, searchUuid, body);
        // TODO: test validations
    }

}
