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
	"github.com/go-openapi/swag"
)

// NewGetRunClonesLineageParams creates a new GetRunClonesLineageParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetRunClonesLineageParams() *GetRunClonesLineageParams {
	return &GetRunClonesLineageParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetRunClonesLineageParamsWithTimeout creates a new GetRunClonesLineageParams object
// with the ability to set a timeout on a request.
func NewGetRunClonesLineageParamsWithTimeout(timeout time.Duration) *GetRunClonesLineageParams {
	return &GetRunClonesLineageParams{
		timeout: timeout,
	}
}

// NewGetRunClonesLineageParamsWithContext creates a new GetRunClonesLineageParams object
// with the ability to set a context for a request.
func NewGetRunClonesLineageParamsWithContext(ctx context.Context) *GetRunClonesLineageParams {
	return &GetRunClonesLineageParams{
		Context: ctx,
	}
}

// NewGetRunClonesLineageParamsWithHTTPClient creates a new GetRunClonesLineageParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetRunClonesLineageParamsWithHTTPClient(client *http.Client) *GetRunClonesLineageParams {
	return &GetRunClonesLineageParams{
		HTTPClient: client,
	}
}

/*
GetRunClonesLineageParams contains all the parameters to send to the API endpoint

	for the get run clones lineage operation.

	Typically these are written to a http.Request.
*/
type GetRunClonesLineageParams struct {

	/* Entity.

	   Entity name under namespace
	*/
	Entity string

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

	/* UUID.

	   SubEntity uuid
	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get run clones lineage params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunClonesLineageParams) WithDefaults() *GetRunClonesLineageParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get run clones lineage params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetRunClonesLineageParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithTimeout(timeout time.Duration) *GetRunClonesLineageParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithContext(ctx context.Context) *GetRunClonesLineageParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithHTTPClient(client *http.Client) *GetRunClonesLineageParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEntity adds the entity to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithEntity(entity string) *GetRunClonesLineageParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithLimit adds the limit to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithLimit(limit *int32) *GetRunClonesLineageParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetLimit(limit *int32) {
	o.Limit = limit
}

// WithNoPage adds the noPage to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithNoPage(noPage *bool) *GetRunClonesLineageParams {
	o.SetNoPage(noPage)
	return o
}

// SetNoPage adds the noPage to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetNoPage(noPage *bool) {
	o.NoPage = noPage
}

// WithOffset adds the offset to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithOffset(offset *int32) *GetRunClonesLineageParams {
	o.SetOffset(offset)
	return o
}

// SetOffset adds the offset to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetOffset(offset *int32) {
	o.Offset = offset
}

// WithOwner adds the owner to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithOwner(owner string) *GetRunClonesLineageParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithQuery adds the query to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithQuery(query *string) *GetRunClonesLineageParams {
	o.SetQuery(query)
	return o
}

// SetQuery adds the query to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetQuery(query *string) {
	o.Query = query
}

// WithSort adds the sort to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithSort(sort *string) *GetRunClonesLineageParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetSort(sort *string) {
	o.Sort = sort
}

// WithUUID adds the uuid to the get run clones lineage params
func (o *GetRunClonesLineageParams) WithUUID(uuid string) *GetRunClonesLineageParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the get run clones lineage params
func (o *GetRunClonesLineageParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *GetRunClonesLineageParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param entity
	if err := r.SetPathParam("entity", o.Entity); err != nil {
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

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
