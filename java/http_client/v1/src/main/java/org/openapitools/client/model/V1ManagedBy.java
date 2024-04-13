/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.6
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
 * Gets or Sets v1ManagedBy
 */
@JsonAdapter(V1ManagedBy.Adapter.class)
public enum V1ManagedBy {

  CLIENT("client"),

  CLI("cli"),

  AGENT("agent");

  private String value;

  V1ManagedBy(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1ManagedBy fromValue(String value) {
    for (V1ManagedBy b : V1ManagedBy.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1ManagedBy> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1ManagedBy enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1ManagedBy read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1ManagedBy.fromValue(value);
    }
  }
}

