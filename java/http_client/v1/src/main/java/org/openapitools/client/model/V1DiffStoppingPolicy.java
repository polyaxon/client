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
 * The version of the OpenAPI document: 2.0.0-rc9
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * Early stopping with diff factor stopping, this policy computes checks runs against the best run and stops those whose performance is worse than the best by the factor defined by the user.
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1DiffStoppingPolicy {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind;

  public static final String SERIALIZED_NAME_PERCENT = "percent";
  @SerializedName(SERIALIZED_NAME_PERCENT)
  private Float percent;

  public static final String SERIALIZED_NAME_EVALUATION_INTERVAL = "evaluationInterval";
  @SerializedName(SERIALIZED_NAME_EVALUATION_INTERVAL)
  private Integer evaluationInterval;

  public static final String SERIALIZED_NAME_MIN_INTERVAL = "minInterval";
  @SerializedName(SERIALIZED_NAME_MIN_INTERVAL)
  private Integer minInterval;

  public static final String SERIALIZED_NAME_MIN_SAMPLES = "minSamples";
  @SerializedName(SERIALIZED_NAME_MIN_SAMPLES)
  private Integer minSamples;

  public V1DiffStoppingPolicy() {
  }

  public V1DiffStoppingPolicy kind(String kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1DiffStoppingPolicy percent(Float percent) {

    this.percent = percent;
    return this;
  }

   /**
   * Get percent
   * @return percent
  **/
  @javax.annotation.Nullable

  public Float getPercent() {
    return percent;
  }


  public void setPercent(Float percent) {
    this.percent = percent;
  }


  public V1DiffStoppingPolicy evaluationInterval(Integer evaluationInterval) {

    this.evaluationInterval = evaluationInterval;
    return this;
  }

   /**
   * Interval/Frequency for applying the policy.
   * @return evaluationInterval
  **/
  @javax.annotation.Nullable

  public Integer getEvaluationInterval() {
    return evaluationInterval;
  }


  public void setEvaluationInterval(Integer evaluationInterval) {
    this.evaluationInterval = evaluationInterval;
  }


  public V1DiffStoppingPolicy minInterval(Integer minInterval) {

    this.minInterval = minInterval;
    return this;
  }

   /**
   * Get minInterval
   * @return minInterval
  **/
  @javax.annotation.Nullable

  public Integer getMinInterval() {
    return minInterval;
  }


  public void setMinInterval(Integer minInterval) {
    this.minInterval = minInterval;
  }


  public V1DiffStoppingPolicy minSamples(Integer minSamples) {

    this.minSamples = minSamples;
    return this;
  }

   /**
   * Get minSamples
   * @return minSamples
  **/
  @javax.annotation.Nullable

  public Integer getMinSamples() {
    return minSamples;
  }


  public void setMinSamples(Integer minSamples) {
    this.minSamples = minSamples;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1DiffStoppingPolicy v1DiffStoppingPolicy = (V1DiffStoppingPolicy) o;
    return Objects.equals(this.kind, v1DiffStoppingPolicy.kind) &&
        Objects.equals(this.percent, v1DiffStoppingPolicy.percent) &&
        Objects.equals(this.evaluationInterval, v1DiffStoppingPolicy.evaluationInterval) &&
        Objects.equals(this.minInterval, v1DiffStoppingPolicy.minInterval) &&
        Objects.equals(this.minSamples, v1DiffStoppingPolicy.minSamples);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, percent, evaluationInterval, minInterval, minSamples);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1DiffStoppingPolicy {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    percent: ").append(toIndentedString(percent)).append("\n");
    sb.append("    evaluationInterval: ").append(toIndentedString(evaluationInterval)).append("\n");
    sb.append("    minInterval: ").append(toIndentedString(minInterval)).append("\n");
    sb.append("    minSamples: ").append(toIndentedString(minSamples)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("kind");
    openapiFields.add("percent");
    openapiFields.add("evaluationInterval");
    openapiFields.add("minInterval");
    openapiFields.add("minSamples");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1DiffStoppingPolicy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1DiffStoppingPolicy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1DiffStoppingPolicy is not found in the empty JSON string", V1DiffStoppingPolicy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1DiffStoppingPolicy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1DiffStoppingPolicy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1DiffStoppingPolicy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1DiffStoppingPolicy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1DiffStoppingPolicy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1DiffStoppingPolicy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1DiffStoppingPolicy>() {
           @Override
           public void write(JsonWriter out, V1DiffStoppingPolicy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1DiffStoppingPolicy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1DiffStoppingPolicy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1DiffStoppingPolicy
  * @throws IOException if the JSON string is invalid with respect to V1DiffStoppingPolicy
  */
  public static V1DiffStoppingPolicy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1DiffStoppingPolicy.class);
  }

 /**
  * Convert an instance of V1DiffStoppingPolicy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

