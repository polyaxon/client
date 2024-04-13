/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.6
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
 * Early stopping with truncation stopping, this policy stops a percentage of all running runs at every evaluation.
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1TruncationStoppingPolicy {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "truncation";

  public static final String SERIALIZED_NAME_PERCENT = "percent";
  @SerializedName(SERIALIZED_NAME_PERCENT)
  private Integer percent;

  public static final String SERIALIZED_NAME_EVALUATION_INTERVAL = "evaluationInterval";
  @SerializedName(SERIALIZED_NAME_EVALUATION_INTERVAL)
  private Integer evaluationInterval;

  public static final String SERIALIZED_NAME_MIN_INTERVAL = "minInterval";
  @SerializedName(SERIALIZED_NAME_MIN_INTERVAL)
  private Integer minInterval;

  public static final String SERIALIZED_NAME_MIN_SAMPLES = "minSamples";
  @SerializedName(SERIALIZED_NAME_MIN_SAMPLES)
  private Integer minSamples;

  public static final String SERIALIZED_NAME_INCLUDE_SUCCEEDED = "includeSucceeded";
  @SerializedName(SERIALIZED_NAME_INCLUDE_SUCCEEDED)
  private Boolean includeSucceeded;

  public V1TruncationStoppingPolicy() {
  }

  public V1TruncationStoppingPolicy kind(String kind) {

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


  public V1TruncationStoppingPolicy percent(Integer percent) {

    this.percent = percent;
    return this;
  }

   /**
   * The percentage of runs to stop, at each evaluation interval. e.g. 1 - 99.
   * @return percent
  **/
  @javax.annotation.Nullable

  public Integer getPercent() {
    return percent;
  }


  public void setPercent(Integer percent) {
    this.percent = percent;
  }


  public V1TruncationStoppingPolicy evaluationInterval(Integer evaluationInterval) {

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


  public V1TruncationStoppingPolicy minInterval(Integer minInterval) {

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


  public V1TruncationStoppingPolicy minSamples(Integer minSamples) {

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


  public V1TruncationStoppingPolicy includeSucceeded(Boolean includeSucceeded) {

    this.includeSucceeded = includeSucceeded;
    return this;
  }

   /**
   * Get includeSucceeded
   * @return includeSucceeded
  **/
  @javax.annotation.Nullable

  public Boolean getIncludeSucceeded() {
    return includeSucceeded;
  }


  public void setIncludeSucceeded(Boolean includeSucceeded) {
    this.includeSucceeded = includeSucceeded;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1TruncationStoppingPolicy v1TruncationStoppingPolicy = (V1TruncationStoppingPolicy) o;
    return Objects.equals(this.kind, v1TruncationStoppingPolicy.kind) &&
        Objects.equals(this.percent, v1TruncationStoppingPolicy.percent) &&
        Objects.equals(this.evaluationInterval, v1TruncationStoppingPolicy.evaluationInterval) &&
        Objects.equals(this.minInterval, v1TruncationStoppingPolicy.minInterval) &&
        Objects.equals(this.minSamples, v1TruncationStoppingPolicy.minSamples) &&
        Objects.equals(this.includeSucceeded, v1TruncationStoppingPolicy.includeSucceeded);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, percent, evaluationInterval, minInterval, minSamples, includeSucceeded);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1TruncationStoppingPolicy {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    percent: ").append(toIndentedString(percent)).append("\n");
    sb.append("    evaluationInterval: ").append(toIndentedString(evaluationInterval)).append("\n");
    sb.append("    minInterval: ").append(toIndentedString(minInterval)).append("\n");
    sb.append("    minSamples: ").append(toIndentedString(minSamples)).append("\n");
    sb.append("    includeSucceeded: ").append(toIndentedString(includeSucceeded)).append("\n");
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
    openapiFields.add("percent");
    openapiFields.add("evaluationInterval");
    openapiFields.add("minInterval");
    openapiFields.add("minSamples");
    openapiFields.add("includeSucceeded");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1TruncationStoppingPolicy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1TruncationStoppingPolicy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1TruncationStoppingPolicy is not found in the empty JSON string", V1TruncationStoppingPolicy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1TruncationStoppingPolicy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1TruncationStoppingPolicy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
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
       if (!V1TruncationStoppingPolicy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1TruncationStoppingPolicy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1TruncationStoppingPolicy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1TruncationStoppingPolicy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1TruncationStoppingPolicy>() {
           @Override
           public void write(JsonWriter out, V1TruncationStoppingPolicy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1TruncationStoppingPolicy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1TruncationStoppingPolicy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1TruncationStoppingPolicy
  * @throws IOException if the JSON string is invalid with respect to V1TruncationStoppingPolicy
  */
  public static V1TruncationStoppingPolicy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1TruncationStoppingPolicy.class);
  }

 /**
  * Convert an instance of V1TruncationStoppingPolicy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

