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

// GetUserReader is a Reader for the GetUser structure.
type GetUserReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetUserReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetUserOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetUserNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetUserForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetUserNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetUserDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetUserOK creates a GetUserOK with default headers values
func NewGetUserOK() *GetUserOK {
	return &GetUserOK{}
}

/*
GetUserOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetUserOK struct {
	Payload *service_model.V1User
}

func (o *GetUserOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/users][%d] getUserOK  %+v", 200, o.Payload)
}
func (o *GetUserOK) GetPayload() *service_model.V1User {
	return o.Payload
}

func (o *GetUserOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1User)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetUserNoContent creates a GetUserNoContent with default headers values
func NewGetUserNoContent() *GetUserNoContent {
	return &GetUserNoContent{}
}

/*
GetUserNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetUserNoContent struct {
	Payload interface{}
}

func (o *GetUserNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/users][%d] getUserNoContent  %+v", 204, o.Payload)
}
func (o *GetUserNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetUserNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetUserForbidden creates a GetUserForbidden with default headers values
func NewGetUserForbidden() *GetUserForbidden {
	return &GetUserForbidden{}
}

/*
GetUserForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetUserForbidden struct {
	Payload interface{}
}

func (o *GetUserForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/users][%d] getUserForbidden  %+v", 403, o.Payload)
}
func (o *GetUserForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetUserForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetUserNotFound creates a GetUserNotFound with default headers values
func NewGetUserNotFound() *GetUserNotFound {
	return &GetUserNotFound{}
}

/*
GetUserNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetUserNotFound struct {
	Payload interface{}
}

func (o *GetUserNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/users][%d] getUserNotFound  %+v", 404, o.Payload)
}
func (o *GetUserNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetUserNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetUserDefault creates a GetUserDefault with default headers values
func NewGetUserDefault(code int) *GetUserDefault {
	return &GetUserDefault{
		_statusCode: code,
	}
}

/*
GetUserDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetUserDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get user default response
func (o *GetUserDefault) Code() int {
	return o._statusCode
}

func (o *GetUserDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/users][%d] GetUser default  %+v", o._statusCode, o.Payload)
}
func (o *GetUserDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetUserDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
