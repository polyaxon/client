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

package connections_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateConnectionReader is a Reader for the UpdateConnection structure.
type UpdateConnectionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateConnectionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateConnectionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateConnectionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateConnectionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateConnectionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateConnectionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateConnectionOK creates a UpdateConnectionOK with default headers values
func NewUpdateConnectionOK() *UpdateConnectionOK {
	return &UpdateConnectionOK{}
}

/*
UpdateConnectionOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateConnectionOK struct {
	Payload *service_model.V1ConnectionResponse
}

func (o *UpdateConnectionOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] updateConnectionOK  %+v", 200, o.Payload)
}
func (o *UpdateConnectionOK) GetPayload() *service_model.V1ConnectionResponse {
	return o.Payload
}

func (o *UpdateConnectionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ConnectionResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateConnectionNoContent creates a UpdateConnectionNoContent with default headers values
func NewUpdateConnectionNoContent() *UpdateConnectionNoContent {
	return &UpdateConnectionNoContent{}
}

/*
UpdateConnectionNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateConnectionNoContent struct {
	Payload interface{}
}

func (o *UpdateConnectionNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] updateConnectionNoContent  %+v", 204, o.Payload)
}
func (o *UpdateConnectionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateConnectionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateConnectionForbidden creates a UpdateConnectionForbidden with default headers values
func NewUpdateConnectionForbidden() *UpdateConnectionForbidden {
	return &UpdateConnectionForbidden{}
}

/*
UpdateConnectionForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateConnectionForbidden struct {
	Payload interface{}
}

func (o *UpdateConnectionForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] updateConnectionForbidden  %+v", 403, o.Payload)
}
func (o *UpdateConnectionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateConnectionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateConnectionNotFound creates a UpdateConnectionNotFound with default headers values
func NewUpdateConnectionNotFound() *UpdateConnectionNotFound {
	return &UpdateConnectionNotFound{}
}

/*
UpdateConnectionNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateConnectionNotFound struct {
	Payload interface{}
}

func (o *UpdateConnectionNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] updateConnectionNotFound  %+v", 404, o.Payload)
}
func (o *UpdateConnectionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateConnectionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateConnectionDefault creates a UpdateConnectionDefault with default headers values
func NewUpdateConnectionDefault(code int) *UpdateConnectionDefault {
	return &UpdateConnectionDefault{
		_statusCode: code,
	}
}

/*
UpdateConnectionDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateConnectionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update connection default response
func (o *UpdateConnectionDefault) Code() int {
	return o._statusCode
}

func (o *UpdateConnectionDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/connections/{connection.uuid}][%d] UpdateConnection default  %+v", o._statusCode, o.Payload)
}
func (o *UpdateConnectionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateConnectionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
