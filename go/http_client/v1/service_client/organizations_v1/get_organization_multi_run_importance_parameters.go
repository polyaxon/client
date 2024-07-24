// Code generated by go-swagger; DO NOT EDIT.

package organizations_v1

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
)

// NewGetOrganizationMultiRunImportanceParams creates a new GetOrganizationMultiRunImportanceParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetOrganizationMultiRunImportanceParams() *GetOrganizationMultiRunImportanceParams {
	return &GetOrganizationMultiRunImportanceParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetOrganizationMultiRunImportanceParamsWithTimeout creates a new GetOrganizationMultiRunImportanceParams object
// with the ability to set a timeout on a request.
func NewGetOrganizationMultiRunImportanceParamsWithTimeout(timeout time.Duration) *GetOrganizationMultiRunImportanceParams {
	return &GetOrganizationMultiRunImportanceParams{
		timeout: timeout,
	}
}

// NewGetOrganizationMultiRunImportanceParamsWithContext creates a new GetOrganizationMultiRunImportanceParams object
// with the ability to set a context for a request.
func NewGetOrganizationMultiRunImportanceParamsWithContext(ctx context.Context) *GetOrganizationMultiRunImportanceParams {
	return &GetOrganizationMultiRunImportanceParams{
		Context: ctx,
	}
}

// NewGetOrganizationMultiRunImportanceParamsWithHTTPClient creates a new GetOrganizationMultiRunImportanceParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetOrganizationMultiRunImportanceParamsWithHTTPClient(client *http.Client) *GetOrganizationMultiRunImportanceParams {
	return &GetOrganizationMultiRunImportanceParams{
		HTTPClient: client,
	}
}

/*
GetOrganizationMultiRunImportanceParams contains all the parameters to send to the API endpoint

	for the get organization multi run importance operation.

	Typically these are written to a http.Request.
*/
type GetOrganizationMultiRunImportanceParams struct {

	/* Body.

	   Params/Metrics data
	*/
	Body interface{}

	/* Entity.

	   Entity where the run will be assigned.
	*/
	Entity *string

	/* Namespace.

	   namespace
	*/
	Namespace string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get organization multi run importance params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationMultiRunImportanceParams) WithDefaults() *GetOrganizationMultiRunImportanceParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get organization multi run importance params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationMultiRunImportanceParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithTimeout(timeout time.Duration) *GetOrganizationMultiRunImportanceParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithContext(ctx context.Context) *GetOrganizationMultiRunImportanceParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithHTTPClient(client *http.Client) *GetOrganizationMultiRunImportanceParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithBody(body interface{}) *GetOrganizationMultiRunImportanceParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetBody(body interface{}) {
	o.Body = body
}

// WithEntity adds the entity to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithEntity(entity *string) *GetOrganizationMultiRunImportanceParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetEntity(entity *string) {
	o.Entity = entity
}

// WithNamespace adds the namespace to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithNamespace(namespace string) *GetOrganizationMultiRunImportanceParams {
	o.SetNamespace(namespace)
	return o
}

// SetNamespace adds the namespace to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetNamespace(namespace string) {
	o.Namespace = namespace
}

// WithOwner adds the owner to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) WithOwner(owner string) *GetOrganizationMultiRunImportanceParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get organization multi run importance params
func (o *GetOrganizationMultiRunImportanceParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *GetOrganizationMultiRunImportanceParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if o.Entity != nil {

		// query param entity
		var qrEntity string

		if o.Entity != nil {
			qrEntity = *o.Entity
		}
		qEntity := qrEntity
		if qEntity != "" {

			if err := r.SetQueryParam("entity", qEntity); err != nil {
				return err
			}
		}
	}

	// path param namespace
	if err := r.SetPathParam("namespace", o.Namespace); err != nil {
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
