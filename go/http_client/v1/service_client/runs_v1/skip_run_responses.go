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

// SkipRunReader is a Reader for the SkipRun structure.
type SkipRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *SkipRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewSkipRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewSkipRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewSkipRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewSkipRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewSkipRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewSkipRunOK creates a SkipRunOK with default headers values
func NewSkipRunOK() *SkipRunOK {
	return &SkipRunOK{}
}

/*
SkipRunOK describes a response with status code 200, with default header values.

A successful response.
*/
type SkipRunOK struct {
}

// IsSuccess returns true when this skip run o k response has a 2xx status code
func (o *SkipRunOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this skip run o k response has a 3xx status code
func (o *SkipRunOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this skip run o k response has a 4xx status code
func (o *SkipRunOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this skip run o k response has a 5xx status code
func (o *SkipRunOK) IsServerError() bool {
	return false
}

// IsCode returns true when this skip run o k response a status code equal to that given
func (o *SkipRunOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the skip run o k response
func (o *SkipRunOK) Code() int {
	return 200
}

func (o *SkipRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunOK ", 200)
}

func (o *SkipRunOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunOK ", 200)
}

func (o *SkipRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewSkipRunNoContent creates a SkipRunNoContent with default headers values
func NewSkipRunNoContent() *SkipRunNoContent {
	return &SkipRunNoContent{}
}

/*
SkipRunNoContent describes a response with status code 204, with default header values.

No content.
*/
type SkipRunNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this skip run no content response has a 2xx status code
func (o *SkipRunNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this skip run no content response has a 3xx status code
func (o *SkipRunNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this skip run no content response has a 4xx status code
func (o *SkipRunNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this skip run no content response has a 5xx status code
func (o *SkipRunNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this skip run no content response a status code equal to that given
func (o *SkipRunNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the skip run no content response
func (o *SkipRunNoContent) Code() int {
	return 204
}

func (o *SkipRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunNoContent  %+v", 204, o.Payload)
}

func (o *SkipRunNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunNoContent  %+v", 204, o.Payload)
}

func (o *SkipRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *SkipRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSkipRunForbidden creates a SkipRunForbidden with default headers values
func NewSkipRunForbidden() *SkipRunForbidden {
	return &SkipRunForbidden{}
}

/*
SkipRunForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type SkipRunForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this skip run forbidden response has a 2xx status code
func (o *SkipRunForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this skip run forbidden response has a 3xx status code
func (o *SkipRunForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this skip run forbidden response has a 4xx status code
func (o *SkipRunForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this skip run forbidden response has a 5xx status code
func (o *SkipRunForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this skip run forbidden response a status code equal to that given
func (o *SkipRunForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the skip run forbidden response
func (o *SkipRunForbidden) Code() int {
	return 403
}

func (o *SkipRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunForbidden  %+v", 403, o.Payload)
}

func (o *SkipRunForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunForbidden  %+v", 403, o.Payload)
}

func (o *SkipRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *SkipRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSkipRunNotFound creates a SkipRunNotFound with default headers values
func NewSkipRunNotFound() *SkipRunNotFound {
	return &SkipRunNotFound{}
}

/*
SkipRunNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type SkipRunNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this skip run not found response has a 2xx status code
func (o *SkipRunNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this skip run not found response has a 3xx status code
func (o *SkipRunNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this skip run not found response has a 4xx status code
func (o *SkipRunNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this skip run not found response has a 5xx status code
func (o *SkipRunNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this skip run not found response a status code equal to that given
func (o *SkipRunNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the skip run not found response
func (o *SkipRunNotFound) Code() int {
	return 404
}

func (o *SkipRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunNotFound  %+v", 404, o.Payload)
}

func (o *SkipRunNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] skipRunNotFound  %+v", 404, o.Payload)
}

func (o *SkipRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *SkipRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewSkipRunDefault creates a SkipRunDefault with default headers values
func NewSkipRunDefault(code int) *SkipRunDefault {
	return &SkipRunDefault{
		_statusCode: code,
	}
}

/*
SkipRunDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type SkipRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this skip run default response has a 2xx status code
func (o *SkipRunDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this skip run default response has a 3xx status code
func (o *SkipRunDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this skip run default response has a 4xx status code
func (o *SkipRunDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this skip run default response has a 5xx status code
func (o *SkipRunDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this skip run default response a status code equal to that given
func (o *SkipRunDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the skip run default response
func (o *SkipRunDefault) Code() int {
	return o._statusCode
}

func (o *SkipRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] SkipRun default  %+v", o._statusCode, o.Payload)
}

func (o *SkipRunDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{entity}/runs/{uuid}/skip][%d] SkipRun default  %+v", o._statusCode, o.Payload)
}

func (o *SkipRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *SkipRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
