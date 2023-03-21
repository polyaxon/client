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

package projects_v1

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

// NewCreateVersionParams creates a new CreateVersionParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCreateVersionParams() *CreateVersionParams {
	return &CreateVersionParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCreateVersionParamsWithTimeout creates a new CreateVersionParams object
// with the ability to set a timeout on a request.
func NewCreateVersionParamsWithTimeout(timeout time.Duration) *CreateVersionParams {
	return &CreateVersionParams{
		timeout: timeout,
	}
}

// NewCreateVersionParamsWithContext creates a new CreateVersionParams object
// with the ability to set a context for a request.
func NewCreateVersionParamsWithContext(ctx context.Context) *CreateVersionParams {
	return &CreateVersionParams{
		Context: ctx,
	}
}

// NewCreateVersionParamsWithHTTPClient creates a new CreateVersionParams object
// with the ability to set a custom HTTPClient for a request.
func NewCreateVersionParamsWithHTTPClient(client *http.Client) *CreateVersionParams {
	return &CreateVersionParams{
		HTTPClient: client,
	}
}

/*
CreateVersionParams contains all the parameters to send to the API endpoint

	for the create version operation.

	Typically these are written to a http.Request.
*/
type CreateVersionParams struct {

	/* Body.

	   Project version body
	*/
	Body *service_model.V1ProjectVersion

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Project.

	   Project name
	*/
	Project string

	/* VersionKind.

	   Optional kind to tell the kind of this version
	*/
	VersionKind string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the create version params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateVersionParams) WithDefaults() *CreateVersionParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the create version params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateVersionParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the create version params
func (o *CreateVersionParams) WithTimeout(timeout time.Duration) *CreateVersionParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create version params
func (o *CreateVersionParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create version params
func (o *CreateVersionParams) WithContext(ctx context.Context) *CreateVersionParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create version params
func (o *CreateVersionParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create version params
func (o *CreateVersionParams) WithHTTPClient(client *http.Client) *CreateVersionParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create version params
func (o *CreateVersionParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the create version params
func (o *CreateVersionParams) WithBody(body *service_model.V1ProjectVersion) *CreateVersionParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the create version params
func (o *CreateVersionParams) SetBody(body *service_model.V1ProjectVersion) {
	o.Body = body
}

// WithOwner adds the owner to the create version params
func (o *CreateVersionParams) WithOwner(owner string) *CreateVersionParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the create version params
func (o *CreateVersionParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the create version params
func (o *CreateVersionParams) WithProject(project string) *CreateVersionParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the create version params
func (o *CreateVersionParams) SetProject(project string) {
	o.Project = project
}

// WithVersionKind adds the versionKind to the create version params
func (o *CreateVersionParams) WithVersionKind(versionKind string) *CreateVersionParams {
	o.SetVersionKind(versionKind)
	return o
}

// SetVersionKind adds the versionKind to the create version params
func (o *CreateVersionParams) SetVersionKind(versionKind string) {
	o.VersionKind = versionKind
}

// WriteToRequest writes these params to a swagger request
func (o *CreateVersionParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param version.kind
	if err := r.SetPathParam("version.kind", o.VersionKind); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
