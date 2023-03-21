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

package project_dashboards_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// CreateProjectDashboardReader is a Reader for the CreateProjectDashboard structure.
type CreateProjectDashboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateProjectDashboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateProjectDashboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateProjectDashboardNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateProjectDashboardForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateProjectDashboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateProjectDashboardDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateProjectDashboardOK creates a CreateProjectDashboardOK with default headers values
func NewCreateProjectDashboardOK() *CreateProjectDashboardOK {
	return &CreateProjectDashboardOK{}
}

/*
CreateProjectDashboardOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateProjectDashboardOK struct {
	Payload *service_model.V1Dashboard
}

func (o *CreateProjectDashboardOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/dashboards][%d] createProjectDashboardOK  %+v", 200, o.Payload)
}
func (o *CreateProjectDashboardOK) GetPayload() *service_model.V1Dashboard {
	return o.Payload
}

func (o *CreateProjectDashboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Dashboard)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateProjectDashboardNoContent creates a CreateProjectDashboardNoContent with default headers values
func NewCreateProjectDashboardNoContent() *CreateProjectDashboardNoContent {
	return &CreateProjectDashboardNoContent{}
}

/*
CreateProjectDashboardNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateProjectDashboardNoContent struct {
	Payload interface{}
}

func (o *CreateProjectDashboardNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/dashboards][%d] createProjectDashboardNoContent  %+v", 204, o.Payload)
}
func (o *CreateProjectDashboardNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateProjectDashboardNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateProjectDashboardForbidden creates a CreateProjectDashboardForbidden with default headers values
func NewCreateProjectDashboardForbidden() *CreateProjectDashboardForbidden {
	return &CreateProjectDashboardForbidden{}
}

/*
CreateProjectDashboardForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateProjectDashboardForbidden struct {
	Payload interface{}
}

func (o *CreateProjectDashboardForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/dashboards][%d] createProjectDashboardForbidden  %+v", 403, o.Payload)
}
func (o *CreateProjectDashboardForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateProjectDashboardForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateProjectDashboardNotFound creates a CreateProjectDashboardNotFound with default headers values
func NewCreateProjectDashboardNotFound() *CreateProjectDashboardNotFound {
	return &CreateProjectDashboardNotFound{}
}

/*
CreateProjectDashboardNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateProjectDashboardNotFound struct {
	Payload interface{}
}

func (o *CreateProjectDashboardNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/dashboards][%d] createProjectDashboardNotFound  %+v", 404, o.Payload)
}
func (o *CreateProjectDashboardNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateProjectDashboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateProjectDashboardDefault creates a CreateProjectDashboardDefault with default headers values
func NewCreateProjectDashboardDefault(code int) *CreateProjectDashboardDefault {
	return &CreateProjectDashboardDefault{
		_statusCode: code,
	}
}

/*
CreateProjectDashboardDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateProjectDashboardDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create project dashboard default response
func (o *CreateProjectDashboardDefault) Code() int {
	return o._statusCode
}

func (o *CreateProjectDashboardDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/dashboards][%d] CreateProjectDashboard default  %+v", o._statusCode, o.Payload)
}
func (o *CreateProjectDashboardDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateProjectDashboardDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
