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

// UpdateUserReader is a Reader for the UpdateUser structure.
type UpdateUserReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateUserReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateUserOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateUserNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateUserForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateUserNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateUserDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateUserOK creates a UpdateUserOK with default headers values
func NewUpdateUserOK() *UpdateUserOK {
	return &UpdateUserOK{}
}

/*
UpdateUserOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateUserOK struct {
	Payload *service_model.V1User
}

func (o *UpdateUserOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/users][%d] updateUserOK  %+v", 200, o.Payload)
}
func (o *UpdateUserOK) GetPayload() *service_model.V1User {
	return o.Payload
}

func (o *UpdateUserOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1User)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateUserNoContent creates a UpdateUserNoContent with default headers values
func NewUpdateUserNoContent() *UpdateUserNoContent {
	return &UpdateUserNoContent{}
}

/*
UpdateUserNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateUserNoContent struct {
	Payload interface{}
}

func (o *UpdateUserNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/users][%d] updateUserNoContent  %+v", 204, o.Payload)
}
func (o *UpdateUserNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateUserNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateUserForbidden creates a UpdateUserForbidden with default headers values
func NewUpdateUserForbidden() *UpdateUserForbidden {
	return &UpdateUserForbidden{}
}

/*
UpdateUserForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateUserForbidden struct {
	Payload interface{}
}

func (o *UpdateUserForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/users][%d] updateUserForbidden  %+v", 403, o.Payload)
}
func (o *UpdateUserForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateUserForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateUserNotFound creates a UpdateUserNotFound with default headers values
func NewUpdateUserNotFound() *UpdateUserNotFound {
	return &UpdateUserNotFound{}
}

/*
UpdateUserNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateUserNotFound struct {
	Payload interface{}
}

func (o *UpdateUserNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/users][%d] updateUserNotFound  %+v", 404, o.Payload)
}
func (o *UpdateUserNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateUserNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateUserDefault creates a UpdateUserDefault with default headers values
func NewUpdateUserDefault(code int) *UpdateUserDefault {
	return &UpdateUserDefault{
		_statusCode: code,
	}
}

/*
UpdateUserDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateUserDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update user default response
func (o *UpdateUserDefault) Code() int {
	return o._statusCode
}

func (o *UpdateUserDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/users][%d] UpdateUser default  %+v", o._statusCode, o.Payload)
}
func (o *UpdateUserDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateUserDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
