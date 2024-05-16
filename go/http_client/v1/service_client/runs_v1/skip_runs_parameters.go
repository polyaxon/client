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

// NewSkipRunsParams creates a new SkipRunsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewSkipRunsParams() *SkipRunsParams {
	return &SkipRunsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewSkipRunsParamsWithTimeout creates a new SkipRunsParams object
// with the ability to set a timeout on a request.
func NewSkipRunsParamsWithTimeout(timeout time.Duration) *SkipRunsParams {
	return &SkipRunsParams{
		timeout: timeout,
	}
}

// NewSkipRunsParamsWithContext creates a new SkipRunsParams object
// with the ability to set a context for a request.
func NewSkipRunsParamsWithContext(ctx context.Context) *SkipRunsParams {
	return &SkipRunsParams{
		Context: ctx,
	}
}

// NewSkipRunsParamsWithHTTPClient creates a new SkipRunsParams object
// with the ability to set a custom HTTPClient for a request.
func NewSkipRunsParamsWithHTTPClient(client *http.Client) *SkipRunsParams {
	return &SkipRunsParams{
		HTTPClient: client,
	}
}

/*
SkipRunsParams contains all the parameters to send to the API endpoint

	for the skip runs operation.

	Typically these are written to a http.Request.
*/
type SkipRunsParams struct {

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

// WithDefaults hydrates default values in the skip runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SkipRunsParams) WithDefaults() *SkipRunsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the skip runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *SkipRunsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the skip runs params
func (o *SkipRunsParams) WithTimeout(timeout time.Duration) *SkipRunsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the skip runs params
func (o *SkipRunsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the skip runs params
func (o *SkipRunsParams) WithContext(ctx context.Context) *SkipRunsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the skip runs params
func (o *SkipRunsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the skip runs params
func (o *SkipRunsParams) WithHTTPClient(client *http.Client) *SkipRunsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the skip runs params
func (o *SkipRunsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the skip runs params
func (o *SkipRunsParams) WithBody(body *service_model.V1Uuids) *SkipRunsParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the skip runs params
func (o *SkipRunsParams) SetBody(body *service_model.V1Uuids) {
	o.Body = body
}

// WithName adds the name to the skip runs params
func (o *SkipRunsParams) WithName(name string) *SkipRunsParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the skip runs params
func (o *SkipRunsParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the skip runs params
func (o *SkipRunsParams) WithOwner(owner string) *SkipRunsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the skip runs params
func (o *SkipRunsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *SkipRunsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
