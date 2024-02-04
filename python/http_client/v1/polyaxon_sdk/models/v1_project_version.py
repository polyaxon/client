# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.1-rc0
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
from pydantic import BaseModel, Field, StrictStr, conlist
from polyaxon_sdk.models.v1_project_version_kind import V1ProjectVersionKind
from polyaxon_sdk.models.v1_stage_condition import V1StageCondition
from polyaxon_sdk.models.v1_stages import V1Stages

class V1ProjectVersion(BaseModel):
    """
    V1ProjectVersion
    """
    uuid: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    tags: Optional[conlist(StrictStr)] = None
    owner: Optional[StrictStr] = None
    project: Optional[StrictStr] = None
    connection: Optional[StrictStr] = None
    run: Optional[StrictStr] = None
    artifacts: Optional[conlist(StrictStr)] = None
    meta_info: Optional[Dict[str, Any]] = Field(None, description="Extra information related to the run, lineage, artifacts, ...")
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    stage: Optional[V1Stages] = None
    kind: Optional[V1ProjectVersionKind] = None
    stage_conditions: Optional[conlist(V1StageCondition)] = None
    content: Optional[StrictStr] = None
    readme: Optional[StrictStr] = None
    state: Optional[StrictStr] = None
    role: Optional[StrictStr] = None
    contributors: Optional[conlist(Dict[str, Any])] = None
    __properties = ["uuid", "name", "description", "tags", "owner", "project", "connection", "run", "artifacts", "meta_info", "created_at", "updated_at", "stage", "kind", "stage_conditions", "content", "readme", "state", "role", "contributors"]

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
    def from_json(cls, json_str: str) -> V1ProjectVersion:
        """Create an instance of V1ProjectVersion from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in stage_conditions (list)
        _items = []
        if self.stage_conditions:
            for _item in self.stage_conditions:
                if _item:
                    _items.append(_item.to_dict())
            _dict['stage_conditions'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1ProjectVersion:
        """Create an instance of V1ProjectVersion from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1ProjectVersion.parse_obj(obj)

        _obj = V1ProjectVersion.parse_obj({
            "uuid": obj.get("uuid"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "tags": obj.get("tags"),
            "owner": obj.get("owner"),
            "project": obj.get("project"),
            "connection": obj.get("connection"),
            "run": obj.get("run"),
            "artifacts": obj.get("artifacts"),
            "meta_info": obj.get("meta_info"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "stage": obj.get("stage"),
            "kind": obj.get("kind"),
            "stage_conditions": [V1StageCondition.from_dict(_item) for _item in obj.get("stage_conditions")] if obj.get("stage_conditions") is not None else None,
            "content": obj.get("content"),
            "readme": obj.get("readme"),
            "state": obj.get("state"),
            "role": obj.get("role"),
            "contributors": obj.get("contributors")
        })
        return _obj

