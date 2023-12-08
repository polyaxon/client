# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.6-rc3
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1ArtifactKind(str, Enum):
    """
    - model: Model asset/event  - audio: Audio asset/event  - video: Vidio asset/event  - histogram: Histogram asset/event  - image: Image asset/event  - tensor: Tensor asset/event  - dataframe: Dataframe asset/event  - chart: plotly/bokeh/vega chart  - csv: Comma separated values  - tsv: Tab separated values  - psv: Pipe separated values  - ssv: Space separated values  - metric: Metric asset/event  - env: Env file  - html: HTML asset/event  - text: Text asset/event  - file: File asset/lineage  - dir: Dir asset/lineage  - dockerfile: Dockerfile asset  - docker_image: Docker image  - data: Data asset/event  - coderef: Coderef lineage  - table: Table asset/event  - tensorboard: Tensorboard lineage  - curve: Curve event  - confusion: Confusion matrix event  - analysis: Analysis lineage  - iteration: Iteration lineage  - markdown: Mardown event  - system: System event  - span: Trace/Span event  - artifact: Generic artifact
    """

    """
    allowed enum values
    """
    MODEL = 'model'
    AUDIO = 'audio'
    VIDEO = 'video'
    HISTOGRAM = 'histogram'
    IMAGE = 'image'
    TENSOR = 'tensor'
    DATAFRAME = 'dataframe'
    CHART = 'chart'
    CSV = 'csv'
    TSV = 'tsv'
    PSV = 'psv'
    SSV = 'ssv'
    METRIC = 'metric'
    ENV = 'env'
    HTML = 'html'
    TEXT = 'text'
    FILE = 'file'
    DIR = 'dir'
    DOCKERFILE = 'dockerfile'
    DOCKER_IMAGE = 'docker_image'
    DATA = 'data'
    CODEREF = 'coderef'
    TABLE = 'table'
    TENSORBOARD = 'tensorboard'
    CURVE = 'curve'
    CONFUSION = 'confusion'
    ANALYSIS = 'analysis'
    ITERATION = 'iteration'
    MARKDOWN = 'markdown'
    SYSTEM = 'system'
    SPAN = 'span'
    ARTIFACT = 'artifact'

