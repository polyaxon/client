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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/validate"
)

// V1RunPending v1 run pending
//
// swagger:model v1RunPending
type V1RunPending string

func NewV1RunPending(value V1RunPending) *V1RunPending {
	v := value
	return &v
}

const (

	// V1RunPendingApproval captures enum value "approval"
	V1RunPendingApproval V1RunPending = "approval"

	// V1RunPendingUpload captures enum value "upload"
	V1RunPendingUpload V1RunPending = "upload"

	// V1RunPendingCache captures enum value "cache"
	V1RunPendingCache V1RunPending = "cache"

	// V1RunPendingBuild captures enum value "build"
	V1RunPendingBuild V1RunPending = "build"
)

// for schema
var v1RunPendingEnum []interface{}

func init() {
	var res []V1RunPending
	if err := json.Unmarshal([]byte(`["approval","upload","cache","build"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1RunPendingEnum = append(v1RunPendingEnum, v)
	}
}

func (m V1RunPending) validateV1RunPendingEnum(path, location string, value V1RunPending) error {
	if err := validate.EnumCase(path, location, value, v1RunPendingEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 run pending
func (m V1RunPending) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1RunPendingEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 run pending based on context it is used
func (m V1RunPending) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}
