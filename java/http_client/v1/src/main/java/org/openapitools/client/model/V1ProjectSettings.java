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
import org.openapitools.client.model.V1ProjectUserAccess;

/**
 * V1ProjectSettings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1ProjectSettings {
  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections = null;

  public static final String SERIALIZED_NAME_PRESET = "preset";
  @SerializedName(SERIALIZED_NAME_PRESET)
  private String preset;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets = null;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_QUEUES = "queues";
  @SerializedName(SERIALIZED_NAME_QUEUES)
  private List<String> queues = null;

  public static final String SERIALIZED_NAME_AGENTS = "agents";
  @SerializedName(SERIALIZED_NAME_AGENTS)
  private List<String> agents = null;

  public static final String SERIALIZED_NAME_USER_ACCESSES = "user_accesses";
  @SerializedName(SERIALIZED_NAME_USER_ACCESSES)
  private List<V1ProjectUserAccess> userAccesses = null;

  public static final String SERIALIZED_NAME_TEAMS = "teams";
  @SerializedName(SERIALIZED_NAME_TEAMS)
  private List<String> teams = null;

  public static final String SERIALIZED_NAME_PROJECTS = "projects";
  @SerializedName(SERIALIZED_NAME_PROJECTS)
  private List<String> projects = null;


  public V1ProjectSettings connections(List<String> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1ProjectSettings addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<String>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1ProjectSettings preset(String preset) {
    
    this.preset = preset;
    return this;
  }

   /**
   * Get preset
   * @return preset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPreset() {
    return preset;
  }


  public void setPreset(String preset) {
    this.preset = preset;
  }


  public V1ProjectSettings presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1ProjectSettings addPresetsItem(String presetsItem) {
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


  public V1ProjectSettings queue(String queue) {
    
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


  public V1ProjectSettings queues(List<String> queues) {
    
    this.queues = queues;
    return this;
  }

  public V1ProjectSettings addQueuesItem(String queuesItem) {
    if (this.queues == null) {
      this.queues = new ArrayList<String>();
    }
    this.queues.add(queuesItem);
    return this;
  }

   /**
   * Get queues
   * @return queues
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getQueues() {
    return queues;
  }


  public void setQueues(List<String> queues) {
    this.queues = queues;
  }


  public V1ProjectSettings agents(List<String> agents) {
    
    this.agents = agents;
    return this;
  }

  public V1ProjectSettings addAgentsItem(String agentsItem) {
    if (this.agents == null) {
      this.agents = new ArrayList<String>();
    }
    this.agents.add(agentsItem);
    return this;
  }

   /**
   * Get agents
   * @return agents
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getAgents() {
    return agents;
  }


  public void setAgents(List<String> agents) {
    this.agents = agents;
  }


  public V1ProjectSettings userAccesses(List<V1ProjectUserAccess> userAccesses) {
    
    this.userAccesses = userAccesses;
    return this;
  }

  public V1ProjectSettings addUserAccessesItem(V1ProjectUserAccess userAccessesItem) {
    if (this.userAccesses == null) {
      this.userAccesses = new ArrayList<V1ProjectUserAccess>();
    }
    this.userAccesses.add(userAccessesItem);
    return this;
  }

   /**
   * Get userAccesses
   * @return userAccesses
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<V1ProjectUserAccess> getUserAccesses() {
    return userAccesses;
  }


  public void setUserAccesses(List<V1ProjectUserAccess> userAccesses) {
    this.userAccesses = userAccesses;
  }


  public V1ProjectSettings teams(List<String> teams) {
    
    this.teams = teams;
    return this;
  }

  public V1ProjectSettings addTeamsItem(String teamsItem) {
    if (this.teams == null) {
      this.teams = new ArrayList<String>();
    }
    this.teams.add(teamsItem);
    return this;
  }

   /**
   * Get teams
   * @return teams
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getTeams() {
    return teams;
  }


  public void setTeams(List<String> teams) {
    this.teams = teams;
  }


  public V1ProjectSettings projects(List<String> projects) {
    
    this.projects = projects;
    return this;
  }

  public V1ProjectSettings addProjectsItem(String projectsItem) {
    if (this.projects == null) {
      this.projects = new ArrayList<String>();
    }
    this.projects.add(projectsItem);
    return this;
  }

   /**
   * Get projects
   * @return projects
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getProjects() {
    return projects;
  }


  public void setProjects(List<String> projects) {
    this.projects = projects;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ProjectSettings v1ProjectSettings = (V1ProjectSettings) o;
    return Objects.equals(this.connections, v1ProjectSettings.connections) &&
        Objects.equals(this.preset, v1ProjectSettings.preset) &&
        Objects.equals(this.presets, v1ProjectSettings.presets) &&
        Objects.equals(this.queue, v1ProjectSettings.queue) &&
        Objects.equals(this.queues, v1ProjectSettings.queues) &&
        Objects.equals(this.agents, v1ProjectSettings.agents) &&
        Objects.equals(this.userAccesses, v1ProjectSettings.userAccesses) &&
        Objects.equals(this.teams, v1ProjectSettings.teams) &&
        Objects.equals(this.projects, v1ProjectSettings.projects);
  }

  @Override
  public int hashCode() {
    return Objects.hash(connections, preset, presets, queue, queues, agents, userAccesses, teams, projects);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ProjectSettings {\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    preset: ").append(toIndentedString(preset)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    queues: ").append(toIndentedString(queues)).append("\n");
    sb.append("    agents: ").append(toIndentedString(agents)).append("\n");
    sb.append("    userAccesses: ").append(toIndentedString(userAccesses)).append("\n");
    sb.append("    teams: ").append(toIndentedString(teams)).append("\n");
    sb.append("    projects: ").append(toIndentedString(projects)).append("\n");
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

