#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
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

    The version of the OpenAPI document: 1.14.2
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


class V1RunSchema(object):
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
        'job': 'V1Job',
        'service': 'V1Service',
        'dag': 'V1Dag',
        'tf_job': 'V1TFJob',
        'pytorch_job': 'V1PytorchJob',
        'mpi_job': 'V1MPIJob',
        'mx_job': 'V1MXJob',
        'xgboost_job': 'V1XGBoostJob',
        'dask': 'V1Dask',
        'spark': 'V1Spark',
        'flink': 'V1Flink',
        'ruy': 'V1Ray'
    }

    attribute_map = {
        'job': 'job',
        'service': 'service',
        'dag': 'dag',
        'tf_job': 'tfJob',
        'pytorch_job': 'pytorchJob',
        'mpi_job': 'mpiJob',
        'mx_job': 'mxJob',
        'xgboost_job': 'xgboostJob',
        'dask': 'dask',
        'spark': 'spark',
        'flink': 'flink',
        'ruy': 'ruy'
    }

    def __init__(self, job=None, service=None, dag=None, tf_job=None, pytorch_job=None, mpi_job=None, mx_job=None, xgboost_job=None, dask=None, spark=None, flink=None, ruy=None, local_vars_configuration=None):  # noqa: E501
        """V1RunSchema - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._job = None
        self._service = None
        self._dag = None
        self._tf_job = None
        self._pytorch_job = None
        self._mpi_job = None
        self._mx_job = None
        self._xgboost_job = None
        self._dask = None
        self._spark = None
        self._flink = None
        self._ruy = None
        self.discriminator = None

        if job is not None:
            self.job = job
        if service is not None:
            self.service = service
        if dag is not None:
            self.dag = dag
        if tf_job is not None:
            self.tf_job = tf_job
        if pytorch_job is not None:
            self.pytorch_job = pytorch_job
        if mpi_job is not None:
            self.mpi_job = mpi_job
        if mx_job is not None:
            self.mx_job = mx_job
        if xgboost_job is not None:
            self.xgboost_job = xgboost_job
        if dask is not None:
            self.dask = dask
        if spark is not None:
            self.spark = spark
        if flink is not None:
            self.flink = flink
        if ruy is not None:
            self.ruy = ruy

    @property
    def job(self):
        """Gets the job of this V1RunSchema.  # noqa: E501


        :return: The job of this V1RunSchema.  # noqa: E501
        :rtype: V1Job
        """
        return self._job

    @job.setter
    def job(self, job):
        """Sets the job of this V1RunSchema.


        :param job: The job of this V1RunSchema.  # noqa: E501
        :type job: V1Job
        """

        self._job = job

    @property
    def service(self):
        """Gets the service of this V1RunSchema.  # noqa: E501


        :return: The service of this V1RunSchema.  # noqa: E501
        :rtype: V1Service
        """
        return self._service

    @service.setter
    def service(self, service):
        """Sets the service of this V1RunSchema.


        :param service: The service of this V1RunSchema.  # noqa: E501
        :type service: V1Service
        """

        self._service = service

    @property
    def dag(self):
        """Gets the dag of this V1RunSchema.  # noqa: E501


        :return: The dag of this V1RunSchema.  # noqa: E501
        :rtype: V1Dag
        """
        return self._dag

    @dag.setter
    def dag(self, dag):
        """Sets the dag of this V1RunSchema.


        :param dag: The dag of this V1RunSchema.  # noqa: E501
        :type dag: V1Dag
        """

        self._dag = dag

    @property
    def tf_job(self):
        """Gets the tf_job of this V1RunSchema.  # noqa: E501


        :return: The tf_job of this V1RunSchema.  # noqa: E501
        :rtype: V1TFJob
        """
        return self._tf_job

    @tf_job.setter
    def tf_job(self, tf_job):
        """Sets the tf_job of this V1RunSchema.


        :param tf_job: The tf_job of this V1RunSchema.  # noqa: E501
        :type tf_job: V1TFJob
        """

        self._tf_job = tf_job

    @property
    def pytorch_job(self):
        """Gets the pytorch_job of this V1RunSchema.  # noqa: E501


        :return: The pytorch_job of this V1RunSchema.  # noqa: E501
        :rtype: V1PytorchJob
        """
        return self._pytorch_job

    @pytorch_job.setter
    def pytorch_job(self, pytorch_job):
        """Sets the pytorch_job of this V1RunSchema.


        :param pytorch_job: The pytorch_job of this V1RunSchema.  # noqa: E501
        :type pytorch_job: V1PytorchJob
        """

        self._pytorch_job = pytorch_job

    @property
    def mpi_job(self):
        """Gets the mpi_job of this V1RunSchema.  # noqa: E501


        :return: The mpi_job of this V1RunSchema.  # noqa: E501
        :rtype: V1MPIJob
        """
        return self._mpi_job

    @mpi_job.setter
    def mpi_job(self, mpi_job):
        """Sets the mpi_job of this V1RunSchema.


        :param mpi_job: The mpi_job of this V1RunSchema.  # noqa: E501
        :type mpi_job: V1MPIJob
        """

        self._mpi_job = mpi_job

    @property
    def mx_job(self):
        """Gets the mx_job of this V1RunSchema.  # noqa: E501


        :return: The mx_job of this V1RunSchema.  # noqa: E501
        :rtype: V1MXJob
        """
        return self._mx_job

    @mx_job.setter
    def mx_job(self, mx_job):
        """Sets the mx_job of this V1RunSchema.


        :param mx_job: The mx_job of this V1RunSchema.  # noqa: E501
        :type mx_job: V1MXJob
        """

        self._mx_job = mx_job

    @property
    def xgboost_job(self):
        """Gets the xgboost_job of this V1RunSchema.  # noqa: E501


        :return: The xgboost_job of this V1RunSchema.  # noqa: E501
        :rtype: V1XGBoostJob
        """
        return self._xgboost_job

    @xgboost_job.setter
    def xgboost_job(self, xgboost_job):
        """Sets the xgboost_job of this V1RunSchema.


        :param xgboost_job: The xgboost_job of this V1RunSchema.  # noqa: E501
        :type xgboost_job: V1XGBoostJob
        """

        self._xgboost_job = xgboost_job

    @property
    def dask(self):
        """Gets the dask of this V1RunSchema.  # noqa: E501


        :return: The dask of this V1RunSchema.  # noqa: E501
        :rtype: V1Dask
        """
        return self._dask

    @dask.setter
    def dask(self, dask):
        """Sets the dask of this V1RunSchema.


        :param dask: The dask of this V1RunSchema.  # noqa: E501
        :type dask: V1Dask
        """

        self._dask = dask

    @property
    def spark(self):
        """Gets the spark of this V1RunSchema.  # noqa: E501


        :return: The spark of this V1RunSchema.  # noqa: E501
        :rtype: V1Spark
        """
        return self._spark

    @spark.setter
    def spark(self, spark):
        """Sets the spark of this V1RunSchema.


        :param spark: The spark of this V1RunSchema.  # noqa: E501
        :type spark: V1Spark
        """

        self._spark = spark

    @property
    def flink(self):
        """Gets the flink of this V1RunSchema.  # noqa: E501


        :return: The flink of this V1RunSchema.  # noqa: E501
        :rtype: V1Flink
        """
        return self._flink

    @flink.setter
    def flink(self, flink):
        """Sets the flink of this V1RunSchema.


        :param flink: The flink of this V1RunSchema.  # noqa: E501
        :type flink: V1Flink
        """

        self._flink = flink

    @property
    def ruy(self):
        """Gets the ruy of this V1RunSchema.  # noqa: E501


        :return: The ruy of this V1RunSchema.  # noqa: E501
        :rtype: V1Ray
        """
        return self._ruy

    @ruy.setter
    def ruy(self, ruy):
        """Sets the ruy of this V1RunSchema.


        :param ruy: The ruy of this V1RunSchema.  # noqa: E501
        :type ruy: V1Ray
        """

        self._ruy = ruy

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
        if not isinstance(other, V1RunSchema):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1RunSchema):
            return True

        return self.to_dict() != other.to_dict()
