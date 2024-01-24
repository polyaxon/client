# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.1.0-rc12
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
from pydantic import BaseModel, Field, StrictBool, StrictInt, StrictStr

class V1TruncationStoppingPolicy(BaseModel):
    """
    Early stopping with truncation stopping, this policy stops a percentage of all running runs at every evaluation.
    """
    kind: Optional[StrictStr] = 'truncation'
    percent: Optional[StrictInt] = Field(None, description="The percentage of runs to stop, at each evaluation interval. e.g. 1 - 99.")
    evaluation_interval: Optional[StrictInt] = Field(None, alias="evaluationInterval", description="Interval/Frequency for applying the policy.")
    min_interval: Optional[StrictInt] = Field(None, alias="minInterval")
    min_samples: Optional[StrictInt] = Field(None, alias="minSamples")
    include_succeeded: Optional[StrictBool] = Field(None, alias="includeSucceeded")
    __properties = ["kind", "percent", "evaluationInterval", "minInterval", "minSamples", "includeSucceeded"]

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
    def from_json(cls, json_str: str) -> V1TruncationStoppingPolicy:
        """Create an instance of V1TruncationStoppingPolicy from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1TruncationStoppingPolicy:
        """Create an instance of V1TruncationStoppingPolicy from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1TruncationStoppingPolicy.parse_obj(obj)

        _obj = V1TruncationStoppingPolicy.parse_obj({
            "kind": obj.get("kind") if obj.get("kind") is not None else 'truncation',
            "percent": obj.get("percent"),
            "evaluation_interval": obj.get("evaluationInterval"),
            "min_interval": obj.get("minInterval"),
            "min_samples": obj.get("minSamples"),
            "include_succeeded": obj.get("includeSucceeded")
        })
        return _obj

