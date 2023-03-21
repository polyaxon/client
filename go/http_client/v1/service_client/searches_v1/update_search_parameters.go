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

// NewUpdateSearchParams creates a new UpdateSearchParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUpdateSearchParams() *UpdateSearchParams {
	return &UpdateSearchParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUpdateSearchParamsWithTimeout creates a new UpdateSearchParams object
// with the ability to set a timeout on a request.
func NewUpdateSearchParamsWithTimeout(timeout time.Duration) *UpdateSearchParams {
	return &UpdateSearchParams{
		timeout: timeout,
	}
}

// NewUpdateSearchParamsWithContext creates a new UpdateSearchParams object
// with the ability to set a context for a request.
func NewUpdateSearchParamsWithContext(ctx context.Context) *UpdateSearchParams {
	return &UpdateSearchParams{
		Context: ctx,
	}
}

// NewUpdateSearchParamsWithHTTPClient creates a new UpdateSearchParams object
// with the ability to set a custom HTTPClient for a request.
func NewUpdateSearchParamsWithHTTPClient(client *http.Client) *UpdateSearchParams {
	return &UpdateSearchParams{
		HTTPClient: client,
	}
}

/*
UpdateSearchParams contains all the parameters to send to the API endpoint

	for the update search operation.

	Typically these are written to a http.Request.
*/
type UpdateSearchParams struct {

	/* Body.

	   Search body
	*/
	Body *service_model.V1Search

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* SearchUUID.

	   UUID
	*/
	SearchUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the update search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateSearchParams) WithDefaults() *UpdateSearchParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the update search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateSearchParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the update search params
func (o *UpdateSearchParams) WithTimeout(timeout time.Duration) *UpdateSearchParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update search params
func (o *UpdateSearchParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update search params
func (o *UpdateSearchParams) WithContext(ctx context.Context) *UpdateSearchParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update search params
func (o *UpdateSearchParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update search params
func (o *UpdateSearchParams) WithHTTPClient(client *http.Client) *UpdateSearchParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update search params
func (o *UpdateSearchParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the update search params
func (o *UpdateSearchParams) WithBody(body *service_model.V1Search) *UpdateSearchParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update search params
func (o *UpdateSearchParams) SetBody(body *service_model.V1Search) {
	o.Body = body
}

// WithOwner adds the owner to the update search params
func (o *UpdateSearchParams) WithOwner(owner string) *UpdateSearchParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update search params
func (o *UpdateSearchParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithSearchUUID adds the searchUUID to the update search params
func (o *UpdateSearchParams) WithSearchUUID(searchUUID string) *UpdateSearchParams {
	o.SetSearchUUID(searchUUID)
	return o
}

// SetSearchUUID adds the searchUuid to the update search params
func (o *UpdateSearchParams) SetSearchUUID(searchUUID string) {
	o.SearchUUID = searchUUID
}

// WriteToRequest writes these params to a swagger request
func (o *UpdateSearchParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param search.uuid
	if err := r.SetPathParam("search.uuid", o.SearchUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
