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

package users_v1

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

// NewDeleteTokenParams creates a new DeleteTokenParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewDeleteTokenParams() *DeleteTokenParams {
	return &DeleteTokenParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewDeleteTokenParamsWithTimeout creates a new DeleteTokenParams object
// with the ability to set a timeout on a request.
func NewDeleteTokenParamsWithTimeout(timeout time.Duration) *DeleteTokenParams {
	return &DeleteTokenParams{
		timeout: timeout,
	}
}

// NewDeleteTokenParamsWithContext creates a new DeleteTokenParams object
// with the ability to set a context for a request.
func NewDeleteTokenParamsWithContext(ctx context.Context) *DeleteTokenParams {
	return &DeleteTokenParams{
		Context: ctx,
	}
}

// NewDeleteTokenParamsWithHTTPClient creates a new DeleteTokenParams object
// with the ability to set a custom HTTPClient for a request.
func NewDeleteTokenParamsWithHTTPClient(client *http.Client) *DeleteTokenParams {
	return &DeleteTokenParams{
		HTTPClient: client,
	}
}

/*
DeleteTokenParams contains all the parameters to send to the API endpoint

	for the delete token operation.

	Typically these are written to a http.Request.
*/
type DeleteTokenParams struct {

	/* UUID.

	   UUid of the namespace
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the delete token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeleteTokenParams) WithDefaults() *DeleteTokenParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the delete token params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeleteTokenParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the delete token params
func (o *DeleteTokenParams) WithTimeout(timeout time.Duration) *DeleteTokenParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the delete token params
func (o *DeleteTokenParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the delete token params
func (o *DeleteTokenParams) WithContext(ctx context.Context) *DeleteTokenParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the delete token params
func (o *DeleteTokenParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the delete token params
func (o *DeleteTokenParams) WithHTTPClient(client *http.Client) *DeleteTokenParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the delete token params
func (o *DeleteTokenParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithUUID adds the uuid to the delete token params
func (o *DeleteTokenParams) WithUUID(uuid string) *DeleteTokenParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the delete token params
func (o *DeleteTokenParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *DeleteTokenParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
