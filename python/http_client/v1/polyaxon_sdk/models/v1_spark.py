# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc25
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, StrictStr, conlist
from polyaxon_sdk.models.spark_deploy_mode import SparkDeployMode
from polyaxon_sdk.models.v1_spark_replica import V1SparkReplica
from polyaxon_sdk.models.v1_spark_type import V1SparkType

class V1Spark(BaseModel):
    """
    V1Spark
    """
    kind: Optional[StrictStr] = 'spark'
    connections: Optional[conlist(StrictStr)] = None
    volumes: Optional[conlist(Dict[str, Any])] = Field(None, description="Volumes is a list of volumes that can be mounted.")
    type: Optional[V1SparkType] = None
    spark_version: Optional[StrictStr] = Field(None, alias="sparkVersion", description="Spark version is the version of Spark the application uses.")
    python_version: Optional[StrictStr] = Field(None, alias="pythonVersion", description="Spark version is the version of Spark the application uses.")
    deploy_mode: Optional[SparkDeployMode] = Field(None, alias="deployMode")
    main_class: Optional[StrictStr] = Field(None, alias="mainClass", description="MainClass is the fully-qualified main class of the Spark application. This only applies to Java/Scala Spark applications.")
    main_application_file: Optional[StrictStr] = Field(None, alias="mainApplicationFile", description="MainFile is the path to a bundled JAR, Python, or R file of the application.")
    arguments: Optional[conlist(StrictStr)] = Field(None, description="Arguments is a list of arguments to be passed to the application.")
    hadoop_conf: Optional[Dict[str, StrictStr]] = Field(None, alias="hadoopConf", description="HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.")
    spark_conf: Optional[Dict[str, StrictStr]] = Field(None, alias="sparkConf", description="HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.")
    spark_config_map: Optional[StrictStr] = Field(None, alias="sparkConfigMap", description="SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties. The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.")
    hadoop_config_map: Optional[StrictStr] = Field(None, alias="hadoopConfigMap", description="HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml. The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.")
    executor: Optional[V1SparkReplica] = None
    driver: Optional[V1SparkReplica] = None
    __properties = ["kind", "connections", "volumes", "type", "sparkVersion", "pythonVersion", "deployMode", "mainClass", "mainApplicationFile", "arguments", "hadoopConf", "sparkConf", "sparkConfigMap", "hadoopConfigMap", "executor", "driver"]

    class Config:
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> V1Spark:
        """Create an instance of V1Spark from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of executor
        if self.executor:
            _dict['executor'] = self.executor.to_dict()
        # override the default output from pydantic by calling `to_dict()` of driver
        if self.driver:
            _dict['driver'] = self.driver.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Spark:
        """Create an instance of V1Spark from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Spark.parse_obj(obj)

        _obj = V1Spark.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'spark',
            "connections": obj.get("connections"),
            "volumes": obj.get("volumes"),
            "type": obj.get("type"),
            "spark_version": obj.get("sparkVersion"),
            "python_version": obj.get("pythonVersion"),
            "deploy_mode": obj.get("deployMode"),
            "main_class": obj.get("mainClass"),
            "main_application_file": obj.get("mainApplicationFile"),
            "arguments": obj.get("arguments"),
            "hadoop_conf": obj.get("hadoopConf"),
            "spark_conf": obj.get("sparkConf"),
            "spark_config_map": obj.get("sparkConfigMap"),
            "hadoop_config_map": obj.get("hadoopConfigMap"),
            "executor": V1SparkReplica.from_dict(obj.get("executor")) if obj.get("executor") is not None else None,
            "driver": V1SparkReplica.from_dict(obj.get("driver")) if obj.get("driver") is not None else None
        })
        return _obj

