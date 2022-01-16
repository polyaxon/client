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
import java.util.List;

/**
 * V1EventConfusionMatrix
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1EventConfusionMatrix {
  public static final String SERIALIZED_NAME_X = "x";
  @SerializedName(SERIALIZED_NAME_X)
  private List<Object> x = null;

  public static final String SERIALIZED_NAME_Y = "y";
  @SerializedName(SERIALIZED_NAME_Y)
  private List<Object> y = null;

  public static final String SERIALIZED_NAME_Z = "z";
  @SerializedName(SERIALIZED_NAME_Z)
  private List<Object> z = null;


  public V1EventConfusionMatrix x(List<Object> x) {
    
    this.x = x;
    return this;
  }

  public V1EventConfusionMatrix addXItem(Object xItem) {
    if (this.x == null) {
      this.x = new ArrayList<Object>();
    }
    this.x.add(xItem);
    return this;
  }

   /**
   * Get x
   * @return x
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getX() {
    return x;
  }


  public void setX(List<Object> x) {
    this.x = x;
  }


  public V1EventConfusionMatrix y(List<Object> y) {
    
    this.y = y;
    return this;
  }

  public V1EventConfusionMatrix addYItem(Object yItem) {
    if (this.y == null) {
      this.y = new ArrayList<Object>();
    }
    this.y.add(yItem);
    return this;
  }

   /**
   * Get y
   * @return y
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getY() {
    return y;
  }


  public void setY(List<Object> y) {
    this.y = y;
  }


  public V1EventConfusionMatrix z(List<Object> z) {
    
    this.z = z;
    return this;
  }

  public V1EventConfusionMatrix addZItem(Object zItem) {
    if (this.z == null) {
      this.z = new ArrayList<Object>();
    }
    this.z.add(zItem);
    return this;
  }

   /**
   * Get z
   * @return z
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getZ() {
    return z;
  }


  public void setZ(List<Object> z) {
    this.z = z;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventConfusionMatrix v1EventConfusionMatrix = (V1EventConfusionMatrix) o;
    return Objects.equals(this.x, v1EventConfusionMatrix.x) &&
        Objects.equals(this.y, v1EventConfusionMatrix.y) &&
        Objects.equals(this.z, v1EventConfusionMatrix.z);
  }

  @Override
  public int hashCode() {
    return Objects.hash(x, y, z);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventConfusionMatrix {\n");
    sb.append("    x: ").append(toIndentedString(x)).append("\n");
    sb.append("    y: ").append(toIndentedString(y)).append("\n");
    sb.append("    z: ").append(toIndentedString(z)).append("\n");
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

