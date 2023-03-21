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

// ListConnectionsReader is a Reader for the ListConnections structure.
type ListConnectionsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListConnectionsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListConnectionsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListConnectionsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListConnectionsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListConnectionsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListConnectionsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListConnectionsOK creates a ListConnectionsOK with default headers values
func NewListConnectionsOK() *ListConnectionsOK {
	return &ListConnectionsOK{}
}

/*
ListConnectionsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListConnectionsOK struct {
	Payload *service_model.V1ListConnectionsResponse
}

func (o *ListConnectionsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections][%d] listConnectionsOK  %+v", 200, o.Payload)
}
func (o *ListConnectionsOK) GetPayload() *service_model.V1ListConnectionsResponse {
	return o.Payload
}

func (o *ListConnectionsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListConnectionsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionsNoContent creates a ListConnectionsNoContent with default headers values
func NewListConnectionsNoContent() *ListConnectionsNoContent {
	return &ListConnectionsNoContent{}
}

/*
ListConnectionsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListConnectionsNoContent struct {
	Payload interface{}
}

func (o *ListConnectionsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections][%d] listConnectionsNoContent  %+v", 204, o.Payload)
}
func (o *ListConnectionsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionsForbidden creates a ListConnectionsForbidden with default headers values
func NewListConnectionsForbidden() *ListConnectionsForbidden {
	return &ListConnectionsForbidden{}
}

/*
ListConnectionsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListConnectionsForbidden struct {
	Payload interface{}
}

func (o *ListConnectionsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections][%d] listConnectionsForbidden  %+v", 403, o.Payload)
}
func (o *ListConnectionsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionsNotFound creates a ListConnectionsNotFound with default headers values
func NewListConnectionsNotFound() *ListConnectionsNotFound {
	return &ListConnectionsNotFound{}
}

/*
ListConnectionsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListConnectionsNotFound struct {
	Payload interface{}
}

func (o *ListConnectionsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections][%d] listConnectionsNotFound  %+v", 404, o.Payload)
}
func (o *ListConnectionsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListConnectionsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListConnectionsDefault creates a ListConnectionsDefault with default headers values
func NewListConnectionsDefault(code int) *ListConnectionsDefault {
	return &ListConnectionsDefault{
		_statusCode: code,
	}
}

/*
ListConnectionsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListConnectionsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list connections default response
func (o *ListConnectionsDefault) Code() int {
	return o._statusCode
}

func (o *ListConnectionsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/connections][%d] ListConnections default  %+v", o._statusCode, o.Payload)
}
func (o *ListConnectionsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListConnectionsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
