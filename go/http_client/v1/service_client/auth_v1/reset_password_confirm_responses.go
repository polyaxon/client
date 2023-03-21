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

// ResetPasswordConfirmReader is a Reader for the ResetPasswordConfirm structure.
type ResetPasswordConfirmReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ResetPasswordConfirmReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewResetPasswordConfirmOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewResetPasswordConfirmNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewResetPasswordConfirmForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewResetPasswordConfirmNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewResetPasswordConfirmDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewResetPasswordConfirmOK creates a ResetPasswordConfirmOK with default headers values
func NewResetPasswordConfirmOK() *ResetPasswordConfirmOK {
	return &ResetPasswordConfirmOK{}
}

/*
ResetPasswordConfirmOK describes a response with status code 200, with default header values.

A successful response.
*/
type ResetPasswordConfirmOK struct {
	Payload *service_model.V1Auth
}

func (o *ResetPasswordConfirmOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/reset-password-confirm][%d] resetPasswordConfirmOK  %+v", 200, o.Payload)
}
func (o *ResetPasswordConfirmOK) GetPayload() *service_model.V1Auth {
	return o.Payload
}

func (o *ResetPasswordConfirmOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Auth)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResetPasswordConfirmNoContent creates a ResetPasswordConfirmNoContent with default headers values
func NewResetPasswordConfirmNoContent() *ResetPasswordConfirmNoContent {
	return &ResetPasswordConfirmNoContent{}
}

/*
ResetPasswordConfirmNoContent describes a response with status code 204, with default header values.

No content.
*/
type ResetPasswordConfirmNoContent struct {
	Payload interface{}
}

func (o *ResetPasswordConfirmNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/reset-password-confirm][%d] resetPasswordConfirmNoContent  %+v", 204, o.Payload)
}
func (o *ResetPasswordConfirmNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ResetPasswordConfirmNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResetPasswordConfirmForbidden creates a ResetPasswordConfirmForbidden with default headers values
func NewResetPasswordConfirmForbidden() *ResetPasswordConfirmForbidden {
	return &ResetPasswordConfirmForbidden{}
}

/*
ResetPasswordConfirmForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ResetPasswordConfirmForbidden struct {
	Payload interface{}
}

func (o *ResetPasswordConfirmForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/reset-password-confirm][%d] resetPasswordConfirmForbidden  %+v", 403, o.Payload)
}
func (o *ResetPasswordConfirmForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ResetPasswordConfirmForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResetPasswordConfirmNotFound creates a ResetPasswordConfirmNotFound with default headers values
func NewResetPasswordConfirmNotFound() *ResetPasswordConfirmNotFound {
	return &ResetPasswordConfirmNotFound{}
}

/*
ResetPasswordConfirmNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ResetPasswordConfirmNotFound struct {
	Payload interface{}
}

func (o *ResetPasswordConfirmNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/reset-password-confirm][%d] resetPasswordConfirmNotFound  %+v", 404, o.Payload)
}
func (o *ResetPasswordConfirmNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ResetPasswordConfirmNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResetPasswordConfirmDefault creates a ResetPasswordConfirmDefault with default headers values
func NewResetPasswordConfirmDefault(code int) *ResetPasswordConfirmDefault {
	return &ResetPasswordConfirmDefault{
		_statusCode: code,
	}
}

/*
ResetPasswordConfirmDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ResetPasswordConfirmDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the reset password confirm default response
func (o *ResetPasswordConfirmDefault) Code() int {
	return o._statusCode
}

func (o *ResetPasswordConfirmDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/auth/reset-password-confirm][%d] ResetPasswordConfirm default  %+v", o._statusCode, o.Payload)
}
func (o *ResetPasswordConfirmDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ResetPasswordConfirmDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
