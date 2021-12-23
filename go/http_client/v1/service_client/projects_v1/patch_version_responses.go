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

// PatchVersionReader is a Reader for the PatchVersion structure.
type PatchVersionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PatchVersionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPatchVersionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewPatchVersionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewPatchVersionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewPatchVersionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewPatchVersionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewPatchVersionOK creates a PatchVersionOK with default headers values
func NewPatchVersionOK() *PatchVersionOK {
	return &PatchVersionOK{}
}

/* PatchVersionOK describes a response with status code 200, with default header values.

A successful response.
*/
type PatchVersionOK struct {
	Payload *service_model.V1ProjectVersion
}

func (o *PatchVersionOK) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}][%d] patchVersionOK  %+v", 200, o.Payload)
}
func (o *PatchVersionOK) GetPayload() *service_model.V1ProjectVersion {
	return o.Payload
}

func (o *PatchVersionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ProjectVersion)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchVersionNoContent creates a PatchVersionNoContent with default headers values
func NewPatchVersionNoContent() *PatchVersionNoContent {
	return &PatchVersionNoContent{}
}

/* PatchVersionNoContent describes a response with status code 204, with default header values.

No content.
*/
type PatchVersionNoContent struct {
	Payload interface{}
}

func (o *PatchVersionNoContent) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}][%d] patchVersionNoContent  %+v", 204, o.Payload)
}
func (o *PatchVersionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchVersionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchVersionForbidden creates a PatchVersionForbidden with default headers values
func NewPatchVersionForbidden() *PatchVersionForbidden {
	return &PatchVersionForbidden{}
}

/* PatchVersionForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type PatchVersionForbidden struct {
	Payload interface{}
}

func (o *PatchVersionForbidden) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}][%d] patchVersionForbidden  %+v", 403, o.Payload)
}
func (o *PatchVersionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchVersionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchVersionNotFound creates a PatchVersionNotFound with default headers values
func NewPatchVersionNotFound() *PatchVersionNotFound {
	return &PatchVersionNotFound{}
}

/* PatchVersionNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type PatchVersionNotFound struct {
	Payload interface{}
}

func (o *PatchVersionNotFound) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}][%d] patchVersionNotFound  %+v", 404, o.Payload)
}
func (o *PatchVersionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *PatchVersionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewPatchVersionDefault creates a PatchVersionDefault with default headers values
func NewPatchVersionDefault(code int) *PatchVersionDefault {
	return &PatchVersionDefault{
		_statusCode: code,
	}
}

/* PatchVersionDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type PatchVersionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the patch version default response
func (o *PatchVersionDefault) Code() int {
	return o._statusCode
}

func (o *PatchVersionDefault) Error() string {
	return fmt.Sprintf("[PATCH /api/v1/{owner}/{project}/versions/{version.kind}/{version.name}][%d] PatchVersion default  %+v", o._statusCode, o.Payload)
}
func (o *PatchVersionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *PatchVersionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
