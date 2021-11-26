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

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// PatchAgentTokenReader is a Reader for the PatchAgentToken structure.
type PatchAgentTokenReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchAgentTokenReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchAgentTokenOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchAgentTokenNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchAgentTokenForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchAgentTokenNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchAgentTokenDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchAgentTokenOK creates a PatchAgentTokenOK with default headers values
func NewPatchAgentTokenOK() *PatchAgentTokenOK {
	return &PatchAgentTokenOK{}
}

/* PatchAgentTokenOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchAgentTokenOK struct {
	Payload *service_model.V1Token
}

func (o *PatchAgentTokenOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{entity}/token][%d] patchAgentTokenOK  %+v", 200, o.Payload)
}
func (o *PatchAgentTokenOK) GetPayload() *service_model.V1Token {
	return o.Payload
}

func (o *PatchAgentTokenOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Token)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchAgentTokenNoContent creates a PatchAgentTokenNoContent with default headers values
func NewPatchAgentTokenNoContent() *PatchAgentTokenNoContent {
	return &PatchAgentTokenNoContent{}
}

/* PatchAgentTokenNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchAgentTokenNoContent struct {
	Payload interface{}
}

func (o *PatchAgentTokenNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{entity}/token][%d] patchAgentTokenNoContent  %+v", 204, o.Payload)
}
func (o *PatchAgentTokenNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchAgentTokenNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchAgentTokenForbidden creates a PatchAgentTokenForbidden with default headers values
func NewPatchAgentTokenForbidden() *PatchAgentTokenForbidden {
	return &PatchAgentTokenForbidden{}
}

/* PatchAgentTokenForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchAgentTokenForbidden struct {
	Payload interface{}
}

func (o *PatchAgentTokenForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{entity}/token][%d] patchAgentTokenForbidden  %+v", 403, o.Payload)
}
func (o *PatchAgentTokenForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchAgentTokenForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchAgentTokenNotFound creates a PatchAgentTokenNotFound with default headers values
func NewPatchAgentTokenNotFound() *PatchAgentTokenNotFound {
	return &PatchAgentTokenNotFound{}
}

/* PatchAgentTokenNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchAgentTokenNotFound struct {
	Payload interface{}
}

func (o *PatchAgentTokenNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{entity}/token][%d] patchAgentTokenNotFound  %+v", 404, o.Payload)
}
func (o *PatchAgentTokenNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchAgentTokenNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchAgentTokenDefault creates a PatchAgentTokenDefault with default headers values
func NewPatchAgentTokenDefault(code int) *PatchAgentTokenDefault {
	return &PatchAgentTokenDefault{
		_statusCode: code,
	}
}

/* PatchAgentTokenDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchAgentTokenDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch agent token default response
func (o *PatchAgentTokenDefault) Code() int {
	return o._statusCode
}

func (o *PatchAgentTokenDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/agents/{entity}/token][%d] PatchAgentToken default  %+v", o._statusCode, o.Payload)
}
func (o *PatchAgentTokenDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchAgentTokenDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
