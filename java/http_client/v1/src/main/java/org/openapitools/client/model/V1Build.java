// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.14.2
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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.V1Cache;
import org.openapitools.client.model.V1Param;
import org.openapitools.client.model.V1PatchStrategy;

/**
 * V1Build
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Build {
  public static final String SERIALIZED_NAME_HUB_REF = "hubRef";
  @SerializedName(SERIALIZED_NAME_HUB_REF)
  private String hubRef;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets = null;

  public static final String SERIALIZED_NAME_CACHE = "cache";
  @SerializedName(SERIALIZED_NAME_CACHE)
  private V1Cache cache;

  public static final String SERIALIZED_NAME_PARAMS = "params";
  @SerializedName(SERIALIZED_NAME_PARAMS)
  private Map<String, V1Param> params = null;

  public static final String SERIALIZED_NAME_RUN_PATCH = "runPatch";
  @SerializedName(SERIALIZED_NAME_RUN_PATCH)
  private Object runPatch;

  public static final String SERIALIZED_NAME_PATCH_STRATEGY = "patchStrategy";
  @SerializedName(SERIALIZED_NAME_PATCH_STRATEGY)
  private V1PatchStrategy patchStrategy = V1PatchStrategy.REPLACE;


  public V1Build hubRef(String hubRef) {
    
    this.hubRef = hubRef;
    return this;
  }

   /**
   * Get hubRef
   * @return hubRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getHubRef() {
    return hubRef;
  }


  public void setHubRef(String hubRef) {
    this.hubRef = hubRef;
  }


  public V1Build connection(String connection) {
    
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1Build queue(String queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1Build presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1Build addPresetsItem(String presetsItem) {
    if (this.presets == null) {
      this.presets = new ArrayList<String>();
    }
    this.presets.add(presetsItem);
    return this;
  }

   /**
   * Get presets
   * @return presets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getPresets() {
    return presets;
  }


  public void setPresets(List<String> presets) {
    this.presets = presets;
  }


  public V1Build cache(V1Cache cache) {
    
    this.cache = cache;
    return this;
  }

   /**
   * Get cache
   * @return cache
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Cache getCache() {
    return cache;
  }


  public void setCache(V1Cache cache) {
    this.cache = cache;
  }


  public V1Build params(Map<String, V1Param> params) {
    
    this.params = params;
    return this;
  }

  public V1Build putParamsItem(String key, V1Param paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<String, V1Param>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, V1Param> getParams() {
    return params;
  }


  public void setParams(Map<String, V1Param> params) {
    this.params = params;
  }


  public V1Build runPatch(Object runPatch) {
    
    this.runPatch = runPatch;
    return this;
  }

   /**
   * Get runPatch
   * @return runPatch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getRunPatch() {
    return runPatch;
  }


  public void setRunPatch(Object runPatch) {
    this.runPatch = runPatch;
  }


  public V1Build patchStrategy(V1PatchStrategy patchStrategy) {
    
    this.patchStrategy = patchStrategy;
    return this;
  }

   /**
   * Get patchStrategy
   * @return patchStrategy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PatchStrategy getPatchStrategy() {
    return patchStrategy;
  }


  public void setPatchStrategy(V1PatchStrategy patchStrategy) {
    this.patchStrategy = patchStrategy;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Build v1Build = (V1Build) o;
    return Objects.equals(this.hubRef, v1Build.hubRef) &&
        Objects.equals(this.connection, v1Build.connection) &&
        Objects.equals(this.queue, v1Build.queue) &&
        Objects.equals(this.presets, v1Build.presets) &&
        Objects.equals(this.cache, v1Build.cache) &&
        Objects.equals(this.params, v1Build.params) &&
        Objects.equals(this.runPatch, v1Build.runPatch) &&
        Objects.equals(this.patchStrategy, v1Build.patchStrategy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hubRef, connection, queue, presets, cache, params, runPatch, patchStrategy);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Build {\n");
    sb.append("    hubRef: ").append(toIndentedString(hubRef)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    cache: ").append(toIndentedString(cache)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    runPatch: ").append(toIndentedString(runPatch)).append("\n");
    sb.append("    patchStrategy: ").append(toIndentedString(patchStrategy)).append("\n");
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

}

