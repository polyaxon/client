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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.V1OptimizationMetric;
import org.openapitools.client.model.V1Tuner;

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
 * V1Bayes
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Bayes {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "bayes";

  public static final String SERIALIZED_NAME_PARAMS = "params";
  @SerializedName(SERIALIZED_NAME_PARAMS)
  private Map<String, Object> params = new HashMap<>();

  public static final String SERIALIZED_NAME_NUM_INITIAL_RUNS = "numInitialRuns";
  @SerializedName(SERIALIZED_NAME_NUM_INITIAL_RUNS)
  private Integer numInitialRuns;

  public static final String SERIALIZED_NAME_MAX_ITERATIONS = "maxIterations";
  @SerializedName(SERIALIZED_NAME_MAX_ITERATIONS)
  private Integer maxIterations;

  public static final String SERIALIZED_NAME_UTILITY_FUNCTION = "utilityFunction";
  @SerializedName(SERIALIZED_NAME_UTILITY_FUNCTION)
  private Object utilityFunction;

  public static final String SERIALIZED_NAME_METRIC = "metric";
  @SerializedName(SERIALIZED_NAME_METRIC)
  private V1OptimizationMetric metric;

  public static final String SERIALIZED_NAME_SEED = "seed";
  @SerializedName(SERIALIZED_NAME_SEED)
  private Integer seed;

  public static final String SERIALIZED_NAME_CONCURRENCY = "concurrency";
  @SerializedName(SERIALIZED_NAME_CONCURRENCY)
  private Integer concurrency;

  public static final String SERIALIZED_NAME_TUNER = "tuner";
  @SerializedName(SERIALIZED_NAME_TUNER)
  private V1Tuner tuner;

  public static final String SERIALIZED_NAME_EARLY_STOPPING = "earlyStopping";
  @SerializedName(SERIALIZED_NAME_EARLY_STOPPING)
  private List<Object> earlyStopping;

  public V1Bayes() {
  }

  public V1Bayes kind(String kind) {

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


  public V1Bayes params(Map<String, Object> params) {

    this.params = params;
    return this;
  }

  public V1Bayes putParamsItem(String key, Object paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @javax.annotation.Nullable

  public Map<String, Object> getParams() {
    return params;
  }


  public void setParams(Map<String, Object> params) {
    this.params = params;
  }


  public V1Bayes numInitialRuns(Integer numInitialRuns) {

    this.numInitialRuns = numInitialRuns;
    return this;
  }

   /**
   * Get numInitialRuns
   * @return numInitialRuns
  **/
  @javax.annotation.Nullable

  public Integer getNumInitialRuns() {
    return numInitialRuns;
  }


  public void setNumInitialRuns(Integer numInitialRuns) {
    this.numInitialRuns = numInitialRuns;
  }


  public V1Bayes maxIterations(Integer maxIterations) {

    this.maxIterations = maxIterations;
    return this;
  }

   /**
   * Get maxIterations
   * @return maxIterations
  **/
  @javax.annotation.Nullable

  public Integer getMaxIterations() {
    return maxIterations;
  }


  public void setMaxIterations(Integer maxIterations) {
    this.maxIterations = maxIterations;
  }


  public V1Bayes utilityFunction(Object utilityFunction) {

    this.utilityFunction = utilityFunction;
    return this;
  }

   /**
   * Get utilityFunction
   * @return utilityFunction
  **/
  @javax.annotation.Nullable

  public Object getUtilityFunction() {
    return utilityFunction;
  }


  public void setUtilityFunction(Object utilityFunction) {
    this.utilityFunction = utilityFunction;
  }


  public V1Bayes metric(V1OptimizationMetric metric) {

    this.metric = metric;
    return this;
  }

   /**
   * Get metric
   * @return metric
  **/
  @javax.annotation.Nullable

  public V1OptimizationMetric getMetric() {
    return metric;
  }


  public void setMetric(V1OptimizationMetric metric) {
    this.metric = metric;
  }


  public V1Bayes seed(Integer seed) {

    this.seed = seed;
    return this;
  }

   /**
   * Get seed
   * @return seed
  **/
  @javax.annotation.Nullable

  public Integer getSeed() {
    return seed;
  }


  public void setSeed(Integer seed) {
    this.seed = seed;
  }


  public V1Bayes concurrency(Integer concurrency) {

    this.concurrency = concurrency;
    return this;
  }

   /**
   * Get concurrency
   * @return concurrency
  **/
  @javax.annotation.Nullable

  public Integer getConcurrency() {
    return concurrency;
  }


  public void setConcurrency(Integer concurrency) {
    this.concurrency = concurrency;
  }


  public V1Bayes tuner(V1Tuner tuner) {

    this.tuner = tuner;
    return this;
  }

   /**
   * Get tuner
   * @return tuner
  **/
  @javax.annotation.Nullable

  public V1Tuner getTuner() {
    return tuner;
  }


  public void setTuner(V1Tuner tuner) {
    this.tuner = tuner;
  }


  public V1Bayes earlyStopping(List<Object> earlyStopping) {

    this.earlyStopping = earlyStopping;
    return this;
  }

  public V1Bayes addEarlyStoppingItem(Object earlyStoppingItem) {
    if (this.earlyStopping == null) {
      this.earlyStopping = new ArrayList<>();
    }
    this.earlyStopping.add(earlyStoppingItem);
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @javax.annotation.Nullable

  public List<Object> getEarlyStopping() {
    return earlyStopping;
  }


  public void setEarlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Bayes v1Bayes = (V1Bayes) o;
    return Objects.equals(this.kind, v1Bayes.kind) &&
        Objects.equals(this.params, v1Bayes.params) &&
        Objects.equals(this.numInitialRuns, v1Bayes.numInitialRuns) &&
        Objects.equals(this.maxIterations, v1Bayes.maxIterations) &&
        Objects.equals(this.utilityFunction, v1Bayes.utilityFunction) &&
        Objects.equals(this.metric, v1Bayes.metric) &&
        Objects.equals(this.seed, v1Bayes.seed) &&
        Objects.equals(this.concurrency, v1Bayes.concurrency) &&
        Objects.equals(this.tuner, v1Bayes.tuner) &&
        Objects.equals(this.earlyStopping, v1Bayes.earlyStopping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, params, numInitialRuns, maxIterations, utilityFunction, metric, seed, concurrency, tuner, earlyStopping);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Bayes {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    numInitialRuns: ").append(toIndentedString(numInitialRuns)).append("\n");
    sb.append("    maxIterations: ").append(toIndentedString(maxIterations)).append("\n");
    sb.append("    utilityFunction: ").append(toIndentedString(utilityFunction)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    seed: ").append(toIndentedString(seed)).append("\n");
    sb.append("    concurrency: ").append(toIndentedString(concurrency)).append("\n");
    sb.append("    tuner: ").append(toIndentedString(tuner)).append("\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
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
    openapiFields.add("params");
    openapiFields.add("numInitialRuns");
    openapiFields.add("maxIterations");
    openapiFields.add("utilityFunction");
    openapiFields.add("metric");
    openapiFields.add("seed");
    openapiFields.add("concurrency");
    openapiFields.add("tuner");
    openapiFields.add("earlyStopping");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Bayes
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Bayes.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Bayes is not found in the empty JSON string", V1Bayes.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Bayes.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Bayes` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
      }
      // validate the optional field `metric`
      if (jsonObj.get("metric") != null && !jsonObj.get("metric").isJsonNull()) {
        V1OptimizationMetric.validateJsonObject(jsonObj.getAsJsonObject("metric"));
      }
      // validate the optional field `tuner`
      if (jsonObj.get("tuner") != null && !jsonObj.get("tuner").isJsonNull()) {
        V1Tuner.validateJsonObject(jsonObj.getAsJsonObject("tuner"));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("earlyStopping") != null && !jsonObj.get("earlyStopping").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `earlyStopping` to be an array in the JSON string but got `%s`", jsonObj.get("earlyStopping").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Bayes.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Bayes' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Bayes> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Bayes.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Bayes>() {
           @Override
           public void write(JsonWriter out, V1Bayes value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Bayes read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Bayes given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Bayes
  * @throws IOException if the JSON string is invalid with respect to V1Bayes
  */
  public static V1Bayes fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Bayes.class);
  }

 /**
  * Convert an instance of V1Bayes to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

