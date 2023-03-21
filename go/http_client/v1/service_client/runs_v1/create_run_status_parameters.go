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

// NewCreateRunStatusParams creates a new CreateRunStatusParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCreateRunStatusParams() *CreateRunStatusParams {
	return &CreateRunStatusParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCreateRunStatusParamsWithTimeout creates a new CreateRunStatusParams object
// with the ability to set a timeout on a request.
func NewCreateRunStatusParamsWithTimeout(timeout time.Duration) *CreateRunStatusParams {
	return &CreateRunStatusParams{
		timeout: timeout,
	}
}

// NewCreateRunStatusParamsWithContext creates a new CreateRunStatusParams object
// with the ability to set a context for a request.
func NewCreateRunStatusParamsWithContext(ctx context.Context) *CreateRunStatusParams {
	return &CreateRunStatusParams{
		Context: ctx,
	}
}

// NewCreateRunStatusParamsWithHTTPClient creates a new CreateRunStatusParams object
// with the ability to set a custom HTTPClient for a request.
func NewCreateRunStatusParamsWithHTTPClient(client *http.Client) *CreateRunStatusParams {
	return &CreateRunStatusParams{
		HTTPClient: client,
	}
}

/*
CreateRunStatusParams contains all the parameters to send to the API endpoint

	for the create run status operation.

	Typically these are written to a http.Request.
*/
type CreateRunStatusParams struct {

	// Body.
	Body *service_model.V1EntityStatusBodyRequest

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project where the run will be assigned
	*/
	Project string

	/* UUID.

	   Uuid identifier of the entity
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the create run status params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateRunStatusParams) WithDefaults() *CreateRunStatusParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the create run status params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateRunStatusParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the create run status params
func (o *CreateRunStatusParams) WithTimeout(timeout time.Duration) *CreateRunStatusParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create run status params
func (o *CreateRunStatusParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create run status params
func (o *CreateRunStatusParams) WithContext(ctx context.Context) *CreateRunStatusParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create run status params
func (o *CreateRunStatusParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create run status params
func (o *CreateRunStatusParams) WithHTTPClient(client *http.Client) *CreateRunStatusParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create run status params
func (o *CreateRunStatusParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the create run status params
func (o *CreateRunStatusParams) WithBody(body *service_model.V1EntityStatusBodyRequest) *CreateRunStatusParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the create run status params
func (o *CreateRunStatusParams) SetBody(body *service_model.V1EntityStatusBodyRequest) {
	o.Body = body
}

// WithOwner adds the owner to the create run status params
func (o *CreateRunStatusParams) WithOwner(owner string) *CreateRunStatusParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the create run status params
func (o *CreateRunStatusParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the create run status params
func (o *CreateRunStatusParams) WithProject(project string) *CreateRunStatusParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the create run status params
func (o *CreateRunStatusParams) SetProject(project string) {
	o.Project = project
}

// WithUUID adds the uuid to the create run status params
func (o *CreateRunStatusParams) WithUUID(uuid string) *CreateRunStatusParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the create run status params
func (o *CreateRunStatusParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *CreateRunStatusParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
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
