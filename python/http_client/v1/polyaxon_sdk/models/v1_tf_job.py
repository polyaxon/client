# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.3.0-rc0
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Optional
from pydantic import BaseModel, Field, StrictBool, StrictStr
from polyaxon_sdk.models.v1_clean_pod_policy import V1CleanPodPolicy
from polyaxon_sdk.models.v1_kf_replica import V1KFReplica
from polyaxon_sdk.models.v1_scheduling_policy import V1SchedulingPolicy

class V1TFJob(BaseModel):
    """
    V1TFJob
    """
    kind: Optional[StrictStr] = 'tfjob'
    clean_pod_policy: Optional[V1CleanPodPolicy] = Field(None, alias="cleanPodPolicy")
    scheduling_policy: Optional[V1SchedulingPolicy] = Field(None, alias="schedulingPolicy")
    success_policy: Optional[StrictStr] = Field(None, alias="successPolicy")
    enable_dynamic_worker: Optional[StrictBool] = Field(None, alias="enableDynamicWorker")
    chief: Optional[V1KFReplica] = None
    worker: Optional[V1KFReplica] = None
    ps: Optional[V1KFReplica] = None
    evaluator: Optional[V1KFReplica] = None
    __properties = ["kind", "cleanPodPolicy", "schedulingPolicy", "successPolicy", "enableDynamicWorker", "chief", "worker", "ps", "evaluator"]

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
    def from_json(cls, json_str: str) -> V1TFJob:
        """Create an instance of V1TFJob from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of scheduling_policy
        if self.scheduling_policy:
            _dict['schedulingPolicy'] = self.scheduling_policy.to_dict()
        # override the default output from pydantic by calling `to_dict()` of chief
        if self.chief:
            _dict['chief'] = self.chief.to_dict()
        # override the default output from pydantic by calling `to_dict()` of worker
        if self.worker:
            _dict['worker'] = self.worker.to_dict()
        # override the default output from pydantic by calling `to_dict()` of ps
        if self.ps:
            _dict['ps'] = self.ps.to_dict()
        # override the default output from pydantic by calling `to_dict()` of evaluator
        if self.evaluator:
            _dict['evaluator'] = self.evaluator.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1TFJob:
        """Create an instance of V1TFJob from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1TFJob.parse_obj(obj)

        _obj = V1TFJob.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'tfjob',
            "clean_pod_policy": obj.get("cleanPodPolicy"),
            "scheduling_policy": V1SchedulingPolicy.from_dict(obj.get("schedulingPolicy")) if obj.get("schedulingPolicy") is not None else None,
            "success_policy": obj.get("successPolicy"),
            "enable_dynamic_worker": obj.get("enableDynamicWorker"),
            "chief": V1KFReplica.from_dict(obj.get("chief")) if obj.get("chief") is not None else None,
            "worker": V1KFReplica.from_dict(obj.get("worker")) if obj.get("worker") is not None else None,
            "ps": V1KFReplica.from_dict(obj.get("ps")) if obj.get("ps") is not None else None,
            "evaluator": V1KFReplica.from_dict(obj.get("evaluator")) if obj.get("evaluator") is not None else None
        })
        return _obj

