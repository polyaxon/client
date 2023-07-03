/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
 * Gets or Sets v1SparkType
 */
@JsonAdapter(V1SparkType.Adapter.class)
public enum V1SparkType {

  JAVA("java"),

  SCALA("scala"),

  PYTHON("python"),

  R("r");

  private String value;

  V1SparkType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1SparkType fromValue(String value) {
    for (V1SparkType b : V1SparkType.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1SparkType> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1SparkType enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1SparkType read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1SparkType.fromValue(value);
    }
  }
}

