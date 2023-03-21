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

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// DisableProjectCIReader is a Reader for the DisableProjectCI structure.
type DisableProjectCIReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DisableProjectCIReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDisableProjectCIOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDisableProjectCINoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDisableProjectCIForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDisableProjectCINotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDisableProjectCIDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDisableProjectCIOK creates a DisableProjectCIOK with default headers values
func NewDisableProjectCIOK() *DisableProjectCIOK {
	return &DisableProjectCIOK{}
}

/*
DisableProjectCIOK describes a response with status code 200, with default header values.

A successful response.
*/
type DisableProjectCIOK struct {
}

func (o *DisableProjectCIOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{name}/ci][%d] disableProjectCIOK ", 200)
}

func (o *DisableProjectCIOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDisableProjectCINoContent creates a DisableProjectCINoContent with default headers values
func NewDisableProjectCINoContent() *DisableProjectCINoContent {
	return &DisableProjectCINoContent{}
}

/*
DisableProjectCINoContent describes a response with status code 204, with default header values.

No content.
*/
type DisableProjectCINoContent struct {
	Payload interface{}
}

func (o *DisableProjectCINoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{name}/ci][%d] disableProjectCINoContent  %+v", 204, o.Payload)
}
func (o *DisableProjectCINoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DisableProjectCINoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDisableProjectCIForbidden creates a DisableProjectCIForbidden with default headers values
func NewDisableProjectCIForbidden() *DisableProjectCIForbidden {
	return &DisableProjectCIForbidden{}
}

/*
DisableProjectCIForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DisableProjectCIForbidden struct {
	Payload interface{}
}

func (o *DisableProjectCIForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{name}/ci][%d] disableProjectCIForbidden  %+v", 403, o.Payload)
}
func (o *DisableProjectCIForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DisableProjectCIForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDisableProjectCINotFound creates a DisableProjectCINotFound with default headers values
func NewDisableProjectCINotFound() *DisableProjectCINotFound {
	return &DisableProjectCINotFound{}
}

/*
DisableProjectCINotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DisableProjectCINotFound struct {
	Payload interface{}
}

func (o *DisableProjectCINotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{name}/ci][%d] disableProjectCINotFound  %+v", 404, o.Payload)
}
func (o *DisableProjectCINotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DisableProjectCINotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDisableProjectCIDefault creates a DisableProjectCIDefault with default headers values
func NewDisableProjectCIDefault(code int) *DisableProjectCIDefault {
	return &DisableProjectCIDefault{
		_statusCode: code,
	}
}

/*
DisableProjectCIDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DisableProjectCIDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the disable project c i default response
func (o *DisableProjectCIDefault) Code() int {
	return o._statusCode
}

func (o *DisableProjectCIDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{name}/ci][%d] DisableProjectCI default  %+v", o._statusCode, o.Payload)
}
func (o *DisableProjectCIDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DisableProjectCIDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
