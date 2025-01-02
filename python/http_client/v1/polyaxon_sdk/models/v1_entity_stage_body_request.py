# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.6.0
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
from pydantic import BaseModel, StrictStr
from polyaxon_sdk.models.v1_stage_condition import V1StageCondition

class V1EntityStageBodyRequest(BaseModel):
    """
    V1EntityStageBodyRequest
    """
    owner: Optional[StrictStr] = None
    entity: Optional[StrictStr] = None
    kind: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    condition: Optional[V1StageCondition] = None
    __properties = ["owner", "entity", "kind", "name", "condition"]

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
    def from_json(cls, json_str: str) -> V1EntityStageBodyRequest:
        """Create an instance of V1EntityStageBodyRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of condition
        if self.condition:
            _dict['condition'] = self.condition.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1EntityStageBodyRequest:
        """Create an instance of V1EntityStageBodyRequest from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1EntityStageBodyRequest.parse_obj(obj)

        _obj = V1EntityStageBodyRequest.parse_obj({
            "owner": obj.get("owner"),
            "entity": obj.get("entity"),
            "kind": obj.get("kind"),
            "name": obj.get("name"),
            "condition": V1StageCondition.from_dict(obj.get("condition")) if obj.get("condition") is not None else None
        })
        return _obj

