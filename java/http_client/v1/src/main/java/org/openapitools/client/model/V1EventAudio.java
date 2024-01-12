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
 * V1EventAudio
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventAudio {
  public static final String SERIALIZED_NAME_SAMPLE_RATE = "sample_rate";
  @SerializedName(SERIALIZED_NAME_SAMPLE_RATE)
  private Float sampleRate;

  public static final String SERIALIZED_NAME_NUM_CHANNELS = "num_channels";
  @SerializedName(SERIALIZED_NAME_NUM_CHANNELS)
  private Integer numChannels;

  public static final String SERIALIZED_NAME_LENGTH_FRAMES = "length_frames";
  @SerializedName(SERIALIZED_NAME_LENGTH_FRAMES)
  private Integer lengthFrames;

  public static final String SERIALIZED_NAME_CONTENT_TYPE = "content_type";
  @SerializedName(SERIALIZED_NAME_CONTENT_TYPE)
  private String contentType;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;

  public V1EventAudio() {
  }

  public V1EventAudio sampleRate(Float sampleRate) {

    this.sampleRate = sampleRate;
    return this;
  }

   /**
   * Sample rate of the audio in Hz.
   * @return sampleRate
  **/
  @javax.annotation.Nullable

  public Float getSampleRate() {
    return sampleRate;
  }


  public void setSampleRate(Float sampleRate) {
    this.sampleRate = sampleRate;
  }


  public V1EventAudio numChannels(Integer numChannels) {

    this.numChannels = numChannels;
    return this;
  }

   /**
   * Number of channels of audio.
   * @return numChannels
  **/
  @javax.annotation.Nullable

  public Integer getNumChannels() {
    return numChannels;
  }


  public void setNumChannels(Integer numChannels) {
    this.numChannels = numChannels;
  }


  public V1EventAudio lengthFrames(Integer lengthFrames) {

    this.lengthFrames = lengthFrames;
    return this;
  }

   /**
   * Length of the audio in frames (samples per channel).
   * @return lengthFrames
  **/
  @javax.annotation.Nullable

  public Integer getLengthFrames() {
    return lengthFrames;
  }


  public void setLengthFrames(Integer lengthFrames) {
    this.lengthFrames = lengthFrames;
  }


  public V1EventAudio contentType(String contentType) {

    this.contentType = contentType;
    return this;
  }

   /**
   * Get contentType
   * @return contentType
  **/
  @javax.annotation.Nullable

  public String getContentType() {
    return contentType;
  }


  public void setContentType(String contentType) {
    this.contentType = contentType;
  }


  public V1EventAudio path(String path) {

    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventAudio v1EventAudio = (V1EventAudio) o;
    return Objects.equals(this.sampleRate, v1EventAudio.sampleRate) &&
        Objects.equals(this.numChannels, v1EventAudio.numChannels) &&
        Objects.equals(this.lengthFrames, v1EventAudio.lengthFrames) &&
        Objects.equals(this.contentType, v1EventAudio.contentType) &&
        Objects.equals(this.path, v1EventAudio.path);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sampleRate, numChannels, lengthFrames, contentType, path);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventAudio {\n");
    sb.append("    sampleRate: ").append(toIndentedString(sampleRate)).append("\n");
    sb.append("    numChannels: ").append(toIndentedString(numChannels)).append("\n");
    sb.append("    lengthFrames: ").append(toIndentedString(lengthFrames)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
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
    openapiFields.add("sample_rate");
    openapiFields.add("num_channels");
    openapiFields.add("length_frames");
    openapiFields.add("content_type");
    openapiFields.add("path");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1EventAudio
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1EventAudio.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1EventAudio is not found in the empty JSON string", V1EventAudio.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1EventAudio.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1EventAudio` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("content_type") != null && !jsonObj.get("content_type").isJsonNull()) && !jsonObj.get("content_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content_type").toString()));
      }
      if ((jsonObj.get("path") != null && !jsonObj.get("path").isJsonNull()) && !jsonObj.get("path").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `path` to be a primitive type in the JSON string but got `%s`", jsonObj.get("path").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1EventAudio.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1EventAudio' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1EventAudio> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1EventAudio.class));

       return (TypeAdapter<T>) new TypeAdapter<V1EventAudio>() {
           @Override
           public void write(JsonWriter out, V1EventAudio value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1EventAudio read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1EventAudio given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1EventAudio
  * @throws IOException if the JSON string is invalid with respect to V1EventAudio
  */
  public static V1EventAudio fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1EventAudio.class);
  }

 /**
  * Convert an instance of V1EventAudio to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

