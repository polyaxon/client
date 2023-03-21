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

// GetAgentConfigReader is a Reader for the GetAgentConfig structure.
type GetAgentConfigReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetAgentConfigReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetAgentConfigOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetAgentConfigNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetAgentConfigForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetAgentConfigNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetAgentConfigDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetAgentConfigOK creates a GetAgentConfigOK with default headers values
func NewGetAgentConfigOK() *GetAgentConfigOK {
	return &GetAgentConfigOK{}
}

/*
GetAgentConfigOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetAgentConfigOK struct {
	Payload *service_model.V1Agent
}

func (o *GetAgentConfigOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/config][%d] getAgentConfigOK  %+v", 200, o.Payload)
}
func (o *GetAgentConfigOK) GetPayload() *service_model.V1Agent {
	return o.Payload
}

func (o *GetAgentConfigOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Agent)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentConfigNoContent creates a GetAgentConfigNoContent with default headers values
func NewGetAgentConfigNoContent() *GetAgentConfigNoContent {
	return &GetAgentConfigNoContent{}
}

/*
GetAgentConfigNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetAgentConfigNoContent struct {
	Payload interface{}
}

func (o *GetAgentConfigNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/config][%d] getAgentConfigNoContent  %+v", 204, o.Payload)
}
func (o *GetAgentConfigNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentConfigNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentConfigForbidden creates a GetAgentConfigForbidden with default headers values
func NewGetAgentConfigForbidden() *GetAgentConfigForbidden {
	return &GetAgentConfigForbidden{}
}

/*
GetAgentConfigForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetAgentConfigForbidden struct {
	Payload interface{}
}

func (o *GetAgentConfigForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/config][%d] getAgentConfigForbidden  %+v", 403, o.Payload)
}
func (o *GetAgentConfigForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentConfigForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentConfigNotFound creates a GetAgentConfigNotFound with default headers values
func NewGetAgentConfigNotFound() *GetAgentConfigNotFound {
	return &GetAgentConfigNotFound{}
}

/*
GetAgentConfigNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetAgentConfigNotFound struct {
	Payload interface{}
}

func (o *GetAgentConfigNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/config][%d] getAgentConfigNotFound  %+v", 404, o.Payload)
}
func (o *GetAgentConfigNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentConfigNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentConfigDefault creates a GetAgentConfigDefault with default headers values
func NewGetAgentConfigDefault(code int) *GetAgentConfigDefault {
	return &GetAgentConfigDefault{
		_statusCode: code,
	}
}

/*
GetAgentConfigDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetAgentConfigDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get agent config default response
func (o *GetAgentConfigDefault) Code() int {
	return o._statusCode
}

func (o *GetAgentConfigDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/config][%d] GetAgentConfig default  %+v", o._statusCode, o.Payload)
}
func (o *GetAgentConfigDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetAgentConfigDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
