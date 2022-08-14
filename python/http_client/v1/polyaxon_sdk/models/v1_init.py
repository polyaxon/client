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

    The version of the OpenAPI document: 1.20.0
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


class V1Init(object):
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
        'artifacts': 'V1ArtifactsType',
        'paths': 'list[object]',
        'git': 'V1GitType',
        'dockerfile': 'V1DockerfileType',
        'file': 'V1FileType',
        'tensorboard': 'V1TensorboardType',
        'lineage_ref': 'str',
        'artifact_ref': 'str',
        'model_ref': 'str',
        'connection': 'str',
        'path': 'str',
        'container': 'V1Container'
    }

    attribute_map = {
        'artifacts': 'artifacts',
        'paths': 'paths',
        'git': 'git',
        'dockerfile': 'dockerfile',
        'file': 'file',
        'tensorboard': 'tensorboard',
        'lineage_ref': 'lineageRef',
        'artifact_ref': 'artifactRef',
        'model_ref': 'modelRef',
        'connection': 'connection',
        'path': 'path',
        'container': 'container'
    }

    def __init__(self, artifacts=None, paths=None, git=None, dockerfile=None, file=None, tensorboard=None, lineage_ref=None, artifact_ref=None, model_ref=None, connection=None, path=None, container=None, local_vars_configuration=None):  # noqa: E501
        """V1Init - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._artifacts = None
        self._paths = None
        self._git = None
        self._dockerfile = None
        self._file = None
        self._tensorboard = None
        self._lineage_ref = None
        self._artifact_ref = None
        self._model_ref = None
        self._connection = None
        self._path = None
        self._container = None
        self.discriminator = None

        if artifacts is not None:
            self.artifacts = artifacts
        if paths is not None:
            self.paths = paths
        if git is not None:
            self.git = git
        if dockerfile is not None:
            self.dockerfile = dockerfile
        if file is not None:
            self.file = file
        if tensorboard is not None:
            self.tensorboard = tensorboard
        if lineage_ref is not None:
            self.lineage_ref = lineage_ref
        if artifact_ref is not None:
            self.artifact_ref = artifact_ref
        if model_ref is not None:
            self.model_ref = model_ref
        if connection is not None:
            self.connection = connection
        if path is not None:
            self.path = path
        if container is not None:
            self.container = container

    @property
    def artifacts(self):
        """Gets the artifacts of this V1Init.  # noqa: E501


        :return: The artifacts of this V1Init.  # noqa: E501
        :rtype: V1ArtifactsType
        """
        return self._artifacts

    @artifacts.setter
    def artifacts(self, artifacts):
        """Sets the artifacts of this V1Init.


        :param artifacts: The artifacts of this V1Init.  # noqa: E501
        :type artifacts: V1ArtifactsType
        """

        self._artifacts = artifacts

    @property
    def paths(self):
        """Gets the paths of this V1Init.  # noqa: E501


        :return: The paths of this V1Init.  # noqa: E501
        :rtype: list[object]
        """
        return self._paths

    @paths.setter
    def paths(self, paths):
        """Sets the paths of this V1Init.


        :param paths: The paths of this V1Init.  # noqa: E501
        :type paths: list[object]
        """

        self._paths = paths

    @property
    def git(self):
        """Gets the git of this V1Init.  # noqa: E501


        :return: The git of this V1Init.  # noqa: E501
        :rtype: V1GitType
        """
        return self._git

    @git.setter
    def git(self, git):
        """Sets the git of this V1Init.


        :param git: The git of this V1Init.  # noqa: E501
        :type git: V1GitType
        """

        self._git = git

    @property
    def dockerfile(self):
        """Gets the dockerfile of this V1Init.  # noqa: E501


        :return: The dockerfile of this V1Init.  # noqa: E501
        :rtype: V1DockerfileType
        """
        return self._dockerfile

    @dockerfile.setter
    def dockerfile(self, dockerfile):
        """Sets the dockerfile of this V1Init.


        :param dockerfile: The dockerfile of this V1Init.  # noqa: E501
        :type dockerfile: V1DockerfileType
        """

        self._dockerfile = dockerfile

    @property
    def file(self):
        """Gets the file of this V1Init.  # noqa: E501


        :return: The file of this V1Init.  # noqa: E501
        :rtype: V1FileType
        """
        return self._file

    @file.setter
    def file(self, file):
        """Sets the file of this V1Init.


        :param file: The file of this V1Init.  # noqa: E501
        :type file: V1FileType
        """

        self._file = file

    @property
    def tensorboard(self):
        """Gets the tensorboard of this V1Init.  # noqa: E501


        :return: The tensorboard of this V1Init.  # noqa: E501
        :rtype: V1TensorboardType
        """
        return self._tensorboard

    @tensorboard.setter
    def tensorboard(self, tensorboard):
        """Sets the tensorboard of this V1Init.


        :param tensorboard: The tensorboard of this V1Init.  # noqa: E501
        :type tensorboard: V1TensorboardType
        """

        self._tensorboard = tensorboard

    @property
    def lineage_ref(self):
        """Gets the lineage_ref of this V1Init.  # noqa: E501


        :return: The lineage_ref of this V1Init.  # noqa: E501
        :rtype: str
        """
        return self._lineage_ref

    @lineage_ref.setter
    def lineage_ref(self, lineage_ref):
        """Sets the lineage_ref of this V1Init.


        :param lineage_ref: The lineage_ref of this V1Init.  # noqa: E501
        :type lineage_ref: str
        """

        self._lineage_ref = lineage_ref

    @property
    def artifact_ref(self):
        """Gets the artifact_ref of this V1Init.  # noqa: E501


        :return: The artifact_ref of this V1Init.  # noqa: E501
        :rtype: str
        """
        return self._artifact_ref

    @artifact_ref.setter
    def artifact_ref(self, artifact_ref):
        """Sets the artifact_ref of this V1Init.


        :param artifact_ref: The artifact_ref of this V1Init.  # noqa: E501
        :type artifact_ref: str
        """

        self._artifact_ref = artifact_ref

    @property
    def model_ref(self):
        """Gets the model_ref of this V1Init.  # noqa: E501


        :return: The model_ref of this V1Init.  # noqa: E501
        :rtype: str
        """
        return self._model_ref

    @model_ref.setter
    def model_ref(self, model_ref):
        """Sets the model_ref of this V1Init.


        :param model_ref: The model_ref of this V1Init.  # noqa: E501
        :type model_ref: str
        """

        self._model_ref = model_ref

    @property
    def connection(self):
        """Gets the connection of this V1Init.  # noqa: E501


        :return: The connection of this V1Init.  # noqa: E501
        :rtype: str
        """
        return self._connection

    @connection.setter
    def connection(self, connection):
        """Sets the connection of this V1Init.


        :param connection: The connection of this V1Init.  # noqa: E501
        :type connection: str
        """

        self._connection = connection

    @property
    def path(self):
        """Gets the path of this V1Init.  # noqa: E501


        :return: The path of this V1Init.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this V1Init.


        :param path: The path of this V1Init.  # noqa: E501
        :type path: str
        """

        self._path = path

    @property
    def container(self):
        """Gets the container of this V1Init.  # noqa: E501


        :return: The container of this V1Init.  # noqa: E501
        :rtype: V1Container
        """
        return self._container

    @container.setter
    def container(self, container):
        """Sets the container of this V1Init.


        :param container: The container of this V1Init.  # noqa: E501
        :type container: V1Container
        """

        self._container = container

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
        if not isinstance(other, V1Init):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Init):
            return True

        return self.to_dict() != other.to_dict()
