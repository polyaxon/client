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

package queues_v1

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
	"github.com/go-openapi/swag"
)

// NewListQueuesParams creates a new ListQueuesParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewListQueuesParams() *ListQueuesParams {
	return &ListQueuesParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewListQueuesParamsWithTimeout creates a new ListQueuesParams object
// with the ability to set a timeout on a request.
func NewListQueuesParamsWithTimeout(timeout time.Duration) *ListQueuesParams {
	return &ListQueuesParams{
		timeout: timeout,
	}
}

// NewListQueuesParamsWithContext creates a new ListQueuesParams object
// with the ability to set a context for a request.
func NewListQueuesParamsWithContext(ctx context.Context) *ListQueuesParams {
	return &ListQueuesParams{
		Context: ctx,
	}
}

// NewListQueuesParamsWithHTTPClient creates a new ListQueuesParams object
// with the ability to set a custom HTTPClient for a request.
func NewListQueuesParamsWithHTTPClient(client *http.Client) *ListQueuesParams {
	return &ListQueuesParams{
		HTTPClient: client,
	}
}

/*
ListQueuesParams contains all the parameters to send to the API endpoint

	for the list queues operation.

	Typically these are written to a http.Request.
*/
type ListQueuesParams struct {

	/* Bookmarks.

	   Filter by bookmarks.
	*/
	Bookmarks *bool

	/* Limit.

	   Limit size.

	   Format: int32
	*/
	Limit *int32

	/* Mode.

	   Mode of the search.
	*/
	Mode *string

	/* Name.

	   Entity managing the resource
	*/
	Name string

	/* NoPage.

	   No pagination.
	*/
	NoPage *bool

	/* Offset.

	   Pagination offset.

	   Format: int32
	*/
	Offset *int32

	/* Owner.

	   Owner of the namespace
	*/
	Owner string

	/* Query.

	   Query filter the search.
	*/
	Query *string

	/* Sort.

	   Sort to order the search.
	*/
	Sort *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the list queues params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListQueuesParams) WithDefaults() *ListQueuesParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the list queues params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *ListQueuesParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the list queues params
func (o *ListQueuesParams) WithTimeout(timeout time.Duration) *ListQueuesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the list queues params
func (o *ListQueuesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the list queues params
func (o *ListQueuesParams) WithContext(ctx context.Context) *ListQueuesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the list queues params
func (o *ListQueuesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the list queues params
func (o *ListQueuesParams) WithHTTPClient(client *http.Client) *ListQueuesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the list queues params
func (o *ListQueuesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBookmarks adds the bookmarks to the list queues params
func (o *ListQueuesParams) WithBookmarks(bookmarks *bool) *ListQueuesParams {
	o.SetBookmarks(bookmarks)
	return o
}

// SetBookmarks adds the bookmarks to the list queues params
func (o *ListQueuesParams) SetBookmarks(bookmarks *bool) {
	o.Bookmarks = bookmarks
}

// WithLimit adds the limit to the list queues params
func (o *ListQueuesParams) WithLimit(limit *int32) *ListQueuesParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the list queues params
func (o *ListQueuesParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithMode adds the mode to the list queues params
func (o *ListQueuesParams) WithMode(mode *string) *ListQueuesParams {
	o.SetMode(mode)
	return o
}

// SetMode adds the mode to the list queues params
func (o *ListQueuesParams) SetMode(mode *string) {
	o.Mode = mode
}

// WithName adds the name to the list queues params
func (o *ListQueuesParams) WithName(name string) *ListQueuesParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the list queues params
func (o *ListQueuesParams) SetName(name string) {
	o.Name = name
}

// WithNoPage adds the noPage to the list queues params
func (o *ListQueuesParams) WithNoPage(noPage *bool) *ListQueuesParams {
	o.SetNoPage(noPage)
	return o
}

// SetNoPage adds the noPage to the list queues params
func (o *ListQueuesParams) SetNoPage(noPage *bool) {
	o.NoPage = noPage
}

// WithOffset adds the offset to the list queues params
func (o *ListQueuesParams) WithOffset(offset *int32) *ListQueuesParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the list queues params
func (o *ListQueuesParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the list queues params
func (o *ListQueuesParams) WithOwner(owner string) *ListQueuesParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the list queues params
func (o *ListQueuesParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithQuery adds the query to the list queues params
func (o *ListQueuesParams) WithQuery(query *string) *ListQueuesParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the list queues params
func (o *ListQueuesParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the list queues params
func (o *ListQueuesParams) WithSort(sort *string) *ListQueuesParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the list queues params
func (o *ListQueuesParams) SetSort(sort *string) {
	o.Sort = sort
}

// WriteToRequest writes these params to a swagger request
func (o *ListQueuesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Bookmarks != nil {

		// query param bookmarks
		var qrBookmarks bool

		if o.Bookmarks != nil {
			qrBookmarks = *o.Bookmarks
		}
		qBookmarks := swag.FormatBool(qrBookmarks)
		if qBookmarks != "" {

			if err := r.SetQueryParam("bookmarks", qBookmarks); err != nil {
				return err
			}
		}
	}

	if o.Limit != nil {

		// query param limit
		var qrLimit int32

		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt32(qrLimit)
		if qLimit != "" {

			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}
	}

	if o.Mode != nil {

		// query param mode
		var qrMode string

		if o.Mode != nil {
			qrMode = *o.Mode
		}
		qMode := qrMode
		if qMode != "" {

			if err := r.SetQueryParam("mode", qMode); err != nil {
				return err
			}
		}
	}

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	if o.NoPage != nil {

		// query param no_page
		var qrNoPage bool

		if o.NoPage != nil {
			qrNoPage = *o.NoPage
		}
		qNoPage := swag.FormatBool(qrNoPage)
		if qNoPage != "" {

			if err := r.SetQueryParam("no_page", qNoPage); err != nil {
				return err
			}
		}
	}

	if o.Offset != nil {

		// query param offset
		var qrOffset int32

		if o.Offset != nil {
			qrOffset = *o.Offset
		}
		qOffset := swag.FormatInt32(qrOffset)
		if qOffset != "" {

			if err := r.SetQueryParam("offset", qOffset); err != nil {
				return err
			}
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if o.Query != nil {

		// query param query
		var qrQuery string

		if o.Query != nil {
			qrQuery = *o.Query
		}
		qQuery := qrQuery
		if qQuery != "" {

			if err := r.SetQueryParam("query", qQuery); err != nil {
				return err
			}
		}
	}

	if o.Sort != nil {

		// query param sort
		var qrSort string

		if o.Sort != nil {
			qrSort = *o.Sort
		}
		qSort := qrSort
		if qSort != "" {

			if err := r.SetQueryParam("sort", qSort); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
