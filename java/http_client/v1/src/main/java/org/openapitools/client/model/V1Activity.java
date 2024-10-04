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
 * V1Activity
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Activity {
  public static final String SERIALIZED_NAME_ACTOR = "actor";
  @SerializedName(SERIALIZED_NAME_ACTOR)
  private String actor;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_EVENT_ACTION = "event_action";
  @SerializedName(SERIALIZED_NAME_EVENT_ACTION)
  private String eventAction;

  public static final String SERIALIZED_NAME_EVENT_SUBJECT = "event_subject";
  @SerializedName(SERIALIZED_NAME_EVENT_SUBJECT)
  private String eventSubject;

  public static final String SERIALIZED_NAME_OBJECT_NAME = "object_name";
  @SerializedName(SERIALIZED_NAME_OBJECT_NAME)
  private String objectName;

  public static final String SERIALIZED_NAME_OBJECT_UUID = "object_uuid";
  @SerializedName(SERIALIZED_NAME_OBJECT_UUID)
  private String objectUuid;

  public static final String SERIALIZED_NAME_OBJECT_PARENT = "object_parent";
  @SerializedName(SERIALIZED_NAME_OBJECT_PARENT)
  private String objectParent;

  public V1Activity() {
  }

  public V1Activity actor(String actor) {

    this.actor = actor;
    return this;
  }

   /**
   * Get actor
   * @return actor
  **/
  @javax.annotation.Nullable

  public String getActor() {
    return actor;
  }


  public void setActor(String actor) {
    this.actor = actor;
  }


  public V1Activity owner(String owner) {

    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1Activity createdAt(OffsetDateTime createdAt) {

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


  public V1Activity eventAction(String eventAction) {

    this.eventAction = eventAction;
    return this;
  }

   /**
   * Get eventAction
   * @return eventAction
  **/
  @javax.annotation.Nullable

  public String getEventAction() {
    return eventAction;
  }


  public void setEventAction(String eventAction) {
    this.eventAction = eventAction;
  }


  public V1Activity eventSubject(String eventSubject) {

    this.eventSubject = eventSubject;
    return this;
  }

   /**
   * Get eventSubject
   * @return eventSubject
  **/
  @javax.annotation.Nullable

  public String getEventSubject() {
    return eventSubject;
  }


  public void setEventSubject(String eventSubject) {
    this.eventSubject = eventSubject;
  }


  public V1Activity objectName(String objectName) {

    this.objectName = objectName;
    return this;
  }

   /**
   * Get objectName
   * @return objectName
  **/
  @javax.annotation.Nullable

  public String getObjectName() {
    return objectName;
  }


  public void setObjectName(String objectName) {
    this.objectName = objectName;
  }


  public V1Activity objectUuid(String objectUuid) {

    this.objectUuid = objectUuid;
    return this;
  }

   /**
   * Get objectUuid
   * @return objectUuid
  **/
  @javax.annotation.Nullable

  public String getObjectUuid() {
    return objectUuid;
  }


  public void setObjectUuid(String objectUuid) {
    this.objectUuid = objectUuid;
  }


  public V1Activity objectParent(String objectParent) {

    this.objectParent = objectParent;
    return this;
  }

   /**
   * Get objectParent
   * @return objectParent
  **/
  @javax.annotation.Nullable

  public String getObjectParent() {
    return objectParent;
  }


  public void setObjectParent(String objectParent) {
    this.objectParent = objectParent;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Activity v1Activity = (V1Activity) o;
    return Objects.equals(this.actor, v1Activity.actor) &&
        Objects.equals(this.owner, v1Activity.owner) &&
        Objects.equals(this.createdAt, v1Activity.createdAt) &&
        Objects.equals(this.eventAction, v1Activity.eventAction) &&
        Objects.equals(this.eventSubject, v1Activity.eventSubject) &&
        Objects.equals(this.objectName, v1Activity.objectName) &&
        Objects.equals(this.objectUuid, v1Activity.objectUuid) &&
        Objects.equals(this.objectParent, v1Activity.objectParent);
  }

  @Override
  public int hashCode() {
    return Objects.hash(actor, owner, createdAt, eventAction, eventSubject, objectName, objectUuid, objectParent);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Activity {\n");
    sb.append("    actor: ").append(toIndentedString(actor)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    eventAction: ").append(toIndentedString(eventAction)).append("\n");
    sb.append("    eventSubject: ").append(toIndentedString(eventSubject)).append("\n");
    sb.append("    objectName: ").append(toIndentedString(objectName)).append("\n");
    sb.append("    objectUuid: ").append(toIndentedString(objectUuid)).append("\n");
    sb.append("    objectParent: ").append(toIndentedString(objectParent)).append("\n");
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
    openapiFields.add("actor");
    openapiFields.add("owner");
    openapiFields.add("created_at");
    openapiFields.add("event_action");
    openapiFields.add("event_subject");
    openapiFields.add("object_name");
    openapiFields.add("object_uuid");
    openapiFields.add("object_parent");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Activity
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Activity.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Activity is not found in the empty JSON string", V1Activity.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Activity.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Activity` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("actor") != null && !jsonObj.get("actor").isJsonNull()) && !jsonObj.get("actor").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `actor` to be a primitive type in the JSON string but got `%s`", jsonObj.get("actor").toString()));
      }
      if ((jsonObj.get("owner") != null && !jsonObj.get("owner").isJsonNull()) && !jsonObj.get("owner").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `owner` to be a primitive type in the JSON string but got `%s`", jsonObj.get("owner").toString()));
      }
      if ((jsonObj.get("event_action") != null && !jsonObj.get("event_action").isJsonNull()) && !jsonObj.get("event_action").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `event_action` to be a primitive type in the JSON string but got `%s`", jsonObj.get("event_action").toString()));
      }
      if ((jsonObj.get("event_subject") != null && !jsonObj.get("event_subject").isJsonNull()) && !jsonObj.get("event_subject").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `event_subject` to be a primitive type in the JSON string but got `%s`", jsonObj.get("event_subject").toString()));
      }
      if ((jsonObj.get("object_name") != null && !jsonObj.get("object_name").isJsonNull()) && !jsonObj.get("object_name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `object_name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("object_name").toString()));
      }
      if ((jsonObj.get("object_uuid") != null && !jsonObj.get("object_uuid").isJsonNull()) && !jsonObj.get("object_uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `object_uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("object_uuid").toString()));
      }
      if ((jsonObj.get("object_parent") != null && !jsonObj.get("object_parent").isJsonNull()) && !jsonObj.get("object_parent").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `object_parent` to be a primitive type in the JSON string but got `%s`", jsonObj.get("object_parent").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Activity.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Activity' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Activity> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Activity.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Activity>() {
           @Override
           public void write(JsonWriter out, V1Activity value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Activity read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Activity given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Activity
  * @throws IOException if the JSON string is invalid with respect to V1Activity
  */
  public static V1Activity fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Activity.class);
  }

 /**
  * Convert an instance of V1Activity to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

