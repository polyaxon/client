// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package presets_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListPresetNamesReader is a Reader for the ListPresetNames structure.
type ListPresetNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListPresetNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListPresetNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListPresetNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListPresetNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListPresetNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListPresetNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListPresetNamesOK creates a ListPresetNamesOK with default headers values
func NewListPresetNamesOK() *ListPresetNamesOK {
	return &ListPresetNamesOK{}
}

/*
ListPresetNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListPresetNamesOK struct {
	Payload *service_model.V1ListPresetsResponse
}

func (o *ListPresetNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/presets/names][%d] listPresetNamesOK  %+v", 200, o.Payload)
}
func (o *ListPresetNamesOK) GetPayload() *service_model.V1ListPresetsResponse {
	return o.Payload
}

func (o *ListPresetNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListPresetsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListPresetNamesNoContent creates a ListPresetNamesNoContent with default headers values
func NewListPresetNamesNoContent() *ListPresetNamesNoContent {
	return &ListPresetNamesNoContent{}
}

/*
ListPresetNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListPresetNamesNoContent struct {
	Payload interface{}
}

func (o *ListPresetNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/presets/names][%d] listPresetNamesNoContent  %+v", 204, o.Payload)
}
func (o *ListPresetNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListPresetNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListPresetNamesForbidden creates a ListPresetNamesForbidden with default headers values
func NewListPresetNamesForbidden() *ListPresetNamesForbidden {
	return &ListPresetNamesForbidden{}
}

/*
ListPresetNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListPresetNamesForbidden struct {
	Payload interface{}
}

func (o *ListPresetNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/presets/names][%d] listPresetNamesForbidden  %+v", 403, o.Payload)
}
func (o *ListPresetNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListPresetNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListPresetNamesNotFound creates a ListPresetNamesNotFound with default headers values
func NewListPresetNamesNotFound() *ListPresetNamesNotFound {
	return &ListPresetNamesNotFound{}
}

/*
ListPresetNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListPresetNamesNotFound struct {
	Payload interface{}
}

func (o *ListPresetNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/presets/names][%d] listPresetNamesNotFound  %+v", 404, o.Payload)
}
func (o *ListPresetNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListPresetNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListPresetNamesDefault creates a ListPresetNamesDefault with default headers values
func NewListPresetNamesDefault(code int) *ListPresetNamesDefault {
	return &ListPresetNamesDefault{
		_statusCode: code,
	}
}

/*
ListPresetNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListPresetNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list preset names default response
func (o *ListPresetNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListPresetNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/presets/names][%d] ListPresetNames default  %+v", o._statusCode, o.Payload)
}
func (o *ListPresetNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListPresetNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
