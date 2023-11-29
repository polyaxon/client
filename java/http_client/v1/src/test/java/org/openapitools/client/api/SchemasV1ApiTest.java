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
import org.openapitools.client.model.V1Schemas;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SchemasV1Api
 */
@Disabled
public class SchemasV1ApiTest {

    private final SchemasV1Api api = new SchemasV1Api();

    /**
     * NoOp
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void noOpTest() throws ApiException {
        V1Schemas response = api.noOp();
        // TODO: test validations
    }

}
