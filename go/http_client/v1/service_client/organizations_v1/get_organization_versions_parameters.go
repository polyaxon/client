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
	"github.com/go-openapi/swag"
)

// NewGetOrganizationVersionsParams creates a new GetOrganizationVersionsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetOrganizationVersionsParams() *GetOrganizationVersionsParams {
	return &GetOrganizationVersionsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetOrganizationVersionsParamsWithTimeout creates a new GetOrganizationVersionsParams object
// with the ability to set a timeout on a request.
func NewGetOrganizationVersionsParamsWithTimeout(timeout time.Duration) *GetOrganizationVersionsParams {
	return &GetOrganizationVersionsParams{
		timeout: timeout,
	}
}

// NewGetOrganizationVersionsParamsWithContext creates a new GetOrganizationVersionsParams object
// with the ability to set a context for a request.
func NewGetOrganizationVersionsParamsWithContext(ctx context.Context) *GetOrganizationVersionsParams {
	return &GetOrganizationVersionsParams{
		Context: ctx,
	}
}

// NewGetOrganizationVersionsParamsWithHTTPClient creates a new GetOrganizationVersionsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetOrganizationVersionsParamsWithHTTPClient(client *http.Client) *GetOrganizationVersionsParams {
	return &GetOrganizationVersionsParams{
		HTTPClient: client,
	}
}

/*
GetOrganizationVersionsParams contains all the parameters to send to the API endpoint

	for the get organization versions operation.

	Typically these are written to a http.Request.
*/
type GetOrganizationVersionsParams struct {

	/* Kind.

	   Version Kind
	*/
	Kind string

	/* Limit.

	   Limit size.

	   Format: int32
	*/
	Limit *int32

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

// WithDefaults hydrates default values in the get organization versions params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationVersionsParams) WithDefaults() *GetOrganizationVersionsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get organization versions params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetOrganizationVersionsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get organization versions params
func (o *GetOrganizationVersionsParams) WithTimeout(timeout time.Duration) *GetOrganizationVersionsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get organization versions params
func (o *GetOrganizationVersionsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get organization versions params
func (o *GetOrganizationVersionsParams) WithContext(ctx context.Context) *GetOrganizationVersionsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get organization versions params
func (o *GetOrganizationVersionsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get organization versions params
func (o *GetOrganizationVersionsParams) WithHTTPClient(client *http.Client) *GetOrganizationVersionsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get organization versions params
func (o *GetOrganizationVersionsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithKind adds the kind to the get organization versions params
func (o *GetOrganizationVersionsParams) WithKind(kind string) *GetOrganizationVersionsParams {
	o.SetKind(kind)
	return o
}

// SetKind adds the kind to the get organization versions params
func (o *GetOrganizationVersionsParams) SetKind(kind string) {
	o.Kind = kind
}

// WithLimit adds the limit to the get organization versions params
func (o *GetOrganizationVersionsParams) WithLimit(limit *int32) *GetOrganizationVersionsParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the get organization versions params
func (o *GetOrganizationVersionsParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithNoPage adds the noPage to the get organization versions params
func (o *GetOrganizationVersionsParams) WithNoPage(noPage *bool) *GetOrganizationVersionsParams {
	o.SetNoPage(noPage)
	return o
}

// SetNoPage adds the noPage to the get organization versions params
func (o *GetOrganizationVersionsParams) SetNoPage(noPage *bool) {
	o.NoPage = noPage
}

// WithOffset adds the offset to the get organization versions params
func (o *GetOrganizationVersionsParams) WithOffset(offset *int32) *GetOrganizationVersionsParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the get organization versions params
func (o *GetOrganizationVersionsParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the get organization versions params
func (o *GetOrganizationVersionsParams) WithOwner(owner string) *GetOrganizationVersionsParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get organization versions params
func (o *GetOrganizationVersionsParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithQuery adds the query to the get organization versions params
func (o *GetOrganizationVersionsParams) WithQuery(query *string) *GetOrganizationVersionsParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the get organization versions params
func (o *GetOrganizationVersionsParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the get organization versions params
func (o *GetOrganizationVersionsParams) WithSort(sort *string) *GetOrganizationVersionsParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the get organization versions params
func (o *GetOrganizationVersionsParams) SetSort(sort *string) {
	o.Sort = sort
}

// WriteToRequest writes these params to a swagger request
func (o *GetOrganizationVersionsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param kind
	if err := r.SetPathParam("kind", o.Kind); err != nil {
		return err
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
