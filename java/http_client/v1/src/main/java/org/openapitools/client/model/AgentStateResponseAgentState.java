/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.1
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
 * AgentStateResponseAgentState
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AgentStateResponseAgentState {
  public static final String SERIALIZED_NAME_SCHEDULES = "schedules";
  @SerializedName(SERIALIZED_NAME_SCHEDULES)
  private Object schedules;

  public static final String SERIALIZED_NAME_HOOKS = "hooks";
  @SerializedName(SERIALIZED_NAME_HOOKS)
  private Object hooks;

  public static final String SERIALIZED_NAME_WATCHDOGS = "watchdogs";
  @SerializedName(SERIALIZED_NAME_WATCHDOGS)
  private Object watchdogs;

  public static final String SERIALIZED_NAME_TUNERS = "tuners";
  @SerializedName(SERIALIZED_NAME_TUNERS)
  private Object tuners;

  public static final String SERIALIZED_NAME_QUEUED = "queued";
  @SerializedName(SERIALIZED_NAME_QUEUED)
  private Object queued;

  public static final String SERIALIZED_NAME_STOPPING = "stopping";
  @SerializedName(SERIALIZED_NAME_STOPPING)
  private Object stopping;

  public static final String SERIALIZED_NAME_DELETING = "deleting";
  @SerializedName(SERIALIZED_NAME_DELETING)
  private Object deleting;

  public static final String SERIALIZED_NAME_APPLY = "apply";
  @SerializedName(SERIALIZED_NAME_APPLY)
  private Object apply;

  public static final String SERIALIZED_NAME_CHECKS = "checks";
  @SerializedName(SERIALIZED_NAME_CHECKS)
  private Object checks;

  public static final String SERIALIZED_NAME_FULL = "full";
  @SerializedName(SERIALIZED_NAME_FULL)
  private Boolean full;

  public AgentStateResponseAgentState() {
  }

  public AgentStateResponseAgentState schedules(Object schedules) {

    this.schedules = schedules;
    return this;
  }

   /**
   * Get schedules
   * @return schedules
  **/
  @javax.annotation.Nullable

  public Object getSchedules() {
    return schedules;
  }


  public void setSchedules(Object schedules) {
    this.schedules = schedules;
  }


  public AgentStateResponseAgentState hooks(Object hooks) {

    this.hooks = hooks;
    return this;
  }

   /**
   * Get hooks
   * @return hooks
  **/
  @javax.annotation.Nullable

  public Object getHooks() {
    return hooks;
  }


  public void setHooks(Object hooks) {
    this.hooks = hooks;
  }


  public AgentStateResponseAgentState watchdogs(Object watchdogs) {

    this.watchdogs = watchdogs;
    return this;
  }

   /**
   * Get watchdogs
   * @return watchdogs
  **/
  @javax.annotation.Nullable

  public Object getWatchdogs() {
    return watchdogs;
  }


  public void setWatchdogs(Object watchdogs) {
    this.watchdogs = watchdogs;
  }


  public AgentStateResponseAgentState tuners(Object tuners) {

    this.tuners = tuners;
    return this;
  }

   /**
   * Get tuners
   * @return tuners
  **/
  @javax.annotation.Nullable

  public Object getTuners() {
    return tuners;
  }


  public void setTuners(Object tuners) {
    this.tuners = tuners;
  }


  public AgentStateResponseAgentState queued(Object queued) {

    this.queued = queued;
    return this;
  }

   /**
   * Get queued
   * @return queued
  **/
  @javax.annotation.Nullable

  public Object getQueued() {
    return queued;
  }


  public void setQueued(Object queued) {
    this.queued = queued;
  }


  public AgentStateResponseAgentState stopping(Object stopping) {

    this.stopping = stopping;
    return this;
  }

   /**
   * Get stopping
   * @return stopping
  **/
  @javax.annotation.Nullable

  public Object getStopping() {
    return stopping;
  }


  public void setStopping(Object stopping) {
    this.stopping = stopping;
  }


  public AgentStateResponseAgentState deleting(Object deleting) {

    this.deleting = deleting;
    return this;
  }

   /**
   * Get deleting
   * @return deleting
  **/
  @javax.annotation.Nullable

  public Object getDeleting() {
    return deleting;
  }


  public void setDeleting(Object deleting) {
    this.deleting = deleting;
  }


  public AgentStateResponseAgentState apply(Object apply) {

    this.apply = apply;
    return this;
  }

   /**
   * Get apply
   * @return apply
  **/
  @javax.annotation.Nullable

  public Object getApply() {
    return apply;
  }


  public void setApply(Object apply) {
    this.apply = apply;
  }


  public AgentStateResponseAgentState checks(Object checks) {

    this.checks = checks;
    return this;
  }

   /**
   * Get checks
   * @return checks
  **/
  @javax.annotation.Nullable

  public Object getChecks() {
    return checks;
  }


  public void setChecks(Object checks) {
    this.checks = checks;
  }


  public AgentStateResponseAgentState full(Boolean full) {

    this.full = full;
    return this;
  }

   /**
   * Get full
   * @return full
  **/
  @javax.annotation.Nullable

  public Boolean getFull() {
    return full;
  }


  public void setFull(Boolean full) {
    this.full = full;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AgentStateResponseAgentState agentStateResponseAgentState = (AgentStateResponseAgentState) o;
    return Objects.equals(this.schedules, agentStateResponseAgentState.schedules) &&
        Objects.equals(this.hooks, agentStateResponseAgentState.hooks) &&
        Objects.equals(this.watchdogs, agentStateResponseAgentState.watchdogs) &&
        Objects.equals(this.tuners, agentStateResponseAgentState.tuners) &&
        Objects.equals(this.queued, agentStateResponseAgentState.queued) &&
        Objects.equals(this.stopping, agentStateResponseAgentState.stopping) &&
        Objects.equals(this.deleting, agentStateResponseAgentState.deleting) &&
        Objects.equals(this.apply, agentStateResponseAgentState.apply) &&
        Objects.equals(this.checks, agentStateResponseAgentState.checks) &&
        Objects.equals(this.full, agentStateResponseAgentState.full);
  }

  @Override
  public int hashCode() {
    return Objects.hash(schedules, hooks, watchdogs, tuners, queued, stopping, deleting, apply, checks, full);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AgentStateResponseAgentState {\n");
    sb.append("    schedules: ").append(toIndentedString(schedules)).append("\n");
    sb.append("    hooks: ").append(toIndentedString(hooks)).append("\n");
    sb.append("    watchdogs: ").append(toIndentedString(watchdogs)).append("\n");
    sb.append("    tuners: ").append(toIndentedString(tuners)).append("\n");
    sb.append("    queued: ").append(toIndentedString(queued)).append("\n");
    sb.append("    stopping: ").append(toIndentedString(stopping)).append("\n");
    sb.append("    deleting: ").append(toIndentedString(deleting)).append("\n");
    sb.append("    apply: ").append(toIndentedString(apply)).append("\n");
    sb.append("    checks: ").append(toIndentedString(checks)).append("\n");
    sb.append("    full: ").append(toIndentedString(full)).append("\n");
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
    openapiFields.add("schedules");
    openapiFields.add("hooks");
    openapiFields.add("watchdogs");
    openapiFields.add("tuners");
    openapiFields.add("queued");
    openapiFields.add("stopping");
    openapiFields.add("deleting");
    openapiFields.add("apply");
    openapiFields.add("checks");
    openapiFields.add("full");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to AgentStateResponseAgentState
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!AgentStateResponseAgentState.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AgentStateResponseAgentState is not found in the empty JSON string", AgentStateResponseAgentState.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!AgentStateResponseAgentState.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AgentStateResponseAgentState` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AgentStateResponseAgentState.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AgentStateResponseAgentState' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AgentStateResponseAgentState> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AgentStateResponseAgentState.class));

       return (TypeAdapter<T>) new TypeAdapter<AgentStateResponseAgentState>() {
           @Override
           public void write(JsonWriter out, AgentStateResponseAgentState value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AgentStateResponseAgentState read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of AgentStateResponseAgentState given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of AgentStateResponseAgentState
  * @throws IOException if the JSON string is invalid with respect to AgentStateResponseAgentState
  */
  public static AgentStateResponseAgentState fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AgentStateResponseAgentState.class);
  }

 /**
  * Convert an instance of AgentStateResponseAgentState to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

