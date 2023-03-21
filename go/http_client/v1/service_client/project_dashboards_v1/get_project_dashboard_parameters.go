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

package project_dashboards_v1

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

// NewGetProjectDashboardParams creates a new GetProjectDashboardParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetProjectDashboardParams() *GetProjectDashboardParams {
	return &GetProjectDashboardParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetProjectDashboardParamsWithTimeout creates a new GetProjectDashboardParams object
// with the ability to set a timeout on a request.
func NewGetProjectDashboardParamsWithTimeout(timeout time.Duration) *GetProjectDashboardParams {
	return &GetProjectDashboardParams{
		timeout: timeout,
	}
}

// NewGetProjectDashboardParamsWithContext creates a new GetProjectDashboardParams object
// with the ability to set a context for a request.
func NewGetProjectDashboardParamsWithContext(ctx context.Context) *GetProjectDashboardParams {
	return &GetProjectDashboardParams{
		Context: ctx,
	}
}

// NewGetProjectDashboardParamsWithHTTPClient creates a new GetProjectDashboardParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetProjectDashboardParamsWithHTTPClient(client *http.Client) *GetProjectDashboardParams {
	return &GetProjectDashboardParams{
		HTTPClient: client,
	}
}

/*
GetProjectDashboardParams contains all the parameters to send to the API endpoint

	for the get project dashboard operation.

	Typically these are written to a http.Request.
*/
type GetProjectDashboardParams struct {

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

// WithDefaults hydrates default values in the get project dashboard params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetProjectDashboardParams) WithDefaults() *GetProjectDashboardParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get project dashboard params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetProjectDashboardParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get project dashboard params
func (o *GetProjectDashboardParams) WithTimeout(timeout time.Duration) *GetProjectDashboardParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get project dashboard params
func (o *GetProjectDashboardParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get project dashboard params
func (o *GetProjectDashboardParams) WithContext(ctx context.Context) *GetProjectDashboardParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get project dashboard params
func (o *GetProjectDashboardParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get project dashboard params
func (o *GetProjectDashboardParams) WithHTTPClient(client *http.Client) *GetProjectDashboardParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get project dashboard params
func (o *GetProjectDashboardParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEntity adds the entity to the get project dashboard params
func (o *GetProjectDashboardParams) WithEntity(entity string) *GetProjectDashboardParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the get project dashboard params
func (o *GetProjectDashboardParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithOwner adds the owner to the get project dashboard params
func (o *GetProjectDashboardParams) WithOwner(owner string) *GetProjectDashboardParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get project dashboard params
func (o *GetProjectDashboardParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithUUID adds the uuid to the get project dashboard params
func (o *GetProjectDashboardParams) WithUUID(uuid string) *GetProjectDashboardParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get project dashboard params
func (o *GetProjectDashboardParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetProjectDashboardParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
