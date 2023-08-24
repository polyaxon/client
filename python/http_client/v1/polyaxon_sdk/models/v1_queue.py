# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc37
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, StrictInt, StrictStr, conlist

class V1Queue(BaseModel):
    """
    V1Queue
    """
    uuid: Optional[StrictStr] = None
    agent: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    priority: Optional[StrictInt] = None
    concurrency: Optional[StrictInt] = None
    resource: Optional[StrictStr] = None
    quota: Optional[StrictStr] = None
    stats: Optional[Dict[str, Any]] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    __properties = ["uuid", "agent", "name", "description", "tags", "priority", "concurrency", "resource", "quota", "stats", "created_at", "updated_at"]

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
    def from_json(cls, json_str: str) -> V1Queue:
        """Create an instance of V1Queue from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Queue:
        """Create an instance of V1Queue from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Queue.parse_obj(obj)

        _obj = V1Queue.parse_obj({
            "uuid": obj.get("uuid"),
            "agent": obj.get("agent"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "priority": obj.get("priority"),
            "concurrency": obj.get("concurrency"),
            "resource": obj.get("resource"),
            "quota": obj.get("quota"),
            "stats": obj.get("stats"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at")
        })
        return _obj

