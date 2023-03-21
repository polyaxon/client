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

package searches_v1

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

// NewCreateSearchParams creates a new CreateSearchParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCreateSearchParams() *CreateSearchParams {
	return &CreateSearchParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCreateSearchParamsWithTimeout creates a new CreateSearchParams object
// with the ability to set a timeout on a request.
func NewCreateSearchParamsWithTimeout(timeout time.Duration) *CreateSearchParams {
	return &CreateSearchParams{
		timeout: timeout,
	}
}

// NewCreateSearchParamsWithContext creates a new CreateSearchParams object
// with the ability to set a context for a request.
func NewCreateSearchParamsWithContext(ctx context.Context) *CreateSearchParams {
	return &CreateSearchParams{
		Context: ctx,
	}
}

// NewCreateSearchParamsWithHTTPClient creates a new CreateSearchParams object
// with the ability to set a custom HTTPClient for a request.
func NewCreateSearchParamsWithHTTPClient(client *http.Client) *CreateSearchParams {
	return &CreateSearchParams{
		HTTPClient: client,
	}
}

/*
CreateSearchParams contains all the parameters to send to the API endpoint

	for the create search operation.

	Typically these are written to a http.Request.
*/
type CreateSearchParams struct {

	/* Body.

	   Search body
	*/
	Body *service_model.V1Search

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the create search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateSearchParams) WithDefaults() *CreateSearchParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the create search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateSearchParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the create search params
func (o *CreateSearchParams) WithTimeout(timeout time.Duration) *CreateSearchParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create search params
func (o *CreateSearchParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create search params
func (o *CreateSearchParams) WithContext(ctx context.Context) *CreateSearchParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create search params
func (o *CreateSearchParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create search params
func (o *CreateSearchParams) WithHTTPClient(client *http.Client) *CreateSearchParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create search params
func (o *CreateSearchParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the create search params
func (o *CreateSearchParams) WithBody(body *service_model.V1Search) *CreateSearchParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the create search params
func (o *CreateSearchParams) SetBody(body *service_model.V1Search) {
	o.Body = body
}

// WithOwner adds the owner to the create search params
func (o *CreateSearchParams) WithOwner(owner string) *CreateSearchParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the create search params
func (o *CreateSearchParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *CreateSearchParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
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
