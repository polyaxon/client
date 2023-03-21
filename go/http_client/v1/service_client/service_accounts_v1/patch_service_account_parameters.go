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

package service_accounts_v1

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

// NewPatchServiceAccountParams creates a new PatchServiceAccountParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewPatchServiceAccountParams() *PatchServiceAccountParams {
	return &PatchServiceAccountParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewPatchServiceAccountParamsWithTimeout creates a new PatchServiceAccountParams object
// with the ability to set a timeout on a request.
func NewPatchServiceAccountParamsWithTimeout(timeout time.Duration) *PatchServiceAccountParams {
	return &PatchServiceAccountParams{
		timeout: timeout,
	}
}

// NewPatchServiceAccountParamsWithContext creates a new PatchServiceAccountParams object
// with the ability to set a context for a request.
func NewPatchServiceAccountParamsWithContext(ctx context.Context) *PatchServiceAccountParams {
	return &PatchServiceAccountParams{
		Context: ctx,
	}
}

// NewPatchServiceAccountParamsWithHTTPClient creates a new PatchServiceAccountParams object
// with the ability to set a custom HTTPClient for a request.
func NewPatchServiceAccountParamsWithHTTPClient(client *http.Client) *PatchServiceAccountParams {
	return &PatchServiceAccountParams{
		HTTPClient: client,
	}
}

/*
PatchServiceAccountParams contains all the parameters to send to the API endpoint

	for the patch service account operation.

	Typically these are written to a http.Request.
*/
type PatchServiceAccountParams struct {

	/* Body.

	   ServiceAccount body
	*/
	Body *service_model.V1ServiceAccount

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* SaUUID.

	   UUID
	*/
	SaUUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the patch service account params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchServiceAccountParams) WithDefaults() *PatchServiceAccountParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the patch service account params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *PatchServiceAccountParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the patch service account params
func (o *PatchServiceAccountParams) WithTimeout(timeout time.Duration) *PatchServiceAccountParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the patch service account params
func (o *PatchServiceAccountParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the patch service account params
func (o *PatchServiceAccountParams) WithContext(ctx context.Context) *PatchServiceAccountParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the patch service account params
func (o *PatchServiceAccountParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the patch service account params
func (o *PatchServiceAccountParams) WithHTTPClient(client *http.Client) *PatchServiceAccountParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the patch service account params
func (o *PatchServiceAccountParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the patch service account params
func (o *PatchServiceAccountParams) WithBody(body *service_model.V1ServiceAccount) *PatchServiceAccountParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the patch service account params
func (o *PatchServiceAccountParams) SetBody(body *service_model.V1ServiceAccount) {
	o.Body = body
}

// WithOwner adds the owner to the patch service account params
func (o *PatchServiceAccountParams) WithOwner(owner string) *PatchServiceAccountParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the patch service account params
func (o *PatchServiceAccountParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithSaUUID adds the saUUID to the patch service account params
func (o *PatchServiceAccountParams) WithSaUUID(saUUID string) *PatchServiceAccountParams {
	o.SetSaUUID(saUUID)
	return o
}

// SetSaUUID adds the saUuid to the patch service account params
func (o *PatchServiceAccountParams) SetSaUUID(saUUID string) {
	o.SaUUID = saUUID
}

// WriteToRequest writes these params to a swagger request
func (o *PatchServiceAccountParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	// path param sa.uuid
	if err := r.SetPathParam("sa.uuid", o.SaUUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
