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

// GetSuggestionsReader is a Reader for the GetSuggestions structure.
type GetSuggestionsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetSuggestionsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetSuggestionsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetSuggestionsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetSuggestionsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetSuggestionsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetSuggestionsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetSuggestionsOK creates a GetSuggestionsOK with default headers values
func NewGetSuggestionsOK() *GetSuggestionsOK {
	return &GetSuggestionsOK{}
}

/*
GetSuggestionsOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetSuggestionsOK struct {
	Payload interface{}
}

func (o *GetSuggestionsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/suggestions][%d] getSuggestionsOK  %+v", 200, o.Payload)
}
func (o *GetSuggestionsOK) GetPayload() interface{} {
	return o.Payload
}

func (o *GetSuggestionsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetSuggestionsNoContent creates a GetSuggestionsNoContent with default headers values
func NewGetSuggestionsNoContent() *GetSuggestionsNoContent {
	return &GetSuggestionsNoContent{}
}

/*
GetSuggestionsNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetSuggestionsNoContent struct {
	Payload interface{}
}

func (o *GetSuggestionsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/suggestions][%d] getSuggestionsNoContent  %+v", 204, o.Payload)
}
func (o *GetSuggestionsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetSuggestionsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetSuggestionsForbidden creates a GetSuggestionsForbidden with default headers values
func NewGetSuggestionsForbidden() *GetSuggestionsForbidden {
	return &GetSuggestionsForbidden{}
}

/*
GetSuggestionsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetSuggestionsForbidden struct {
	Payload interface{}
}

func (o *GetSuggestionsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/suggestions][%d] getSuggestionsForbidden  %+v", 403, o.Payload)
}
func (o *GetSuggestionsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetSuggestionsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetSuggestionsNotFound creates a GetSuggestionsNotFound with default headers values
func NewGetSuggestionsNotFound() *GetSuggestionsNotFound {
	return &GetSuggestionsNotFound{}
}

/*
GetSuggestionsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetSuggestionsNotFound struct {
	Payload interface{}
}

func (o *GetSuggestionsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/suggestions][%d] getSuggestionsNotFound  %+v", 404, o.Payload)
}
func (o *GetSuggestionsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetSuggestionsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetSuggestionsDefault creates a GetSuggestionsDefault with default headers values
func NewGetSuggestionsDefault(code int) *GetSuggestionsDefault {
	return &GetSuggestionsDefault{
		_statusCode: code,
	}
}

/*
GetSuggestionsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetSuggestionsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get suggestions default response
func (o *GetSuggestionsDefault) Code() int {
	return o._statusCode
}

func (o *GetSuggestionsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/users/suggestions][%d] GetSuggestions default  %+v", o._statusCode, o.Payload)
}
func (o *GetSuggestionsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetSuggestionsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
