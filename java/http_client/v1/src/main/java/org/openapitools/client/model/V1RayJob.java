/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc7
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
import org.openapitools.client.model.V1RayReplica;

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
 * V1RayJob
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RayJob {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "rayjob";

  public static final String SERIALIZED_NAME_ENTRYPOINT = "entrypoint";
  @SerializedName(SERIALIZED_NAME_ENTRYPOINT)
  private String entrypoint;

  public static final String SERIALIZED_NAME_RUNTIME_ENV = "runtimeEnv";
  @SerializedName(SERIALIZED_NAME_RUNTIME_ENV)
  private Object runtimeEnv;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = new HashMap<>();

  public static final String SERIALIZED_NAME_RAY_VERSION = "rayVersion";
  @SerializedName(SERIALIZED_NAME_RAY_VERSION)
  private String rayVersion;

  public static final String SERIALIZED_NAME_HEAD = "head";
  @SerializedName(SERIALIZED_NAME_HEAD)
  private V1RayReplica head;

  public static final String SERIALIZED_NAME_WORKERS = "workers";
  @SerializedName(SERIALIZED_NAME_WORKERS)
  private List<V1RayReplica> workers;

  public V1RayJob() {
  }

  public V1RayJob kind(String kind) {

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


  public V1RayJob entrypoint(String entrypoint) {

    this.entrypoint = entrypoint;
    return this;
  }

   /**
   * Get entrypoint
   * @return entrypoint
  **/
  @javax.annotation.Nullable

  public String getEntrypoint() {
    return entrypoint;
  }


  public void setEntrypoint(String entrypoint) {
    this.entrypoint = entrypoint;
  }


  public V1RayJob runtimeEnv(Object runtimeEnv) {

    this.runtimeEnv = runtimeEnv;
    return this;
  }

   /**
   * Get runtimeEnv
   * @return runtimeEnv
  **/
  @javax.annotation.Nullable

  public Object getRuntimeEnv() {
    return runtimeEnv;
  }


  public void setRuntimeEnv(Object runtimeEnv) {
    this.runtimeEnv = runtimeEnv;
  }


  public V1RayJob metadata(Map<String, String> metadata) {

    this.metadata = metadata;
    return this;
  }

  public V1RayJob putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public V1RayJob rayVersion(String rayVersion) {

    this.rayVersion = rayVersion;
    return this;
  }

   /**
   * Get rayVersion
   * @return rayVersion
  **/
  @javax.annotation.Nullable

  public String getRayVersion() {
    return rayVersion;
  }


  public void setRayVersion(String rayVersion) {
    this.rayVersion = rayVersion;
  }


  public V1RayJob head(V1RayReplica head) {

    this.head = head;
    return this;
  }

   /**
   * Get head
   * @return head
  **/
  @javax.annotation.Nullable

  public V1RayReplica getHead() {
    return head;
  }


  public void setHead(V1RayReplica head) {
    this.head = head;
  }


  public V1RayJob workers(List<V1RayReplica> workers) {

    this.workers = workers;
    return this;
  }

  public V1RayJob addWorkersItem(V1RayReplica workersItem) {
    if (this.workers == null) {
      this.workers = new ArrayList<>();
    }
    this.workers.add(workersItem);
    return this;
  }

   /**
   * Get workers
   * @return workers
  **/
  @javax.annotation.Nullable

  public List<V1RayReplica> getWorkers() {
    return workers;
  }


  public void setWorkers(List<V1RayReplica> workers) {
    this.workers = workers;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RayJob v1RayJob = (V1RayJob) o;
    return Objects.equals(this.kind, v1RayJob.kind) &&
        Objects.equals(this.entrypoint, v1RayJob.entrypoint) &&
        Objects.equals(this.runtimeEnv, v1RayJob.runtimeEnv) &&
        Objects.equals(this.metadata, v1RayJob.metadata) &&
        Objects.equals(this.rayVersion, v1RayJob.rayVersion) &&
        Objects.equals(this.head, v1RayJob.head) &&
        Objects.equals(this.workers, v1RayJob.workers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, entrypoint, runtimeEnv, metadata, rayVersion, head, workers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RayJob {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    entrypoint: ").append(toIndentedString(entrypoint)).append("\n");
    sb.append("    runtimeEnv: ").append(toIndentedString(runtimeEnv)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    rayVersion: ").append(toIndentedString(rayVersion)).append("\n");
    sb.append("    head: ").append(toIndentedString(head)).append("\n");
    sb.append("    workers: ").append(toIndentedString(workers)).append("\n");
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
    openapiFields.add("entrypoint");
    openapiFields.add("runtimeEnv");
    openapiFields.add("metadata");
    openapiFields.add("rayVersion");
    openapiFields.add("head");
    openapiFields.add("workers");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1RayJob
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1RayJob.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1RayJob is not found in the empty JSON string", V1RayJob.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1RayJob.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1RayJob` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
      if ((jsonObj.get("entrypoint") != null && !jsonObj.get("entrypoint").isJsonNull()) && !jsonObj.get("entrypoint").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `entrypoint` to be a primitive type in the JSON string but got `%s`", jsonObj.get("entrypoint").toString()));
      }
      if ((jsonObj.get("rayVersion") != null && !jsonObj.get("rayVersion").isJsonNull()) && !jsonObj.get("rayVersion").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rayVersion` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rayVersion").toString()));
      }
      // validate the optional field `head`
      if (jsonObj.get("head") != null && !jsonObj.get("head").isJsonNull()) {
        V1RayReplica.validateJsonObject(jsonObj.getAsJsonObject("head"));
      }
      if (jsonObj.get("workers") != null && !jsonObj.get("workers").isJsonNull()) {
        JsonArray jsonArrayworkers = jsonObj.getAsJsonArray("workers");
        if (jsonArrayworkers != null) {
          // ensure the json data is an array
          if (!jsonObj.get("workers").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `workers` to be an array in the JSON string but got `%s`", jsonObj.get("workers").toString()));
          }

          // validate the optional field `workers` (array)
          for (int i = 0; i < jsonArrayworkers.size(); i++) {
            V1RayReplica.validateJsonObject(jsonArrayworkers.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1RayJob.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1RayJob' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1RayJob> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1RayJob.class));

       return (TypeAdapter<T>) new TypeAdapter<V1RayJob>() {
           @Override
           public void write(JsonWriter out, V1RayJob value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1RayJob read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1RayJob given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1RayJob
  * @throws IOException if the JSON string is invalid with respect to V1RayJob
  */
  public static V1RayJob fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1RayJob.class);
  }

 /**
  * Convert an instance of V1RayJob to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

