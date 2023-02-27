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

    The version of the OpenAPI document: 1.22.0
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


try:
    from inspect import getfullargspec
except ImportError:
    from inspect import getargspec as getfullargspec
import pprint
import re  # noqa: F401
import six

from polyaxon_sdk.configuration import Configuration


class V1Cache(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'disable': 'bool',
        'ttl': 'int',
        'io': 'list[str]',
        'sections': 'list[str]'
    }

    attribute_map = {
        'disable': 'disable',
        'ttl': 'ttl',
        'io': 'io',
        'sections': 'sections'
    }

    def __init__(self, disable=None, ttl=None, io=None, sections=None, local_vars_configuration=None):  # noqa: E501
        """V1Cache - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._disable = None
        self._ttl = None
        self._io = None
        self._sections = None
        self.discriminator = None

        if disable is not None:
            self.disable = disable
        if ttl is not None:
            self.ttl = ttl
        if io is not None:
            self.io = io
        if sections is not None:
            self.sections = sections

    @property
    def disable(self):
        """Gets the disable of this V1Cache.  # noqa: E501


        :return: The disable of this V1Cache.  # noqa: E501
        :rtype: bool
        """
        return self._disable

    @disable.setter
    def disable(self, disable):
        """Sets the disable of this V1Cache.


        :param disable: The disable of this V1Cache.  # noqa: E501
        :type disable: bool
        """

        self._disable = disable

    @property
    def ttl(self):
        """Gets the ttl of this V1Cache.  # noqa: E501


        :return: The ttl of this V1Cache.  # noqa: E501
        :rtype: int
        """
        return self._ttl

    @ttl.setter
    def ttl(self, ttl):
        """Sets the ttl of this V1Cache.


        :param ttl: The ttl of this V1Cache.  # noqa: E501
        :type ttl: int
        """

        self._ttl = ttl

    @property
    def io(self):
        """Gets the io of this V1Cache.  # noqa: E501


        :return: The io of this V1Cache.  # noqa: E501
        :rtype: list[str]
        """
        return self._io

    @io.setter
    def io(self, io):
        """Sets the io of this V1Cache.


        :param io: The io of this V1Cache.  # noqa: E501
        :type io: list[str]
        """

        self._io = io

    @property
    def sections(self):
        """Gets the sections of this V1Cache.  # noqa: E501


        :return: The sections of this V1Cache.  # noqa: E501
        :rtype: list[str]
        """
        return self._sections

    @sections.setter
    def sections(self, sections):
        """Sets the sections of this V1Cache.


        :param sections: The sections of this V1Cache.  # noqa: E501
        :type sections: list[str]
        """

        self._sections = sections

    def to_dict(self, serialize=False):
        """Returns the model properties as a dict"""
        result = {}

        def convert(x):
            if hasattr(x, "to_dict"):
                args = getfullargspec(x.to_dict).args
                if len(args) == 1:
                    return x.to_dict()
                else:
                    return x.to_dict(serialize)
            else:
                return x

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            attr = self.attribute_map.get(attr, attr) if serialize else attr
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: convert(x),
                    value
                ))
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], convert(item[1])),
                    value.items()
                ))
            else:
                result[attr] = convert(value)

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Cache):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Cache):
            return True

        return self.to_dict() != other.to_dict()
