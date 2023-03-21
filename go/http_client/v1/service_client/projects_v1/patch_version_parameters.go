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

// NewPatchVersionParams creates a new PatchVersionParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPatchVersionParams() *PatchVersionParams {
	return &PatchVersionParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPatchVersionParamsWithTimeout creates a new PatchVersionParams object
// with the ability to set a timeout on a request.
func NewPatchVersionParamsWithTimeout(timeout time.Duration) *PatchVersionParams {
	return &PatchVersionParams{
		timeout: timeout,
	}
}

// NewPatchVersionParamsWithContext creates a new PatchVersionParams object
// with the ability to set a context for a request.
func NewPatchVersionParamsWithContext(ctx context.Context) *PatchVersionParams {
	return &PatchVersionParams{
		Context: ctx,
	}
}

// NewPatchVersionParamsWithHTTPClient creates a new PatchVersionParams object
// with the ability to set a custom HTTPClient for a request.
func NewPatchVersionParamsWithHTTPClient(client *http.Client) *PatchVersionParams {
	return &PatchVersionParams{
		HTTPClient: client,
	}
}

/*
PatchVersionParams contains all the parameters to send to the API endpoint

	for the patch version operation.

	Typically these are written to a http.Request.
*/
type PatchVersionParams struct {

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

	/* VersionName.

	   Optional component name, should be a valid fully qualified value: name[:version]
	*/
	VersionName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the patch version params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchVersionParams) WithDefaults() *PatchVersionParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the patch version params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchVersionParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the patch version params
func (o *PatchVersionParams) WithTimeout(timeout time.Duration) *PatchVersionParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the patch version params
func (o *PatchVersionParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the patch version params
func (o *PatchVersionParams) WithContext(ctx context.Context) *PatchVersionParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the patch version params
func (o *PatchVersionParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the patch version params
func (o *PatchVersionParams) WithHTTPClient(client *http.Client) *PatchVersionParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the patch version params
func (o *PatchVersionParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the patch version params
func (o *PatchVersionParams) WithBody(body *service_model.V1ProjectVersion) *PatchVersionParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the patch version params
func (o *PatchVersionParams) SetBody(body *service_model.V1ProjectVersion) {
	o.Body = body
}

// WithOwner adds the owner to the patch version params
func (o *PatchVersionParams) WithOwner(owner string) *PatchVersionParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the patch version params
func (o *PatchVersionParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the patch version params
func (o *PatchVersionParams) WithProject(project string) *PatchVersionParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the patch version params
func (o *PatchVersionParams) SetProject(project string) {
	o.Project = project
}

// WithVersionKind adds the versionKind to the patch version params
func (o *PatchVersionParams) WithVersionKind(versionKind string) *PatchVersionParams {
	o.SetVersionKind(versionKind)
	return o
}

// SetVersionKind adds the versionKind to the patch version params
func (o *PatchVersionParams) SetVersionKind(versionKind string) {
	o.VersionKind = versionKind
}

// WithVersionName adds the versionName to the patch version params
func (o *PatchVersionParams) WithVersionName(versionName string) *PatchVersionParams {
	o.SetVersionName(versionName)
	return o
}

// SetVersionName adds the versionName to the patch version params
func (o *PatchVersionParams) SetVersionName(versionName string) {
	o.VersionName = versionName
}

// WriteToRequest writes these params to a swagger request
func (o *PatchVersionParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param version.name
	if err := r.SetPathParam("version.name", o.VersionName); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
