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

// NewRestartRunParams creates a new RestartRunParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewRestartRunParams() *RestartRunParams {
	return &RestartRunParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewRestartRunParamsWithTimeout creates a new RestartRunParams object
// with the ability to set a timeout on a request.
func NewRestartRunParamsWithTimeout(timeout time.Duration) *RestartRunParams {
	return &RestartRunParams{
		timeout: timeout,
	}
}

// NewRestartRunParamsWithContext creates a new RestartRunParams object
// with the ability to set a context for a request.
func NewRestartRunParamsWithContext(ctx context.Context) *RestartRunParams {
	return &RestartRunParams{
		Context: ctx,
	}
}

// NewRestartRunParamsWithHTTPClient creates a new RestartRunParams object
// with the ability to set a custom HTTPClient for a request.
func NewRestartRunParamsWithHTTPClient(client *http.Client) *RestartRunParams {
	return &RestartRunParams{
		HTTPClient: client,
	}
}

/*
RestartRunParams contains all the parameters to send to the API endpoint

	for the restart run operation.

	Typically these are written to a http.Request.
*/
type RestartRunParams struct {

	/* Body.

	   Run object
	*/
	Body *service_model.V1Run

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project where the run will be assigned
	*/
	Project string

	/* RunUUID.

	   UUID
	*/
	RunUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the restart run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RestartRunParams) WithDefaults() *RestartRunParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the restart run params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *RestartRunParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the restart run params
func (o *RestartRunParams) WithTimeout(timeout time.Duration) *RestartRunParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the restart run params
func (o *RestartRunParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the restart run params
func (o *RestartRunParams) WithContext(ctx context.Context) *RestartRunParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the restart run params
func (o *RestartRunParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the restart run params
func (o *RestartRunParams) WithHTTPClient(client *http.Client) *RestartRunParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the restart run params
func (o *RestartRunParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the restart run params
func (o *RestartRunParams) WithBody(body *service_model.V1Run) *RestartRunParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the restart run params
func (o *RestartRunParams) SetBody(body *service_model.V1Run) {
	o.Body = body
}

// WithOwner adds the owner to the restart run params
func (o *RestartRunParams) WithOwner(owner string) *RestartRunParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the restart run params
func (o *RestartRunParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the restart run params
func (o *RestartRunParams) WithProject(project string) *RestartRunParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the restart run params
func (o *RestartRunParams) SetProject(project string) {
	o.Project = project
}

// WithRunUUID adds the runUUID to the restart run params
func (o *RestartRunParams) WithRunUUID(runUUID string) *RestartRunParams {
	o.SetRunUUID(runUUID)
	return o
}

// SetRunUUID adds the runUuid to the restart run params
func (o *RestartRunParams) SetRunUUID(runUUID string) {
	o.RunUUID = runUUID
}

// WriteToRequest writes these params to a swagger request
func (o *RestartRunParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param run.uuid
	if err := r.SetPathParam("run.uuid", o.RunUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
