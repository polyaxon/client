// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc13
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
 * Gets or Sets v1TriggerPolicy
 */
@JsonAdapter(V1TriggerPolicy.Adapter.class)
public enum V1TriggerPolicy {
  
  ALL_SUCCEEDED("all_succeeded"),
  
  ALL_FAILED("all_failed"),
  
  ALL_DONE("all_done"),
  
  ONE_SUCCEEDED("one_succeeded"),
  
  ONE_FAILED("one_failed"),
  
  ONE_DONE("one_done");

  private String value;

  V1TriggerPolicy(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1TriggerPolicy fromValue(String value) {
    for (V1TriggerPolicy b : V1TriggerPolicy.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1TriggerPolicy> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1TriggerPolicy enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1TriggerPolicy read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1TriggerPolicy.fromValue(value);
    }
  }
}

