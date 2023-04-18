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
import java.time.OffsetDateTime;

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
 * V1TeamMember
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1TeamMember {
  public static final String SERIALIZED_NAME_USER = "user";
  @SerializedName(SERIALIZED_NAME_USER)
  private String user;

  public static final String SERIALIZED_NAME_USER_EMAIL = "user_email";
  @SerializedName(SERIALIZED_NAME_USER_EMAIL)
  private String userEmail;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private String role;

  public static final String SERIALIZED_NAME_ORG_ROLE = "org_role";
  @SerializedName(SERIALIZED_NAME_ORG_ROLE)
  private String orgRole;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public V1TeamMember() {
  }

  public V1TeamMember user(String user) {

    this.user = user;
    return this;
  }

   /**
   * Get user
   * @return user
  **/
  @javax.annotation.Nullable

  public String getUser() {
    return user;
  }


  public void setUser(String user) {
    this.user = user;
  }


  public V1TeamMember userEmail(String userEmail) {

    this.userEmail = userEmail;
    return this;
  }

   /**
   * Get userEmail
   * @return userEmail
  **/
  @javax.annotation.Nullable

  public String getUserEmail() {
    return userEmail;
  }


  public void setUserEmail(String userEmail) {
    this.userEmail = userEmail;
  }


  public V1TeamMember role(String role) {

    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nullable

  public String getRole() {
    return role;
  }


  public void setRole(String role) {
    this.role = role;
  }


  public V1TeamMember orgRole(String orgRole) {

    this.orgRole = orgRole;
    return this;
  }

   /**
   * Get orgRole
   * @return orgRole
  **/
  @javax.annotation.Nullable

  public String getOrgRole() {
    return orgRole;
  }


  public void setOrgRole(String orgRole) {
    this.orgRole = orgRole;
  }


  public V1TeamMember createdAt(OffsetDateTime createdAt) {

    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1TeamMember updatedAt(OffsetDateTime updatedAt) {

    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1TeamMember v1TeamMember = (V1TeamMember) o;
    return Objects.equals(this.user, v1TeamMember.user) &&
        Objects.equals(this.userEmail, v1TeamMember.userEmail) &&
        Objects.equals(this.role, v1TeamMember.role) &&
        Objects.equals(this.orgRole, v1TeamMember.orgRole) &&
        Objects.equals(this.createdAt, v1TeamMember.createdAt) &&
        Objects.equals(this.updatedAt, v1TeamMember.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(user, userEmail, role, orgRole, createdAt, updatedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1TeamMember {\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    userEmail: ").append(toIndentedString(userEmail)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    orgRole: ").append(toIndentedString(orgRole)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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
    openapiFields.add("user");
    openapiFields.add("user_email");
    openapiFields.add("role");
    openapiFields.add("org_role");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1TeamMember
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1TeamMember.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1TeamMember is not found in the empty JSON string", V1TeamMember.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1TeamMember.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1TeamMember` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("user") != null && !jsonObj.get("user").isJsonNull()) && !jsonObj.get("user").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `user` to be a primitive type in the JSON string but got `%s`", jsonObj.get("user").toString()));
      }
      if ((jsonObj.get("user_email") != null && !jsonObj.get("user_email").isJsonNull()) && !jsonObj.get("user_email").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `user_email` to be a primitive type in the JSON string but got `%s`", jsonObj.get("user_email").toString()));
      }
      if ((jsonObj.get("role") != null && !jsonObj.get("role").isJsonNull()) && !jsonObj.get("role").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `role` to be a primitive type in the JSON string but got `%s`", jsonObj.get("role").toString()));
      }
      if ((jsonObj.get("org_role") != null && !jsonObj.get("org_role").isJsonNull()) && !jsonObj.get("org_role").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `org_role` to be a primitive type in the JSON string but got `%s`", jsonObj.get("org_role").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1TeamMember.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1TeamMember' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1TeamMember> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1TeamMember.class));

       return (TypeAdapter<T>) new TypeAdapter<V1TeamMember>() {
           @Override
           public void write(JsonWriter out, V1TeamMember value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1TeamMember read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1TeamMember given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1TeamMember
  * @throws IOException if the JSON string is invalid with respect to V1TeamMember
  */
  public static V1TeamMember fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1TeamMember.class);
  }

 /**
  * Convert an instance of V1TeamMember to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

