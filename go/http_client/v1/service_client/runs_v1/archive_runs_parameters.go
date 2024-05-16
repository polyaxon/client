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

// NewArchiveRunsParams creates a new ArchiveRunsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewArchiveRunsParams() *ArchiveRunsParams {
	return &ArchiveRunsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewArchiveRunsParamsWithTimeout creates a new ArchiveRunsParams object
// with the ability to set a timeout on a request.
func NewArchiveRunsParamsWithTimeout(timeout time.Duration) *ArchiveRunsParams {
	return &ArchiveRunsParams{
		timeout: timeout,
	}
}

// NewArchiveRunsParamsWithContext creates a new ArchiveRunsParams object
// with the ability to set a context for a request.
func NewArchiveRunsParamsWithContext(ctx context.Context) *ArchiveRunsParams {
	return &ArchiveRunsParams{
		Context: ctx,
	}
}

// NewArchiveRunsParamsWithHTTPClient creates a new ArchiveRunsParams object
// with the ability to set a custom HTTPClient for a request.
func NewArchiveRunsParamsWithHTTPClient(client *http.Client) *ArchiveRunsParams {
	return &ArchiveRunsParams{
		HTTPClient: client,
	}
}

/*
ArchiveRunsParams contains all the parameters to send to the API endpoint

	for the archive runs operation.

	Typically these are written to a http.Request.
*/
type ArchiveRunsParams struct {

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

// WithDefaults hydrates default values in the archive runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ArchiveRunsParams) WithDefaults() *ArchiveRunsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the archive runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ArchiveRunsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the archive runs params
func (o *ArchiveRunsParams) WithTimeout(timeout time.Duration) *ArchiveRunsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the archive runs params
func (o *ArchiveRunsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the archive runs params
func (o *ArchiveRunsParams) WithContext(ctx context.Context) *ArchiveRunsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the archive runs params
func (o *ArchiveRunsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the archive runs params
func (o *ArchiveRunsParams) WithHTTPClient(client *http.Client) *ArchiveRunsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the archive runs params
func (o *ArchiveRunsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the archive runs params
func (o *ArchiveRunsParams) WithBody(body *service_model.V1Uuids) *ArchiveRunsParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the archive runs params
func (o *ArchiveRunsParams) SetBody(body *service_model.V1Uuids) {
	o.Body = body
}

// WithName adds the name to the archive runs params
func (o *ArchiveRunsParams) WithName(name string) *ArchiveRunsParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the archive runs params
func (o *ArchiveRunsParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the archive runs params
func (o *ArchiveRunsParams) WithOwner(owner string) *ArchiveRunsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the archive runs params
func (o *ArchiveRunsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *ArchiveRunsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
