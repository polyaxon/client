# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.0-rc3
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
from pydantic import BaseModel, StrictInt, StrictStr

class V1TrialStart(BaseModel):
    """
    V1TrialStart
    """
    name: Optional[StrictStr] = None
    email: Optional[StrictStr] = None
    organization: Optional[StrictStr] = None
    plan: Optional[StrictStr] = None
    seats: Optional[StrictInt] = None
    details: Optional[Dict[str, Any]] = None
    __properties = ["name", "email", "organization", "plan", "seats", "details"]

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
    def from_json(cls, json_str: str) -> V1TrialStart:
        """Create an instance of V1TrialStart from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1TrialStart:
        """Create an instance of V1TrialStart from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1TrialStart.parse_obj(obj)

        _obj = V1TrialStart.parse_obj({
            "name": obj.get("name"),
            "email": obj.get("email"),
            "organization": obj.get("organization"),
            "plan": obj.get("plan"),
            "seats": obj.get("seats"),
            "details": obj.get("details")
        })
        return _obj

