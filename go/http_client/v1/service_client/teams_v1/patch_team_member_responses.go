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

package teams_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// PatchTeamMemberReader is a Reader for the PatchTeamMember structure.
type PatchTeamMemberReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchTeamMemberReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchTeamMemberOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchTeamMemberNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchTeamMemberForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchTeamMemberNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchTeamMemberDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchTeamMemberOK creates a PatchTeamMemberOK with default headers values
func NewPatchTeamMemberOK() *PatchTeamMemberOK {
	return &PatchTeamMemberOK{}
}

/*
PatchTeamMemberOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchTeamMemberOK struct {
	Payload *service_model.V1TeamMember
}

func (o *PatchTeamMemberOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/teams/{team}/members/{member.user}][%d] patchTeamMemberOK  %+v", 200, o.Payload)
}
func (o *PatchTeamMemberOK) GetPayload() *service_model.V1TeamMember {
	return o.Payload
}

func (o *PatchTeamMemberOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1TeamMember)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchTeamMemberNoContent creates a PatchTeamMemberNoContent with default headers values
func NewPatchTeamMemberNoContent() *PatchTeamMemberNoContent {
	return &PatchTeamMemberNoContent{}
}

/*
PatchTeamMemberNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchTeamMemberNoContent struct {
	Payload interface{}
}

func (o *PatchTeamMemberNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/teams/{team}/members/{member.user}][%d] patchTeamMemberNoContent  %+v", 204, o.Payload)
}
func (o *PatchTeamMemberNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchTeamMemberNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchTeamMemberForbidden creates a PatchTeamMemberForbidden with default headers values
func NewPatchTeamMemberForbidden() *PatchTeamMemberForbidden {
	return &PatchTeamMemberForbidden{}
}

/*
PatchTeamMemberForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchTeamMemberForbidden struct {
	Payload interface{}
}

func (o *PatchTeamMemberForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/teams/{team}/members/{member.user}][%d] patchTeamMemberForbidden  %+v", 403, o.Payload)
}
func (o *PatchTeamMemberForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchTeamMemberForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchTeamMemberNotFound creates a PatchTeamMemberNotFound with default headers values
func NewPatchTeamMemberNotFound() *PatchTeamMemberNotFound {
	return &PatchTeamMemberNotFound{}
}

/*
PatchTeamMemberNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchTeamMemberNotFound struct {
	Payload interface{}
}

func (o *PatchTeamMemberNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/teams/{team}/members/{member.user}][%d] patchTeamMemberNotFound  %+v", 404, o.Payload)
}
func (o *PatchTeamMemberNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchTeamMemberNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchTeamMemberDefault creates a PatchTeamMemberDefault with default headers values
func NewPatchTeamMemberDefault(code int) *PatchTeamMemberDefault {
	return &PatchTeamMemberDefault{
		_statusCode: code,
	}
}

/*
PatchTeamMemberDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchTeamMemberDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch team member default response
func (o *PatchTeamMemberDefault) Code() int {
	return o._statusCode
}

func (o *PatchTeamMemberDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/orgs/{owner}/teams/{team}/members/{member.user}][%d] PatchTeamMember default  %+v", o._statusCode, o.Payload)
}
func (o *PatchTeamMemberDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchTeamMemberDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
