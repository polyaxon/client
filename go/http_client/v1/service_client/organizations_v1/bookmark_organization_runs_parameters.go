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

package organizations_v1

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

// NewBookmarkOrganizationRunsParams creates a new BookmarkOrganizationRunsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewBookmarkOrganizationRunsParams() *BookmarkOrganizationRunsParams {
	return &BookmarkOrganizationRunsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewBookmarkOrganizationRunsParamsWithTimeout creates a new BookmarkOrganizationRunsParams object
// with the ability to set a timeout on a request.
func NewBookmarkOrganizationRunsParamsWithTimeout(timeout time.Duration) *BookmarkOrganizationRunsParams {
	return &BookmarkOrganizationRunsParams{
		timeout: timeout,
	}
}

// NewBookmarkOrganizationRunsParamsWithContext creates a new BookmarkOrganizationRunsParams object
// with the ability to set a context for a request.
func NewBookmarkOrganizationRunsParamsWithContext(ctx context.Context) *BookmarkOrganizationRunsParams {
	return &BookmarkOrganizationRunsParams{
		Context: ctx,
	}
}

// NewBookmarkOrganizationRunsParamsWithHTTPClient creates a new BookmarkOrganizationRunsParams object
// with the ability to set a custom HTTPClient for a request.
func NewBookmarkOrganizationRunsParamsWithHTTPClient(client *http.Client) *BookmarkOrganizationRunsParams {
	return &BookmarkOrganizationRunsParams{
		HTTPClient: client,
	}
}

/*
BookmarkOrganizationRunsParams contains all the parameters to send to the API endpoint

	for the bookmark organization runs operation.

	Typically these are written to a http.Request.
*/
type BookmarkOrganizationRunsParams struct {

	/* Body.

	   Uuids of the entities
	*/
	Body *service_model.V1Uuids

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the bookmark organization runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *BookmarkOrganizationRunsParams) WithDefaults() *BookmarkOrganizationRunsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the bookmark organization runs params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *BookmarkOrganizationRunsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) WithTimeout(timeout time.Duration) *BookmarkOrganizationRunsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) WithContext(ctx context.Context) *BookmarkOrganizationRunsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) WithHTTPClient(client *http.Client) *BookmarkOrganizationRunsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) WithBody(body *service_model.V1Uuids) *BookmarkOrganizationRunsParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) SetBody(body *service_model.V1Uuids) {
	o.Body = body
}

// WithOwner adds the owner to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) WithOwner(owner string) *BookmarkOrganizationRunsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the bookmark organization runs params
func (o *BookmarkOrganizationRunsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *BookmarkOrganizationRunsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
