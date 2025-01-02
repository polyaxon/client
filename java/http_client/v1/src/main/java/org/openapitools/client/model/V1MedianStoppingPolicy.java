/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.6.0
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
 * Early stopping with median stopping, this policy computes running medians across all runs and stops those whose best performance is worse than the median of the running runs.
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1MedianStoppingPolicy {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "median";

  public static final String SERIALIZED_NAME_EVALUATION_INTERVAL = "evaluationInterval";
  @SerializedName(SERIALIZED_NAME_EVALUATION_INTERVAL)
  private Integer evaluationInterval;

  public static final String SERIALIZED_NAME_MIN_INTERVAL = "minInterval";
  @SerializedName(SERIALIZED_NAME_MIN_INTERVAL)
  private Integer minInterval;

  public static final String SERIALIZED_NAME_MIN_SAMPLES = "minSamples";
  @SerializedName(SERIALIZED_NAME_MIN_SAMPLES)
  private Integer minSamples;

  public V1MedianStoppingPolicy() {
  }

  public V1MedianStoppingPolicy kind(String kind) {

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


  public V1MedianStoppingPolicy evaluationInterval(Integer evaluationInterval) {

    this.evaluationInterval = evaluationInterval;
    return this;
  }

   /**
   * Interval/Frequency for applying the policy.
   * @return evaluationInterval
  **/
  @javax.annotation.Nullable

  public Integer getEvaluationInterval() {
    return evaluationInterval;
  }


  public void setEvaluationInterval(Integer evaluationInterval) {
    this.evaluationInterval = evaluationInterval;
  }


  public V1MedianStoppingPolicy minInterval(Integer minInterval) {

    this.minInterval = minInterval;
    return this;
  }

   /**
   * Get minInterval
   * @return minInterval
  **/
  @javax.annotation.Nullable

  public Integer getMinInterval() {
    return minInterval;
  }


  public void setMinInterval(Integer minInterval) {
    this.minInterval = minInterval;
  }


  public V1MedianStoppingPolicy minSamples(Integer minSamples) {

    this.minSamples = minSamples;
    return this;
  }

   /**
   * Get minSamples
   * @return minSamples
  **/
  @javax.annotation.Nullable

  public Integer getMinSamples() {
    return minSamples;
  }


  public void setMinSamples(Integer minSamples) {
    this.minSamples = minSamples;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1MedianStoppingPolicy v1MedianStoppingPolicy = (V1MedianStoppingPolicy) o;
    return Objects.equals(this.kind, v1MedianStoppingPolicy.kind) &&
        Objects.equals(this.evaluationInterval, v1MedianStoppingPolicy.evaluationInterval) &&
        Objects.equals(this.minInterval, v1MedianStoppingPolicy.minInterval) &&
        Objects.equals(this.minSamples, v1MedianStoppingPolicy.minSamples);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, evaluationInterval, minInterval, minSamples);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1MedianStoppingPolicy {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    evaluationInterval: ").append(toIndentedString(evaluationInterval)).append("\n");
    sb.append("    minInterval: ").append(toIndentedString(minInterval)).append("\n");
    sb.append("    minSamples: ").append(toIndentedString(minSamples)).append("\n");
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
    openapiFields.add("evaluationInterval");
    openapiFields.add("minInterval");
    openapiFields.add("minSamples");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1MedianStoppingPolicy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1MedianStoppingPolicy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1MedianStoppingPolicy is not found in the empty JSON string", V1MedianStoppingPolicy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1MedianStoppingPolicy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1MedianStoppingPolicy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1MedianStoppingPolicy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1MedianStoppingPolicy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1MedianStoppingPolicy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1MedianStoppingPolicy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1MedianStoppingPolicy>() {
           @Override
           public void write(JsonWriter out, V1MedianStoppingPolicy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1MedianStoppingPolicy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1MedianStoppingPolicy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1MedianStoppingPolicy
  * @throws IOException if the JSON string is invalid with respect to V1MedianStoppingPolicy
  */
  public static V1MedianStoppingPolicy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1MedianStoppingPolicy.class);
  }

 /**
  * Convert an instance of V1MedianStoppingPolicy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

