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

// GetTeamStatsReader is a Reader for the GetTeamStats structure.
type GetTeamStatsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetTeamStatsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetTeamStatsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetTeamStatsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetTeamStatsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetTeamStatsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetTeamStatsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetTeamStatsOK creates a GetTeamStatsOK with default headers values
func NewGetTeamStatsOK() *GetTeamStatsOK {
	return &GetTeamStatsOK{}
}

/*
GetTeamStatsOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetTeamStatsOK struct {
	Payload interface{}
}

// IsSuccess returns true when this get team stats o k response has a 2xx status code
func (o *GetTeamStatsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get team stats o k response has a 3xx status code
func (o *GetTeamStatsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get team stats o k response has a 4xx status code
func (o *GetTeamStatsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get team stats o k response has a 5xx status code
func (o *GetTeamStatsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get team stats o k response a status code equal to that given
func (o *GetTeamStatsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get team stats o k response
func (o *GetTeamStatsOK) Code() int {
	return 200
}

func (o *GetTeamStatsOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsOK  %+v", 200, o.Payload)
}

func (o *GetTeamStatsOK) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsOK  %+v", 200, o.Payload)
}

func (o *GetTeamStatsOK) GetPayload() interface{} {
	return o.Payload
}

func (o *GetTeamStatsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetTeamStatsNoContent creates a GetTeamStatsNoContent with default headers values
func NewGetTeamStatsNoContent() *GetTeamStatsNoContent {
	return &GetTeamStatsNoContent{}
}

/*
GetTeamStatsNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetTeamStatsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get team stats no content response has a 2xx status code
func (o *GetTeamStatsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get team stats no content response has a 3xx status code
func (o *GetTeamStatsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get team stats no content response has a 4xx status code
func (o *GetTeamStatsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get team stats no content response has a 5xx status code
func (o *GetTeamStatsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get team stats no content response a status code equal to that given
func (o *GetTeamStatsNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get team stats no content response
func (o *GetTeamStatsNoContent) Code() int {
	return 204
}

func (o *GetTeamStatsNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetTeamStatsNoContent) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsNoContent  %+v", 204, o.Payload)
}

func (o *GetTeamStatsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetTeamStatsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetTeamStatsForbidden creates a GetTeamStatsForbidden with default headers values
func NewGetTeamStatsForbidden() *GetTeamStatsForbidden {
	return &GetTeamStatsForbidden{}
}

/*
GetTeamStatsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetTeamStatsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get team stats forbidden response has a 2xx status code
func (o *GetTeamStatsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get team stats forbidden response has a 3xx status code
func (o *GetTeamStatsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get team stats forbidden response has a 4xx status code
func (o *GetTeamStatsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get team stats forbidden response has a 5xx status code
func (o *GetTeamStatsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get team stats forbidden response a status code equal to that given
func (o *GetTeamStatsForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get team stats forbidden response
func (o *GetTeamStatsForbidden) Code() int {
	return 403
}

func (o *GetTeamStatsForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetTeamStatsForbidden) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsForbidden  %+v", 403, o.Payload)
}

func (o *GetTeamStatsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetTeamStatsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetTeamStatsNotFound creates a GetTeamStatsNotFound with default headers values
func NewGetTeamStatsNotFound() *GetTeamStatsNotFound {
	return &GetTeamStatsNotFound{}
}

/*
GetTeamStatsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetTeamStatsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get team stats not found response has a 2xx status code
func (o *GetTeamStatsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get team stats not found response has a 3xx status code
func (o *GetTeamStatsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get team stats not found response has a 4xx status code
func (o *GetTeamStatsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get team stats not found response has a 5xx status code
func (o *GetTeamStatsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get team stats not found response a status code equal to that given
func (o *GetTeamStatsNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get team stats not found response
func (o *GetTeamStatsNotFound) Code() int {
	return 404
}

func (o *GetTeamStatsNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetTeamStatsNotFound) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] getTeamStatsNotFound  %+v", 404, o.Payload)
}

func (o *GetTeamStatsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetTeamStatsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetTeamStatsDefault creates a GetTeamStatsDefault with default headers values
func NewGetTeamStatsDefault(code int) *GetTeamStatsDefault {
	return &GetTeamStatsDefault{
		_statusCode: code,
	}
}

/*
GetTeamStatsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetTeamStatsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get team stats default response has a 2xx status code
func (o *GetTeamStatsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get team stats default response has a 3xx status code
func (o *GetTeamStatsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get team stats default response has a 4xx status code
func (o *GetTeamStatsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get team stats default response has a 5xx status code
func (o *GetTeamStatsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get team stats default response a status code equal to that given
func (o *GetTeamStatsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get team stats default response
func (o *GetTeamStatsDefault) Code() int {
	return o._statusCode
}

func (o *GetTeamStatsDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] GetTeamStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetTeamStatsDefault) String() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/teams/{name}/stats][%d] GetTeamStats default  %+v", o._statusCode, o.Payload)
}

func (o *GetTeamStatsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetTeamStatsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
