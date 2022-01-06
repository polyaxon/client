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

// DeleteTeamReader is a Reader for the DeleteTeam structure.
type DeleteTeamReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteTeamReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteTeamOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteTeamNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteTeamForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteTeamNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteTeamDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteTeamOK creates a DeleteTeamOK with default headers values
func NewDeleteTeamOK() *DeleteTeamOK {
	return &DeleteTeamOK{}
}

/* DeleteTeamOK describes a response with status code 200, with default header values.

A successful response.
*/
type DeleteTeamOK struct {
}

func (o *DeleteTeamOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/teams/{name}][%d] deleteTeamOK ", 200)
}

func (o *DeleteTeamOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteTeamNoContent creates a DeleteTeamNoContent with default headers values
func NewDeleteTeamNoContent() *DeleteTeamNoContent {
	return &DeleteTeamNoContent{}
}

/* DeleteTeamNoContent describes a response with status code 204, with default header values.

No content.
*/
type DeleteTeamNoContent struct {
	Payload interface{}
}

func (o *DeleteTeamNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/teams/{name}][%d] deleteTeamNoContent  %+v", 204, o.Payload)
}
func (o *DeleteTeamNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteTeamNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteTeamForbidden creates a DeleteTeamForbidden with default headers values
func NewDeleteTeamForbidden() *DeleteTeamForbidden {
	return &DeleteTeamForbidden{}
}

/* DeleteTeamForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type DeleteTeamForbidden struct {
	Payload interface{}
}

func (o *DeleteTeamForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/teams/{name}][%d] deleteTeamForbidden  %+v", 403, o.Payload)
}
func (o *DeleteTeamForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteTeamForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteTeamNotFound creates a DeleteTeamNotFound with default headers values
func NewDeleteTeamNotFound() *DeleteTeamNotFound {
	return &DeleteTeamNotFound{}
}

/* DeleteTeamNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type DeleteTeamNotFound struct {
	Payload interface{}
}

func (o *DeleteTeamNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/teams/{name}][%d] deleteTeamNotFound  %+v", 404, o.Payload)
}
func (o *DeleteTeamNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteTeamNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteTeamDefault creates a DeleteTeamDefault with default headers values
func NewDeleteTeamDefault(code int) *DeleteTeamDefault {
	return &DeleteTeamDefault{
		_statusCode: code,
	}
}

/* DeleteTeamDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type DeleteTeamDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete team default response
func (o *DeleteTeamDefault) Code() int {
	return o._statusCode
}

func (o *DeleteTeamDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/teams/{name}][%d] DeleteTeam default  %+v", o._statusCode, o.Payload)
}
func (o *DeleteTeamDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteTeamDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
