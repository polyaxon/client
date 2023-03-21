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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// TransferRunReader is a Reader for the TransferRun structure.
type TransferRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *TransferRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewTransferRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewTransferRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewTransferRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewTransferRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewTransferRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewTransferRunOK creates a TransferRunOK with default headers values
func NewTransferRunOK() *TransferRunOK {
	return &TransferRunOK{}
}

/*
TransferRunOK describes a response with status code 200, with default header values.

A successful response.
*/
type TransferRunOK struct {
}

func (o *TransferRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/transfer][%d] transferRunOK ", 200)
}

func (o *TransferRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewTransferRunNoContent creates a TransferRunNoContent with default headers values
func NewTransferRunNoContent() *TransferRunNoContent {
	return &TransferRunNoContent{}
}

/*
TransferRunNoContent describes a response with status code 204, with default header values.

No content.
*/
type TransferRunNoContent struct {
	Payload interface{}
}

func (o *TransferRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/transfer][%d] transferRunNoContent  %+v", 204, o.Payload)
}
func (o *TransferRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferRunForbidden creates a TransferRunForbidden with default headers values
func NewTransferRunForbidden() *TransferRunForbidden {
	return &TransferRunForbidden{}
}

/*
TransferRunForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type TransferRunForbidden struct {
	Payload interface{}
}

func (o *TransferRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/transfer][%d] transferRunForbidden  %+v", 403, o.Payload)
}
func (o *TransferRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferRunNotFound creates a TransferRunNotFound with default headers values
func NewTransferRunNotFound() *TransferRunNotFound {
	return &TransferRunNotFound{}
}

/*
TransferRunNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type TransferRunNotFound struct {
	Payload interface{}
}

func (o *TransferRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/transfer][%d] transferRunNotFound  %+v", 404, o.Payload)
}
func (o *TransferRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *TransferRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewTransferRunDefault creates a TransferRunDefault with default headers values
func NewTransferRunDefault(code int) *TransferRunDefault {
	return &TransferRunDefault{
		_statusCode: code,
	}
}

/*
TransferRunDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type TransferRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the transfer run default response
func (o *TransferRunDefault) Code() int {
	return o._statusCode
}

func (o *TransferRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{run.uuid}/transfer][%d] TransferRun default  %+v", o._statusCode, o.Payload)
}
func (o *TransferRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *TransferRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
