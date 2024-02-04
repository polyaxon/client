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
import java.util.ArrayList;
import java.util.List;

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
 * V1PytorchElasticPolicy
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1PytorchElasticPolicy {
  public static final String SERIALIZED_NAME_MIN_REPLICAS = "minReplicas";
  @SerializedName(SERIALIZED_NAME_MIN_REPLICAS)
  private Integer minReplicas;

  public static final String SERIALIZED_NAME_MAX_REPLICAS = "maxReplicas";
  @SerializedName(SERIALIZED_NAME_MAX_REPLICAS)
  private Integer maxReplicas;

  public static final String SERIALIZED_NAME_RDVZ_BACKEND = "rdvzBackend";
  @SerializedName(SERIALIZED_NAME_RDVZ_BACKEND)
  private String rdvzBackend;

  public static final String SERIALIZED_NAME_RDVZ_PORT = "rdvzPort";
  @SerializedName(SERIALIZED_NAME_RDVZ_PORT)
  private Integer rdvzPort;

  public static final String SERIALIZED_NAME_RDVZ_HOST = "rdvzHost";
  @SerializedName(SERIALIZED_NAME_RDVZ_HOST)
  private String rdvzHost;

  public static final String SERIALIZED_NAME_RDVZ_ID = "rdvzId";
  @SerializedName(SERIALIZED_NAME_RDVZ_ID)
  private String rdvzId;

  public static final String SERIALIZED_NAME_RDVZ_CONF = "rdvzConf";
  @SerializedName(SERIALIZED_NAME_RDVZ_CONF)
  private List<Object> rdvzConf;

  public static final String SERIALIZED_NAME_STANDALONE = "standalone";
  @SerializedName(SERIALIZED_NAME_STANDALONE)
  private Boolean standalone;

  public static final String SERIALIZED_NAME_N_PROC_PER_NODE = "nProcPerNode";
  @SerializedName(SERIALIZED_NAME_N_PROC_PER_NODE)
  private Integer nProcPerNode;

  public static final String SERIALIZED_NAME_MAX_RESTARTS = "maxRestarts";
  @SerializedName(SERIALIZED_NAME_MAX_RESTARTS)
  private Integer maxRestarts;

  public static final String SERIALIZED_NAME_METRICS = "Metrics";
  @SerializedName(SERIALIZED_NAME_METRICS)
  private List<Object> metrics;

  public V1PytorchElasticPolicy() {
  }

  public V1PytorchElasticPolicy minReplicas(Integer minReplicas) {

    this.minReplicas = minReplicas;
    return this;
  }

   /**
   * minReplicas is the lower limit for the number of replicas to which the training job can scale down.
   * @return minReplicas
  **/
  @javax.annotation.Nullable

  public Integer getMinReplicas() {
    return minReplicas;
  }


  public void setMinReplicas(Integer minReplicas) {
    this.minReplicas = minReplicas;
  }


  public V1PytorchElasticPolicy maxReplicas(Integer maxReplicas) {

    this.maxReplicas = maxReplicas;
    return this;
  }

   /**
   * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas, defaults to null.
   * @return maxReplicas
  **/
  @javax.annotation.Nullable

  public Integer getMaxReplicas() {
    return maxReplicas;
  }


  public void setMaxReplicas(Integer maxReplicas) {
    this.maxReplicas = maxReplicas;
  }


  public V1PytorchElasticPolicy rdvzBackend(String rdvzBackend) {

    this.rdvzBackend = rdvzBackend;
    return this;
  }

   /**
   * Get rdvzBackend
   * @return rdvzBackend
  **/
  @javax.annotation.Nullable

  public String getRdvzBackend() {
    return rdvzBackend;
  }


  public void setRdvzBackend(String rdvzBackend) {
    this.rdvzBackend = rdvzBackend;
  }


  public V1PytorchElasticPolicy rdvzPort(Integer rdvzPort) {

    this.rdvzPort = rdvzPort;
    return this;
  }

   /**
   * Get rdvzPort
   * @return rdvzPort
  **/
  @javax.annotation.Nullable

  public Integer getRdvzPort() {
    return rdvzPort;
  }


  public void setRdvzPort(Integer rdvzPort) {
    this.rdvzPort = rdvzPort;
  }


  public V1PytorchElasticPolicy rdvzHost(String rdvzHost) {

    this.rdvzHost = rdvzHost;
    return this;
  }

   /**
   * Get rdvzHost
   * @return rdvzHost
  **/
  @javax.annotation.Nullable

  public String getRdvzHost() {
    return rdvzHost;
  }


  public void setRdvzHost(String rdvzHost) {
    this.rdvzHost = rdvzHost;
  }


  public V1PytorchElasticPolicy rdvzId(String rdvzId) {

    this.rdvzId = rdvzId;
    return this;
  }

   /**
   * Get rdvzId
   * @return rdvzId
  **/
  @javax.annotation.Nullable

  public String getRdvzId() {
    return rdvzId;
  }


  public void setRdvzId(String rdvzId) {
    this.rdvzId = rdvzId;
  }


  public V1PytorchElasticPolicy rdvzConf(List<Object> rdvzConf) {

    this.rdvzConf = rdvzConf;
    return this;
  }

  public V1PytorchElasticPolicy addRdvzConfItem(Object rdvzConfItem) {
    if (this.rdvzConf == null) {
      this.rdvzConf = new ArrayList<>();
    }
    this.rdvzConf.add(rdvzConfItem);
    return this;
  }

   /**
   * RDZVConf contains additional rendezvous configuration (&lt;key1&gt;&#x3D;&lt;value1&gt;,&lt;key2&gt;&#x3D;&lt;value2&gt;,...).
   * @return rdvzConf
  **/
  @javax.annotation.Nullable

  public List<Object> getRdvzConf() {
    return rdvzConf;
  }


  public void setRdvzConf(List<Object> rdvzConf) {
    this.rdvzConf = rdvzConf;
  }


  public V1PytorchElasticPolicy standalone(Boolean standalone) {

    this.standalone = standalone;
    return this;
  }

   /**
   * Start a local standalone rendezvous backend that is represented by a C10d TCP store on port 29400. Useful when launching single-node, multi-worker job. If specified --rdzv_backend, --rdzv_endpoint, --rdzv_id are auto-assigned; any explicitly set values are ignored.
   * @return standalone
  **/
  @javax.annotation.Nullable

  public Boolean getStandalone() {
    return standalone;
  }


  public void setStandalone(Boolean standalone) {
    this.standalone = standalone;
  }


  public V1PytorchElasticPolicy nProcPerNode(Integer nProcPerNode) {

    this.nProcPerNode = nProcPerNode;
    return this;
  }

   /**
   * Number of workers per node; supported values: [auto, cpu, gpu, int]. Deprecated: This API is deprecated in v1.7+ Use .spec.nprocPerNode instead.
   * @return nProcPerNode
  **/
  @javax.annotation.Nullable

  public Integer getnProcPerNode() {
    return nProcPerNode;
  }


  public void setnProcPerNode(Integer nProcPerNode) {
    this.nProcPerNode = nProcPerNode;
  }


  public V1PytorchElasticPolicy maxRestarts(Integer maxRestarts) {

    this.maxRestarts = maxRestarts;
    return this;
  }

   /**
   * Get maxRestarts
   * @return maxRestarts
  **/
  @javax.annotation.Nullable

  public Integer getMaxRestarts() {
    return maxRestarts;
  }


  public void setMaxRestarts(Integer maxRestarts) {
    this.maxRestarts = maxRestarts;
  }


  public V1PytorchElasticPolicy metrics(List<Object> metrics) {

    this.metrics = metrics;
    return this;
  }

  public V1PytorchElasticPolicy addMetricsItem(Object metricsItem) {
    if (this.metrics == null) {
      this.metrics = new ArrayList<>();
    }
    this.metrics.add(metricsItem);
    return this;
  }

   /**
   * Metrics contains the specifications which are used to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated with multiplying the ratio between the target value and the current value by the current number of pods. Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the HPA will not be created.
   * @return metrics
  **/
  @javax.annotation.Nullable

  public List<Object> getMetrics() {
    return metrics;
  }


  public void setMetrics(List<Object> metrics) {
    this.metrics = metrics;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1PytorchElasticPolicy v1PytorchElasticPolicy = (V1PytorchElasticPolicy) o;
    return Objects.equals(this.minReplicas, v1PytorchElasticPolicy.minReplicas) &&
        Objects.equals(this.maxReplicas, v1PytorchElasticPolicy.maxReplicas) &&
        Objects.equals(this.rdvzBackend, v1PytorchElasticPolicy.rdvzBackend) &&
        Objects.equals(this.rdvzPort, v1PytorchElasticPolicy.rdvzPort) &&
        Objects.equals(this.rdvzHost, v1PytorchElasticPolicy.rdvzHost) &&
        Objects.equals(this.rdvzId, v1PytorchElasticPolicy.rdvzId) &&
        Objects.equals(this.rdvzConf, v1PytorchElasticPolicy.rdvzConf) &&
        Objects.equals(this.standalone, v1PytorchElasticPolicy.standalone) &&
        Objects.equals(this.nProcPerNode, v1PytorchElasticPolicy.nProcPerNode) &&
        Objects.equals(this.maxRestarts, v1PytorchElasticPolicy.maxRestarts) &&
        Objects.equals(this.metrics, v1PytorchElasticPolicy.metrics);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minReplicas, maxReplicas, rdvzBackend, rdvzPort, rdvzHost, rdvzId, rdvzConf, standalone, nProcPerNode, maxRestarts, metrics);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1PytorchElasticPolicy {\n");
    sb.append("    minReplicas: ").append(toIndentedString(minReplicas)).append("\n");
    sb.append("    maxReplicas: ").append(toIndentedString(maxReplicas)).append("\n");
    sb.append("    rdvzBackend: ").append(toIndentedString(rdvzBackend)).append("\n");
    sb.append("    rdvzPort: ").append(toIndentedString(rdvzPort)).append("\n");
    sb.append("    rdvzHost: ").append(toIndentedString(rdvzHost)).append("\n");
    sb.append("    rdvzId: ").append(toIndentedString(rdvzId)).append("\n");
    sb.append("    rdvzConf: ").append(toIndentedString(rdvzConf)).append("\n");
    sb.append("    standalone: ").append(toIndentedString(standalone)).append("\n");
    sb.append("    nProcPerNode: ").append(toIndentedString(nProcPerNode)).append("\n");
    sb.append("    maxRestarts: ").append(toIndentedString(maxRestarts)).append("\n");
    sb.append("    metrics: ").append(toIndentedString(metrics)).append("\n");
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
    openapiFields.add("minReplicas");
    openapiFields.add("maxReplicas");
    openapiFields.add("rdvzBackend");
    openapiFields.add("rdvzPort");
    openapiFields.add("rdvzHost");
    openapiFields.add("rdvzId");
    openapiFields.add("rdvzConf");
    openapiFields.add("standalone");
    openapiFields.add("nProcPerNode");
    openapiFields.add("maxRestarts");
    openapiFields.add("Metrics");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1PytorchElasticPolicy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1PytorchElasticPolicy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1PytorchElasticPolicy is not found in the empty JSON string", V1PytorchElasticPolicy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1PytorchElasticPolicy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1PytorchElasticPolicy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("rdvzBackend") != null && !jsonObj.get("rdvzBackend").isJsonNull()) && !jsonObj.get("rdvzBackend").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rdvzBackend` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rdvzBackend").toString()));
      }
      if ((jsonObj.get("rdvzHost") != null && !jsonObj.get("rdvzHost").isJsonNull()) && !jsonObj.get("rdvzHost").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rdvzHost` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rdvzHost").toString()));
      }
      if ((jsonObj.get("rdvzId") != null && !jsonObj.get("rdvzId").isJsonNull()) && !jsonObj.get("rdvzId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rdvzId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rdvzId").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("rdvzConf") != null && !jsonObj.get("rdvzConf").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `rdvzConf` to be an array in the JSON string but got `%s`", jsonObj.get("rdvzConf").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("Metrics") != null && !jsonObj.get("Metrics").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `Metrics` to be an array in the JSON string but got `%s`", jsonObj.get("Metrics").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1PytorchElasticPolicy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1PytorchElasticPolicy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1PytorchElasticPolicy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1PytorchElasticPolicy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1PytorchElasticPolicy>() {
           @Override
           public void write(JsonWriter out, V1PytorchElasticPolicy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1PytorchElasticPolicy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1PytorchElasticPolicy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1PytorchElasticPolicy
  * @throws IOException if the JSON string is invalid with respect to V1PytorchElasticPolicy
  */
  public static V1PytorchElasticPolicy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1PytorchElasticPolicy.class);
  }

 /**
  * Convert an instance of V1PytorchElasticPolicy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

