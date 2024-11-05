# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.1
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
from pydantic import BaseModel, StrictStr, conlist
from polyaxon_sdk.models.v1_run_reference_catalog import V1RunReferenceCatalog
from polyaxon_sdk.models.v1_settings_catalog import V1SettingsCatalog

class V1RunSettings(BaseModel):
    """
    V1RunSettings
    """
    namespace: Optional[StrictStr] = None
    agent: Optional[V1SettingsCatalog] = None
    queue: Optional[V1SettingsCatalog] = None
    artifacts_store: Optional[V1SettingsCatalog] = None
    tensorboard: Optional[Dict[str, Any]] = None
    build: Optional[Dict[str, Any]] = None
    component: Optional[Dict[str, Any]] = None
    models: Optional[conlist(V1RunReferenceCatalog)] = None
    artifacts: Optional[conlist(V1RunReferenceCatalog)] = None
    __properties = ["namespace", "agent", "queue", "artifacts_store", "tensorboard", "build", "component", "models", "artifacts"]

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
    def from_json(cls, json_str: str) -> V1RunSettings:
        """Create an instance of V1RunSettings from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of agent
        if self.agent:
            _dict['agent'] = self.agent.to_dict()
        # override the default output from pydantic by calling `to_dict()` of queue
        if self.queue:
            _dict['queue'] = self.queue.to_dict()
        # override the default output from pydantic by calling `to_dict()` of artifacts_store
        if self.artifacts_store:
            _dict['artifacts_store'] = self.artifacts_store.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in models (list)
        _items = []
        if self.models:
            for _item in self.models:
                if _item:
                    _items.append(_item.to_dict())
            _dict['models'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in artifacts (list)
        _items = []
        if self.artifacts:
            for _item in self.artifacts:
                if _item:
                    _items.append(_item.to_dict())
            _dict['artifacts'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1RunSettings:
        """Create an instance of V1RunSettings from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1RunSettings.parse_obj(obj)

        _obj = V1RunSettings.parse_obj({
            "namespace": obj.get("namespace"),
            "agent": V1SettingsCatalog.from_dict(obj.get("agent")) if obj.get("agent") is not None else None,
            "queue": V1SettingsCatalog.from_dict(obj.get("queue")) if obj.get("queue") is not None else None,
            "artifacts_store": V1SettingsCatalog.from_dict(obj.get("artifacts_store")) if obj.get("artifacts_store") is not None else None,
            "tensorboard": obj.get("tensorboard"),
            "build": obj.get("build"),
            "component": obj.get("component"),
            "models": [V1RunReferenceCatalog.from_dict(_item) for _item in obj.get("models")] if obj.get("models") is not None else None,
            "artifacts": [V1RunReferenceCatalog.from_dict(_item) for _item in obj.get("artifacts")] if obj.get("artifacts") is not None else None
        })
        return _obj

