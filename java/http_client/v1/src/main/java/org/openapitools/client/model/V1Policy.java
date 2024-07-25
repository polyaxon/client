/*
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.0-rc0
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
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.V1UserAccess;

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
 * V1Policy
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1Policy {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_OWNER = "owner";
  @SerializedName(SERIALIZED_NAME_OWNER)
  private String owner;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;

  public static final String SERIALIZED_NAME_EXCLUDED_FEATURES = "excluded_features";
  @SerializedName(SERIALIZED_NAME_EXCLUDED_FEATURES)
  private List<String> excludedFeatures;

  public static final String SERIALIZED_NAME_EXCLUDED_RUNTIMES = "excluded_runtimes";
  @SerializedName(SERIALIZED_NAME_EXCLUDED_RUNTIMES)
  private List<String> excludedRuntimes;

  public static final String SERIALIZED_NAME_ARCHIVED_DELETION_INTERVAL = "archived_deletion_interval";
  @SerializedName(SERIALIZED_NAME_ARCHIVED_DELETION_INTERVAL)
  private Integer archivedDeletionInterval;

  public static final String SERIALIZED_NAME_CONNECTIONS = "connections";
  @SerializedName(SERIALIZED_NAME_CONNECTIONS)
  private List<String> connections;

  public static final String SERIALIZED_NAME_PRESET = "preset";
  @SerializedName(SERIALIZED_NAME_PRESET)
  private String preset;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_QUEUES = "queues";
  @SerializedName(SERIALIZED_NAME_QUEUES)
  private List<String> queues;

  public static final String SERIALIZED_NAME_AGENTS = "agents";
  @SerializedName(SERIALIZED_NAME_AGENTS)
  private List<String> agents;

  public static final String SERIALIZED_NAME_NAMESPACES = "namespaces";
  @SerializedName(SERIALIZED_NAME_NAMESPACES)
  private List<String> namespaces;

  public static final String SERIALIZED_NAME_USER_ACCESSES = "user_accesses";
  @SerializedName(SERIALIZED_NAME_USER_ACCESSES)
  private List<V1UserAccess> userAccesses;

  public static final String SERIALIZED_NAME_TEAMS = "teams";
  @SerializedName(SERIALIZED_NAME_TEAMS)
  private List<String> teams;

  public static final String SERIALIZED_NAME_PROJECTS = "projects";
  @SerializedName(SERIALIZED_NAME_PROJECTS)
  private List<String> projects;

  public static final String SERIALIZED_NAME_CONNECTED_PROJECTS = "connected_projects";
  @SerializedName(SERIALIZED_NAME_CONNECTED_PROJECTS)
  private List<String> connectedProjects;

  public V1Policy() {
  }

  public V1Policy uuid(String uuid) {
    
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1Policy owner(String owner) {
    
    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @javax.annotation.Nullable

  public String getOwner() {
    return owner;
  }


  public void setOwner(String owner) {
    this.owner = owner;
  }


  public V1Policy name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1Policy description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @javax.annotation.Nullable

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public V1Policy tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1Policy addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * Get tags
   * @return tags
  **/
  @javax.annotation.Nullable

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public V1Policy createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1Policy updatedAt(OffsetDateTime updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  public V1Policy excludedFeatures(List<String> excludedFeatures) {
    
    this.excludedFeatures = excludedFeatures;
    return this;
  }

  public V1Policy addExcludedFeaturesItem(String excludedFeaturesItem) {
    if (this.excludedFeatures == null) {
      this.excludedFeatures = new ArrayList<>();
    }
    this.excludedFeatures.add(excludedFeaturesItem);
    return this;
  }

   /**
   * Get excludedFeatures
   * @return excludedFeatures
  **/
  @javax.annotation.Nullable

  public List<String> getExcludedFeatures() {
    return excludedFeatures;
  }


  public void setExcludedFeatures(List<String> excludedFeatures) {
    this.excludedFeatures = excludedFeatures;
  }


  public V1Policy excludedRuntimes(List<String> excludedRuntimes) {
    
    this.excludedRuntimes = excludedRuntimes;
    return this;
  }

  public V1Policy addExcludedRuntimesItem(String excludedRuntimesItem) {
    if (this.excludedRuntimes == null) {
      this.excludedRuntimes = new ArrayList<>();
    }
    this.excludedRuntimes.add(excludedRuntimesItem);
    return this;
  }

   /**
   * Get excludedRuntimes
   * @return excludedRuntimes
  **/
  @javax.annotation.Nullable

  public List<String> getExcludedRuntimes() {
    return excludedRuntimes;
  }


  public void setExcludedRuntimes(List<String> excludedRuntimes) {
    this.excludedRuntimes = excludedRuntimes;
  }


  public V1Policy archivedDeletionInterval(Integer archivedDeletionInterval) {
    
    this.archivedDeletionInterval = archivedDeletionInterval;
    return this;
  }

   /**
   * Get archivedDeletionInterval
   * @return archivedDeletionInterval
  **/
  @javax.annotation.Nullable

  public Integer getArchivedDeletionInterval() {
    return archivedDeletionInterval;
  }


  public void setArchivedDeletionInterval(Integer archivedDeletionInterval) {
    this.archivedDeletionInterval = archivedDeletionInterval;
  }


  public V1Policy connections(List<String> connections) {
    
    this.connections = connections;
    return this;
  }

  public V1Policy addConnectionsItem(String connectionsItem) {
    if (this.connections == null) {
      this.connections = new ArrayList<>();
    }
    this.connections.add(connectionsItem);
    return this;
  }

   /**
   * Get connections
   * @return connections
  **/
  @javax.annotation.Nullable

  public List<String> getConnections() {
    return connections;
  }


  public void setConnections(List<String> connections) {
    this.connections = connections;
  }


  public V1Policy preset(String preset) {
    
    this.preset = preset;
    return this;
  }

   /**
   * Get preset
   * @return preset
  **/
  @javax.annotation.Nullable

  public String getPreset() {
    return preset;
  }


  public void setPreset(String preset) {
    this.preset = preset;
  }


  public V1Policy presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1Policy addPresetsItem(String presetsItem) {
    if (this.presets == null) {
      this.presets = new ArrayList<>();
    }
    this.presets.add(presetsItem);
    return this;
  }

   /**
   * Get presets
   * @return presets
  **/
  @javax.annotation.Nullable

  public List<String> getPresets() {
    return presets;
  }


  public void setPresets(List<String> presets) {
    this.presets = presets;
  }


  public V1Policy queue(String queue) {
    
    this.queue = queue;
    return this;
  }

   /**
   * Get queue
   * @return queue
  **/
  @javax.annotation.Nullable

  public String getQueue() {
    return queue;
  }


  public void setQueue(String queue) {
    this.queue = queue;
  }


  public V1Policy queues(List<String> queues) {
    
    this.queues = queues;
    return this;
  }

  public V1Policy addQueuesItem(String queuesItem) {
    if (this.queues == null) {
      this.queues = new ArrayList<>();
    }
    this.queues.add(queuesItem);
    return this;
  }

   /**
   * Get queues
   * @return queues
  **/
  @javax.annotation.Nullable

  public List<String> getQueues() {
    return queues;
  }


  public void setQueues(List<String> queues) {
    this.queues = queues;
  }


  public V1Policy agents(List<String> agents) {
    
    this.agents = agents;
    return this;
  }

  public V1Policy addAgentsItem(String agentsItem) {
    if (this.agents == null) {
      this.agents = new ArrayList<>();
    }
    this.agents.add(agentsItem);
    return this;
  }

   /**
   * Get agents
   * @return agents
  **/
  @javax.annotation.Nullable

  public List<String> getAgents() {
    return agents;
  }


  public void setAgents(List<String> agents) {
    this.agents = agents;
  }


  public V1Policy namespaces(List<String> namespaces) {
    
    this.namespaces = namespaces;
    return this;
  }

  public V1Policy addNamespacesItem(String namespacesItem) {
    if (this.namespaces == null) {
      this.namespaces = new ArrayList<>();
    }
    this.namespaces.add(namespacesItem);
    return this;
  }

   /**
   * Get namespaces
   * @return namespaces
  **/
  @javax.annotation.Nullable

  public List<String> getNamespaces() {
    return namespaces;
  }


  public void setNamespaces(List<String> namespaces) {
    this.namespaces = namespaces;
  }


  public V1Policy userAccesses(List<V1UserAccess> userAccesses) {
    
    this.userAccesses = userAccesses;
    return this;
  }

  public V1Policy addUserAccessesItem(V1UserAccess userAccessesItem) {
    if (this.userAccesses == null) {
      this.userAccesses = new ArrayList<>();
    }
    this.userAccesses.add(userAccessesItem);
    return this;
  }

   /**
   * Get userAccesses
   * @return userAccesses
  **/
  @javax.annotation.Nullable

  public List<V1UserAccess> getUserAccesses() {
    return userAccesses;
  }


  public void setUserAccesses(List<V1UserAccess> userAccesses) {
    this.userAccesses = userAccesses;
  }


  public V1Policy teams(List<String> teams) {
    
    this.teams = teams;
    return this;
  }

  public V1Policy addTeamsItem(String teamsItem) {
    if (this.teams == null) {
      this.teams = new ArrayList<>();
    }
    this.teams.add(teamsItem);
    return this;
  }

   /**
   * Get teams
   * @return teams
  **/
  @javax.annotation.Nullable

  public List<String> getTeams() {
    return teams;
  }


  public void setTeams(List<String> teams) {
    this.teams = teams;
  }


  public V1Policy projects(List<String> projects) {
    
    this.projects = projects;
    return this;
  }

  public V1Policy addProjectsItem(String projectsItem) {
    if (this.projects == null) {
      this.projects = new ArrayList<>();
    }
    this.projects.add(projectsItem);
    return this;
  }

   /**
   * Get projects
   * @return projects
  **/
  @javax.annotation.Nullable

  public List<String> getProjects() {
    return projects;
  }


  public void setProjects(List<String> projects) {
    this.projects = projects;
  }


  public V1Policy connectedProjects(List<String> connectedProjects) {
    
    this.connectedProjects = connectedProjects;
    return this;
  }

  public V1Policy addConnectedProjectsItem(String connectedProjectsItem) {
    if (this.connectedProjects == null) {
      this.connectedProjects = new ArrayList<>();
    }
    this.connectedProjects.add(connectedProjectsItem);
    return this;
  }

   /**
   * Get connectedProjects
   * @return connectedProjects
  **/
  @javax.annotation.Nullable

  public List<String> getConnectedProjects() {
    return connectedProjects;
  }


  public void setConnectedProjects(List<String> connectedProjects) {
    this.connectedProjects = connectedProjects;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Policy v1Policy = (V1Policy) o;
    return Objects.equals(this.uuid, v1Policy.uuid) &&
        Objects.equals(this.owner, v1Policy.owner) &&
        Objects.equals(this.name, v1Policy.name) &&
        Objects.equals(this.description, v1Policy.description) &&
        Objects.equals(this.tags, v1Policy.tags) &&
        Objects.equals(this.createdAt, v1Policy.createdAt) &&
        Objects.equals(this.updatedAt, v1Policy.updatedAt) &&
        Objects.equals(this.excludedFeatures, v1Policy.excludedFeatures) &&
        Objects.equals(this.excludedRuntimes, v1Policy.excludedRuntimes) &&
        Objects.equals(this.archivedDeletionInterval, v1Policy.archivedDeletionInterval) &&
        Objects.equals(this.connections, v1Policy.connections) &&
        Objects.equals(this.preset, v1Policy.preset) &&
        Objects.equals(this.presets, v1Policy.presets) &&
        Objects.equals(this.queue, v1Policy.queue) &&
        Objects.equals(this.queues, v1Policy.queues) &&
        Objects.equals(this.agents, v1Policy.agents) &&
        Objects.equals(this.namespaces, v1Policy.namespaces) &&
        Objects.equals(this.userAccesses, v1Policy.userAccesses) &&
        Objects.equals(this.teams, v1Policy.teams) &&
        Objects.equals(this.projects, v1Policy.projects) &&
        Objects.equals(this.connectedProjects, v1Policy.connectedProjects);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, owner, name, description, tags, createdAt, updatedAt, excludedFeatures, excludedRuntimes, archivedDeletionInterval, connections, preset, presets, queue, queues, agents, namespaces, userAccesses, teams, projects, connectedProjects);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Policy {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    excludedFeatures: ").append(toIndentedString(excludedFeatures)).append("\n");
    sb.append("    excludedRuntimes: ").append(toIndentedString(excludedRuntimes)).append("\n");
    sb.append("    archivedDeletionInterval: ").append(toIndentedString(archivedDeletionInterval)).append("\n");
    sb.append("    connections: ").append(toIndentedString(connections)).append("\n");
    sb.append("    preset: ").append(toIndentedString(preset)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    queues: ").append(toIndentedString(queues)).append("\n");
    sb.append("    agents: ").append(toIndentedString(agents)).append("\n");
    sb.append("    namespaces: ").append(toIndentedString(namespaces)).append("\n");
    sb.append("    userAccesses: ").append(toIndentedString(userAccesses)).append("\n");
    sb.append("    teams: ").append(toIndentedString(teams)).append("\n");
    sb.append("    projects: ").append(toIndentedString(projects)).append("\n");
    sb.append("    connectedProjects: ").append(toIndentedString(connectedProjects)).append("\n");
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
    openapiFields.add("uuid");
    openapiFields.add("owner");
    openapiFields.add("name");
    openapiFields.add("description");
    openapiFields.add("tags");
    openapiFields.add("created_at");
    openapiFields.add("updated_at");
    openapiFields.add("excluded_features");
    openapiFields.add("excluded_runtimes");
    openapiFields.add("archived_deletion_interval");
    openapiFields.add("connections");
    openapiFields.add("preset");
    openapiFields.add("presets");
    openapiFields.add("queue");
    openapiFields.add("queues");
    openapiFields.add("agents");
    openapiFields.add("namespaces");
    openapiFields.add("user_accesses");
    openapiFields.add("teams");
    openapiFields.add("projects");
    openapiFields.add("connected_projects");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1Policy
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1Policy.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1Policy is not found in the empty JSON string", V1Policy.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1Policy.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1Policy` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uuid") != null && !jsonObj.get("uuid").isJsonNull()) && !jsonObj.get("uuid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uuid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uuid").toString()));
      }
      if ((jsonObj.get("owner") != null && !jsonObj.get("owner").isJsonNull()) && !jsonObj.get("owner").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `owner` to be a primitive type in the JSON string but got `%s`", jsonObj.get("owner").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("tags") != null && !jsonObj.get("tags").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `tags` to be an array in the JSON string but got `%s`", jsonObj.get("tags").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("excluded_features") != null && !jsonObj.get("excluded_features").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `excluded_features` to be an array in the JSON string but got `%s`", jsonObj.get("excluded_features").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("excluded_runtimes") != null && !jsonObj.get("excluded_runtimes").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `excluded_runtimes` to be an array in the JSON string but got `%s`", jsonObj.get("excluded_runtimes").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("connections") != null && !jsonObj.get("connections").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `connections` to be an array in the JSON string but got `%s`", jsonObj.get("connections").toString()));
      }
      if ((jsonObj.get("preset") != null && !jsonObj.get("preset").isJsonNull()) && !jsonObj.get("preset").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `preset` to be a primitive type in the JSON string but got `%s`", jsonObj.get("preset").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("presets") != null && !jsonObj.get("presets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `presets` to be an array in the JSON string but got `%s`", jsonObj.get("presets").toString()));
      }
      if ((jsonObj.get("queue") != null && !jsonObj.get("queue").isJsonNull()) && !jsonObj.get("queue").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `queue` to be a primitive type in the JSON string but got `%s`", jsonObj.get("queue").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("queues") != null && !jsonObj.get("queues").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `queues` to be an array in the JSON string but got `%s`", jsonObj.get("queues").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("agents") != null && !jsonObj.get("agents").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `agents` to be an array in the JSON string but got `%s`", jsonObj.get("agents").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("namespaces") != null && !jsonObj.get("namespaces").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `namespaces` to be an array in the JSON string but got `%s`", jsonObj.get("namespaces").toString()));
      }
      if (jsonObj.get("user_accesses") != null && !jsonObj.get("user_accesses").isJsonNull()) {
        JsonArray jsonArrayuserAccesses = jsonObj.getAsJsonArray("user_accesses");
        if (jsonArrayuserAccesses != null) {
          // ensure the json data is an array
          if (!jsonObj.get("user_accesses").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `user_accesses` to be an array in the JSON string but got `%s`", jsonObj.get("user_accesses").toString()));
          }

          // validate the optional field `user_accesses` (array)
          for (int i = 0; i < jsonArrayuserAccesses.size(); i++) {
            V1UserAccess.validateJsonObject(jsonArrayuserAccesses.get(i).getAsJsonObject());
          };
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("teams") != null && !jsonObj.get("teams").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `teams` to be an array in the JSON string but got `%s`", jsonObj.get("teams").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("projects") != null && !jsonObj.get("projects").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `projects` to be an array in the JSON string but got `%s`", jsonObj.get("projects").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("connected_projects") != null && !jsonObj.get("connected_projects").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `connected_projects` to be an array in the JSON string but got `%s`", jsonObj.get("connected_projects").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1Policy.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1Policy' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1Policy> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1Policy.class));

       return (TypeAdapter<T>) new TypeAdapter<V1Policy>() {
           @Override
           public void write(JsonWriter out, V1Policy value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1Policy read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1Policy given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1Policy
  * @throws IOException if the JSON string is invalid with respect to V1Policy
  */
  public static V1Policy fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1Policy.class);
  }

 /**
  * Convert an instance of V1Policy to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

