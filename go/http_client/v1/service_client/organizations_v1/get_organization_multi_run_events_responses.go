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

// GetOrganizationMultiRunEventsReader is a Reader for the GetOrganizationMultiRunEvents structure.
type GetOrganizationMultiRunEventsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetOrganizationMultiRunEventsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetOrganizationMultiRunEventsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetOrganizationMultiRunEventsNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetOrganizationMultiRunEventsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetOrganizationMultiRunEventsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetOrganizationMultiRunEventsDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetOrganizationMultiRunEventsOK creates a GetOrganizationMultiRunEventsOK with default headers values
func NewGetOrganizationMultiRunEventsOK() *GetOrganizationMultiRunEventsOK {
	return &GetOrganizationMultiRunEventsOK{}
}

/*
GetOrganizationMultiRunEventsOK describes a response with status code 200, with default header values.

A successful response.
*/
type GetOrganizationMultiRunEventsOK struct {
	Payload *service_model.V1MultiEventsResponse
}

// IsSuccess returns true when this get organization multi run events o k response has a 2xx status code
func (o *GetOrganizationMultiRunEventsOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get organization multi run events o k response has a 3xx status code
func (o *GetOrganizationMultiRunEventsOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get organization multi run events o k response has a 4xx status code
func (o *GetOrganizationMultiRunEventsOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get organization multi run events o k response has a 5xx status code
func (o *GetOrganizationMultiRunEventsOK) IsServerError() bool {
	return false
}

// IsCode returns true when this get organization multi run events o k response a status code equal to that given
func (o *GetOrganizationMultiRunEventsOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get organization multi run events o k response
func (o *GetOrganizationMultiRunEventsOK) Code() int {
	return 200
}

func (o *GetOrganizationMultiRunEventsOK) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsOK  %+v", 200, o.Payload)
}

func (o *GetOrganizationMultiRunEventsOK) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsOK  %+v", 200, o.Payload)
}

func (o *GetOrganizationMultiRunEventsOK) GetPayload() *service_model.V1MultiEventsResponse {
	return o.Payload
}

func (o *GetOrganizationMultiRunEventsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1MultiEventsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetOrganizationMultiRunEventsNoContent creates a GetOrganizationMultiRunEventsNoContent with default headers values
func NewGetOrganizationMultiRunEventsNoContent() *GetOrganizationMultiRunEventsNoContent {
	return &GetOrganizationMultiRunEventsNoContent{}
}

/*
GetOrganizationMultiRunEventsNoContent describes a response with status code 204, with default header values.

No content.
*/
type GetOrganizationMultiRunEventsNoContent struct {
	Payload interface{}
}

// IsSuccess returns true when this get organization multi run events no content response has a 2xx status code
func (o *GetOrganizationMultiRunEventsNoContent) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get organization multi run events no content response has a 3xx status code
func (o *GetOrganizationMultiRunEventsNoContent) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get organization multi run events no content response has a 4xx status code
func (o *GetOrganizationMultiRunEventsNoContent) IsClientError() bool {
	return false
}

// IsServerError returns true when this get organization multi run events no content response has a 5xx status code
func (o *GetOrganizationMultiRunEventsNoContent) IsServerError() bool {
	return false
}

// IsCode returns true when this get organization multi run events no content response a status code equal to that given
func (o *GetOrganizationMultiRunEventsNoContent) IsCode(code int) bool {
	return code == 204
}

// Code gets the status code for the get organization multi run events no content response
func (o *GetOrganizationMultiRunEventsNoContent) Code() int {
	return 204
}

func (o *GetOrganizationMultiRunEventsNoContent) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsNoContent  %+v", 204, o.Payload)
}

func (o *GetOrganizationMultiRunEventsNoContent) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsNoContent  %+v", 204, o.Payload)
}

func (o *GetOrganizationMultiRunEventsNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetOrganizationMultiRunEventsNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetOrganizationMultiRunEventsForbidden creates a GetOrganizationMultiRunEventsForbidden with default headers values
func NewGetOrganizationMultiRunEventsForbidden() *GetOrganizationMultiRunEventsForbidden {
	return &GetOrganizationMultiRunEventsForbidden{}
}

/*
GetOrganizationMultiRunEventsForbidden describes a response with status code 403, with default header values.

You don't have permission to access the resource.
*/
type GetOrganizationMultiRunEventsForbidden struct {
	Payload interface{}
}

// IsSuccess returns true when this get organization multi run events forbidden response has a 2xx status code
func (o *GetOrganizationMultiRunEventsForbidden) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get organization multi run events forbidden response has a 3xx status code
func (o *GetOrganizationMultiRunEventsForbidden) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get organization multi run events forbidden response has a 4xx status code
func (o *GetOrganizationMultiRunEventsForbidden) IsClientError() bool {
	return true
}

// IsServerError returns true when this get organization multi run events forbidden response has a 5xx status code
func (o *GetOrganizationMultiRunEventsForbidden) IsServerError() bool {
	return false
}

// IsCode returns true when this get organization multi run events forbidden response a status code equal to that given
func (o *GetOrganizationMultiRunEventsForbidden) IsCode(code int) bool {
	return code == 403
}

// Code gets the status code for the get organization multi run events forbidden response
func (o *GetOrganizationMultiRunEventsForbidden) Code() int {
	return 403
}

func (o *GetOrganizationMultiRunEventsForbidden) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsForbidden  %+v", 403, o.Payload)
}

func (o *GetOrganizationMultiRunEventsForbidden) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsForbidden  %+v", 403, o.Payload)
}

func (o *GetOrganizationMultiRunEventsForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetOrganizationMultiRunEventsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetOrganizationMultiRunEventsNotFound creates a GetOrganizationMultiRunEventsNotFound with default headers values
func NewGetOrganizationMultiRunEventsNotFound() *GetOrganizationMultiRunEventsNotFound {
	return &GetOrganizationMultiRunEventsNotFound{}
}

/*
GetOrganizationMultiRunEventsNotFound describes a response with status code 404, with default header values.

Resource does not exist.
*/
type GetOrganizationMultiRunEventsNotFound struct {
	Payload interface{}
}

// IsSuccess returns true when this get organization multi run events not found response has a 2xx status code
func (o *GetOrganizationMultiRunEventsNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get organization multi run events not found response has a 3xx status code
func (o *GetOrganizationMultiRunEventsNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get organization multi run events not found response has a 4xx status code
func (o *GetOrganizationMultiRunEventsNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get organization multi run events not found response has a 5xx status code
func (o *GetOrganizationMultiRunEventsNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get organization multi run events not found response a status code equal to that given
func (o *GetOrganizationMultiRunEventsNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get organization multi run events not found response
func (o *GetOrganizationMultiRunEventsNotFound) Code() int {
	return 404
}

func (o *GetOrganizationMultiRunEventsNotFound) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsNotFound  %+v", 404, o.Payload)
}

func (o *GetOrganizationMultiRunEventsNotFound) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] getOrganizationMultiRunEventsNotFound  %+v", 404, o.Payload)
}

func (o *GetOrganizationMultiRunEventsNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetOrganizationMultiRunEventsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetOrganizationMultiRunEventsDefault creates a GetOrganizationMultiRunEventsDefault with default headers values
func NewGetOrganizationMultiRunEventsDefault(code int) *GetOrganizationMultiRunEventsDefault {
	return &GetOrganizationMultiRunEventsDefault{
		_statusCode: code,
	}
}

/*
GetOrganizationMultiRunEventsDefault describes a response with status code -1, with default header values.

An unexpected error response.
*/
type GetOrganizationMultiRunEventsDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// IsSuccess returns true when this get organization multi run events default response has a 2xx status code
func (o *GetOrganizationMultiRunEventsDefault) IsSuccess() bool {
	return o._statusCode/100 == 2
}

// IsRedirect returns true when this get organization multi run events default response has a 3xx status code
func (o *GetOrganizationMultiRunEventsDefault) IsRedirect() bool {
	return o._statusCode/100 == 3
}

// IsClientError returns true when this get organization multi run events default response has a 4xx status code
func (o *GetOrganizationMultiRunEventsDefault) IsClientError() bool {
	return o._statusCode/100 == 4
}

// IsServerError returns true when this get organization multi run events default response has a 5xx status code
func (o *GetOrganizationMultiRunEventsDefault) IsServerError() bool {
	return o._statusCode/100 == 5
}

// IsCode returns true when this get organization multi run events default response a status code equal to that given
func (o *GetOrganizationMultiRunEventsDefault) IsCode(code int) bool {
	return o._statusCode == code
}

// Code gets the status code for the get organization multi run events default response
func (o *GetOrganizationMultiRunEventsDefault) Code() int {
	return o._statusCode
}

func (o *GetOrganizationMultiRunEventsDefault) Error() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] GetOrganizationMultiRunEvents default  %+v", o._statusCode, o.Payload)
}

func (o *GetOrganizationMultiRunEventsDefault) String() string {
	return fmt.Sprintf("[GET /streams/v1/{namespace}/orgs/{owner}/runs/multi/events/{kind}][%d] GetOrganizationMultiRunEvents default  %+v", o._statusCode, o.Payload)
}

func (o *GetOrganizationMultiRunEventsDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetOrganizationMultiRunEventsDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
