#!/usr/bin/python
#
# Copyright 2018-2023 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc9
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
from typing import List, Optional
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_project_settings import V1ProjectSettings

class V1Project(BaseModel):
    """
    V1Project
    """
    uuid: Optional[StrictStr] = None
    owner: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    is_public: Optional[StrictBool] = None
    bookmarked: Optional[StrictBool] = None
    readme: Optional[StrictStr] = None
    excluded_features: Optional[conlist(StrictStr)] = None
    excluded_runtimes: Optional[conlist(StrictStr)] = None
    settings: Optional[V1ProjectSettings] = None
    role: Optional[StrictStr] = None
    live_state: Optional[StrictInt] = None
    __properties = ["uuid", "owner", "name", "description", "tags", "created_at", "updated_at", "is_public", "bookmarked", "readme", "excluded_features", "excluded_runtimes", "settings", "role", "live_state"]

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
    def from_json(cls, json_str: str) -> V1Project:
        """Create an instance of V1Project from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of settings
        if self.settings:
            _dict['settings'] = self.settings.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Project:
        """Create an instance of V1Project from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Project.parse_obj(obj)

        _obj = V1Project.parse_obj({
            "uuid": obj.get("uuid"),
            "owner": obj.get("owner"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "is_public": obj.get("is_public"),
            "bookmarked": obj.get("bookmarked"),
            "readme": obj.get("readme"),
            "excluded_features": obj.get("excluded_features"),
            "excluded_runtimes": obj.get("excluded_runtimes"),
            "settings": V1ProjectSettings.from_dict(obj.get("settings")) if obj.get("settings") is not None else None,
            "role": obj.get("role"),
            "live_state": obj.get("live_state")
        })
        return _obj

