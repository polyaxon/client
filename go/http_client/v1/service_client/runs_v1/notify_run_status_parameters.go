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

// NewNotifyRunStatusParams creates a new NotifyRunStatusParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewNotifyRunStatusParams() *NotifyRunStatusParams {
	return &NotifyRunStatusParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewNotifyRunStatusParamsWithTimeout creates a new NotifyRunStatusParams object
// with the ability to set a timeout on a request.
func NewNotifyRunStatusParamsWithTimeout(timeout time.Duration) *NotifyRunStatusParams {
	return &NotifyRunStatusParams{
		timeout: timeout,
	}
}

// NewNotifyRunStatusParamsWithContext creates a new NotifyRunStatusParams object
// with the ability to set a context for a request.
func NewNotifyRunStatusParamsWithContext(ctx context.Context) *NotifyRunStatusParams {
	return &NotifyRunStatusParams{
		Context: ctx,
	}
}

// NewNotifyRunStatusParamsWithHTTPClient creates a new NotifyRunStatusParams object
// with the ability to set a custom HTTPClient for a request.
func NewNotifyRunStatusParamsWithHTTPClient(client *http.Client) *NotifyRunStatusParams {
	return &NotifyRunStatusParams{
		HTTPClient: client,
	}
}

/*
NotifyRunStatusParams contains all the parameters to send to the API endpoint

	for the notify run status operation.

	Typically these are written to a http.Request.
*/
type NotifyRunStatusParams struct {

	// Body.
	Body *service_model.V1EntityNotificationBody

	/* Namespace.

	   Na,espace
	*/
	Namespace string

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

// WithDefaults hydrates default values in the notify run status params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NotifyRunStatusParams) WithDefaults() *NotifyRunStatusParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the notify run status params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *NotifyRunStatusParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the notify run status params
func (o *NotifyRunStatusParams) WithTimeout(timeout time.Duration) *NotifyRunStatusParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the notify run status params
func (o *NotifyRunStatusParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the notify run status params
func (o *NotifyRunStatusParams) WithContext(ctx context.Context) *NotifyRunStatusParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the notify run status params
func (o *NotifyRunStatusParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the notify run status params
func (o *NotifyRunStatusParams) WithHTTPClient(client *http.Client) *NotifyRunStatusParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the notify run status params
func (o *NotifyRunStatusParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the notify run status params
func (o *NotifyRunStatusParams) WithBody(body *service_model.V1EntityNotificationBody) *NotifyRunStatusParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the notify run status params
func (o *NotifyRunStatusParams) SetBody(body *service_model.V1EntityNotificationBody) {
	o.Body = body
}

// WithNamespace adds the namespace to the notify run status params
func (o *NotifyRunStatusParams) WithNamespace(namespace string) *NotifyRunStatusParams {
	o.SetNamespace(namespace)
	return o
}

// SetNamespace adds the namespace to the notify run status params
func (o *NotifyRunStatusParams) SetNamespace(namespace string) {
	o.Namespace = namespace
}

// WithOwner adds the owner to the notify run status params
func (o *NotifyRunStatusParams) WithOwner(owner string) *NotifyRunStatusParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the notify run status params
func (o *NotifyRunStatusParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the notify run status params
func (o *NotifyRunStatusParams) WithProject(project string) *NotifyRunStatusParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the notify run status params
func (o *NotifyRunStatusParams) SetProject(project string) {
	o.Project = project
}

// WithUUID adds the uuid to the notify run status params
func (o *NotifyRunStatusParams) WithUUID(uuid string) *NotifyRunStatusParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the notify run status params
func (o *NotifyRunStatusParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *NotifyRunStatusParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
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
