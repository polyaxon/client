# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.1
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr

class V1SchedulingPolicy(BaseModel):
    """
    V1SchedulingPolicy
    """
    min_available: Optional[StrictInt] = Field(None, alias="minAvailable")
    queue: Optional[StrictStr] = None
    min_resources: Optional[Dict[str, Any]] = Field(None, alias="minResources")
    priority_class: Optional[StrictStr] = Field(None, alias="priorityClass")
    schedule_timeout_seconds: Optional[StrictInt] = Field(None, alias="scheduleTimeoutSeconds")
    __properties = ["minAvailable", "queue", "minResources", "priorityClass", "scheduleTimeoutSeconds"]

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
    def from_json(cls, json_str: str) -> V1SchedulingPolicy:
        """Create an instance of V1SchedulingPolicy from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1SchedulingPolicy:
        """Create an instance of V1SchedulingPolicy from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1SchedulingPolicy.parse_obj(obj)

        _obj = V1SchedulingPolicy.parse_obj({
            "min_available": obj.get("minAvailable"),
            "queue": obj.get("queue"),
            "min_resources": obj.get("minResources"),
            "priority_class": obj.get("priorityClass"),
            "schedule_timeout_seconds": obj.get("scheduleTimeoutSeconds")
        })
        return _obj

