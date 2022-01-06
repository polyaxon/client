// Copyright 2018-2021 Polyaxon, Inc.
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

package tags_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// CreateTagReader is a Reader for the CreateTag structure.
type CreateTagReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateTagReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateTagOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateTagNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateTagForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateTagNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateTagDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateTagOK creates a CreateTagOK with default headers values
func NewCreateTagOK() *CreateTagOK {
	return &CreateTagOK{}
}

/* CreateTagOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateTagOK struct {
	Payload *service_model.V1Tag
}

func (o *CreateTagOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/tags][%d] createTagOK  %+v", 200, o.Payload)
}
func (o *CreateTagOK) GetPayload() *service_model.V1Tag {
	return o.Payload
}

func (o *CreateTagOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Tag)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTagNoContent creates a CreateTagNoContent with default headers values
func NewCreateTagNoContent() *CreateTagNoContent {
	return &CreateTagNoContent{}
}

/* CreateTagNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateTagNoContent struct {
	Payload interface{}
}

func (o *CreateTagNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/tags][%d] createTagNoContent  %+v", 204, o.Payload)
}
func (o *CreateTagNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTagNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTagForbidden creates a CreateTagForbidden with default headers values
func NewCreateTagForbidden() *CreateTagForbidden {
	return &CreateTagForbidden{}
}

/* CreateTagForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateTagForbidden struct {
	Payload interface{}
}

func (o *CreateTagForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/tags][%d] createTagForbidden  %+v", 403, o.Payload)
}
func (o *CreateTagForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTagForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTagNotFound creates a CreateTagNotFound with default headers values
func NewCreateTagNotFound() *CreateTagNotFound {
	return &CreateTagNotFound{}
}

/* CreateTagNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateTagNotFound struct {
	Payload interface{}
}

func (o *CreateTagNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/tags][%d] createTagNotFound  %+v", 404, o.Payload)
}
func (o *CreateTagNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateTagNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateTagDefault creates a CreateTagDefault with default headers values
func NewCreateTagDefault(code int) *CreateTagDefault {
	return &CreateTagDefault{
		_statusCode: code,
	}
}

/* CreateTagDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateTagDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create tag default response
func (o *CreateTagDefault) Code() int {
	return o._statusCode
}

func (o *CreateTagDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/tags][%d] CreateTag default  %+v", o._statusCode, o.Payload)
}
func (o *CreateTagDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateTagDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
