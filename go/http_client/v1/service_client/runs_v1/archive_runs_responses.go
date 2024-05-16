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

// ArchiveRunsReader is a Reader for the ArchiveRuns structure.
type ArchiveRunsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ArchiveRunsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewArchiveRunsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewArchiveRunsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewArchiveRunsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewArchiveRunsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewArchiveRunsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewArchiveRunsOK creates a ArchiveRunsOK with default headers values
func NewArchiveRunsOK() *ArchiveRunsOK {
	return &ArchiveRunsOK{}
}

/*
ArchiveRunsOK describes a response with status code 200, with default header values.

A successful response.
*/
type ArchiveRunsOK struct {
}

// IsSuccess returns true when this archive runs o k response has a 2xx status code
func (o *ArchiveRunsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this archive runs o k response has a 3xx status code
func (o *ArchiveRunsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive runs o k response has a 4xx status code
func (o *ArchiveRunsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this archive runs o k response has a 5xx status code
func (o *ArchiveRunsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this archive runs o k response a status code equal to that given
func (o *ArchiveRunsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the archive runs o k response
func (o *ArchiveRunsOK) Code() int {
	return 200
}

func (o *ArchiveRunsOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsOK ", 200)
}

func (o *ArchiveRunsOK) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsOK ", 200)
}

func (o *ArchiveRunsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewArchiveRunsNoContent creates a ArchiveRunsNoContent with default headers values
func NewArchiveRunsNoContent() *ArchiveRunsNoContent {
	return &ArchiveRunsNoContent{}
}

/*
ArchiveRunsNoContent describes a response with status code 204, with default header values.

No content.
*/
type ArchiveRunsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this archive runs no content response has a 2xx status code
func (o *ArchiveRunsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this archive runs no content response has a 3xx status code
func (o *ArchiveRunsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive runs no content response has a 4xx status code
func (o *ArchiveRunsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this archive runs no content response has a 5xx status code
func (o *ArchiveRunsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this archive runs no content response a status code equal to that given
func (o *ArchiveRunsNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the archive runs no content response
func (o *ArchiveRunsNoContent) Code() int {
	return 204
}

func (o *ArchiveRunsNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsNoContent  %+v", 204, o.Payload)
}

func (o *ArchiveRunsNoContent) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsNoContent  %+v", 204, o.Payload)
}

func (o *ArchiveRunsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveRunsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveRunsForbidden creates a ArchiveRunsForbidden with default headers values
func NewArchiveRunsForbidden() *ArchiveRunsForbidden {
	return &ArchiveRunsForbidden{}
}

/*
ArchiveRunsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type ArchiveRunsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this archive runs forbidden response has a 2xx status code
func (o *ArchiveRunsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this archive runs forbidden response has a 3xx status code
func (o *ArchiveRunsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive runs forbidden response has a 4xx status code
func (o *ArchiveRunsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this archive runs forbidden response has a 5xx status code
func (o *ArchiveRunsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this archive runs forbidden response a status code equal to that given
func (o *ArchiveRunsForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the archive runs forbidden response
func (o *ArchiveRunsForbidden) Code() int {
	return 403
}

func (o *ArchiveRunsForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsForbidden  %+v", 403, o.Payload)
}

func (o *ArchiveRunsForbidden) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsForbidden  %+v", 403, o.Payload)
}

func (o *ArchiveRunsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveRunsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveRunsNotFound creates a ArchiveRunsNotFound with default headers values
func NewArchiveRunsNotFound() *ArchiveRunsNotFound {
	return &ArchiveRunsNotFound{}
}

/*
ArchiveRunsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type ArchiveRunsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this archive runs not found response has a 2xx status code
func (o *ArchiveRunsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this archive runs not found response has a 3xx status code
func (o *ArchiveRunsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this archive runs not found response has a 4xx status code
func (o *ArchiveRunsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this archive runs not found response has a 5xx status code
func (o *ArchiveRunsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this archive runs not found response a status code equal to that given
func (o *ArchiveRunsNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the archive runs not found response
func (o *ArchiveRunsNotFound) Code() int {
	return 404
}

func (o *ArchiveRunsNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsNotFound  %+v", 404, o.Payload)
}

func (o *ArchiveRunsNotFound) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] archiveRunsNotFound  %+v", 404, o.Payload)
}

func (o *ArchiveRunsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ArchiveRunsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewArchiveRunsDefault creates a ArchiveRunsDefault with default headers values
func NewArchiveRunsDefault(code int) *ArchiveRunsDefault {
	return &ArchiveRunsDefault{
		_statusCode: code,
	}
}

/*
ArchiveRunsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type ArchiveRunsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this archive runs default response has a 2xx status code
func (o *ArchiveRunsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this archive runs default response has a 3xx status code
func (o *ArchiveRunsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this archive runs default response has a 4xx status code
func (o *ArchiveRunsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this archive runs default response has a 5xx status code
func (o *ArchiveRunsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this archive runs default response a status code equal to that given
func (o *ArchiveRunsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the archive runs default response
func (o *ArchiveRunsDefault) Code() int {
	return o._statusCode
}

func (o *ArchiveRunsDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] ArchiveRuns default  %+v", o._statusCode, o.Payload)
}

func (o *ArchiveRunsDefault) String() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{name}/runs/archive][%d] ArchiveRuns default  %+v", o._statusCode, o.Payload)
}

func (o *ArchiveRunsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ArchiveRunsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
