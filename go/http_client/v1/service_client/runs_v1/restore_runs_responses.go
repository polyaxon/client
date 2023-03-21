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

// RestoreRunsReader is a Reader for the RestoreRuns structure.
type RestoreRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *RestoreRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewRestoreRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewRestoreRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewRestoreRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewRestoreRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewRestoreRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewRestoreRunsOK creates a RestoreRunsOK with default headers values
func NewRestoreRunsOK() *RestoreRunsOK {
	return &RestoreRunsOK{}
}

/*
RestoreRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type RestoreRunsOK struct {
}

func (o *RestoreRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/restore][%d] restoreRunsOK ", 200)
}

func (o *RestoreRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewRestoreRunsNoContent creates a RestoreRunsNoContent with default headers values
func NewRestoreRunsNoContent() *RestoreRunsNoContent {
	return &RestoreRunsNoContent{}
}

/*
RestoreRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type RestoreRunsNoContent struct {
	Payload interface{}
}

func (o *RestoreRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/restore][%d] restoreRunsNoContent  %+v", 204, o.Payload)
}
func (o *RestoreRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreRunsForbidden creates a RestoreRunsForbidden with default headers values
func NewRestoreRunsForbidden() *RestoreRunsForbidden {
	return &RestoreRunsForbidden{}
}

/*
RestoreRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type RestoreRunsForbidden struct {
	Payload interface{}
}

func (o *RestoreRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/restore][%d] restoreRunsForbidden  %+v", 403, o.Payload)
}
func (o *RestoreRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreRunsNotFound creates a RestoreRunsNotFound with default headers values
func NewRestoreRunsNotFound() *RestoreRunsNotFound {
	return &RestoreRunsNotFound{}
}

/*
RestoreRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type RestoreRunsNotFound struct {
	Payload interface{}
}

func (o *RestoreRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/restore][%d] restoreRunsNotFound  %+v", 404, o.Payload)
}
func (o *RestoreRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *RestoreRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRestoreRunsDefault creates a RestoreRunsDefault with default headers values
func NewRestoreRunsDefault(code int) *RestoreRunsDefault {
	return &RestoreRunsDefault{
		_statusCode: code,
	}
}

/*
RestoreRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type RestoreRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the restore runs default response
func (o *RestoreRunsDefault) Code() int {
	return o._statusCode
}

func (o *RestoreRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/restore][%d] RestoreRuns default  %+v", o._statusCode, o.Payload)
}
func (o *RestoreRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *RestoreRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
