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

package project_searches_v1

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

// NewPromoteProjectSearchParams creates a new PromoteProjectSearchParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPromoteProjectSearchParams() *PromoteProjectSearchParams {
	return &PromoteProjectSearchParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPromoteProjectSearchParamsWithTimeout creates a new PromoteProjectSearchParams object
// with the ability to set a timeout on a request.
func NewPromoteProjectSearchParamsWithTimeout(timeout time.Duration) *PromoteProjectSearchParams {
	return &PromoteProjectSearchParams{
		timeout: timeout,
	}
}

// NewPromoteProjectSearchParamsWithContext creates a new PromoteProjectSearchParams object
// with the ability to set a context for a request.
func NewPromoteProjectSearchParamsWithContext(ctx context.Context) *PromoteProjectSearchParams {
	return &PromoteProjectSearchParams{
		Context: ctx,
	}
}

// NewPromoteProjectSearchParamsWithHTTPClient creates a new PromoteProjectSearchParams object
// with the ability to set a custom HTTPClient for a request.
func NewPromoteProjectSearchParamsWithHTTPClient(client *http.Client) *PromoteProjectSearchParams {
	return &PromoteProjectSearchParams{
		HTTPClient: client,
	}
}

/*
PromoteProjectSearchParams contains all the parameters to send to the API endpoint

	for the promote project search operation.

	Typically these are written to a http.Request.
*/
type PromoteProjectSearchParams struct {

	/* Entity.

	   Entity: project name, hub name, registry name, ...
	*/
	Entity string

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* UUID.

	   Uuid identifier of the sub-entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the promote project search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PromoteProjectSearchParams) WithDefaults() *PromoteProjectSearchParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the promote project search params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PromoteProjectSearchParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the promote project search params
func (o *PromoteProjectSearchParams) WithTimeout(timeout time.Duration) *PromoteProjectSearchParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the promote project search params
func (o *PromoteProjectSearchParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the promote project search params
func (o *PromoteProjectSearchParams) WithContext(ctx context.Context) *PromoteProjectSearchParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the promote project search params
func (o *PromoteProjectSearchParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the promote project search params
func (o *PromoteProjectSearchParams) WithHTTPClient(client *http.Client) *PromoteProjectSearchParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the promote project search params
func (o *PromoteProjectSearchParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEntity adds the entity to the promote project search params
func (o *PromoteProjectSearchParams) WithEntity(entity string) *PromoteProjectSearchParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the promote project search params
func (o *PromoteProjectSearchParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithOwner adds the owner to the promote project search params
func (o *PromoteProjectSearchParams) WithOwner(owner string) *PromoteProjectSearchParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the promote project search params
func (o *PromoteProjectSearchParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUUID adds the uuid to the promote project search params
func (o *PromoteProjectSearchParams) WithUUID(uuid string) *PromoteProjectSearchParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the promote project search params
func (o *PromoteProjectSearchParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *PromoteProjectSearchParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param entity
	if err := r.SetPathParam("entity", o.Entity); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
