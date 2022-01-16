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


class V1Event(object):
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
        'timestamp': 'datetime',
        'step': 'int',
        'metric': 'float',
        'image': 'V1EventImage',
        'histogram': 'V1EventHistogram',
        'audio': 'V1EventAudio',
        'video': 'V1EventVideo',
        'html': 'str',
        'text': 'str',
        'chart': 'V1EventChart',
        'model': 'V1EventModel',
        'artifact': 'V1EventArtifact',
        'dataframe': 'V1EventDataframe',
        'curve': 'V1EventCurve',
        'confusion': 'V1EventConfusionMatrix'
    }

    attribute_map = {
        'timestamp': 'timestamp',
        'step': 'step',
        'metric': 'metric',
        'image': 'image',
        'histogram': 'histogram',
        'audio': 'audio',
        'video': 'video',
        'html': 'html',
        'text': 'text',
        'chart': 'chart',
        'model': 'model',
        'artifact': 'artifact',
        'dataframe': 'dataframe',
        'curve': 'curve',
        'confusion': 'confusion'
    }

    def __init__(self, timestamp=None, step=None, metric=None, image=None, histogram=None, audio=None, video=None, html=None, text=None, chart=None, model=None, artifact=None, dataframe=None, curve=None, confusion=None, local_vars_configuration=None):  # noqa: E501
        """V1Event - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration.get_default_copy()
        self.local_vars_configuration = local_vars_configuration

        self._timestamp = None
        self._step = None
        self._metric = None
        self._image = None
        self._histogram = None
        self._audio = None
        self._video = None
        self._html = None
        self._text = None
        self._chart = None
        self._model = None
        self._artifact = None
        self._dataframe = None
        self._curve = None
        self._confusion = None
        self.discriminator = None

        if timestamp is not None:
            self.timestamp = timestamp
        if step is not None:
            self.step = step
        if metric is not None:
            self.metric = metric
        if image is not None:
            self.image = image
        if histogram is not None:
            self.histogram = histogram
        if audio is not None:
            self.audio = audio
        if video is not None:
            self.video = video
        if html is not None:
            self.html = html
        if text is not None:
            self.text = text
        if chart is not None:
            self.chart = chart
        if model is not None:
            self.model = model
        if artifact is not None:
            self.artifact = artifact
        if dataframe is not None:
            self.dataframe = dataframe
        if curve is not None:
            self.curve = curve
        if confusion is not None:
            self.confusion = confusion

    @property
    def timestamp(self):
        """Gets the timestamp of this V1Event.  # noqa: E501


        :return: The timestamp of this V1Event.  # noqa: E501
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this V1Event.


        :param timestamp: The timestamp of this V1Event.  # noqa: E501
        :type timestamp: datetime
        """

        self._timestamp = timestamp

    @property
    def step(self):
        """Gets the step of this V1Event.  # noqa: E501

        Global step of the event.  # noqa: E501

        :return: The step of this V1Event.  # noqa: E501
        :rtype: int
        """
        return self._step

    @step.setter
    def step(self, step):
        """Sets the step of this V1Event.

        Global step of the event.  # noqa: E501

        :param step: The step of this V1Event.  # noqa: E501
        :type step: int
        """

        self._step = step

    @property
    def metric(self):
        """Gets the metric of this V1Event.  # noqa: E501


        :return: The metric of this V1Event.  # noqa: E501
        :rtype: float
        """
        return self._metric

    @metric.setter
    def metric(self, metric):
        """Sets the metric of this V1Event.


        :param metric: The metric of this V1Event.  # noqa: E501
        :type metric: float
        """

        self._metric = metric

    @property
    def image(self):
        """Gets the image of this V1Event.  # noqa: E501


        :return: The image of this V1Event.  # noqa: E501
        :rtype: V1EventImage
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this V1Event.


        :param image: The image of this V1Event.  # noqa: E501
        :type image: V1EventImage
        """

        self._image = image

    @property
    def histogram(self):
        """Gets the histogram of this V1Event.  # noqa: E501


        :return: The histogram of this V1Event.  # noqa: E501
        :rtype: V1EventHistogram
        """
        return self._histogram

    @histogram.setter
    def histogram(self, histogram):
        """Sets the histogram of this V1Event.


        :param histogram: The histogram of this V1Event.  # noqa: E501
        :type histogram: V1EventHistogram
        """

        self._histogram = histogram

    @property
    def audio(self):
        """Gets the audio of this V1Event.  # noqa: E501


        :return: The audio of this V1Event.  # noqa: E501
        :rtype: V1EventAudio
        """
        return self._audio

    @audio.setter
    def audio(self, audio):
        """Sets the audio of this V1Event.


        :param audio: The audio of this V1Event.  # noqa: E501
        :type audio: V1EventAudio
        """

        self._audio = audio

    @property
    def video(self):
        """Gets the video of this V1Event.  # noqa: E501


        :return: The video of this V1Event.  # noqa: E501
        :rtype: V1EventVideo
        """
        return self._video

    @video.setter
    def video(self, video):
        """Sets the video of this V1Event.


        :param video: The video of this V1Event.  # noqa: E501
        :type video: V1EventVideo
        """

        self._video = video

    @property
    def html(self):
        """Gets the html of this V1Event.  # noqa: E501


        :return: The html of this V1Event.  # noqa: E501
        :rtype: str
        """
        return self._html

    @html.setter
    def html(self, html):
        """Sets the html of this V1Event.


        :param html: The html of this V1Event.  # noqa: E501
        :type html: str
        """

        self._html = html

    @property
    def text(self):
        """Gets the text of this V1Event.  # noqa: E501


        :return: The text of this V1Event.  # noqa: E501
        :rtype: str
        """
        return self._text

    @text.setter
    def text(self, text):
        """Sets the text of this V1Event.


        :param text: The text of this V1Event.  # noqa: E501
        :type text: str
        """

        self._text = text

    @property
    def chart(self):
        """Gets the chart of this V1Event.  # noqa: E501


        :return: The chart of this V1Event.  # noqa: E501
        :rtype: V1EventChart
        """
        return self._chart

    @chart.setter
    def chart(self, chart):
        """Sets the chart of this V1Event.


        :param chart: The chart of this V1Event.  # noqa: E501
        :type chart: V1EventChart
        """

        self._chart = chart

    @property
    def model(self):
        """Gets the model of this V1Event.  # noqa: E501


        :return: The model of this V1Event.  # noqa: E501
        :rtype: V1EventModel
        """
        return self._model

    @model.setter
    def model(self, model):
        """Sets the model of this V1Event.


        :param model: The model of this V1Event.  # noqa: E501
        :type model: V1EventModel
        """

        self._model = model

    @property
    def artifact(self):
        """Gets the artifact of this V1Event.  # noqa: E501


        :return: The artifact of this V1Event.  # noqa: E501
        :rtype: V1EventArtifact
        """
        return self._artifact

    @artifact.setter
    def artifact(self, artifact):
        """Sets the artifact of this V1Event.


        :param artifact: The artifact of this V1Event.  # noqa: E501
        :type artifact: V1EventArtifact
        """

        self._artifact = artifact

    @property
    def dataframe(self):
        """Gets the dataframe of this V1Event.  # noqa: E501


        :return: The dataframe of this V1Event.  # noqa: E501
        :rtype: V1EventDataframe
        """
        return self._dataframe

    @dataframe.setter
    def dataframe(self, dataframe):
        """Sets the dataframe of this V1Event.


        :param dataframe: The dataframe of this V1Event.  # noqa: E501
        :type dataframe: V1EventDataframe
        """

        self._dataframe = dataframe

    @property
    def curve(self):
        """Gets the curve of this V1Event.  # noqa: E501


        :return: The curve of this V1Event.  # noqa: E501
        :rtype: V1EventCurve
        """
        return self._curve

    @curve.setter
    def curve(self, curve):
        """Sets the curve of this V1Event.


        :param curve: The curve of this V1Event.  # noqa: E501
        :type curve: V1EventCurve
        """

        self._curve = curve

    @property
    def confusion(self):
        """Gets the confusion of this V1Event.  # noqa: E501


        :return: The confusion of this V1Event.  # noqa: E501
        :rtype: V1EventConfusionMatrix
        """
        return self._confusion

    @confusion.setter
    def confusion(self, confusion):
        """Sets the confusion of this V1Event.


        :param confusion: The confusion of this V1Event.  # noqa: E501
        :type confusion: V1EventConfusionMatrix
        """

        self._confusion = confusion

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
        if not isinstance(other, V1Event):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Event):
            return True

        return self.to_dict() != other.to_dict()
