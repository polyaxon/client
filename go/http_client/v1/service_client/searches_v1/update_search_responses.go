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

package searches_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// UpdateSearchReader is a Reader for the UpdateSearch structure.
type UpdateSearchReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UpdateSearchReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUpdateSearchOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUpdateSearchNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUpdateSearchForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUpdateSearchNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUpdateSearchDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUpdateSearchOK creates a UpdateSearchOK with default headers values
func NewUpdateSearchOK() *UpdateSearchOK {
	return &UpdateSearchOK{}
}

/*
UpdateSearchOK describes a response with status code 200, with default header values.

A successful response.
*/
type UpdateSearchOK struct {
	Payload *service_model.V1Search
}

func (o *UpdateSearchOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/searches/{search.uuid}][%d] updateSearchOK  %+v", 200, o.Payload)
}
func (o *UpdateSearchOK) GetPayload() *service_model.V1Search {
	return o.Payload
}

func (o *UpdateSearchOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Search)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateSearchNoContent creates a UpdateSearchNoContent with default headers values
func NewUpdateSearchNoContent() *UpdateSearchNoContent {
	return &UpdateSearchNoContent{}
}

/*
UpdateSearchNoContent describes a response with status code 204, with default header values.

No content.
*/
type UpdateSearchNoContent struct {
	Payload interface{}
}

func (o *UpdateSearchNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/searches/{search.uuid}][%d] updateSearchNoContent  %+v", 204, o.Payload)
}
func (o *UpdateSearchNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateSearchNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateSearchForbidden creates a UpdateSearchForbidden with default headers values
func NewUpdateSearchForbidden() *UpdateSearchForbidden {
	return &UpdateSearchForbidden{}
}

/*
UpdateSearchForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type UpdateSearchForbidden struct {
	Payload interface{}
}

func (o *UpdateSearchForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/searches/{search.uuid}][%d] updateSearchForbidden  %+v", 403, o.Payload)
}
func (o *UpdateSearchForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateSearchForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateSearchNotFound creates a UpdateSearchNotFound with default headers values
func NewUpdateSearchNotFound() *UpdateSearchNotFound {
	return &UpdateSearchNotFound{}
}

/*
UpdateSearchNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type UpdateSearchNotFound struct {
	Payload interface{}
}

func (o *UpdateSearchNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/searches/{search.uuid}][%d] updateSearchNotFound  %+v", 404, o.Payload)
}
func (o *UpdateSearchNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UpdateSearchNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUpdateSearchDefault creates a UpdateSearchDefault with default headers values
func NewUpdateSearchDefault(code int) *UpdateSearchDefault {
	return &UpdateSearchDefault{
		_statusCode: code,
	}
}

/*
UpdateSearchDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type UpdateSearchDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the update search default response
func (o *UpdateSearchDefault) Code() int {
	return o._statusCode
}

func (o *UpdateSearchDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/searches/{search.uuid}][%d] UpdateSearch default  %+v", o._statusCode, o.Payload)
}
func (o *UpdateSearchDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UpdateSearchDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
