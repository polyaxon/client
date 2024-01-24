/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc12
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Gets or Sets v1Stages
 */
@JsonAdapter(V1Stages.Adapter.class)
public enum V1Stages {

  TESTING("testing"),

  STAGING("staging"),

  PRODUCTION("production"),

  DISABLED("disabled");

  private String value;

  V1Stages(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1Stages fromValue(String value) {
    for (V1Stages b : V1Stages.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1Stages> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1Stages enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1Stages read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1Stages.fromValue(value);
    }
  }
}

