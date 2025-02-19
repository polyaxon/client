// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetAgentStatsReader is a Reader for the GetAgentStats structure.
type GetAgentStatsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetAgentStatsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetAgentStatsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetAgentStatsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetAgentStatsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetAgentStatsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetAgentStatsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetAgentStatsOK creates a GetAgentStatsOK with default headers values
func NewGetAgentStatsOK() *GetAgentStatsOK {
	return &GetAgentStatsOK{}
}

/*
GetAgentStatsOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetAgentStatsOK struct {
	Payload *service_model.V1Agent
}

// IsSuccess returns true when this get agent stats o k response has a 2xx status code
func (o *GetAgentStatsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get agent stats o k response has a 3xx status code
func (o *GetAgentStatsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent stats o k response has a 4xx status code
func (o *GetAgentStatsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get agent stats o k response has a 5xx status code
func (o *GetAgentStatsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent stats o k response a status code equal to that given
func (o *GetAgentStatsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get agent stats o k response
func (o *GetAgentStatsOK) Code() int {
	return 200
}

func (o *GetAgentStatsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsOK  %+v", 200, o.Payload)
}

func (o *GetAgentStatsOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsOK  %+v", 200, o.Payload)
}

func (o *GetAgentStatsOK) GetPayload() *service_model.V1Agent {
	return o.Payload
}

func (o *GetAgentStatsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Agent)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentStatsNoContent creates a GetAgentStatsNoContent with default headers values
func NewGetAgentStatsNoContent() *GetAgentStatsNoContent {
	return &GetAgentStatsNoContent{}
}

/*
GetAgentStatsNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetAgentStatsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent stats no content response has a 2xx status code
func (o *GetAgentStatsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get agent stats no content response has a 3xx status code
func (o *GetAgentStatsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent stats no content response has a 4xx status code
func (o *GetAgentStatsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get agent stats no content response has a 5xx status code
func (o *GetAgentStatsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent stats no content response a status code equal to that given
func (o *GetAgentStatsNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get agent stats no content response
func (o *GetAgentStatsNoContent) Code() int {
	return 204
}

func (o *GetAgentStatsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetAgentStatsNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetAgentStatsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentStatsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentStatsForbidden creates a GetAgentStatsForbidden with default headers values
func NewGetAgentStatsForbidden() *GetAgentStatsForbidden {
	return &GetAgentStatsForbidden{}
}

/*
GetAgentStatsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetAgentStatsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent stats forbidden response has a 2xx status code
func (o *GetAgentStatsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get agent stats forbidden response has a 3xx status code
func (o *GetAgentStatsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent stats forbidden response has a 4xx status code
func (o *GetAgentStatsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get agent stats forbidden response has a 5xx status code
func (o *GetAgentStatsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent stats forbidden response a status code equal to that given
func (o *GetAgentStatsForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get agent stats forbidden response
func (o *GetAgentStatsForbidden) Code() int {
	return 403
}

func (o *GetAgentStatsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetAgentStatsForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetAgentStatsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentStatsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentStatsNotFound creates a GetAgentStatsNotFound with default headers values
func NewGetAgentStatsNotFound() *GetAgentStatsNotFound {
	return &GetAgentStatsNotFound{}
}

/*
GetAgentStatsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetAgentStatsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get agent stats not found response has a 2xx status code
func (o *GetAgentStatsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get agent stats not found response has a 3xx status code
func (o *GetAgentStatsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get agent stats not found response has a 4xx status code
func (o *GetAgentStatsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get agent stats not found response has a 5xx status code
func (o *GetAgentStatsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get agent stats not found response a status code equal to that given
func (o *GetAgentStatsNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get agent stats not found response
func (o *GetAgentStatsNotFound) Code() int {
	return 404
}

func (o *GetAgentStatsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetAgentStatsNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] getAgentStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetAgentStatsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetAgentStatsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetAgentStatsDefault creates a GetAgentStatsDefault with default headers values
func NewGetAgentStatsDefault(code int) *GetAgentStatsDefault {
	return &GetAgentStatsDefault{
		_statusCode: code,
	}
}

/*
GetAgentStatsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetAgentStatsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get agent stats default response has a 2xx status code
func (o *GetAgentStatsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get agent stats default response has a 3xx status code
func (o *GetAgentStatsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get agent stats default response has a 4xx status code
func (o *GetAgentStatsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get agent stats default response has a 5xx status code
func (o *GetAgentStatsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get agent stats default response a status code equal to that given
func (o *GetAgentStatsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get agent stats default response
func (o *GetAgentStatsDefault) Code() int {
	return o._statusCode
}

func (o *GetAgentStatsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] GetAgentStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetAgentStatsDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/agents/{uuid}/stats][%d] GetAgentStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetAgentStatsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetAgentStatsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
