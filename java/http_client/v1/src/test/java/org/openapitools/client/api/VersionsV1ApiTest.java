/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1Compatibility;
import org.openapitools.client.model.V1Installation;
import org.openapitools.client.model.V1LogHandler;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for VersionsV1Api
 */
@Disabled
public class VersionsV1ApiTest {

    private final VersionsV1Api api = new VersionsV1Api();

    /**
     * Get compatibility versions
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getCompatibilityTest() throws ApiException {
        String uuid = null;
        String version = null;
        String service = null;
        V1Compatibility response = api.getCompatibility(uuid, version, service);
        // TODO: test validations
    }

    /**
     * Get installation versions
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getInstallationTest() throws ApiException {
        Boolean auth = null;
        Boolean orgs = null;
        V1Installation response = api.getInstallation(auth, orgs);
        // TODO: test validations
    }

    /**
     * Get log handler versions
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getLogHandlerTest() throws ApiException {
        V1LogHandler response = api.getLogHandler();
        // TODO: test validations
    }

}
