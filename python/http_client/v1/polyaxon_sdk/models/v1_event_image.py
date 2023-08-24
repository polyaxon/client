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


from typing import Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr

class V1EventImage(BaseModel):
    """
    V1EventImage
    """
    height: Optional[StrictInt] = Field(None, description="Height of the image.")
    width: Optional[StrictInt] = Field(None, description="Width of the image.")
    colorspace: Optional[StrictInt] = None
    path: Optional[StrictStr] = None
    __properties = ["height", "width", "colorspace", "path"]

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
    def from_json(cls, json_str: str) -> V1EventImage:
        """Create an instance of V1EventImage from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1EventImage:
        """Create an instance of V1EventImage from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1EventImage.parse_obj(obj)

        _obj = V1EventImage.parse_obj({
            "height": obj.get("height"),
            "width": obj.get("width"),
            "colorspace": obj.get("colorspace"),
            "path": obj.get("path")
        })
        return _obj

