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

package users_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetHistoryReader is a Reader for the GetHistory structure.
type GetHistoryReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetHistoryReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetHistoryOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetHistoryNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetHistoryForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetHistoryNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetHistoryDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetHistoryOK creates a GetHistoryOK with default headers values
func NewGetHistoryOK() *GetHistoryOK {
	return &GetHistoryOK{}
}

/*
GetHistoryOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetHistoryOK struct {
	Payload *service_model.V1ListActivitiesResponse
}

func (o *GetHistoryOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/history][%d] getHistoryOK  %+v", 200, o.Payload)
}
func (o *GetHistoryOK) GetPayload() *service_model.V1ListActivitiesResponse {
	return o.Payload
}

func (o *GetHistoryOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListActivitiesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetHistoryNoContent creates a GetHistoryNoContent with default headers values
func NewGetHistoryNoContent() *GetHistoryNoContent {
	return &GetHistoryNoContent{}
}

/*
GetHistoryNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetHistoryNoContent struct {
	Payload interface{}
}

func (o *GetHistoryNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/history][%d] getHistoryNoContent  %+v", 204, o.Payload)
}
func (o *GetHistoryNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetHistoryNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetHistoryForbidden creates a GetHistoryForbidden with default headers values
func NewGetHistoryForbidden() *GetHistoryForbidden {
	return &GetHistoryForbidden{}
}

/*
GetHistoryForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetHistoryForbidden struct {
	Payload interface{}
}

func (o *GetHistoryForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/history][%d] getHistoryForbidden  %+v", 403, o.Payload)
}
func (o *GetHistoryForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetHistoryForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetHistoryNotFound creates a GetHistoryNotFound with default headers values
func NewGetHistoryNotFound() *GetHistoryNotFound {
	return &GetHistoryNotFound{}
}

/*
GetHistoryNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetHistoryNotFound struct {
	Payload interface{}
}

func (o *GetHistoryNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/history][%d] getHistoryNotFound  %+v", 404, o.Payload)
}
func (o *GetHistoryNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetHistoryNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetHistoryDefault creates a GetHistoryDefault with default headers values
func NewGetHistoryDefault(code int) *GetHistoryDefault {
	return &GetHistoryDefault{
		_statusCode: code,
	}
}

/*
GetHistoryDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetHistoryDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get history default response
func (o *GetHistoryDefault) Code() int {
	return o._statusCode
}

func (o *GetHistoryDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/history][%d] GetHistory default  %+v", o._statusCode, o.Payload)
}
func (o *GetHistoryDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetHistoryDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
