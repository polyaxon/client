/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc37
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
import org.openapitools.client.model.V1EventKind;

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
 * V1EventTrigger
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventTrigger {
  public static final String SERIALIZED_NAME_KINDS = "kinds";
  @SerializedName(SERIALIZED_NAME_KINDS)
  private List<V1EventKind> kinds;

  public static final String SERIALIZED_NAME_REF = "ref";
  @SerializedName(SERIALIZED_NAME_REF)
  private String ref;

  public V1EventTrigger() {
  }

  public V1EventTrigger kinds(List<V1EventKind> kinds) {

    this.kinds = kinds;
    return this;
  }

  public V1EventTrigger addKindsItem(V1EventKind kindsItem) {
    if (this.kinds == null) {
      this.kinds = new ArrayList<>();
    }
    this.kinds.add(kindsItem);
    return this;
  }

   /**
   * Get kinds
   * @return kinds
  **/
  @javax.annotation.Nullable

  public List<V1EventKind> getKinds() {
    return kinds;
  }


  public void setKinds(List<V1EventKind> kinds) {
    this.kinds = kinds;
  }


  public V1EventTrigger ref(String ref) {

    this.ref = ref;
    return this;
  }

   /**
   * Get ref
   * @return ref
  **/
  @javax.annotation.Nullable

  public String getRef() {
    return ref;
  }


  public void setRef(String ref) {
    this.ref = ref;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventTrigger v1EventTrigger = (V1EventTrigger) o;
    return Objects.equals(this.kinds, v1EventTrigger.kinds) &&
        Objects.equals(this.ref, v1EventTrigger.ref);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kinds, ref);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventTrigger {\n");
    sb.append("    kinds: ").append(toIndentedString(kinds)).append("\n");
    sb.append("    ref: ").append(toIndentedString(ref)).append("\n");
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
    openapiFields.add("kinds");
    openapiFields.add("ref");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1EventTrigger
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1EventTrigger.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1EventTrigger is not found in the empty JSON string", V1EventTrigger.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1EventTrigger.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1EventTrigger` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("kinds") != null && !jsonObj.get("kinds").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `kinds` to be an array in the JSON string but got `%s`", jsonObj.get("kinds").toString()));
      }
      if ((jsonObj.get("ref") != null && !jsonObj.get("ref").isJsonNull()) && !jsonObj.get("ref").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `ref` to be a primitive type in the JSON string but got `%s`", jsonObj.get("ref").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1EventTrigger.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1EventTrigger' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1EventTrigger> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1EventTrigger.class));

       return (TypeAdapter<T>) new TypeAdapter<V1EventTrigger>() {
           @Override
           public void write(JsonWriter out, V1EventTrigger value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1EventTrigger read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1EventTrigger given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1EventTrigger
  * @throws IOException if the JSON string is invalid with respect to V1EventTrigger
  */
  public static V1EventTrigger fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1EventTrigger.class);
  }

 /**
  * Convert an instance of V1EventTrigger to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

