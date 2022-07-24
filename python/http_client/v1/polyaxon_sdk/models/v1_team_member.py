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


class V1TeamMember(object):
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
        'user': 'str',
        'user_email': 'str',
        'role': 'str',
        'org_role': 'str',
        'created_at': 'datetime',
        'updated_at': 'datetime'
    }

    attribute_map = {
        'user': 'user',
        'user_email': 'user_email',
        'role': 'role',
        'org_role': 'org_role',
        'created_at': 'created_at',
        'updated_at': 'updated_at'
    }

    def __init__(self, user=None, user_email=None, role=None, org_role=None, created_at=None, updated_at=None, local_vars_configuration=None):  # noqa: E501
        """V1TeamMember - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._user = None
        self._user_email = None
        self._role = None
        self._org_role = None
        self._created_at = None
        self._updated_at = None
        self.discriminator = None

        if user is not None:
            self.user = user
        if user_email is not None:
            self.user_email = user_email
        if role is not None:
            self.role = role
        if org_role is not None:
            self.org_role = org_role
        if created_at is not None:
            self.created_at = created_at
        if updated_at is not None:
            self.updated_at = updated_at

    @property
    def user(self):
        """Gets the user of this V1TeamMember.  # noqa: E501


        :return: The user of this V1TeamMember.  # noqa: E501
        :rtype: str
        """
        return self._user

    @user.setter
    def user(self, user):
        """Sets the user of this V1TeamMember.


        :param user: The user of this V1TeamMember.  # noqa: E501
        :type user: str
        """

        self._user = user

    @property
    def user_email(self):
        """Gets the user_email of this V1TeamMember.  # noqa: E501


        :return: The user_email of this V1TeamMember.  # noqa: E501
        :rtype: str
        """
        return self._user_email

    @user_email.setter
    def user_email(self, user_email):
        """Sets the user_email of this V1TeamMember.


        :param user_email: The user_email of this V1TeamMember.  # noqa: E501
        :type user_email: str
        """

        self._user_email = user_email

    @property
    def role(self):
        """Gets the role of this V1TeamMember.  # noqa: E501


        :return: The role of this V1TeamMember.  # noqa: E501
        :rtype: str
        """
        return self._role

    @role.setter
    def role(self, role):
        """Sets the role of this V1TeamMember.


        :param role: The role of this V1TeamMember.  # noqa: E501
        :type role: str
        """

        self._role = role

    @property
    def org_role(self):
        """Gets the org_role of this V1TeamMember.  # noqa: E501


        :return: The org_role of this V1TeamMember.  # noqa: E501
        :rtype: str
        """
        return self._org_role

    @org_role.setter
    def org_role(self, org_role):
        """Sets the org_role of this V1TeamMember.


        :param org_role: The org_role of this V1TeamMember.  # noqa: E501
        :type org_role: str
        """

        self._org_role = org_role

    @property
    def created_at(self):
        """Gets the created_at of this V1TeamMember.  # noqa: E501


        :return: The created_at of this V1TeamMember.  # noqa: E501
        :rtype: datetime
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at):
        """Sets the created_at of this V1TeamMember.


        :param created_at: The created_at of this V1TeamMember.  # noqa: E501
        :type created_at: datetime
        """

        self._created_at = created_at

    @property
    def updated_at(self):
        """Gets the updated_at of this V1TeamMember.  # noqa: E501


        :return: The updated_at of this V1TeamMember.  # noqa: E501
        :rtype: datetime
        """
        return self._updated_at

    @updated_at.setter
    def updated_at(self, updated_at):
        """Sets the updated_at of this V1TeamMember.


        :param updated_at: The updated_at of this V1TeamMember.  # noqa: E501
        :type updated_at: datetime
        """

        self._updated_at = updated_at

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
        if not isinstance(other, V1TeamMember):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1TeamMember):
            return True

        return self.to_dict() != other.to_dict()
