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
 * The version of the OpenAPI document: 2.0.0-rc13
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
import org.openapitools.client.model.V1Build;
import org.openapitools.client.model.V1Cache;
import org.openapitools.client.model.V1EventTrigger;
import org.openapitools.client.model.V1Hook;
import org.openapitools.client.model.V1IO;
import org.openapitools.client.model.V1Join;
import org.openapitools.client.model.V1Plugins;
import org.openapitools.client.model.V1Termination;
import org.openapitools.client.model.V1TriggerPolicy;

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
 * V1CompiledOperation
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class V1CompiledOperation {
  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private Float version;

  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets;

  public static final String SERIALIZED_NAME_QUEUE = "queue";
  @SerializedName(SERIALIZED_NAME_QUEUE)
  private String queue;

  public static final String SERIALIZED_NAME_CACHE = "cache";
  @SerializedName(SERIALIZED_NAME_CACHE)
  private V1Cache cache;

  public static final String SERIALIZED_NAME_TERMINATION = "termination";
  @SerializedName(SERIALIZED_NAME_TERMINATION)
  private V1Termination termination;

  public static final String SERIALIZED_NAME_PLUGINS = "plugins";
  @SerializedName(SERIALIZED_NAME_PLUGINS)
  private V1Plugins plugins;

  public static final String SERIALIZED_NAME_SCHEDULE = "schedule";
  @SerializedName(SERIALIZED_NAME_SCHEDULE)
  private Object schedule;

  public static final String SERIALIZED_NAME_EVENTS = "events";
  @SerializedName(SERIALIZED_NAME_EVENTS)
  private List<V1EventTrigger> events;

  public static final String SERIALIZED_NAME_BUILD = "build";
  @SerializedName(SERIALIZED_NAME_BUILD)
  private V1Build build;

  public static final String SERIALIZED_NAME_HOOKS = "hooks";
  @SerializedName(SERIALIZED_NAME_HOOKS)
  private List<V1Hook> hooks;

  public static final String SERIALIZED_NAME_DEPENDENCIES = "dependencies";
  @SerializedName(SERIALIZED_NAME_DEPENDENCIES)
  private List<String> dependencies;

  public static final String SERIALIZED_NAME_TRIGGER = "trigger";
  @SerializedName(SERIALIZED_NAME_TRIGGER)
  private V1TriggerPolicy trigger = V1TriggerPolicy.ALL_SUCCEEDED;

  public static final String SERIALIZED_NAME_CONDITIONS = "conditions";
  @SerializedName(SERIALIZED_NAME_CONDITIONS)
  private String conditions;

  public static final String SERIALIZED_NAME_SKIP_ON_UPSTREAM_SKIP = "skipOnUpstreamSkip";
  @SerializedName(SERIALIZED_NAME_SKIP_ON_UPSTREAM_SKIP)
  private Boolean skipOnUpstreamSkip;

  public static final String SERIALIZED_NAME_MATRIX = "matrix";
  @SerializedName(SERIALIZED_NAME_MATRIX)
  private Object matrix;

  public static final String SERIALIZED_NAME_JOINS = "joins";
  @SerializedName(SERIALIZED_NAME_JOINS)
  private Map<String, V1Join> joins = new HashMap<>();

  public static final String SERIALIZED_NAME_INPUTS = "inputs";
  @SerializedName(SERIALIZED_NAME_INPUTS)
  private List<V1IO> inputs;

  public static final String SERIALIZED_NAME_OUTPUTS = "outputs";
  @SerializedName(SERIALIZED_NAME_OUTPUTS)
  private List<V1IO> outputs;

  public static final String SERIALIZED_NAME_CONTEXTS = "contexts";
  @SerializedName(SERIALIZED_NAME_CONTEXTS)
  private List<V1IO> contexts;

  public static final String SERIALIZED_NAME_IS_APPROVED = "isApproved";
  @SerializedName(SERIALIZED_NAME_IS_APPROVED)
  private Boolean isApproved;

  public static final String SERIALIZED_NAME_COST = "cost";
  @SerializedName(SERIALIZED_NAME_COST)
  private Float cost;

  public static final String SERIALIZED_NAME_RUN = "run";
  @SerializedName(SERIALIZED_NAME_RUN)
  private Object run;

  public V1CompiledOperation() {
  }

  public V1CompiledOperation version(Float version) {
    
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @javax.annotation.Nullable

  public Float getVersion() {
    return version;
  }


  public void setVersion(Float version) {
    this.version = version;
  }


  public V1CompiledOperation kind(String kind) {
    
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


  public V1CompiledOperation name(String name) {
    
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


  public V1CompiledOperation description(String description) {
    
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


  public V1CompiledOperation tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public V1CompiledOperation addTagsItem(String tagsItem) {
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


  public V1CompiledOperation presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1CompiledOperation addPresetsItem(String presetsItem) {
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


  public V1CompiledOperation queue(String queue) {
    
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


  public V1CompiledOperation cache(V1Cache cache) {
    
    this.cache = cache;
    return this;
  }

   /**
   * Get cache
   * @return cache
  **/
  @javax.annotation.Nullable

  public V1Cache getCache() {
    return cache;
  }


  public void setCache(V1Cache cache) {
    this.cache = cache;
  }


  public V1CompiledOperation termination(V1Termination termination) {
    
    this.termination = termination;
    return this;
  }

   /**
   * Get termination
   * @return termination
  **/
  @javax.annotation.Nullable

  public V1Termination getTermination() {
    return termination;
  }


  public void setTermination(V1Termination termination) {
    this.termination = termination;
  }


  public V1CompiledOperation plugins(V1Plugins plugins) {
    
    this.plugins = plugins;
    return this;
  }

   /**
   * Get plugins
   * @return plugins
  **/
  @javax.annotation.Nullable

  public V1Plugins getPlugins() {
    return plugins;
  }


  public void setPlugins(V1Plugins plugins) {
    this.plugins = plugins;
  }


  public V1CompiledOperation schedule(Object schedule) {
    
    this.schedule = schedule;
    return this;
  }

   /**
   * Get schedule
   * @return schedule
  **/
  @javax.annotation.Nullable

  public Object getSchedule() {
    return schedule;
  }


  public void setSchedule(Object schedule) {
    this.schedule = schedule;
  }


  public V1CompiledOperation events(List<V1EventTrigger> events) {
    
    this.events = events;
    return this;
  }

  public V1CompiledOperation addEventsItem(V1EventTrigger eventsItem) {
    if (this.events == null) {
      this.events = new ArrayList<>();
    }
    this.events.add(eventsItem);
    return this;
  }

   /**
   * Get events
   * @return events
  **/
  @javax.annotation.Nullable

  public List<V1EventTrigger> getEvents() {
    return events;
  }


  public void setEvents(List<V1EventTrigger> events) {
    this.events = events;
  }


  public V1CompiledOperation build(V1Build build) {
    
    this.build = build;
    return this;
  }

   /**
   * Get build
   * @return build
  **/
  @javax.annotation.Nullable

  public V1Build getBuild() {
    return build;
  }


  public void setBuild(V1Build build) {
    this.build = build;
  }


  public V1CompiledOperation hooks(List<V1Hook> hooks) {
    
    this.hooks = hooks;
    return this;
  }

  public V1CompiledOperation addHooksItem(V1Hook hooksItem) {
    if (this.hooks == null) {
      this.hooks = new ArrayList<>();
    }
    this.hooks.add(hooksItem);
    return this;
  }

   /**
   * Get hooks
   * @return hooks
  **/
  @javax.annotation.Nullable

  public List<V1Hook> getHooks() {
    return hooks;
  }


  public void setHooks(List<V1Hook> hooks) {
    this.hooks = hooks;
  }


  public V1CompiledOperation dependencies(List<String> dependencies) {
    
    this.dependencies = dependencies;
    return this;
  }

  public V1CompiledOperation addDependenciesItem(String dependenciesItem) {
    if (this.dependencies == null) {
      this.dependencies = new ArrayList<>();
    }
    this.dependencies.add(dependenciesItem);
    return this;
  }

   /**
   * Get dependencies
   * @return dependencies
  **/
  @javax.annotation.Nullable

  public List<String> getDependencies() {
    return dependencies;
  }


  public void setDependencies(List<String> dependencies) {
    this.dependencies = dependencies;
  }


  public V1CompiledOperation trigger(V1TriggerPolicy trigger) {
    
    this.trigger = trigger;
    return this;
  }

   /**
   * Get trigger
   * @return trigger
  **/
  @javax.annotation.Nullable

  public V1TriggerPolicy getTrigger() {
    return trigger;
  }


  public void setTrigger(V1TriggerPolicy trigger) {
    this.trigger = trigger;
  }


  public V1CompiledOperation conditions(String conditions) {
    
    this.conditions = conditions;
    return this;
  }

   /**
   * Get conditions
   * @return conditions
  **/
  @javax.annotation.Nullable

  public String getConditions() {
    return conditions;
  }


  public void setConditions(String conditions) {
    this.conditions = conditions;
  }


  public V1CompiledOperation skipOnUpstreamSkip(Boolean skipOnUpstreamSkip) {
    
    this.skipOnUpstreamSkip = skipOnUpstreamSkip;
    return this;
  }

   /**
   * Get skipOnUpstreamSkip
   * @return skipOnUpstreamSkip
  **/
  @javax.annotation.Nullable

  public Boolean getSkipOnUpstreamSkip() {
    return skipOnUpstreamSkip;
  }


  public void setSkipOnUpstreamSkip(Boolean skipOnUpstreamSkip) {
    this.skipOnUpstreamSkip = skipOnUpstreamSkip;
  }


  public V1CompiledOperation matrix(Object matrix) {
    
    this.matrix = matrix;
    return this;
  }

   /**
   * Get matrix
   * @return matrix
  **/
  @javax.annotation.Nullable

  public Object getMatrix() {
    return matrix;
  }


  public void setMatrix(Object matrix) {
    this.matrix = matrix;
  }


  public V1CompiledOperation joins(Map<String, V1Join> joins) {
    
    this.joins = joins;
    return this;
  }

  public V1CompiledOperation putJoinsItem(String key, V1Join joinsItem) {
    if (this.joins == null) {
      this.joins = new HashMap<>();
    }
    this.joins.put(key, joinsItem);
    return this;
  }

   /**
   * Get joins
   * @return joins
  **/
  @javax.annotation.Nullable

  public Map<String, V1Join> getJoins() {
    return joins;
  }


  public void setJoins(Map<String, V1Join> joins) {
    this.joins = joins;
  }


  public V1CompiledOperation inputs(List<V1IO> inputs) {
    
    this.inputs = inputs;
    return this;
  }

  public V1CompiledOperation addInputsItem(V1IO inputsItem) {
    if (this.inputs == null) {
      this.inputs = new ArrayList<>();
    }
    this.inputs.add(inputsItem);
    return this;
  }

   /**
   * Get inputs
   * @return inputs
  **/
  @javax.annotation.Nullable

  public List<V1IO> getInputs() {
    return inputs;
  }


  public void setInputs(List<V1IO> inputs) {
    this.inputs = inputs;
  }


  public V1CompiledOperation outputs(List<V1IO> outputs) {
    
    this.outputs = outputs;
    return this;
  }

  public V1CompiledOperation addOutputsItem(V1IO outputsItem) {
    if (this.outputs == null) {
      this.outputs = new ArrayList<>();
    }
    this.outputs.add(outputsItem);
    return this;
  }

   /**
   * Get outputs
   * @return outputs
  **/
  @javax.annotation.Nullable

  public List<V1IO> getOutputs() {
    return outputs;
  }


  public void setOutputs(List<V1IO> outputs) {
    this.outputs = outputs;
  }


  public V1CompiledOperation contexts(List<V1IO> contexts) {
    
    this.contexts = contexts;
    return this;
  }

  public V1CompiledOperation addContextsItem(V1IO contextsItem) {
    if (this.contexts == null) {
      this.contexts = new ArrayList<>();
    }
    this.contexts.add(contextsItem);
    return this;
  }

   /**
   * Get contexts
   * @return contexts
  **/
  @javax.annotation.Nullable

  public List<V1IO> getContexts() {
    return contexts;
  }


  public void setContexts(List<V1IO> contexts) {
    this.contexts = contexts;
  }


  public V1CompiledOperation isApproved(Boolean isApproved) {
    
    this.isApproved = isApproved;
    return this;
  }

   /**
   * Get isApproved
   * @return isApproved
  **/
  @javax.annotation.Nullable

  public Boolean getIsApproved() {
    return isApproved;
  }


  public void setIsApproved(Boolean isApproved) {
    this.isApproved = isApproved;
  }


  public V1CompiledOperation cost(Float cost) {
    
    this.cost = cost;
    return this;
  }

   /**
   * Get cost
   * @return cost
  **/
  @javax.annotation.Nullable

  public Float getCost() {
    return cost;
  }


  public void setCost(Float cost) {
    this.cost = cost;
  }


  public V1CompiledOperation run(Object run) {
    
    this.run = run;
    return this;
  }

   /**
   * Get run
   * @return run
  **/
  @javax.annotation.Nullable

  public Object getRun() {
    return run;
  }


  public void setRun(Object run) {
    this.run = run;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1CompiledOperation v1CompiledOperation = (V1CompiledOperation) o;
    return Objects.equals(this.version, v1CompiledOperation.version) &&
        Objects.equals(this.kind, v1CompiledOperation.kind) &&
        Objects.equals(this.name, v1CompiledOperation.name) &&
        Objects.equals(this.description, v1CompiledOperation.description) &&
        Objects.equals(this.tags, v1CompiledOperation.tags) &&
        Objects.equals(this.presets, v1CompiledOperation.presets) &&
        Objects.equals(this.queue, v1CompiledOperation.queue) &&
        Objects.equals(this.cache, v1CompiledOperation.cache) &&
        Objects.equals(this.termination, v1CompiledOperation.termination) &&
        Objects.equals(this.plugins, v1CompiledOperation.plugins) &&
        Objects.equals(this.schedule, v1CompiledOperation.schedule) &&
        Objects.equals(this.events, v1CompiledOperation.events) &&
        Objects.equals(this.build, v1CompiledOperation.build) &&
        Objects.equals(this.hooks, v1CompiledOperation.hooks) &&
        Objects.equals(this.dependencies, v1CompiledOperation.dependencies) &&
        Objects.equals(this.trigger, v1CompiledOperation.trigger) &&
        Objects.equals(this.conditions, v1CompiledOperation.conditions) &&
        Objects.equals(this.skipOnUpstreamSkip, v1CompiledOperation.skipOnUpstreamSkip) &&
        Objects.equals(this.matrix, v1CompiledOperation.matrix) &&
        Objects.equals(this.joins, v1CompiledOperation.joins) &&
        Objects.equals(this.inputs, v1CompiledOperation.inputs) &&
        Objects.equals(this.outputs, v1CompiledOperation.outputs) &&
        Objects.equals(this.contexts, v1CompiledOperation.contexts) &&
        Objects.equals(this.isApproved, v1CompiledOperation.isApproved) &&
        Objects.equals(this.cost, v1CompiledOperation.cost) &&
        Objects.equals(this.run, v1CompiledOperation.run);
  }

  @Override
  public int hashCode() {
    return Objects.hash(version, kind, name, description, tags, presets, queue, cache, termination, plugins, schedule, events, build, hooks, dependencies, trigger, conditions, skipOnUpstreamSkip, matrix, joins, inputs, outputs, contexts, isApproved, cost, run);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1CompiledOperation {\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    queue: ").append(toIndentedString(queue)).append("\n");
    sb.append("    cache: ").append(toIndentedString(cache)).append("\n");
    sb.append("    termination: ").append(toIndentedString(termination)).append("\n");
    sb.append("    plugins: ").append(toIndentedString(plugins)).append("\n");
    sb.append("    schedule: ").append(toIndentedString(schedule)).append("\n");
    sb.append("    events: ").append(toIndentedString(events)).append("\n");
    sb.append("    build: ").append(toIndentedString(build)).append("\n");
    sb.append("    hooks: ").append(toIndentedString(hooks)).append("\n");
    sb.append("    dependencies: ").append(toIndentedString(dependencies)).append("\n");
    sb.append("    trigger: ").append(toIndentedString(trigger)).append("\n");
    sb.append("    conditions: ").append(toIndentedString(conditions)).append("\n");
    sb.append("    skipOnUpstreamSkip: ").append(toIndentedString(skipOnUpstreamSkip)).append("\n");
    sb.append("    matrix: ").append(toIndentedString(matrix)).append("\n");
    sb.append("    joins: ").append(toIndentedString(joins)).append("\n");
    sb.append("    inputs: ").append(toIndentedString(inputs)).append("\n");
    sb.append("    outputs: ").append(toIndentedString(outputs)).append("\n");
    sb.append("    contexts: ").append(toIndentedString(contexts)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    cost: ").append(toIndentedString(cost)).append("\n");
    sb.append("    run: ").append(toIndentedString(run)).append("\n");
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
    openapiFields.add("version");
    openapiFields.add("kind");
    openapiFields.add("name");
    openapiFields.add("description");
    openapiFields.add("tags");
    openapiFields.add("presets");
    openapiFields.add("queue");
    openapiFields.add("cache");
    openapiFields.add("termination");
    openapiFields.add("plugins");
    openapiFields.add("schedule");
    openapiFields.add("events");
    openapiFields.add("build");
    openapiFields.add("hooks");
    openapiFields.add("dependencies");
    openapiFields.add("trigger");
    openapiFields.add("conditions");
    openapiFields.add("skipOnUpstreamSkip");
    openapiFields.add("matrix");
    openapiFields.add("joins");
    openapiFields.add("inputs");
    openapiFields.add("outputs");
    openapiFields.add("contexts");
    openapiFields.add("isApproved");
    openapiFields.add("cost");
    openapiFields.add("run");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to V1CompiledOperation
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!V1CompiledOperation.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in V1CompiledOperation is not found in the empty JSON string", V1CompiledOperation.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!V1CompiledOperation.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `V1CompiledOperation` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("kind") != null && !jsonObj.get("kind").isJsonNull()) && !jsonObj.get("kind").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `kind` to be a primitive type in the JSON string but got `%s`", jsonObj.get("kind").toString()));
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
      if (jsonObj.get("presets") != null && !jsonObj.get("presets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `presets` to be an array in the JSON string but got `%s`", jsonObj.get("presets").toString()));
      }
      if ((jsonObj.get("queue") != null && !jsonObj.get("queue").isJsonNull()) && !jsonObj.get("queue").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `queue` to be a primitive type in the JSON string but got `%s`", jsonObj.get("queue").toString()));
      }
      // validate the optional field `cache`
      if (jsonObj.get("cache") != null && !jsonObj.get("cache").isJsonNull()) {
        V1Cache.validateJsonObject(jsonObj.getAsJsonObject("cache"));
      }
      // validate the optional field `termination`
      if (jsonObj.get("termination") != null && !jsonObj.get("termination").isJsonNull()) {
        V1Termination.validateJsonObject(jsonObj.getAsJsonObject("termination"));
      }
      // validate the optional field `plugins`
      if (jsonObj.get("plugins") != null && !jsonObj.get("plugins").isJsonNull()) {
        V1Plugins.validateJsonObject(jsonObj.getAsJsonObject("plugins"));
      }
      if (jsonObj.get("events") != null && !jsonObj.get("events").isJsonNull()) {
        JsonArray jsonArrayevents = jsonObj.getAsJsonArray("events");
        if (jsonArrayevents != null) {
          // ensure the json data is an array
          if (!jsonObj.get("events").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `events` to be an array in the JSON string but got `%s`", jsonObj.get("events").toString()));
          }

          // validate the optional field `events` (array)
          for (int i = 0; i < jsonArrayevents.size(); i++) {
            V1EventTrigger.validateJsonObject(jsonArrayevents.get(i).getAsJsonObject());
          };
        }
      }
      // validate the optional field `build`
      if (jsonObj.get("build") != null && !jsonObj.get("build").isJsonNull()) {
        V1Build.validateJsonObject(jsonObj.getAsJsonObject("build"));
      }
      if (jsonObj.get("hooks") != null && !jsonObj.get("hooks").isJsonNull()) {
        JsonArray jsonArrayhooks = jsonObj.getAsJsonArray("hooks");
        if (jsonArrayhooks != null) {
          // ensure the json data is an array
          if (!jsonObj.get("hooks").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `hooks` to be an array in the JSON string but got `%s`", jsonObj.get("hooks").toString()));
          }

          // validate the optional field `hooks` (array)
          for (int i = 0; i < jsonArrayhooks.size(); i++) {
            V1Hook.validateJsonObject(jsonArrayhooks.get(i).getAsJsonObject());
          };
        }
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("dependencies") != null && !jsonObj.get("dependencies").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `dependencies` to be an array in the JSON string but got `%s`", jsonObj.get("dependencies").toString()));
      }
      if ((jsonObj.get("conditions") != null && !jsonObj.get("conditions").isJsonNull()) && !jsonObj.get("conditions").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `conditions` to be a primitive type in the JSON string but got `%s`", jsonObj.get("conditions").toString()));
      }
      if (jsonObj.get("inputs") != null && !jsonObj.get("inputs").isJsonNull()) {
        JsonArray jsonArrayinputs = jsonObj.getAsJsonArray("inputs");
        if (jsonArrayinputs != null) {
          // ensure the json data is an array
          if (!jsonObj.get("inputs").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `inputs` to be an array in the JSON string but got `%s`", jsonObj.get("inputs").toString()));
          }

          // validate the optional field `inputs` (array)
          for (int i = 0; i < jsonArrayinputs.size(); i++) {
            V1IO.validateJsonObject(jsonArrayinputs.get(i).getAsJsonObject());
          };
        }
      }
      if (jsonObj.get("outputs") != null && !jsonObj.get("outputs").isJsonNull()) {
        JsonArray jsonArrayoutputs = jsonObj.getAsJsonArray("outputs");
        if (jsonArrayoutputs != null) {
          // ensure the json data is an array
          if (!jsonObj.get("outputs").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `outputs` to be an array in the JSON string but got `%s`", jsonObj.get("outputs").toString()));
          }

          // validate the optional field `outputs` (array)
          for (int i = 0; i < jsonArrayoutputs.size(); i++) {
            V1IO.validateJsonObject(jsonArrayoutputs.get(i).getAsJsonObject());
          };
        }
      }
      if (jsonObj.get("contexts") != null && !jsonObj.get("contexts").isJsonNull()) {
        JsonArray jsonArraycontexts = jsonObj.getAsJsonArray("contexts");
        if (jsonArraycontexts != null) {
          // ensure the json data is an array
          if (!jsonObj.get("contexts").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `contexts` to be an array in the JSON string but got `%s`", jsonObj.get("contexts").toString()));
          }

          // validate the optional field `contexts` (array)
          for (int i = 0; i < jsonArraycontexts.size(); i++) {
            V1IO.validateJsonObject(jsonArraycontexts.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!V1CompiledOperation.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'V1CompiledOperation' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<V1CompiledOperation> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(V1CompiledOperation.class));

       return (TypeAdapter<T>) new TypeAdapter<V1CompiledOperation>() {
           @Override
           public void write(JsonWriter out, V1CompiledOperation value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public V1CompiledOperation read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of V1CompiledOperation given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of V1CompiledOperation
  * @throws IOException if the JSON string is invalid with respect to V1CompiledOperation
  */
  public static V1CompiledOperation fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, V1CompiledOperation.class);
  }

 /**
  * Convert an instance of V1CompiledOperation to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

