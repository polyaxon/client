# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.0-rc26
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
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist

class V1DockerfileType(BaseModel):
    """
    V1DockerfileType
    """
    image: Optional[StrictStr] = None
    env: Optional[Dict[str, StrictStr]] = None
    path: Optional[conlist(StrictStr)] = None
    copy: Optional[conlist(Dict[str, Any])] = None
    post_run_copy: Optional[conlist(Dict[str, Any])] = None
    run: Optional[conlist(StrictStr)] = None
    lang_env: Optional[StrictStr] = Field(None, alias="langEnv")
    uid: Optional[StrictInt] = None
    gid: Optional[StrictInt] = None
    username: Optional[StrictInt] = None
    filename: Optional[StrictStr] = None
    workdir: Optional[StrictStr] = None
    workdir_path: Optional[StrictStr] = Field(None, alias="workdirPath")
    shell: Optional[StrictStr] = None
    __properties = ["image", "env", "path", "copy", "post_run_copy", "run", "langEnv", "uid", "gid", "username", "filename", "workdir", "workdirPath", "shell"]

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
    def from_json(cls, json_str: str) -> V1DockerfileType:
        """Create an instance of V1DockerfileType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> V1DockerfileType:
        """Create an instance of V1DockerfileType from a dict"""
        if obj is None:
            return None

        if type(obj) is not dict:
            return V1DockerfileType.parse_obj(obj)

        _obj = V1DockerfileType.parse_obj({
            "image": obj.get("image"),
            "env": obj.get("env"),
            "path": obj.get("path"),
            "copy": obj.get("copy"),
            "post_run_copy": obj.get("post_run_copy"),
            "run": obj.get("run"),
            "lang_env": obj.get("langEnv"),
            "uid": obj.get("uid"),
            "gid": obj.get("gid"),
            "username": obj.get("username"),
            "filename": obj.get("filename"),
            "workdir": obj.get("workdir"),
            "workdir_path": obj.get("workdirPath"),
            "shell": obj.get("shell")
        })
        return _obj

