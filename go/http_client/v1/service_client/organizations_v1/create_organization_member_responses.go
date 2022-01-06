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

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// CreateOrganizationMemberReader is a Reader for the CreateOrganizationMember structure.
type CreateOrganizationMemberReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateOrganizationMemberReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateOrganizationMemberOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewCreateOrganizationMemberNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewCreateOrganizationMemberForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewCreateOrganizationMemberNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewCreateOrganizationMemberDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewCreateOrganizationMemberOK creates a CreateOrganizationMemberOK with default headers values
func NewCreateOrganizationMemberOK() *CreateOrganizationMemberOK {
	return &CreateOrganizationMemberOK{}
}

/* CreateOrganizationMemberOK describes a response with status code 200, with default header values.

A successful response.
*/
type CreateOrganizationMemberOK struct {
	Payload *service_model.V1OrganizationMember
}

func (o *CreateOrganizationMemberOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/members][%d] createOrganizationMemberOK  %+v", 200, o.Payload)
}
func (o *CreateOrganizationMemberOK) GetPayload() *service_model.V1OrganizationMember {
	return o.Payload
}

func (o *CreateOrganizationMemberOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1OrganizationMember)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateOrganizationMemberNoContent creates a CreateOrganizationMemberNoContent with default headers values
func NewCreateOrganizationMemberNoContent() *CreateOrganizationMemberNoContent {
	return &CreateOrganizationMemberNoContent{}
}

/* CreateOrganizationMemberNoContent describes a response with status code 204, with default header values.

No content.
*/
type CreateOrganizationMemberNoContent struct {
	Payload interface{}
}

func (o *CreateOrganizationMemberNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/members][%d] createOrganizationMemberNoContent  %+v", 204, o.Payload)
}
func (o *CreateOrganizationMemberNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateOrganizationMemberNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateOrganizationMemberForbidden creates a CreateOrganizationMemberForbidden with default headers values
func NewCreateOrganizationMemberForbidden() *CreateOrganizationMemberForbidden {
	return &CreateOrganizationMemberForbidden{}
}

/* CreateOrganizationMemberForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type CreateOrganizationMemberForbidden struct {
	Payload interface{}
}

func (o *CreateOrganizationMemberForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/members][%d] createOrganizationMemberForbidden  %+v", 403, o.Payload)
}
func (o *CreateOrganizationMemberForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateOrganizationMemberForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateOrganizationMemberNotFound creates a CreateOrganizationMemberNotFound with default headers values
func NewCreateOrganizationMemberNotFound() *CreateOrganizationMemberNotFound {
	return &CreateOrganizationMemberNotFound{}
}

/* CreateOrganizationMemberNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type CreateOrganizationMemberNotFound struct {
	Payload interface{}
}

func (o *CreateOrganizationMemberNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/members][%d] createOrganizationMemberNotFound  %+v", 404, o.Payload)
}
func (o *CreateOrganizationMemberNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *CreateOrganizationMemberNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateOrganizationMemberDefault creates a CreateOrganizationMemberDefault with default headers values
func NewCreateOrganizationMemberDefault(code int) *CreateOrganizationMemberDefault {
	return &CreateOrganizationMemberDefault{
		_statusCode: code,
	}
}

/* CreateOrganizationMemberDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type CreateOrganizationMemberDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the create organization member default response
func (o *CreateOrganizationMemberDefault) Code() int {
	return o._statusCode
}

func (o *CreateOrganizationMemberDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/orgs/{owner}/members][%d] CreateOrganizationMember default  %+v", o._statusCode, o.Payload)
}
func (o *CreateOrganizationMemberDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *CreateOrganizationMemberDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
