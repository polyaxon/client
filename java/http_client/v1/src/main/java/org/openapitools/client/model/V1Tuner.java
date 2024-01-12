/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc3
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.V1Param;

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
 * V1Tuner
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Tuner {
  public static final String SERIALIZED_NAME_HUB_REF = "hubRef";
  @SerializedName(SERIALIZED_NAME_HUB_REF)
  private String hubRef;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_NAMESPACE = "namespace";
  @SerializedName(SERIALIZED_NAME_NAMESPACE)
  private String namespace;

  public static final String SERIALIZED_NAME_PARAMS = "params";
  @SerializedName(SERIALIZED_NAME_PARAMS)
  private Map<String, V1Param> params = new HashMap<>();

  public V1Tuner() {
  }

  public V1Tuner hubRef(String hubRef) {

    this.hubRef = hubRef;
    return this;
  }

   /**
   * Get hubRef
   * @return hubRef
  **/
  @javax.annotation.Nullable

  public String getHubRef() {
    return hubRef;
  }


  public void setHubRef(String hubRef) {
    this.hubRef = hubRef;
  }


  public V1Tuner presets(List<String> presets) {

    this.presets = presets;
    return this;
  }

  public V1Tuner addPresetsItem(String presetsItem) {
    if (this.presets == null) {
      this.presets = new ArrayList<>();
    }
    this.presets.add(presetsItem);
    return this;
  }

   /**
   * Get presets
   * @return presets
  **/
  @javax.annotation.Nullable

  public List<String> getPresets() {
    return presets;
  }


  public void setPresets(List<String> presets) {
    this.presets = presets;
  }


  public V1Tuner queue(String queue) {

    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1Tuner namespace(String namespace) {

    this.namespace = namespace;
    return this;
  }

   /**
   * Get namespace
   * @return namespace
  **/
  @javax.annotation.Nullable

  public String getNamespace() {
    return namespace;
  }


  public void setNamespace(String namespace) {
    this.namespace = namespace;
  }


  public V1Tuner params(Map<String, V1Param> params) {

    this.params = params;
    return this;
  }

  public V1Tuner putParamsItem(String key, V1Param paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @javax.annotation.Nullable

  public Map<String, V1Param> getParams() {
    return params;
  }


  public void setParams(Map<String, V1Param> params) {
    this.params = params;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Tuner v1Tuner = (V1Tuner) o;
    return Objects.equals(this.hubRef, v1Tuner.hubRef) &&
        Objects.equals(this.presets, v1Tuner.presets) &&
        Objects.equals(this.queue, v1Tuner.queue) &&
        Objects.equals(this.namespace, v1Tuner.namespace) &&
        Objects.equals(this.params, v1Tuner.params);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hubRef, presets, queue, namespace, params);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Tuner {\n");
    sb.append("    hubRef: ").append(toIndentedString(hubRef)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
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
    openapiFields.add("hubRef");
    openapiFields.add("presets");
    openapiFields.add("queue");
    openapiFields.add("namespace");
    openapiFields.add("params");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Tuner
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Tuner.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Tuner is not found in the empty JSON string", V1Tuner.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Tuner.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Tuner` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("hubRef") != null && !jsonObj.get("hubRef").isJsonNull()) && !jsonObj.get("hubRef").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `hubRef` to be a primitive type in the JSON string but got `%s`", jsonObj.get("hubRef").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("presets") != null && !jsonObj.get("presets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `presets` to be an array in the JSON string but got `%s`", jsonObj.get("presets").toString()));
      }
      if ((jsonObj.get("queue") != null && !jsonObj.get("queue").isJsonNull()) && !jsonObj.get("queue").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `queue` to be a primitive type in the JSON string but got `%s`", jsonObj.get("queue").toString()));
      }
      if ((jsonObj.get("namespace") != null && !jsonObj.get("namespace").isJsonNull()) && !jsonObj.get("namespace").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `namespace` to be a primitive type in the JSON string but got `%s`", jsonObj.get("namespace").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Tuner.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Tuner' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Tuner> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Tuner.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Tuner>() {
           @Override
           public void write(JsonWriter out, V1Tuner value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Tuner read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Tuner given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Tuner
  * @throws IOException if the JSON string is invalid with respect to V1Tuner
  */
  public static V1Tuner fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Tuner.class);
  }

 /**
  * Convert an instance of V1Tuner to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

