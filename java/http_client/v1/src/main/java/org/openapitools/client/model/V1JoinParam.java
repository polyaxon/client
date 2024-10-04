/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0-rc3
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
 * V1JoinParam
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1JoinParam {
  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private String value;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_TO_INIT = "toInit";
  @SerializedName(SERIALIZED_NAME_TO_INIT)
  private Boolean toInit;

  public static final String SERIALIZED_NAME_TO_ENV = "toEnv";
  @SerializedName(SERIALIZED_NAME_TO_ENV)
  private String toEnv;

  public static final String SERIALIZED_NAME_CONTEXT_ONLY = "contextOnly";
  @SerializedName(SERIALIZED_NAME_CONTEXT_ONLY)
  private Boolean contextOnly;

  public V1JoinParam() {
  }

  public V1JoinParam value(String value) {

    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable

  public String getValue() {
    return value;
  }


  public void setValue(String value) {
    this.value = value;
  }


  public V1JoinParam connection(String connection) {

    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1JoinParam toInit(Boolean toInit) {

    this.toInit = toInit;
    return this;
  }

   /**
   * Get toInit
   * @return toInit
  **/
  @javax.annotation.Nullable

  public Boolean getToInit() {
    return toInit;
  }


  public void setToInit(Boolean toInit) {
    this.toInit = toInit;
  }


  public V1JoinParam toEnv(String toEnv) {

    this.toEnv = toEnv;
    return this;
  }

   /**
   * Get toEnv
   * @return toEnv
  **/
  @javax.annotation.Nullable

  public String getToEnv() {
    return toEnv;
  }


  public void setToEnv(String toEnv) {
    this.toEnv = toEnv;
  }


  public V1JoinParam contextOnly(Boolean contextOnly) {

    this.contextOnly = contextOnly;
    return this;
  }

   /**
   * Get contextOnly
   * @return contextOnly
  **/
  @javax.annotation.Nullable

  public Boolean getContextOnly() {
    return contextOnly;
  }


  public void setContextOnly(Boolean contextOnly) {
    this.contextOnly = contextOnly;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1JoinParam v1JoinParam = (V1JoinParam) o;
    return Objects.equals(this.value, v1JoinParam.value) &&
        Objects.equals(this.connection, v1JoinParam.connection) &&
        Objects.equals(this.toInit, v1JoinParam.toInit) &&
        Objects.equals(this.toEnv, v1JoinParam.toEnv) &&
        Objects.equals(this.contextOnly, v1JoinParam.contextOnly);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, connection, toInit, toEnv, contextOnly);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1JoinParam {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    toInit: ").append(toIndentedString(toInit)).append("\n");
    sb.append("    toEnv: ").append(toIndentedString(toEnv)).append("\n");
    sb.append("    contextOnly: ").append(toIndentedString(contextOnly)).append("\n");
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
    openapiFields.add("value");
    openapiFields.add("connection");
    openapiFields.add("toInit");
    openapiFields.add("toEnv");
    openapiFields.add("contextOnly");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1JoinParam
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1JoinParam.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1JoinParam is not found in the empty JSON string", V1JoinParam.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1JoinParam.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1JoinParam` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("value") != null && !jsonObj.get("value").isJsonNull()) && !jsonObj.get("value").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `value` to be a primitive type in the JSON string but got `%s`", jsonObj.get("value").toString()));
      }
      if ((jsonObj.get("connection") != null && !jsonObj.get("connection").isJsonNull()) && !jsonObj.get("connection").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection").toString()));
      }
      if ((jsonObj.get("toEnv") != null && !jsonObj.get("toEnv").isJsonNull()) && !jsonObj.get("toEnv").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `toEnv` to be a primitive type in the JSON string but got `%s`", jsonObj.get("toEnv").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1JoinParam.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1JoinParam' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1JoinParam> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1JoinParam.class));

       return (TypeAdapter<T>) new TypeAdapter<V1JoinParam>() {
           @Override
           public void write(JsonWriter out, V1JoinParam value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1JoinParam read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1JoinParam given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1JoinParam
  * @throws IOException if the JSON string is invalid with respect to V1JoinParam
  */
  public static V1JoinParam fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1JoinParam.class);
  }

 /**
  * Convert an instance of V1JoinParam to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

