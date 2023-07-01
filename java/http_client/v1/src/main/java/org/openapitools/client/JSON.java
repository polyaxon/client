/*
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc25
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapter;
import com.google.gson.internal.bind.util.ISO8601Utils;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.google.gson.JsonElement;
import io.gsonfire.GsonFireBuilder;
import io.gsonfire.TypeSelector;

import okio.ByteString;

import java.io.IOException;
import java.io.StringReader;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.HashMap;

/*
 * A JSON utility class
 *
 * NOTE: in the future, this class may be converted to static, which may break
 *       backward-compatibility
 */
public class JSON {
    private static Gson gson;
    private static boolean isLenientOnJson = false;
    private static DateTypeAdapter dateTypeAdapter = new DateTypeAdapter();
    private static SqlDateTypeAdapter sqlDateTypeAdapter = new SqlDateTypeAdapter();
    private static OffsetDateTimeTypeAdapter offsetDateTimeTypeAdapter = new OffsetDateTimeTypeAdapter();
    private static LocalDateTypeAdapter localDateTypeAdapter = new LocalDateTypeAdapter();
    private static ByteArrayAdapter byteArrayAdapter = new ByteArrayAdapter();

    @SuppressWarnings("unchecked")
    public static GsonBuilder createGson() {
        GsonFireBuilder fireBuilder = new GsonFireBuilder()
        ;
        GsonBuilder builder = fireBuilder.createGsonBuilder();
        return builder;
    }

    private static String getDiscriminatorValue(JsonElement readElement, String discriminatorField) {
        JsonElement element = readElement.getAsJsonObject().get(discriminatorField);
        if (null == element) {
            throw new IllegalArgumentException("missing discriminator field: <" + discriminatorField + ">");
        }
        return element.getAsString();
    }

    /**
     * Returns the Java class that implements the OpenAPI schema for the specified discriminator value.
     *
     * @param classByDiscriminatorValue The map of discriminator values to Java classes.
     * @param discriminatorValue The value of the OpenAPI discriminator in the input data.
     * @return The Java class that implements the OpenAPI schema
     */
    private static Class getClassByDiscriminator(Map classByDiscriminatorValue, String discriminatorValue) {
        Class clazz = (Class) classByDiscriminatorValue.get(discriminatorValue);
        if (null == clazz) {
            throw new IllegalArgumentException("cannot determine model class of name: <" + discriminatorValue + ">");
        }
        return clazz;
    }

    {
        GsonBuilder gsonBuilder = createGson();
        gsonBuilder.registerTypeAdapter(Date.class, dateTypeAdapter);
        gsonBuilder.registerTypeAdapter(java.sql.Date.class, sqlDateTypeAdapter);
        gsonBuilder.registerTypeAdapter(OffsetDateTime.class, offsetDateTimeTypeAdapter);
        gsonBuilder.registerTypeAdapter(LocalDate.class, localDateTypeAdapter);
        gsonBuilder.registerTypeAdapter(byte[].class, byteArrayAdapter);
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.AgentStateResponseAgentState.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.ProtobufAny.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.RuntimeError.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Activity.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Agent.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1AgentStateResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1AgentStatusBodyRequest.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1AnalyticsSpec.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ArtifactTree.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ArtifactsMount.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ArtifactsType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Auth.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1AuthType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1AverageStoppingPolicy.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Bayes.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1BucketConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Build.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Cache.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ClaimConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Cloning.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Compatibility.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1CompiledOperation.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Component.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ConnectionResource.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ConnectionResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ConnectionSchema.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ConnectionType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Credentials.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1CronSchedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Dag.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1DagRef.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Dashboard.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1DashboardSpec.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Dask.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1DateTimeSchedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1DiffStoppingPolicy.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1DockerfileType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EarlyStopping.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EntitiesTags.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EntitiesTransfer.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EntityNotificationBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EntityStageBodyRequest.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EntityStatusBodyRequest.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Environment.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Event.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventArtifact.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventAudio.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventChart.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventConfusionMatrix.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventCurve.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventDataframe.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventHistogram.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventImage.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventModel.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventTrigger.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventVideo.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1EventsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1FailureEarlyStopping.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1FileType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Flink.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1GcsType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1GitConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1GitType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1GridSearch.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Hook.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HostConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HostPathConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpChoice.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpDateRange.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpDateTimeRange.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpGeomSpace.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpLinSpace.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpLogNormal.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpLogSpace.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpLogUniform.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpNormal.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpPChoice.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpParams.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpQLogNormal.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpQLogUniform.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpQNormal.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpQUniform.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpRange.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HpUniform.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1HubRef.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Hyperband.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Hyperopt.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1IO.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Init.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Installation.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1IntervalSchedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Iterative.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Job.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Join.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1JoinParam.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1KFReplica.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListActivitiesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListAgentsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListBookmarksResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListConnectionsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListDashboardsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListOrganizationMembersResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListOrganizationsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListPresetsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListProjectVersionsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListProjectsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListQueuesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListRunArtifactsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListRunConnectionsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListRunEdgesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListRunsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListSearchesResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListServiceAccountsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListTagsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListTeamMembersResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListTeamsResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ListTokenResponse.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Log.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1LogHandler.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Logs.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1MPIJob.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1MXJob.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Mapping.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Matrix.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1MedianStoppingPolicy.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1MetricEarlyStopping.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Notification.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Operation.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1OperationBody.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1OptimizationMetric.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1OptimizationResource.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Organization.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1OrganizationMember.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PaddleJob.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Param.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PasswordChange.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PathRef.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Pipeline.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Plugins.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PolyaxonInitContainer.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PolyaxonSidecarContainer.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Preset.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Project.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ProjectSettings.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ProjectUserAccess.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ProjectVersion.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1PytorchJob.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Queue.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RandomSearch.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Ray.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Reference.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Run.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunArtifact.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunArtifacts.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunConnection.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunEdge.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunReferenceCatalog.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunResources.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunSchema.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1RunSettings.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1S3Type.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Schedule.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1SchedulingPolicy.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Schemas.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Search.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1SearchSpec.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1SectionSpec.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Service.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1ServiceAccount.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1SettingsCatalog.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Spark.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1SparkReplica.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Stage.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1StageCondition.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Status.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1StatusCondition.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TFJob.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Tag.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Team.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TeamMember.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TeamSettings.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Template.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TensorboardType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Termination.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Token.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TrialStart.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1TruncationStoppingPolicy.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Tuner.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1UriType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1UrlRef.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1User.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1UserEmail.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1UserSingup.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Uuids.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1Version.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1WasbType.CustomTypeAdapterFactory());
        gsonBuilder.registerTypeAdapterFactory(new org.openapitools.client.model.V1XGBoostJob.CustomTypeAdapterFactory());
        gson = gsonBuilder.create();
    }

    /**
     * Get Gson.
     *
     * @return Gson
     */
    public static Gson getGson() {
        return gson;
    }

    /**
     * Set Gson.
     *
     * @param gson Gson
     */
    public static void setGson(Gson gson) {
        JSON.gson = gson;
    }

    public static void setLenientOnJson(boolean lenientOnJson) {
        isLenientOnJson = lenientOnJson;
    }

    /**
     * Serialize the given Java object into JSON string.
     *
     * @param obj Object
     * @return String representation of the JSON
     */
    public static String serialize(Object obj) {
        return gson.toJson(obj);
    }

    /**
     * Deserialize the given JSON string to Java object.
     *
     * @param <T>        Type
     * @param body       The JSON string
     * @param returnType The type to deserialize into
     * @return The deserialized Java object
     */
    @SuppressWarnings("unchecked")
    public static <T> T deserialize(String body, Type returnType) {
        try {
            if (isLenientOnJson) {
                JsonReader jsonReader = new JsonReader(new StringReader(body));
                // see https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/stream/JsonReader.html#setLenient(boolean)
                jsonReader.setLenient(true);
                return gson.fromJson(jsonReader, returnType);
            } else {
                return gson.fromJson(body, returnType);
            }
        } catch (JsonParseException e) {
            // Fallback processing when failed to parse JSON form response body:
            // return the response body string directly for the String return type;
            if (returnType.equals(String.class)) {
                return (T) body;
            } else {
                throw (e);
            }
        }
    }

    /**
     * Gson TypeAdapter for Byte Array type
     */
    public static class ByteArrayAdapter extends TypeAdapter<byte[]> {

        @Override
        public void write(JsonWriter out, byte[] value) throws IOException {
            if (value == null) {
                out.nullValue();
            } else {
                out.value(ByteString.of(value).base64());
            }
        }

        @Override
        public byte[] read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String bytesAsBase64 = in.nextString();
                    ByteString byteString = ByteString.decodeBase64(bytesAsBase64);
                    return byteString.toByteArray();
            }
        }
    }

    /**
     * Gson TypeAdapter for JSR310 OffsetDateTime type
     */
    public static class OffsetDateTimeTypeAdapter extends TypeAdapter<OffsetDateTime> {

        private DateTimeFormatter formatter;

        public OffsetDateTimeTypeAdapter() {
            this(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
        }

        public OffsetDateTimeTypeAdapter(DateTimeFormatter formatter) {
            this.formatter = formatter;
        }

        public void setFormat(DateTimeFormatter dateFormat) {
            this.formatter = dateFormat;
        }

        @Override
        public void write(JsonWriter out, OffsetDateTime date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                out.value(formatter.format(date));
            }
        }

        @Override
        public OffsetDateTime read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    if (date.endsWith("+0000")) {
                        date = date.substring(0, date.length()-5) + "Z";
                    }
                    return OffsetDateTime.parse(date, formatter);
            }
        }
    }

    /**
     * Gson TypeAdapter for JSR310 LocalDate type
     */
    public static class LocalDateTypeAdapter extends TypeAdapter<LocalDate> {

        private DateTimeFormatter formatter;

        public LocalDateTypeAdapter() {
            this(DateTimeFormatter.ISO_LOCAL_DATE);
        }

        public LocalDateTypeAdapter(DateTimeFormatter formatter) {
            this.formatter = formatter;
        }

        public void setFormat(DateTimeFormatter dateFormat) {
            this.formatter = dateFormat;
        }

        @Override
        public void write(JsonWriter out, LocalDate date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                out.value(formatter.format(date));
            }
        }

        @Override
        public LocalDate read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    return LocalDate.parse(date, formatter);
            }
        }
    }

    public static void setOffsetDateTimeFormat(DateTimeFormatter dateFormat) {
        offsetDateTimeTypeAdapter.setFormat(dateFormat);
    }

    public static void setLocalDateFormat(DateTimeFormatter dateFormat) {
        localDateTypeAdapter.setFormat(dateFormat);
    }

    /**
     * Gson TypeAdapter for java.sql.Date type
     * If the dateFormat is null, a simple "yyyy-MM-dd" format will be used
     * (more efficient than SimpleDateFormat).
     */
    public static class SqlDateTypeAdapter extends TypeAdapter<java.sql.Date> {

        private DateFormat dateFormat;

        public SqlDateTypeAdapter() {}

        public SqlDateTypeAdapter(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        public void setFormat(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        @Override
        public void write(JsonWriter out, java.sql.Date date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                String value;
                if (dateFormat != null) {
                    value = dateFormat.format(date);
                } else {
                    value = date.toString();
                }
                out.value(value);
            }
        }

        @Override
        public java.sql.Date read(JsonReader in) throws IOException {
            switch (in.peek()) {
                case NULL:
                    in.nextNull();
                    return null;
                default:
                    String date = in.nextString();
                    try {
                        if (dateFormat != null) {
                            return new java.sql.Date(dateFormat.parse(date).getTime());
                        }
                        return new java.sql.Date(ISO8601Utils.parse(date, new ParsePosition(0)).getTime());
                    } catch (ParseException e) {
                        throw new JsonParseException(e);
                    }
            }
        }
    }

    /**
     * Gson TypeAdapter for java.util.Date type
     * If the dateFormat is null, ISO8601Utils will be used.
     */
    public static class DateTypeAdapter extends TypeAdapter<Date> {

        private DateFormat dateFormat;

        public DateTypeAdapter() {}

        public DateTypeAdapter(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        public void setFormat(DateFormat dateFormat) {
            this.dateFormat = dateFormat;
        }

        @Override
        public void write(JsonWriter out, Date date) throws IOException {
            if (date == null) {
                out.nullValue();
            } else {
                String value;
                if (dateFormat != null) {
                    value = dateFormat.format(date);
                } else {
                    value = ISO8601Utils.format(date, true);
                }
                out.value(value);
            }
        }

        @Override
        public Date read(JsonReader in) throws IOException {
            try {
                switch (in.peek()) {
                    case NULL:
                        in.nextNull();
                        return null;
                    default:
                        String date = in.nextString();
                        try {
                            if (dateFormat != null) {
                                return dateFormat.parse(date);
                            }
                            return ISO8601Utils.parse(date, new ParsePosition(0));
                        } catch (ParseException e) {
                            throw new JsonParseException(e);
                        }
                }
            } catch (IllegalArgumentException e) {
                throw new JsonParseException(e);
            }
        }
    }

    public static void setDateFormat(DateFormat dateFormat) {
        dateTypeAdapter.setFormat(dateFormat);
    }

    public static void setSqlDateFormat(DateFormat dateFormat) {
        sqlDateTypeAdapter.setFormat(dateFormat);
    }
}
