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

package auth_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// LoginReader is a Reader for the Login structure.
type LoginReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *LoginReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewLoginOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewLoginNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewLoginForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewLoginNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewLoginDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewLoginOK creates a LoginOK with default headers values
func NewLoginOK() *LoginOK {
	return &LoginOK{}
}

/*
LoginOK describes a response with status code 200, with default header values.

A successful response.
*/
type LoginOK struct {
	Payload *service_model.V1Auth
}

func (o *LoginOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/token][%d] loginOK  %+v", 200, o.Payload)
}
func (o *LoginOK) GetPayload() *service_model.V1Auth {
	return o.Payload
}

func (o *LoginOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Auth)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewLoginNoContent creates a LoginNoContent with default headers values
func NewLoginNoContent() *LoginNoContent {
	return &LoginNoContent{}
}

/*
LoginNoContent describes a response with status code 204, with default header values.

No content.
*/
type LoginNoContent struct {
	Payload interface{}
}

func (o *LoginNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/token][%d] loginNoContent  %+v", 204, o.Payload)
}
func (o *LoginNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *LoginNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewLoginForbidden creates a LoginForbidden with default headers values
func NewLoginForbidden() *LoginForbidden {
	return &LoginForbidden{}
}

/*
LoginForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type LoginForbidden struct {
	Payload interface{}
}

func (o *LoginForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/token][%d] loginForbidden  %+v", 403, o.Payload)
}
func (o *LoginForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *LoginForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewLoginNotFound creates a LoginNotFound with default headers values
func NewLoginNotFound() *LoginNotFound {
	return &LoginNotFound{}
}

/*
LoginNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type LoginNotFound struct {
	Payload interface{}
}

func (o *LoginNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/token][%d] loginNotFound  %+v", 404, o.Payload)
}
func (o *LoginNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *LoginNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewLoginDefault creates a LoginDefault with default headers values
func NewLoginDefault(code int) *LoginDefault {
	return &LoginDefault{
		_statusCode: code,
	}
}

/*
LoginDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type LoginDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the login default response
func (o *LoginDefault) Code() int {
	return o._statusCode
}

func (o *LoginDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/token][%d] Login default  %+v", o._statusCode, o.Payload)
}
func (o *LoginDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *LoginDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
