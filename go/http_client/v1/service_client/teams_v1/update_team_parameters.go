// Copyright 2018-2021 Polyaxon, Inc.
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

package teams_v1

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

// NewUpdateTeamParams creates a new UpdateTeamParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewUpdateTeamParams() *UpdateTeamParams {
	return &UpdateTeamParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewUpdateTeamParamsWithTimeout creates a new UpdateTeamParams object
// with the ability to set a timeout on a request.
func NewUpdateTeamParamsWithTimeout(timeout time.Duration) *UpdateTeamParams {
	return &UpdateTeamParams{
		timeout: timeout,
	}
}

// NewUpdateTeamParamsWithContext creates a new UpdateTeamParams object
// with the ability to set a context for a request.
func NewUpdateTeamParamsWithContext(ctx context.Context) *UpdateTeamParams {
	return &UpdateTeamParams{
		Context: ctx,
	}
}

// NewUpdateTeamParamsWithHTTPClient creates a new UpdateTeamParams object
// with the ability to set a custom HTTPClient for a request.
func NewUpdateTeamParamsWithHTTPClient(client *http.Client) *UpdateTeamParams {
	return &UpdateTeamParams{
		HTTPClient: client,
	}
}

/* UpdateTeamParams contains all the parameters to send to the API endpoint
   for the update team operation.

   Typically these are written to a http.Request.
*/
type UpdateTeamParams struct {

	/* Body.

	   Team body
	*/
	Body *service_model.V1Team

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* TeamName.

	   Name
	*/
	TeamName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the update team params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateTeamParams) WithDefaults() *UpdateTeamParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the update team params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *UpdateTeamParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the update team params
func (o *UpdateTeamParams) WithTimeout(timeout time.Duration) *UpdateTeamParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update team params
func (o *UpdateTeamParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update team params
func (o *UpdateTeamParams) WithContext(ctx context.Context) *UpdateTeamParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update team params
func (o *UpdateTeamParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update team params
func (o *UpdateTeamParams) WithHTTPClient(client *http.Client) *UpdateTeamParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update team params
func (o *UpdateTeamParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the update team params
func (o *UpdateTeamParams) WithBody(body *service_model.V1Team) *UpdateTeamParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update team params
func (o *UpdateTeamParams) SetBody(body *service_model.V1Team) {
	o.Body = body
}

// WithOwner adds the owner to the update team params
func (o *UpdateTeamParams) WithOwner(owner string) *UpdateTeamParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update team params
func (o *UpdateTeamParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithTeamName adds the teamName to the update team params
func (o *UpdateTeamParams) WithTeamName(teamName string) *UpdateTeamParams {
	o.SetTeamName(teamName)
	return o
}

// SetTeamName adds the teamName to the update team params
func (o *UpdateTeamParams) SetTeamName(teamName string) {
	o.TeamName = teamName
}

// WriteToRequest writes these params to a swagger request
func (o *UpdateTeamParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param team.name
	if err := r.SetPathParam("team.name", o.TeamName); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
