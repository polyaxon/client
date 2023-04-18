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
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, StrictBool, StrictInt, StrictStr, conlist
from polyaxon_sdk.models.v1_cloning import V1Cloning
from polyaxon_sdk.models.v1_pipeline import V1Pipeline
from polyaxon_sdk.models.v1_run_kind import V1RunKind
from polyaxon_sdk.models.v1_run_pending import V1RunPending
from polyaxon_sdk.models.v1_run_resources import V1RunResources
from polyaxon_sdk.models.v1_run_settings import V1RunSettings
from polyaxon_sdk.models.v1_status_condition import V1StatusCondition
from polyaxon_sdk.models.v1_statuses import V1Statuses

class V1Run(BaseModel):
    """
    V1Run
    """
    uuid: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    user: Optional[StrictStr] = None
    owner: Optional[StrictStr] = None
    project: Optional[StrictStr] = None
    schedule_at: Optional[datetime] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    started_at: Optional[datetime] = None
    finished_at: Optional[datetime] = None
    wait_time: Optional[StrictInt] = None
    duration: Optional[StrictInt] = None
    is_managed: Optional[StrictBool] = None
    is_approved: Optional[StrictBool] = None
    pending: Optional[V1RunPending] = None
    content: Optional[StrictStr] = None
    raw_content: Optional[StrictStr] = None
    status: Optional[V1Statuses] = None
    bookmarked: Optional[StrictBool] = None
    live_state: Optional[StrictInt] = None
    readme: Optional[StrictStr] = None
    meta_info: Optional[Dict[str, Any]] = None
    kind: Optional[V1RunKind] = None
    runtime: Optional[V1RunKind] = None
    inputs: Optional[Dict[str, Any]] = None
    outputs: Optional[Dict[str, Any]] = None
    original: Optional[V1Cloning] = None
    pipeline: Optional[V1Pipeline] = None
    status_conditions: Optional[conlist(V1StatusCondition)] = None
    role: Optional[StrictStr] = None
    settings: Optional[V1RunSettings] = None
    resources: Optional[V1RunResources] = None
    graph: Optional[Dict[str, Any]] = None
    merge: Optional[StrictBool] = None
    __properties = ["uuid", "name", "description", "tags", "user", "owner", "project", "schedule_at", "created_at", "updated_at", "started_at", "finished_at", "wait_time", "duration", "is_managed", "is_approved", "pending", "content", "raw_content", "status", "bookmarked", "live_state", "readme", "meta_info", "kind", "runtime", "inputs", "outputs", "original", "pipeline", "status_conditions", "role", "settings", "resources", "graph", "merge"]

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
    def from_json(cls, json_str: str) -> V1Run:
        """Create an instance of V1Run from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of original
        if self.original:
            _dict['original'] = self.original.to_dict()
        # override the default output from pydantic by calling `to_dict()` of pipeline
        if self.pipeline:
            _dict['pipeline'] = self.pipeline.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in status_conditions (list)
        _items = []
        if self.status_conditions:
            for _item in self.status_conditions:
                if _item:
                    _items.append(_item.to_dict())
            _dict['status_conditions'] = _items
        # override the default output from pydantic by calling `to_dict()` of settings
        if self.settings:
            _dict['settings'] = self.settings.to_dict()
        # override the default output from pydantic by calling `to_dict()` of resources
        if self.resources:
            _dict['resources'] = self.resources.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1Run:
        """Create an instance of V1Run from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1Run.parse_obj(obj)

        _obj = V1Run.parse_obj({
            "uuid": obj.get("uuid"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "user": obj.get("user"),
            "owner": obj.get("owner"),
            "project": obj.get("project"),
            "schedule_at": obj.get("schedule_at"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "started_at": obj.get("started_at"),
            "finished_at": obj.get("finished_at"),
            "wait_time": obj.get("wait_time"),
            "duration": obj.get("duration"),
            "is_managed": obj.get("is_managed"),
            "is_approved": obj.get("is_approved"),
            "pending": obj.get("pending"),
            "content": obj.get("content"),
            "raw_content": obj.get("raw_content"),
            "status": obj.get("status"),
            "bookmarked": obj.get("bookmarked"),
            "live_state": obj.get("live_state"),
            "readme": obj.get("readme"),
            "meta_info": obj.get("meta_info"),
            "kind": obj.get("kind"),
            "runtime": obj.get("runtime"),
            "inputs": obj.get("inputs"),
            "outputs": obj.get("outputs"),
            "original": V1Cloning.from_dict(obj.get("original")) if obj.get("original") is not None else None,
            "pipeline": V1Pipeline.from_dict(obj.get("pipeline")) if obj.get("pipeline") is not None else None,
            "status_conditions": [V1StatusCondition.from_dict(_item) for _item in obj.get("status_conditions")] if obj.get("status_conditions") is not None else None,
            "role": obj.get("role"),
            "settings": V1RunSettings.from_dict(obj.get("settings")) if obj.get("settings") is not None else None,
            "resources": V1RunResources.from_dict(obj.get("resources")) if obj.get("resources") is not None else None,
            "graph": obj.get("graph"),
            "merge": obj.get("merge")
        })
        return _obj

