# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

         # noqa: E501

    The version of the OpenAPI document: 2.0.5
    Contact: contact@polyaxon.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from inspect import getfullargspec
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class V1RunKind(str, Enum):
    """
    V1RunKind
    """

    """
    allowed enum values
    """
    JOB = 'job'
    SERVICE = 'service'
    DAG = 'dag'
    DASKJOB = 'daskjob'
    RAYJOB = 'rayjob'
    MPIJOB = 'mpijob'
    TFJOB = 'tfjob'
    PYTORCHJOB = 'pytorchjob'
    MXJOB = 'mxjob'
    XGBJOB = 'xgbjob'
    PADDLEJOB = 'paddlejob'
    MATRIX = 'matrix'
    SCHEDULE = 'schedule'
    TUNER = 'tuner'
    WATCHDOG = 'watchdog'
    NOTIFIER = 'notifier'
    BUILDER = 'builder'
    CLEANER = 'cleaner'

