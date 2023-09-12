/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc40
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
 * - any: Any view  - runs: Runs view  - selection: Selection view  - analytics: Analytics view  - components: Components view  - models: Models view  - artifacts: Artifacts view  - projects: Projects view
 */
@JsonAdapter(SearchView.Adapter.class)
public enum SearchView {

  ANY("any"),

  RUNS("runs"),

  SELECTION("selection"),

  ANALYTICS("analytics"),

  COMPONENTS("components"),

  MODELS("models"),

  ARTIFACTS("artifacts"),

  PROJECTS("projects");

  private String value;

  SearchView(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static SearchView fromValue(String value) {
    for (SearchView b : SearchView.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<SearchView> {
    @Override
    public void write(final JsonWriter jsonWriter, final SearchView enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public SearchView read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return SearchView.fromValue(value);
    }
  }
}

