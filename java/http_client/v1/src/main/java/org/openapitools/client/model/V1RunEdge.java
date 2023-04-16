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
 * The version of the OpenAPI document: 2.0.0-rc8
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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1Run;
import org.openapitools.client.model.V1RunEdgeKind;
import org.openapitools.client.model.V1Statuses;

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
 * V1RunEdge
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RunEdge {
  public static final String SERIALIZED_NAME_UPSTREAM = "upstream";
  @SerializedName(SERIALIZED_NAME_UPSTREAM)
  private V1Run upstream;

  public static final String SERIALIZED_NAME_DOWNSTREAM = "downstream";
  @SerializedName(SERIALIZED_NAME_DOWNSTREAM)
  private V1Run downstream;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1RunEdgeKind kind = V1RunEdgeKind.ACTION;

  public static final String SERIALIZED_NAME_VALUES = "values";
  @SerializedName(SERIALIZED_NAME_VALUES)
  private Object values;

  public static final String SERIALIZED_NAME_STATUSES = "statuses";
  @SerializedName(SERIALIZED_NAME_STATUSES)
  private List<V1Statuses> statuses;

  public V1RunEdge() {
  }

  public V1RunEdge upstream(V1Run upstream) {

    this.upstream = upstream;
    return this;
  }

   /**
   * Get upstream
   * @return upstream
  **/
  @javax.annotation.Nullable

  public V1Run getUpstream() {
    return upstream;
  }


  public void setUpstream(V1Run upstream) {
    this.upstream = upstream;
  }


  public V1RunEdge downstream(V1Run downstream) {

    this.downstream = downstream;
    return this;
  }

   /**
   * Get downstream
   * @return downstream
  **/
  @javax.annotation.Nullable

  public V1Run getDownstream() {
    return downstream;
  }


  public void setDownstream(V1Run downstream) {
    this.downstream = downstream;
  }


  public V1RunEdge kind(V1RunEdgeKind kind) {

    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable

  public V1RunEdgeKind getKind() {
    return kind;
  }


  public void setKind(V1RunEdgeKind kind) {
    this.kind = kind;
  }


  public V1RunEdge values(Object values) {

    this.values = values;
    return this;
  }

   /**
   * Get values
   * @return values
  **/
  @javax.annotation.Nullable

  public Object getValues() {
    return values;
  }


  public void setValues(Object values) {
    this.values = values;
  }


  public V1RunEdge statuses(List<V1Statuses> statuses) {

    this.statuses = statuses;
    return this;
  }

  public V1RunEdge addStatusesItem(V1Statuses statusesItem) {
    if (this.statuses == null) {
      this.statuses = new ArrayList<>();
    }
    this.statuses.add(statusesItem);
    return this;
  }

   /**
   * Get statuses
   * @return statuses
  **/
  @javax.annotation.Nullable

  public List<V1Statuses> getStatuses() {
    return statuses;
  }


  public void setStatuses(List<V1Statuses> statuses) {
    this.statuses = statuses;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunEdge v1RunEdge = (V1RunEdge) o;
    return Objects.equals(this.upstream, v1RunEdge.upstream) &&
        Objects.equals(this.downstream, v1RunEdge.downstream) &&
        Objects.equals(this.kind, v1RunEdge.kind) &&
        Objects.equals(this.values, v1RunEdge.values) &&
        Objects.equals(this.statuses, v1RunEdge.statuses);
  }

  @Override
  public int hashCode() {
    return Objects.hash(upstream, downstream, kind, values, statuses);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunEdge {\n");
    sb.append("    upstream: ").append(toIndentedString(upstream)).append("\n");
    sb.append("    downstream: ").append(toIndentedString(downstream)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
    sb.append("    statuses: ").append(toIndentedString(statuses)).append("\n");
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
    openapiFields.add("upstream");
    openapiFields.add("downstream");
    openapiFields.add("kind");
    openapiFields.add("values");
    openapiFields.add("statuses");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1RunEdge
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1RunEdge.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1RunEdge is not found in the empty JSON string", V1RunEdge.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1RunEdge.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1RunEdge` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // validate the optional field `upstream`
      if (jsonObj.get("upstream") != null && !jsonObj.get("upstream").isJsonNull()) {
        V1Run.validateJsonObject(jsonObj.getAsJsonObject("upstream"));
      }
      // validate the optional field `downstream`
      if (jsonObj.get("downstream") != null && !jsonObj.get("downstream").isJsonNull()) {
        V1Run.validateJsonObject(jsonObj.getAsJsonObject("downstream"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("statuses") != null && !jsonObj.get("statuses").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `statuses` to be an array in the JSON string but got `%s`", jsonObj.get("statuses").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1RunEdge.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1RunEdge' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1RunEdge> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1RunEdge.class));

       return (TypeAdapter<T>) new TypeAdapter<V1RunEdge>() {
           @Override
           public void write(JsonWriter out, V1RunEdge value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1RunEdge read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1RunEdge given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1RunEdge
  * @throws IOException if the JSON string is invalid with respect to V1RunEdge
  */
  public static V1RunEdge fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1RunEdge.class);
  }

 /**
  * Convert an instance of V1RunEdge to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

