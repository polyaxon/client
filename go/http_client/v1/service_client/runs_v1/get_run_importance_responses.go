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

// GetRunImportanceReader is a Reader for the GetRunImportance structure.
type GetRunImportanceReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunImportanceReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunImportanceOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunImportanceNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunImportanceForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunImportanceNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunImportanceDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunImportanceOK creates a GetRunImportanceOK with default headers values
func NewGetRunImportanceOK() *GetRunImportanceOK {
	return &GetRunImportanceOK{}
}

/*
GetRunImportanceOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunImportanceOK struct {
	Payload *service_model.V1EventsResponse
}

func (o *GetRunImportanceOK) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/importance][%d] getRunImportanceOK  %+v", 200, o.Payload)
}
func (o *GetRunImportanceOK) GetPayload() *service_model.V1EventsResponse {
	return o.Payload
}

func (o *GetRunImportanceOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1EventsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunImportanceNoContent creates a GetRunImportanceNoContent with default headers values
func NewGetRunImportanceNoContent() *GetRunImportanceNoContent {
	return &GetRunImportanceNoContent{}
}

/*
GetRunImportanceNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunImportanceNoContent struct {
	Payload interface{}
}

func (o *GetRunImportanceNoContent) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/importance][%d] getRunImportanceNoContent  %+v", 204, o.Payload)
}
func (o *GetRunImportanceNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunImportanceNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunImportanceForbidden creates a GetRunImportanceForbidden with default headers values
func NewGetRunImportanceForbidden() *GetRunImportanceForbidden {
	return &GetRunImportanceForbidden{}
}

/*
GetRunImportanceForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunImportanceForbidden struct {
	Payload interface{}
}

func (o *GetRunImportanceForbidden) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/importance][%d] getRunImportanceForbidden  %+v", 403, o.Payload)
}
func (o *GetRunImportanceForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunImportanceForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunImportanceNotFound creates a GetRunImportanceNotFound with default headers values
func NewGetRunImportanceNotFound() *GetRunImportanceNotFound {
	return &GetRunImportanceNotFound{}
}

/*
GetRunImportanceNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunImportanceNotFound struct {
	Payload interface{}
}

func (o *GetRunImportanceNotFound) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/importance][%d] getRunImportanceNotFound  %+v", 404, o.Payload)
}
func (o *GetRunImportanceNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunImportanceNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunImportanceDefault creates a GetRunImportanceDefault with default headers values
func NewGetRunImportanceDefault(code int) *GetRunImportanceDefault {
	return &GetRunImportanceDefault{
		_statusCode: code,
	}
}

/*
GetRunImportanceDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunImportanceDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get run importance default response
func (o *GetRunImportanceDefault) Code() int {
	return o._statusCode
}

func (o *GetRunImportanceDefault) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/importance][%d] GetRunImportance default  %+v", o._statusCode, o.Payload)
}
func (o *GetRunImportanceDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunImportanceDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
