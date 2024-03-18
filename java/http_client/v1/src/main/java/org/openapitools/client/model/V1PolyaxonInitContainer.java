/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.3-rc3
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
 * V1PolyaxonInitContainer
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1PolyaxonInitContainer {
  public static final String SERIALIZED_NAME_IMAGE = "image";
  @SerializedName(SERIALIZED_NAME_IMAGE)
  private String image;

  public static final String SERIALIZED_NAME_IMAGE_TAG = "imageTag";
  @SerializedName(SERIALIZED_NAME_IMAGE_TAG)
  private String imageTag;

  public static final String SERIALIZED_NAME_IMAGE_PULL_POLICY = "imagePullPolicy";
  @SerializedName(SERIALIZED_NAME_IMAGE_PULL_POLICY)
  private String imagePullPolicy;

  public static final String SERIALIZED_NAME_RESOURCES = "resources";
  @SerializedName(SERIALIZED_NAME_RESOURCES)
  private Object resources;

  public V1PolyaxonInitContainer() {
  }

  public V1PolyaxonInitContainer image(String image) {

    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @javax.annotation.Nullable

  public String getImage() {
    return image;
  }


  public void setImage(String image) {
    this.image = image;
  }


  public V1PolyaxonInitContainer imageTag(String imageTag) {

    this.imageTag = imageTag;
    return this;
  }

   /**
   * Get imageTag
   * @return imageTag
  **/
  @javax.annotation.Nullable

  public String getImageTag() {
    return imageTag;
  }


  public void setImageTag(String imageTag) {
    this.imageTag = imageTag;
  }


  public V1PolyaxonInitContainer imagePullPolicy(String imagePullPolicy) {

    this.imagePullPolicy = imagePullPolicy;
    return this;
  }

   /**
   * Get imagePullPolicy
   * @return imagePullPolicy
  **/
  @javax.annotation.Nullable

  public String getImagePullPolicy() {
    return imagePullPolicy;
  }


  public void setImagePullPolicy(String imagePullPolicy) {
    this.imagePullPolicy = imagePullPolicy;
  }


  public V1PolyaxonInitContainer resources(Object resources) {

    this.resources = resources;
    return this;
  }

   /**
   * Get resources
   * @return resources
  **/
  @javax.annotation.Nullable

  public Object getResources() {
    return resources;
  }


  public void setResources(Object resources) {
    this.resources = resources;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PolyaxonInitContainer v1PolyaxonInitContainer = (V1PolyaxonInitContainer) o;
    return Objects.equals(this.image, v1PolyaxonInitContainer.image) &&
        Objects.equals(this.imageTag, v1PolyaxonInitContainer.imageTag) &&
        Objects.equals(this.imagePullPolicy, v1PolyaxonInitContainer.imagePullPolicy) &&
        Objects.equals(this.resources, v1PolyaxonInitContainer.resources);
  }

  @Override
  public int hashCode() {
    return Objects.hash(image, imageTag, imagePullPolicy, resources);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PolyaxonInitContainer {\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    imageTag: ").append(toIndentedString(imageTag)).append("\n");
    sb.append("    imagePullPolicy: ").append(toIndentedString(imagePullPolicy)).append("\n");
    sb.append("    resources: ").append(toIndentedString(resources)).append("\n");
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
    openapiFields.add("image");
    openapiFields.add("imageTag");
    openapiFields.add("imagePullPolicy");
    openapiFields.add("resources");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1PolyaxonInitContainer
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1PolyaxonInitContainer.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1PolyaxonInitContainer is not found in the empty JSON string", V1PolyaxonInitContainer.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1PolyaxonInitContainer.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1PolyaxonInitContainer` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("image") != null && !jsonObj.get("image").isJsonNull()) && !jsonObj.get("image").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `image` to be a primitive type in the JSON string but got `%s`", jsonObj.get("image").toString()));
      }
      if ((jsonObj.get("imageTag") != null && !jsonObj.get("imageTag").isJsonNull()) && !jsonObj.get("imageTag").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `imageTag` to be a primitive type in the JSON string but got `%s`", jsonObj.get("imageTag").toString()));
      }
      if ((jsonObj.get("imagePullPolicy") != null && !jsonObj.get("imagePullPolicy").isJsonNull()) && !jsonObj.get("imagePullPolicy").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `imagePullPolicy` to be a primitive type in the JSON string but got `%s`", jsonObj.get("imagePullPolicy").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1PolyaxonInitContainer.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1PolyaxonInitContainer' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1PolyaxonInitContainer> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1PolyaxonInitContainer.class));

       return (TypeAdapter<T>) new TypeAdapter<V1PolyaxonInitContainer>() {
           @Override
           public void write(JsonWriter out, V1PolyaxonInitContainer value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1PolyaxonInitContainer read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1PolyaxonInitContainer given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1PolyaxonInitContainer
  * @throws IOException if the JSON string is invalid with respect to V1PolyaxonInitContainer
  */
  public static V1PolyaxonInitContainer fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1PolyaxonInitContainer.class);
  }

 /**
  * Convert an instance of V1PolyaxonInitContainer to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

