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

package project_searches_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListProjectSearchNamesReader is a Reader for the ListProjectSearchNames structure.
type ListProjectSearchNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListProjectSearchNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListProjectSearchNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListProjectSearchNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListProjectSearchNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListProjectSearchNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListProjectSearchNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListProjectSearchNamesOK creates a ListProjectSearchNamesOK with default headers values
func NewListProjectSearchNamesOK() *ListProjectSearchNamesOK {
	return &ListProjectSearchNamesOK{}
}

/*
ListProjectSearchNamesOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListProjectSearchNamesOK struct {
	Payload *service_model.V1ListSearchesResponse
}

func (o *ListProjectSearchNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches/names][%d] listProjectSearchNamesOK  %+v", 200, o.Payload)
}
func (o *ListProjectSearchNamesOK) GetPayload() *service_model.V1ListSearchesResponse {
	return o.Payload
}

func (o *ListProjectSearchNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListSearchesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchNamesNoContent creates a ListProjectSearchNamesNoContent with default headers values
func NewListProjectSearchNamesNoContent() *ListProjectSearchNamesNoContent {
	return &ListProjectSearchNamesNoContent{}
}

/*
ListProjectSearchNamesNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListProjectSearchNamesNoContent struct {
	Payload interface{}
}

func (o *ListProjectSearchNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches/names][%d] listProjectSearchNamesNoContent  %+v", 204, o.Payload)
}
func (o *ListProjectSearchNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchNamesForbidden creates a ListProjectSearchNamesForbidden with default headers values
func NewListProjectSearchNamesForbidden() *ListProjectSearchNamesForbidden {
	return &ListProjectSearchNamesForbidden{}
}

/*
ListProjectSearchNamesForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListProjectSearchNamesForbidden struct {
	Payload interface{}
}

func (o *ListProjectSearchNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches/names][%d] listProjectSearchNamesForbidden  %+v", 403, o.Payload)
}
func (o *ListProjectSearchNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchNamesNotFound creates a ListProjectSearchNamesNotFound with default headers values
func NewListProjectSearchNamesNotFound() *ListProjectSearchNamesNotFound {
	return &ListProjectSearchNamesNotFound{}
}

/*
ListProjectSearchNamesNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListProjectSearchNamesNotFound struct {
	Payload interface{}
}

func (o *ListProjectSearchNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches/names][%d] listProjectSearchNamesNotFound  %+v", 404, o.Payload)
}
func (o *ListProjectSearchNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchNamesDefault creates a ListProjectSearchNamesDefault with default headers values
func NewListProjectSearchNamesDefault(code int) *ListProjectSearchNamesDefault {
	return &ListProjectSearchNamesDefault{
		_statusCode: code,
	}
}

/*
ListProjectSearchNamesDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListProjectSearchNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list project search names default response
func (o *ListProjectSearchNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListProjectSearchNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches/names][%d] ListProjectSearchNames default  %+v", o._statusCode, o.Payload)
}
func (o *ListProjectSearchNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListProjectSearchNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
