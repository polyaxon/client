# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.6-rc3
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
from pydantic import BaseModel
from polyaxon_sdk.models.v1_diff_stopping_policy import V1DiffStoppingPolicy
from polyaxon_sdk.models.v1_failure_early_stopping import V1FailureEarlyStopping
from polyaxon_sdk.models.v1_median_stopping_policy import V1MedianStoppingPolicy
from polyaxon_sdk.models.v1_metric_early_stopping import V1MetricEarlyStopping
from polyaxon_sdk.models.v1_truncation_stopping_policy import V1TruncationStoppingPolicy

class V1EarlyStopping(BaseModel):
    """
    V1EarlyStopping
    """
    median: Optional[V1MedianStoppingPolicy] = None
    diff: Optional[V1DiffStoppingPolicy] = None
    truncation: Optional[V1TruncationStoppingPolicy] = None
    metric: Optional[V1MetricEarlyStopping] = None
    failure: Optional[V1FailureEarlyStopping] = None
    __properties = ["median", "diff", "truncation", "metric", "failure"]

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
    def from_json(cls, json_str: str) -> V1EarlyStopping:
        """Create an instance of V1EarlyStopping from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of median
        if self.median:
            _dict['median'] = self.median.to_dict()
        # override the default output from pydantic by calling `to_dict()` of diff
        if self.diff:
            _dict['diff'] = self.diff.to_dict()
        # override the default output from pydantic by calling `to_dict()` of truncation
        if self.truncation:
            _dict['truncation'] = self.truncation.to_dict()
        # override the default output from pydantic by calling `to_dict()` of metric
        if self.metric:
            _dict['metric'] = self.metric.to_dict()
        # override the default output from pydantic by calling `to_dict()` of failure
        if self.failure:
            _dict['failure'] = self.failure.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1EarlyStopping:
        """Create an instance of V1EarlyStopping from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1EarlyStopping.parse_obj(obj)

        _obj = V1EarlyStopping.parse_obj({
            "median": V1MedianStoppingPolicy.from_dict(obj.get("median")) if obj.get("median") is not None else None,
            "diff": V1DiffStoppingPolicy.from_dict(obj.get("diff")) if obj.get("diff") is not None else None,
            "truncation": V1TruncationStoppingPolicy.from_dict(obj.get("truncation")) if obj.get("truncation") is not None else None,
            "metric": V1MetricEarlyStopping.from_dict(obj.get("metric")) if obj.get("metric") is not None else None,
            "failure": V1FailureEarlyStopping.from_dict(obj.get("failure")) if obj.get("failure") is not None else None
        })
        return _obj

