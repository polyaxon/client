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

package versions_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new versions v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for versions v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	GetCompatibility(params *GetCompatibilityParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetCompatibilityOK, *GetCompatibilityNoContent, error)

	GetInstallation(params *GetInstallationParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetInstallationOK, *GetInstallationNoContent, error)

	GetLogHandler(params *GetLogHandlerParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetLogHandlerOK, *GetLogHandlerNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
GetCompatibility gets compatibility versions
*/
func (a *Client) GetCompatibility(params *GetCompatibilityParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetCompatibilityOK, *GetCompatibilityNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetCompatibilityParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetCompatibility",
		Method:             "GET",
		PathPattern:        "/api/v1/compatibility/{uuid}/{version}/{service}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetCompatibilityReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetCompatibilityOK:
		return value, nil, nil
	case *GetCompatibilityNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetCompatibilityDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
GetInstallation gets installation versions
*/
func (a *Client) GetInstallation(params *GetInstallationParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetInstallationOK, *GetInstallationNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetInstallationParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetInstallation",
		Method:             "GET",
		PathPattern:        "/api/v1/installation",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetInstallationReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetInstallationOK:
		return value, nil, nil
	case *GetInstallationNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetInstallationDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
GetLogHandler gets log handler versions
*/
func (a *Client) GetLogHandler(params *GetLogHandlerParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*GetLogHandlerOK, *GetLogHandlerNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetLogHandlerParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "GetLogHandler",
		Method:             "GET",
		PathPattern:        "/api/v1/log_handler",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetLogHandlerReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetLogHandlerOK:
		return value, nil, nil
	case *GetLogHandlerNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetLogHandlerDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
