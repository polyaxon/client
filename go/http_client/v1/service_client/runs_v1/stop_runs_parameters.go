// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewStopRunsParams creates a new StopRunsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewStopRunsParams() *StopRunsParams {
	return &StopRunsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewStopRunsParamsWithTimeout creates a new StopRunsParams object
// with the ability to set a timeout on a request.
func NewStopRunsParamsWithTimeout(timeout time.Duration) *StopRunsParams {
	return &StopRunsParams{
		timeout: timeout,
	}
}

// NewStopRunsParamsWithContext creates a new StopRunsParams object
// with the ability to set a context for a request.
func NewStopRunsParamsWithContext(ctx context.Context) *StopRunsParams {
	return &StopRunsParams{
		Context: ctx,
	}
}

// NewStopRunsParamsWithHTTPClient creates a new StopRunsParams object
// with the ability to set a custom HTTPClient for a request.
func NewStopRunsParamsWithHTTPClient(client *http.Client) *StopRunsParams {
	return &StopRunsParams{
		HTTPClient: client,
	}
}

/*
StopRunsParams contains all the parameters to send to the API endpoint

	for the stop runs operation.

	Typically these are written to a http.Request.
*/
type StopRunsParams struct {

	/* Body.

	   Uuids of the entities
	*/
	Body *service_model.V1Uuids

	/* Name.

	   Entity under namespace
	*/
	Name string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the stop runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *StopRunsParams) WithDefaults() *StopRunsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the stop runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *StopRunsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the stop runs params
func (o *StopRunsParams) WithTimeout(timeout time.Duration) *StopRunsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the stop runs params
func (o *StopRunsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the stop runs params
func (o *StopRunsParams) WithContext(ctx context.Context) *StopRunsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the stop runs params
func (o *StopRunsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the stop runs params
func (o *StopRunsParams) WithHTTPClient(client *http.Client) *StopRunsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the stop runs params
func (o *StopRunsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the stop runs params
func (o *StopRunsParams) WithBody(body *service_model.V1Uuids) *StopRunsParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the stop runs params
func (o *StopRunsParams) SetBody(body *service_model.V1Uuids) {
	o.Body = body
}

// WithName adds the name to the stop runs params
func (o *StopRunsParams) WithName(name string) *StopRunsParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the stop runs params
func (o *StopRunsParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the stop runs params
func (o *StopRunsParams) WithOwner(owner string) *StopRunsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the stop runs params
func (o *StopRunsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *StopRunsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
