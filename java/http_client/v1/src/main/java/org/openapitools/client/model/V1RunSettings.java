/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.1
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
import org.openapitools.client.model.V1RunReferenceCatalog;
import org.openapitools.client.model.V1SettingsCatalog;

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
 * V1RunSettings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RunSettings {
  public static final String SERIALIZED_NAME_NAMESPACE = "namespace";
  @SerializedName(SERIALIZED_NAME_NAMESPACE)
  private String namespace;

  public static final String SERIALIZED_NAME_AGENT = "agent";
  @SerializedName(SERIALIZED_NAME_AGENT)
  private V1SettingsCatalog agent;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private V1SettingsCatalog queue;

  public static final String SERIALIZED_NAME_ARTIFACTS_STORE = "artifacts_store";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS_STORE)
  private V1SettingsCatalog artifactsStore;

  public static final String SERIALIZED_NAME_TENSORBOARD = "tensorboard";
  @SerializedName(SERIALIZED_NAME_TENSORBOARD)
  private Object tensorboard;

  public static final String SERIALIZED_NAME_BUILD = "build";
  @SerializedName(SERIALIZED_NAME_BUILD)
  private Object build;

  public static final String SERIALIZED_NAME_COMPONENT = "component";
  @SerializedName(SERIALIZED_NAME_COMPONENT)
  private Object component;

  public static final String SERIALIZED_NAME_MODELS = "models";
  @SerializedName(SERIALIZED_NAME_MODELS)
  private List<V1RunReferenceCatalog> models;

  public static final String SERIALIZED_NAME_ARTIFACTS = "artifacts";
  @SerializedName(SERIALIZED_NAME_ARTIFACTS)
  private List<V1RunReferenceCatalog> artifacts;

  public V1RunSettings() {
  }

  public V1RunSettings namespace(String namespace) {

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


  public V1RunSettings agent(V1SettingsCatalog agent) {

    this.agent = agent;
    return this;
  }

   /**
   * Get agent
   * @return agent
  **/
  @javax.annotation.Nullable

  public V1SettingsCatalog getAgent() {
    return agent;
  }


  public void setAgent(V1SettingsCatalog agent) {
    this.agent = agent;
  }


  public V1RunSettings queue(V1SettingsCatalog queue) {

    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable

  public V1SettingsCatalog getQueue() {
    return queue;
  }


  public void setQueue(V1SettingsCatalog queue) {
    this.queue = queue;
  }


  public V1RunSettings artifactsStore(V1SettingsCatalog artifactsStore) {

    this.artifactsStore = artifactsStore;
    return this;
  }

   /**
   * Get artifactsStore
   * @return artifactsStore
  **/
  @javax.annotation.Nullable

  public V1SettingsCatalog getArtifactsStore() {
    return artifactsStore;
  }


  public void setArtifactsStore(V1SettingsCatalog artifactsStore) {
    this.artifactsStore = artifactsStore;
  }


  public V1RunSettings tensorboard(Object tensorboard) {

    this.tensorboard = tensorboard;
    return this;
  }

   /**
   * Get tensorboard
   * @return tensorboard
  **/
  @javax.annotation.Nullable

  public Object getTensorboard() {
    return tensorboard;
  }


  public void setTensorboard(Object tensorboard) {
    this.tensorboard = tensorboard;
  }


  public V1RunSettings build(Object build) {

    this.build = build;
    return this;
  }

   /**
   * Get build
   * @return build
  **/
  @javax.annotation.Nullable

  public Object getBuild() {
    return build;
  }


  public void setBuild(Object build) {
    this.build = build;
  }


  public V1RunSettings component(Object component) {

    this.component = component;
    return this;
  }

   /**
   * Get component
   * @return component
  **/
  @javax.annotation.Nullable

  public Object getComponent() {
    return component;
  }


  public void setComponent(Object component) {
    this.component = component;
  }


  public V1RunSettings models(List<V1RunReferenceCatalog> models) {

    this.models = models;
    return this;
  }

  public V1RunSettings addModelsItem(V1RunReferenceCatalog modelsItem) {
    if (this.models == null) {
      this.models = new ArrayList<>();
    }
    this.models.add(modelsItem);
    return this;
  }

   /**
   * Get models
   * @return models
  **/
  @javax.annotation.Nullable

  public List<V1RunReferenceCatalog> getModels() {
    return models;
  }


  public void setModels(List<V1RunReferenceCatalog> models) {
    this.models = models;
  }


  public V1RunSettings artifacts(List<V1RunReferenceCatalog> artifacts) {

    this.artifacts = artifacts;
    return this;
  }

  public V1RunSettings addArtifactsItem(V1RunReferenceCatalog artifactsItem) {
    if (this.artifacts == null) {
      this.artifacts = new ArrayList<>();
    }
    this.artifacts.add(artifactsItem);
    return this;
  }

   /**
   * Get artifacts
   * @return artifacts
  **/
  @javax.annotation.Nullable

  public List<V1RunReferenceCatalog> getArtifacts() {
    return artifacts;
  }


  public void setArtifacts(List<V1RunReferenceCatalog> artifacts) {
    this.artifacts = artifacts;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunSettings v1RunSettings = (V1RunSettings) o;
    return Objects.equals(this.namespace, v1RunSettings.namespace) &&
        Objects.equals(this.agent, v1RunSettings.agent) &&
        Objects.equals(this.queue, v1RunSettings.queue) &&
        Objects.equals(this.artifactsStore, v1RunSettings.artifactsStore) &&
        Objects.equals(this.tensorboard, v1RunSettings.tensorboard) &&
        Objects.equals(this.build, v1RunSettings.build) &&
        Objects.equals(this.component, v1RunSettings.component) &&
        Objects.equals(this.models, v1RunSettings.models) &&
        Objects.equals(this.artifacts, v1RunSettings.artifacts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(namespace, agent, queue, artifactsStore, tensorboard, build, component, models, artifacts);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunSettings {\n");
    sb.append("    namespace: ").append(toIndentedString(namespace)).append("\n");
    sb.append("    agent: ").append(toIndentedString(agent)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    artifactsStore: ").append(toIndentedString(artifactsStore)).append("\n");
    sb.append("    tensorboard: ").append(toIndentedString(tensorboard)).append("\n");
    sb.append("    build: ").append(toIndentedString(build)).append("\n");
    sb.append("    component: ").append(toIndentedString(component)).append("\n");
    sb.append("    models: ").append(toIndentedString(models)).append("\n");
    sb.append("    artifacts: ").append(toIndentedString(artifacts)).append("\n");
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
    openapiFields.add("namespace");
    openapiFields.add("agent");
    openapiFields.add("queue");
    openapiFields.add("artifacts_store");
    openapiFields.add("tensorboard");
    openapiFields.add("build");
    openapiFields.add("component");
    openapiFields.add("models");
    openapiFields.add("artifacts");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1RunSettings
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1RunSettings.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1RunSettings is not found in the empty JSON string", V1RunSettings.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1RunSettings.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1RunSettings` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("namespace") != null && !jsonObj.get("namespace").isJsonNull()) && !jsonObj.get("namespace").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `namespace` to be a primitive type in the JSON string but got `%s`", jsonObj.get("namespace").toString()));
      }
      // validate the optional field `agent`
      if (jsonObj.get("agent") != null && !jsonObj.get("agent").isJsonNull()) {
        V1SettingsCatalog.validateJsonObject(jsonObj.getAsJsonObject("agent"));
      }
      // validate the optional field `queue`
      if (jsonObj.get("queue") != null && !jsonObj.get("queue").isJsonNull()) {
        V1SettingsCatalog.validateJsonObject(jsonObj.getAsJsonObject("queue"));
      }
      // validate the optional field `artifacts_store`
      if (jsonObj.get("artifacts_store") != null && !jsonObj.get("artifacts_store").isJsonNull()) {
        V1SettingsCatalog.validateJsonObject(jsonObj.getAsJsonObject("artifacts_store"));
      }
      if (jsonObj.get("models") != null && !jsonObj.get("models").isJsonNull()) {
        JsonArray jsonArraymodels = jsonObj.getAsJsonArray("models");
        if (jsonArraymodels != null) {
          // ensure the json data is an array
          if (!jsonObj.get("models").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `models` to be an array in the JSON string but got `%s`", jsonObj.get("models").toString()));
          }

          // validate the optional field `models` (array)
          for (int i = 0; i < jsonArraymodels.size(); i++) {
            V1RunReferenceCatalog.validateJsonObject(jsonArraymodels.get(i).getAsJsonObject());
          };
        }
      }
      if (jsonObj.get("artifacts") != null && !jsonObj.get("artifacts").isJsonNull()) {
        JsonArray jsonArrayartifacts = jsonObj.getAsJsonArray("artifacts");
        if (jsonArrayartifacts != null) {
          // ensure the json data is an array
          if (!jsonObj.get("artifacts").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `artifacts` to be an array in the JSON string but got `%s`", jsonObj.get("artifacts").toString()));
          }

          // validate the optional field `artifacts` (array)
          for (int i = 0; i < jsonArrayartifacts.size(); i++) {
            V1RunReferenceCatalog.validateJsonObject(jsonArrayartifacts.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1RunSettings.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1RunSettings' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1RunSettings> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1RunSettings.class));

       return (TypeAdapter<T>) new TypeAdapter<V1RunSettings>() {
           @Override
           public void write(JsonWriter out, V1RunSettings value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1RunSettings read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1RunSettings given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1RunSettings
  * @throws IOException if the JSON string is invalid with respect to V1RunSettings
  */
  public static V1RunSettings fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1RunSettings.class);
  }

 /**
  * Convert an instance of V1RunSettings to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

