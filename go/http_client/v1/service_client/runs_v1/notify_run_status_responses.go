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

// NotifyRunStatusReader is a Reader for the NotifyRunStatus structure.
type NotifyRunStatusReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *NotifyRunStatusReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewNotifyRunStatusOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewNotifyRunStatusNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewNotifyRunStatusForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewNotifyRunStatusNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewNotifyRunStatusDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewNotifyRunStatusOK creates a NotifyRunStatusOK with default headers values
func NewNotifyRunStatusOK() *NotifyRunStatusOK {
	return &NotifyRunStatusOK{}
}

/*
NotifyRunStatusOK describes a response with status code 200, with default header values.

A successful response.
*/
type NotifyRunStatusOK struct {
}

func (o *NotifyRunStatusOK) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify][%d] notifyRunStatusOK ", 200)
}

func (o *NotifyRunStatusOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewNotifyRunStatusNoContent creates a NotifyRunStatusNoContent with default headers values
func NewNotifyRunStatusNoContent() *NotifyRunStatusNoContent {
	return &NotifyRunStatusNoContent{}
}

/*
NotifyRunStatusNoContent describes a response with status code 204, with default header values.

No content.
*/
type NotifyRunStatusNoContent struct {
	Payload interface{}
}

func (o *NotifyRunStatusNoContent) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify][%d] notifyRunStatusNoContent  %+v", 204, o.Payload)
}
func (o *NotifyRunStatusNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *NotifyRunStatusNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewNotifyRunStatusForbidden creates a NotifyRunStatusForbidden with default headers values
func NewNotifyRunStatusForbidden() *NotifyRunStatusForbidden {
	return &NotifyRunStatusForbidden{}
}

/*
NotifyRunStatusForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type NotifyRunStatusForbidden struct {
	Payload interface{}
}

func (o *NotifyRunStatusForbidden) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify][%d] notifyRunStatusForbidden  %+v", 403, o.Payload)
}
func (o *NotifyRunStatusForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *NotifyRunStatusForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewNotifyRunStatusNotFound creates a NotifyRunStatusNotFound with default headers values
func NewNotifyRunStatusNotFound() *NotifyRunStatusNotFound {
	return &NotifyRunStatusNotFound{}
}

/*
NotifyRunStatusNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type NotifyRunStatusNotFound struct {
	Payload interface{}
}

func (o *NotifyRunStatusNotFound) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify][%d] notifyRunStatusNotFound  %+v", 404, o.Payload)
}
func (o *NotifyRunStatusNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *NotifyRunStatusNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewNotifyRunStatusDefault creates a NotifyRunStatusDefault with default headers values
func NewNotifyRunStatusDefault(code int) *NotifyRunStatusDefault {
	return &NotifyRunStatusDefault{
		_statusCode: code,
	}
}

/*
NotifyRunStatusDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type NotifyRunStatusDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the notify run status default response
func (o *NotifyRunStatusDefault) Code() int {
	return o._statusCode
}

func (o *NotifyRunStatusDefault) Error() string {
	return fmt.Sprintf("[POST /streams/v1/{namespace}/{owner}/{project}/runs/{uuid}/notify][%d] NotifyRunStatus default  %+v", o._statusCode, o.Payload)
}
func (o *NotifyRunStatusDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *NotifyRunStatusDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
