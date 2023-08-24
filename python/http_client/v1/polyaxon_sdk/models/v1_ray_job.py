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


from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, StrictStr, conlist
from polyaxon_sdk.models.v1_ray_replica import V1RayReplica

class V1RayJob(BaseModel):
    """
    V1RayJob
    """
    kind: Optional[StrictStr] = 'rayjob'
    entrypoint: Optional[StrictStr] = None
    runtime_env: Optional[Dict[str, Any]] = Field(None, alias="runtimeEnv")
    metadata: Optional[Dict[str, StrictStr]] = None
    ray_version: Optional[StrictStr] = Field(None, alias="rayVersion")
    head: Optional[V1RayReplica] = None
    workers: Optional[conlist(V1RayReplica)] = None
    __properties = ["kind", "entrypoint", "runtimeEnv", "metadata", "rayVersion", "head", "workers"]

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
    def from_json(cls, json_str: str) -> V1RayJob:
        """Create an instance of V1RayJob from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of head
        if self.head:
            _dict['head'] = self.head.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in workers (list)
        _items = []
        if self.workers:
            for _item in self.workers:
                if _item:
                    _items.append(_item.to_dict())
            _dict['workers'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1RayJob:
        """Create an instance of V1RayJob from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1RayJob.parse_obj(obj)

        _obj = V1RayJob.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'rayjob',
            "entrypoint": obj.get("entrypoint"),
            "runtime_env": obj.get("runtimeEnv"),
            "metadata": obj.get("metadata"),
            "ray_version": obj.get("rayVersion"),
            "head": V1RayReplica.from_dict(obj.get("head")) if obj.get("head") is not None else None,
            "workers": [V1RayReplica.from_dict(_item) for _item in obj.get("workers")] if obj.get("workers") is not None else None
        })
        return _obj

