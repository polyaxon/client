# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.5.0-rc3
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
from inspect import getfullargspec
import pprint
import re  # noqa: F401
import json


from typing import List, Optional
from pydantic import BaseModel, conlist
from polyaxon_sdk.models.v1_settings_catalog import V1SettingsCatalog

class V1PresetSettings(BaseModel):
    """
    V1PresetSettings
    """
    projects: Optional[conlist(V1SettingsCatalog)] = None
    runs: Optional[conlist(V1SettingsCatalog)] = None
    __properties = ["projects", "runs"]

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
    def from_json(cls, json_str: str) -> V1PresetSettings:
        """Create an instance of V1PresetSettings from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in projects (list)
        _items = []
        if self.projects:
            for _item in self.projects:
                if _item:
                    _items.append(_item.to_dict())
            _dict['projects'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in runs (list)
        _items = []
        if self.runs:
            for _item in self.runs:
                if _item:
                    _items.append(_item.to_dict())
            _dict['runs'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1PresetSettings:
        """Create an instance of V1PresetSettings from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1PresetSettings.parse_obj(obj)

        _obj = V1PresetSettings.parse_obj({
            "projects": [V1SettingsCatalog.from_dict(_item) for _item in obj.get("projects")] if obj.get("projects") is not None else None,
            "runs": [V1SettingsCatalog.from_dict(_item) for _item in obj.get("runs")] if obj.get("runs") is not None else None
        })
        return _obj

