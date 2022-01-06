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

// CreateVersionStageReader is a Reader for the CreateVersionStage structure.
type CreateVersionStageReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateVersionStageReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateVersionStageOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateVersionStageNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateVersionStageForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateVersionStageNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateVersionStageDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateVersionStageOK creates a CreateVersionStageOK with default headers values
func NewCreateVersionStageOK() *CreateVersionStageOK {
	return &CreateVersionStageOK{}
}

/* CreateVersionStageOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateVersionStageOK struct {
	Payload *service_model.V1Stage
}

func (o *CreateVersionStageOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages][%d] createVersionStageOK  %+v", 200, o.Payload)
}
func (o *CreateVersionStageOK) GetPayload() *service_model.V1Stage {
	return o.Payload
}

func (o *CreateVersionStageOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Stage)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateVersionStageNoContent creates a CreateVersionStageNoContent with default headers values
func NewCreateVersionStageNoContent() *CreateVersionStageNoContent {
	return &CreateVersionStageNoContent{}
}

/* CreateVersionStageNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateVersionStageNoContent struct {
	Payload interface{}
}

func (o *CreateVersionStageNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages][%d] createVersionStageNoContent  %+v", 204, o.Payload)
}
func (o *CreateVersionStageNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateVersionStageNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateVersionStageForbidden creates a CreateVersionStageForbidden with default headers values
func NewCreateVersionStageForbidden() *CreateVersionStageForbidden {
	return &CreateVersionStageForbidden{}
}

/* CreateVersionStageForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateVersionStageForbidden struct {
	Payload interface{}
}

func (o *CreateVersionStageForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages][%d] createVersionStageForbidden  %+v", 403, o.Payload)
}
func (o *CreateVersionStageForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateVersionStageForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateVersionStageNotFound creates a CreateVersionStageNotFound with default headers values
func NewCreateVersionStageNotFound() *CreateVersionStageNotFound {
	return &CreateVersionStageNotFound{}
}

/* CreateVersionStageNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateVersionStageNotFound struct {
	Payload interface{}
}

func (o *CreateVersionStageNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages][%d] createVersionStageNotFound  %+v", 404, o.Payload)
}
func (o *CreateVersionStageNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateVersionStageNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateVersionStageDefault creates a CreateVersionStageDefault with default headers values
func NewCreateVersionStageDefault(code int) *CreateVersionStageDefault {
	return &CreateVersionStageDefault{
		_statusCode: code,
	}
}

/* CreateVersionStageDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateVersionStageDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create version stage default response
func (o *CreateVersionStageDefault) Code() int {
	return o._statusCode
}

func (o *CreateVersionStageDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/versions/{kind}/{name}/stages][%d] CreateVersionStage default  %+v", o._statusCode, o.Payload)
}
func (o *CreateVersionStageDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateVersionStageDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
