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

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListBookmarkedProjectsReader is a Reader for the ListBookmarkedProjects structure.
type ListBookmarkedProjectsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListBookmarkedProjectsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListBookmarkedProjectsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListBookmarkedProjectsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListBookmarkedProjectsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListBookmarkedProjectsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListBookmarkedProjectsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListBookmarkedProjectsOK creates a ListBookmarkedProjectsOK with default headers values
func NewListBookmarkedProjectsOK() *ListBookmarkedProjectsOK {
	return &ListBookmarkedProjectsOK{}
}

/*
ListBookmarkedProjectsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ListBookmarkedProjectsOK struct {
	Payload *service_model.V1ListBookmarksResponse
}

func (o *ListBookmarkedProjectsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/projects][%d] listBookmarkedProjectsOK  %+v", 200, o.Payload)
}
func (o *ListBookmarkedProjectsOK) GetPayload() *service_model.V1ListBookmarksResponse {
	return o.Payload
}

func (o *ListBookmarkedProjectsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListBookmarksResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedProjectsNoContent creates a ListBookmarkedProjectsNoContent with default headers values
func NewListBookmarkedProjectsNoContent() *ListBookmarkedProjectsNoContent {
	return &ListBookmarkedProjectsNoContent{}
}

/*
ListBookmarkedProjectsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ListBookmarkedProjectsNoContent struct {
	Payload interface{}
}

func (o *ListBookmarkedProjectsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/projects][%d] listBookmarkedProjectsNoContent  %+v", 204, o.Payload)
}
func (o *ListBookmarkedProjectsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedProjectsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedProjectsForbidden creates a ListBookmarkedProjectsForbidden with default headers values
func NewListBookmarkedProjectsForbidden() *ListBookmarkedProjectsForbidden {
	return &ListBookmarkedProjectsForbidden{}
}

/*
ListBookmarkedProjectsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ListBookmarkedProjectsForbidden struct {
	Payload interface{}
}

func (o *ListBookmarkedProjectsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/projects][%d] listBookmarkedProjectsForbidden  %+v", 403, o.Payload)
}
func (o *ListBookmarkedProjectsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedProjectsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedProjectsNotFound creates a ListBookmarkedProjectsNotFound with default headers values
func NewListBookmarkedProjectsNotFound() *ListBookmarkedProjectsNotFound {
	return &ListBookmarkedProjectsNotFound{}
}

/*
ListBookmarkedProjectsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ListBookmarkedProjectsNotFound struct {
	Payload interface{}
}

func (o *ListBookmarkedProjectsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/projects][%d] listBookmarkedProjectsNotFound  %+v", 404, o.Payload)
}
func (o *ListBookmarkedProjectsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListBookmarkedProjectsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListBookmarkedProjectsDefault creates a ListBookmarkedProjectsDefault with default headers values
func NewListBookmarkedProjectsDefault(code int) *ListBookmarkedProjectsDefault {
	return &ListBookmarkedProjectsDefault{
		_statusCode: code,
	}
}

/*
ListBookmarkedProjectsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ListBookmarkedProjectsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list bookmarked projects default response
func (o *ListBookmarkedProjectsDefault) Code() int {
	return o._statusCode
}

func (o *ListBookmarkedProjectsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/bookmarks/{user}/projects][%d] ListBookmarkedProjects default  %+v", o._statusCode, o.Payload)
}
func (o *ListBookmarkedProjectsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListBookmarkedProjectsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
