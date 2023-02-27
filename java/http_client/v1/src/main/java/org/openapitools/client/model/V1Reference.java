// Copyright 2018-2023 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.22.0
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
import org.openapitools.client.model.V1DagRef;
import org.openapitools.client.model.V1HubRef;
import org.openapitools.client.model.V1PathRef;
import org.openapitools.client.model.V1UrlRef;

/**
 * V1Reference
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Reference {
  public static final String SERIALIZED_NAME_HUB_REF = "hubRef";
  @SerializedName(SERIALIZED_NAME_HUB_REF)
  private V1HubRef hubRef;

  public static final String SERIALIZED_NAME_DAG_REF = "dagRef";
  @SerializedName(SERIALIZED_NAME_DAG_REF)
  private V1DagRef dagRef;

  public static final String SERIALIZED_NAME_URL_REF = "urlRef";
  @SerializedName(SERIALIZED_NAME_URL_REF)
  private V1UrlRef urlRef;

  public static final String SERIALIZED_NAME_PATH_REF = "pathRef";
  @SerializedName(SERIALIZED_NAME_PATH_REF)
  private V1PathRef pathRef;


  public V1Reference hubRef(V1HubRef hubRef) {
    
    this.hubRef = hubRef;
    return this;
  }

   /**
   * Get hubRef
   * @return hubRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1HubRef getHubRef() {
    return hubRef;
  }


  public void setHubRef(V1HubRef hubRef) {
    this.hubRef = hubRef;
  }


  public V1Reference dagRef(V1DagRef dagRef) {
    
    this.dagRef = dagRef;
    return this;
  }

   /**
   * Get dagRef
   * @return dagRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1DagRef getDagRef() {
    return dagRef;
  }


  public void setDagRef(V1DagRef dagRef) {
    this.dagRef = dagRef;
  }


  public V1Reference urlRef(V1UrlRef urlRef) {
    
    this.urlRef = urlRef;
    return this;
  }

   /**
   * Get urlRef
   * @return urlRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1UrlRef getUrlRef() {
    return urlRef;
  }


  public void setUrlRef(V1UrlRef urlRef) {
    this.urlRef = urlRef;
  }


  public V1Reference pathRef(V1PathRef pathRef) {
    
    this.pathRef = pathRef;
    return this;
  }

   /**
   * Get pathRef
   * @return pathRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1PathRef getPathRef() {
    return pathRef;
  }


  public void setPathRef(V1PathRef pathRef) {
    this.pathRef = pathRef;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Reference v1Reference = (V1Reference) o;
    return Objects.equals(this.hubRef, v1Reference.hubRef) &&
        Objects.equals(this.dagRef, v1Reference.dagRef) &&
        Objects.equals(this.urlRef, v1Reference.urlRef) &&
        Objects.equals(this.pathRef, v1Reference.pathRef);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hubRef, dagRef, urlRef, pathRef);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Reference {\n");
    sb.append("    hubRef: ").append(toIndentedString(hubRef)).append("\n");
    sb.append("    dagRef: ").append(toIndentedString(dagRef)).append("\n");
    sb.append("    urlRef: ").append(toIndentedString(urlRef)).append("\n");
    sb.append("    pathRef: ").append(toIndentedString(pathRef)).append("\n");
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

