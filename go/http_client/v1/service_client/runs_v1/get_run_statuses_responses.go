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

// GetRunStatusesReader is a Reader for the GetRunStatuses structure.
type GetRunStatusesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRunStatusesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRunStatusesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetRunStatusesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetRunStatusesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRunStatusesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetRunStatusesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetRunStatusesOK creates a GetRunStatusesOK with default headers values
func NewGetRunStatusesOK() *GetRunStatusesOK {
	return &GetRunStatusesOK{}
}

/*
GetRunStatusesOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetRunStatusesOK struct {
	Payload *service_model.V1Status
}

func (o *GetRunStatusesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/statuses][%d] getRunStatusesOK  %+v", 200, o.Payload)
}
func (o *GetRunStatusesOK) GetPayload() *service_model.V1Status {
	return o.Payload
}

func (o *GetRunStatusesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Status)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatusesNoContent creates a GetRunStatusesNoContent with default headers values
func NewGetRunStatusesNoContent() *GetRunStatusesNoContent {
	return &GetRunStatusesNoContent{}
}

/*
GetRunStatusesNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetRunStatusesNoContent struct {
	Payload interface{}
}

func (o *GetRunStatusesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/statuses][%d] getRunStatusesNoContent  %+v", 204, o.Payload)
}
func (o *GetRunStatusesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatusesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatusesForbidden creates a GetRunStatusesForbidden with default headers values
func NewGetRunStatusesForbidden() *GetRunStatusesForbidden {
	return &GetRunStatusesForbidden{}
}

/*
GetRunStatusesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetRunStatusesForbidden struct {
	Payload interface{}
}

func (o *GetRunStatusesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/statuses][%d] getRunStatusesForbidden  %+v", 403, o.Payload)
}
func (o *GetRunStatusesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatusesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatusesNotFound creates a GetRunStatusesNotFound with default headers values
func NewGetRunStatusesNotFound() *GetRunStatusesNotFound {
	return &GetRunStatusesNotFound{}
}

/*
GetRunStatusesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetRunStatusesNotFound struct {
	Payload interface{}
}

func (o *GetRunStatusesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/statuses][%d] getRunStatusesNotFound  %+v", 404, o.Payload)
}
func (o *GetRunStatusesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetRunStatusesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRunStatusesDefault creates a GetRunStatusesDefault with default headers values
func NewGetRunStatusesDefault(code int) *GetRunStatusesDefault {
	return &GetRunStatusesDefault{
		_statusCode: code,
	}
}

/*
GetRunStatusesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetRunStatusesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get run statuses default response
func (o *GetRunStatusesDefault) Code() int {
	return o._statusCode
}

func (o *GetRunStatusesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{entity}/runs/{uuid}/statuses][%d] GetRunStatuses default  %+v", o._statusCode, o.Payload)
}
func (o *GetRunStatusesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetRunStatusesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
