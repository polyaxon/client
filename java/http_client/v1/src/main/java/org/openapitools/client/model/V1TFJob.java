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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import org.openapitools.client.model.V1CleanPodPolicy;
import org.openapitools.client.model.V1KFReplica;
import org.openapitools.client.model.V1SchedulingPolicy;

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
 * V1TFJob
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1TFJob {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "tfjob";

  public static final String SERIALIZED_NAME_CLEAN_POD_POLICY = "cleanPodPolicy";
  @SerializedName(SERIALIZED_NAME_CLEAN_POD_POLICY)
  private V1CleanPodPolicy cleanPodPolicy = V1CleanPodPolicy.ALL;

  public static final String SERIALIZED_NAME_SCHEDULING_POLICY = "schedulingPolicy";
  @SerializedName(SERIALIZED_NAME_SCHEDULING_POLICY)
  private V1SchedulingPolicy schedulingPolicy;

  public static final String SERIALIZED_NAME_ENABLE_DYNAMIC_WORKER = "enableDynamicWorker";
  @SerializedName(SERIALIZED_NAME_ENABLE_DYNAMIC_WORKER)
  private Boolean enableDynamicWorker;

  public static final String SERIALIZED_NAME_CHIEF = "chief";
  @SerializedName(SERIALIZED_NAME_CHIEF)
  private V1KFReplica chief;

  public static final String SERIALIZED_NAME_WORKER = "worker";
  @SerializedName(SERIALIZED_NAME_WORKER)
  private V1KFReplica worker;

  public static final String SERIALIZED_NAME_PS = "ps";
  @SerializedName(SERIALIZED_NAME_PS)
  private V1KFReplica ps;

  public static final String SERIALIZED_NAME_EVALUATOR = "evaluator";
  @SerializedName(SERIALIZED_NAME_EVALUATOR)
  private V1KFReplica evaluator;

  public V1TFJob() {
  }

  public V1TFJob kind(String kind) {

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


  public V1TFJob cleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {

    this.cleanPodPolicy = cleanPodPolicy;
    return this;
  }

   /**
   * Get cleanPodPolicy
   * @return cleanPodPolicy
  **/
  @javax.annotation.Nullable

  public V1CleanPodPolicy getCleanPodPolicy() {
    return cleanPodPolicy;
  }


  public void setCleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    this.cleanPodPolicy = cleanPodPolicy;
  }


  public V1TFJob schedulingPolicy(V1SchedulingPolicy schedulingPolicy) {

    this.schedulingPolicy = schedulingPolicy;
    return this;
  }

   /**
   * Get schedulingPolicy
   * @return schedulingPolicy
  **/
  @javax.annotation.Nullable

  public V1SchedulingPolicy getSchedulingPolicy() {
    return schedulingPolicy;
  }


  public void setSchedulingPolicy(V1SchedulingPolicy schedulingPolicy) {
    this.schedulingPolicy = schedulingPolicy;
  }


  public V1TFJob enableDynamicWorker(Boolean enableDynamicWorker) {

    this.enableDynamicWorker = enableDynamicWorker;
    return this;
  }

   /**
   * Get enableDynamicWorker
   * @return enableDynamicWorker
  **/
  @javax.annotation.Nullable

  public Boolean getEnableDynamicWorker() {
    return enableDynamicWorker;
  }


  public void setEnableDynamicWorker(Boolean enableDynamicWorker) {
    this.enableDynamicWorker = enableDynamicWorker;
  }


  public V1TFJob chief(V1KFReplica chief) {

    this.chief = chief;
    return this;
  }

   /**
   * Get chief
   * @return chief
  **/
  @javax.annotation.Nullable

  public V1KFReplica getChief() {
    return chief;
  }


  public void setChief(V1KFReplica chief) {
    this.chief = chief;
  }


  public V1TFJob worker(V1KFReplica worker) {

    this.worker = worker;
    return this;
  }

   /**
   * Get worker
   * @return worker
  **/
  @javax.annotation.Nullable

  public V1KFReplica getWorker() {
    return worker;
  }


  public void setWorker(V1KFReplica worker) {
    this.worker = worker;
  }


  public V1TFJob ps(V1KFReplica ps) {

    this.ps = ps;
    return this;
  }

   /**
   * Get ps
   * @return ps
  **/
  @javax.annotation.Nullable

  public V1KFReplica getPs() {
    return ps;
  }


  public void setPs(V1KFReplica ps) {
    this.ps = ps;
  }


  public V1TFJob evaluator(V1KFReplica evaluator) {

    this.evaluator = evaluator;
    return this;
  }

   /**
   * Get evaluator
   * @return evaluator
  **/
  @javax.annotation.Nullable

  public V1KFReplica getEvaluator() {
    return evaluator;
  }


  public void setEvaluator(V1KFReplica evaluator) {
    this.evaluator = evaluator;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1TFJob v1TFJob = (V1TFJob) o;
    return Objects.equals(this.kind, v1TFJob.kind) &&
        Objects.equals(this.cleanPodPolicy, v1TFJob.cleanPodPolicy) &&
        Objects.equals(this.schedulingPolicy, v1TFJob.schedulingPolicy) &&
        Objects.equals(this.enableDynamicWorker, v1TFJob.enableDynamicWorker) &&
        Objects.equals(this.chief, v1TFJob.chief) &&
        Objects.equals(this.worker, v1TFJob.worker) &&
        Objects.equals(this.ps, v1TFJob.ps) &&
        Objects.equals(this.evaluator, v1TFJob.evaluator);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, cleanPodPolicy, schedulingPolicy, enableDynamicWorker, chief, worker, ps, evaluator);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1TFJob {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    cleanPodPolicy: ").append(toIndentedString(cleanPodPolicy)).append("\n");
    sb.append("    schedulingPolicy: ").append(toIndentedString(schedulingPolicy)).append("\n");
    sb.append("    enableDynamicWorker: ").append(toIndentedString(enableDynamicWorker)).append("\n");
    sb.append("    chief: ").append(toIndentedString(chief)).append("\n");
    sb.append("    worker: ").append(toIndentedString(worker)).append("\n");
    sb.append("    ps: ").append(toIndentedString(ps)).append("\n");
    sb.append("    evaluator: ").append(toIndentedString(evaluator)).append("\n");
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
    openapiFields.add("cleanPodPolicy");
    openapiFields.add("schedulingPolicy");
    openapiFields.add("enableDynamicWorker");
    openapiFields.add("chief");
    openapiFields.add("worker");
    openapiFields.add("ps");
    openapiFields.add("evaluator");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1TFJob
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1TFJob.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1TFJob is not found in the empty JSON string", V1TFJob.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1TFJob.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1TFJob` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
      // validate the optional field `schedulingPolicy`
      if (jsonObj.get("schedulingPolicy") != null && !jsonObj.get("schedulingPolicy").isJsonNull()) {
        V1SchedulingPolicy.validateJsonObject(jsonObj.getAsJsonObject("schedulingPolicy"));
      }
      // validate the optional field `chief`
      if (jsonObj.get("chief") != null && !jsonObj.get("chief").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("chief"));
      }
      // validate the optional field `worker`
      if (jsonObj.get("worker") != null && !jsonObj.get("worker").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("worker"));
      }
      // validate the optional field `ps`
      if (jsonObj.get("ps") != null && !jsonObj.get("ps").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("ps"));
      }
      // validate the optional field `evaluator`
      if (jsonObj.get("evaluator") != null && !jsonObj.get("evaluator").isJsonNull()) {
        V1KFReplica.validateJsonObject(jsonObj.getAsJsonObject("evaluator"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1TFJob.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1TFJob' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1TFJob> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1TFJob.class));

       return (TypeAdapter<T>) new TypeAdapter<V1TFJob>() {
           @Override
           public void write(JsonWriter out, V1TFJob value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1TFJob read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1TFJob given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1TFJob
  * @throws IOException if the JSON string is invalid with respect to V1TFJob
  */
  public static V1TFJob fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1TFJob.class);
  }

 /**
  * Convert an instance of V1TFJob to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

