# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc30
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
from pydantic import BaseModel, Field, StrictBool, StrictStr, conlist
from polyaxon_sdk.models.v1_validation import V1Validation

class V1IO(BaseModel):
    """
    V1IO
    """
    name: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    type: Optional[StrictStr] = None
    value: Optional[Dict[str, Any]] = None
    is_optional: Optional[StrictBool] = Field(None, alias="isOptional")
    is_list: Optional[StrictBool] = Field(None, alias="isList")
    is_flag: Optional[StrictBool] = Field(None, alias="isFlag")
    arg_format: Optional[StrictStr] = Field(None, alias="argFormat")
    connection: Optional[StrictStr] = None
    to_init: Optional[StrictBool] = Field(None, alias="toInit")
    to_env: Optional[StrictStr] = Field(None, alias="toEnv")
    validation: Optional[V1Validation] = None
    delay_validation: Optional[StrictBool] = Field(None, alias="delayValidation")
    options: Optional[conlist(Dict[str, Any])] = None
    __properties = ["name", "description", "type", "value", "isOptional", "isList", "isFlag", "argFormat", "connection", "toInit", "toEnv", "validation", "delayValidation", "options"]

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
    def from_json(cls, json_str: str) -> V1IO:
        """Create an instance of V1IO from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of validation
        if self.validation:
            _dict['validation'] = self.validation.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1IO:
        """Create an instance of V1IO from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1IO.parse_obj(obj)

        _obj = V1IO.parse_obj({
            "name": obj.get("name"),
            "description": obj.get("description"),
            "type": obj.get("type"),
            "value": obj.get("value"),
            "is_optional": obj.get("isOptional"),
            "is_list": obj.get("isList"),
            "is_flag": obj.get("isFlag"),
            "arg_format": obj.get("argFormat"),
            "connection": obj.get("connection"),
            "to_init": obj.get("toInit"),
            "to_env": obj.get("toEnv"),
            "validation": V1Validation.from_dict(obj.get("validation")) if obj.get("validation") is not None else None,
            "delay_validation": obj.get("delayValidation"),
            "options": obj.get("options")
        })
        return _obj

