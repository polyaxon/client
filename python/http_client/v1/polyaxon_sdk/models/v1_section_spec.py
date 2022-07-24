#!/usr/bin/python
#
# Copyright 2018-2022 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.19.0
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


class V1SectionSpec(object):
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
        'name': 'str',
        'is_minimized': 'bool',
        'columns': 'int',
        'height': 'int',
        'widgets': 'list[object]',
        'page_index': 'int',
        'page_size': 'int'
    }

    attribute_map = {
        'name': 'name',
        'is_minimized': 'is_minimized',
        'columns': 'columns',
        'height': 'height',
        'widgets': 'widgets',
        'page_index': 'pageIndex',
        'page_size': 'pageSize'
    }

    def __init__(self, name=None, is_minimized=None, columns=None, height=None, widgets=None, page_index=None, page_size=None, local_vars_configuration=None):  # noqa: E501
        """V1SectionSpec - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._name = None
        self._is_minimized = None
        self._columns = None
        self._height = None
        self._widgets = None
        self._page_index = None
        self._page_size = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if is_minimized is not None:
            self.is_minimized = is_minimized
        if columns is not None:
            self.columns = columns
        if height is not None:
            self.height = height
        if widgets is not None:
            self.widgets = widgets
        if page_index is not None:
            self.page_index = page_index
        if page_size is not None:
            self.page_size = page_size

    @property
    def name(self):
        """Gets the name of this V1SectionSpec.  # noqa: E501


        :return: The name of this V1SectionSpec.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this V1SectionSpec.


        :param name: The name of this V1SectionSpec.  # noqa: E501
        :type name: str
        """

        self._name = name

    @property
    def is_minimized(self):
        """Gets the is_minimized of this V1SectionSpec.  # noqa: E501


        :return: The is_minimized of this V1SectionSpec.  # noqa: E501
        :rtype: bool
        """
        return self._is_minimized

    @is_minimized.setter
    def is_minimized(self, is_minimized):
        """Sets the is_minimized of this V1SectionSpec.


        :param is_minimized: The is_minimized of this V1SectionSpec.  # noqa: E501
        :type is_minimized: bool
        """

        self._is_minimized = is_minimized

    @property
    def columns(self):
        """Gets the columns of this V1SectionSpec.  # noqa: E501


        :return: The columns of this V1SectionSpec.  # noqa: E501
        :rtype: int
        """
        return self._columns

    @columns.setter
    def columns(self, columns):
        """Sets the columns of this V1SectionSpec.


        :param columns: The columns of this V1SectionSpec.  # noqa: E501
        :type columns: int
        """

        self._columns = columns

    @property
    def height(self):
        """Gets the height of this V1SectionSpec.  # noqa: E501


        :return: The height of this V1SectionSpec.  # noqa: E501
        :rtype: int
        """
        return self._height

    @height.setter
    def height(self, height):
        """Sets the height of this V1SectionSpec.


        :param height: The height of this V1SectionSpec.  # noqa: E501
        :type height: int
        """

        self._height = height

    @property
    def widgets(self):
        """Gets the widgets of this V1SectionSpec.  # noqa: E501


        :return: The widgets of this V1SectionSpec.  # noqa: E501
        :rtype: list[object]
        """
        return self._widgets

    @widgets.setter
    def widgets(self, widgets):
        """Sets the widgets of this V1SectionSpec.


        :param widgets: The widgets of this V1SectionSpec.  # noqa: E501
        :type widgets: list[object]
        """

        self._widgets = widgets

    @property
    def page_index(self):
        """Gets the page_index of this V1SectionSpec.  # noqa: E501


        :return: The page_index of this V1SectionSpec.  # noqa: E501
        :rtype: int
        """
        return self._page_index

    @page_index.setter
    def page_index(self, page_index):
        """Sets the page_index of this V1SectionSpec.


        :param page_index: The page_index of this V1SectionSpec.  # noqa: E501
        :type page_index: int
        """

        self._page_index = page_index

    @property
    def page_size(self):
        """Gets the page_size of this V1SectionSpec.  # noqa: E501


        :return: The page_size of this V1SectionSpec.  # noqa: E501
        :rtype: int
        """
        return self._page_size

    @page_size.setter
    def page_size(self, page_size):
        """Sets the page_size of this V1SectionSpec.


        :param page_size: The page_size of this V1SectionSpec.  # noqa: E501
        :type page_size: int
        """

        self._page_size = page_size

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
        if not isinstance(other, V1SectionSpec):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1SectionSpec):
            return True

        return self.to_dict() != other.to_dict()
