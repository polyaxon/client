// Copyright 2018-2021 Polyaxon, Inc.
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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// TagRunsReader is a Reader for the TagRuns structure.
type TagRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *TagRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewTagRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewTagRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewTagRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewTagRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewTagRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewTagRunsOK creates a TagRunsOK with default headers values
func NewTagRunsOK() *TagRunsOK {
	return &TagRunsOK{}
}

/* TagRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type TagRunsOK struct {
}

func (o *TagRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/tag][%d] tagRunsOK ", 200)
}

func (o *TagRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewTagRunsNoContent creates a TagRunsNoContent with default headers values
func NewTagRunsNoContent() *TagRunsNoContent {
	return &TagRunsNoContent{}
}

/* TagRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type TagRunsNoContent struct {
	Payload interface{}
}

func (o *TagRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/tag][%d] tagRunsNoContent  %+v", 204, o.Payload)
}
func (o *TagRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *TagRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagRunsForbidden creates a TagRunsForbidden with default headers values
func NewTagRunsForbidden() *TagRunsForbidden {
	return &TagRunsForbidden{}
}

/* TagRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type TagRunsForbidden struct {
	Payload interface{}
}

func (o *TagRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/tag][%d] tagRunsForbidden  %+v", 403, o.Payload)
}
func (o *TagRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *TagRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagRunsNotFound creates a TagRunsNotFound with default headers values
func NewTagRunsNotFound() *TagRunsNotFound {
	return &TagRunsNotFound{}
}

/* TagRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type TagRunsNotFound struct {
	Payload interface{}
}

func (o *TagRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/tag][%d] tagRunsNotFound  %+v", 404, o.Payload)
}
func (o *TagRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *TagRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTagRunsDefault creates a TagRunsDefault with default headers values
func NewTagRunsDefault(code int) *TagRunsDefault {
	return &TagRunsDefault{
		_statusCode: code,
	}
}

/* TagRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type TagRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the tag runs default response
func (o *TagRunsDefault) Code() int {
	return o._statusCode
}

func (o *TagRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/tag][%d] TagRuns default  %+v", o._statusCode, o.Payload)
}
func (o *TagRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *TagRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
