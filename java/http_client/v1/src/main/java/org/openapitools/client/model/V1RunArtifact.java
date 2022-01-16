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
import org.openapitools.client.model.V1ArtifactKind;

/**
 * V1RunArtifact
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1RunArtifact {
  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private String state;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1ArtifactKind kind = V1ArtifactKind.MODEL;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;

  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_SUMMARY = "summary";
  @SerializedName(SERIALIZED_NAME_SUMMARY)
  private Object summary;

  public static final String SERIALIZED_NAME_IS_INPUT = "is_input";
  @SerializedName(SERIALIZED_NAME_IS_INPUT)
  private Boolean isInput;


  public V1RunArtifact name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1RunArtifact state(String state) {
    
    this.state = state;
    return this;
  }

   /**
   * Get state
   * @return state
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getState() {
    return state;
  }


  public void setState(String state) {
    this.state = state;
  }


  public V1RunArtifact kind(V1ArtifactKind kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1ArtifactKind getKind() {
    return kind;
  }


  public void setKind(V1ArtifactKind kind) {
    this.kind = kind;
  }


  public V1RunArtifact path(String path) {
    
    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }


  public V1RunArtifact connection(String connection) {
    
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


  public V1RunArtifact summary(Object summary) {
    
    this.summary = summary;
    return this;
  }

   /**
   * Get summary
   * @return summary
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getSummary() {
    return summary;
  }


  public void setSummary(Object summary) {
    this.summary = summary;
  }


  public V1RunArtifact isInput(Boolean isInput) {
    
    this.isInput = isInput;
    return this;
  }

   /**
   * Get isInput
   * @return isInput
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getIsInput() {
    return isInput;
  }


  public void setIsInput(Boolean isInput) {
    this.isInput = isInput;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1RunArtifact v1RunArtifact = (V1RunArtifact) o;
    return Objects.equals(this.name, v1RunArtifact.name) &&
        Objects.equals(this.state, v1RunArtifact.state) &&
        Objects.equals(this.kind, v1RunArtifact.kind) &&
        Objects.equals(this.path, v1RunArtifact.path) &&
        Objects.equals(this.connection, v1RunArtifact.connection) &&
        Objects.equals(this.summary, v1RunArtifact.summary) &&
        Objects.equals(this.isInput, v1RunArtifact.isInput);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, state, kind, path, connection, summary, isInput);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1RunArtifact {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    summary: ").append(toIndentedString(summary)).append("\n");
    sb.append("    isInput: ").append(toIndentedString(isInput)).append("\n");
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

