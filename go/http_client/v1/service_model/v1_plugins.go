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
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Plugins Plugins specification
//
// swagger:model v1Plugins
type V1Plugins struct {

	// Optional flag to tell Polyaxon if it should set an auth context for the run, default true
	Auth bool `json:"auth,omitempty"`

	// Auto resume a run's artifacts (applies to resume and retries), works if collects_artifacts is enabled
	AutoResume bool `json:"autoResume,omitempty"`

	// Optional flag to tell Polyaxon to collect artifacts and outputs
	CollectArtifacts bool `json:"collectArtifacts,omitempty"`

	// Optional flag to tell Polyaxon to collect logs
	CollectLogs bool `json:"collectLogs,omitempty"`

	// Optional flag to tell Polyaxon to collect container resources (cpu/memory/gpu)
	CollectResources bool `json:"collectResources,omitempty"`

	// Optional flag to tell Polyaxon if it should set a docker socket context for the run, default false
	Docker bool `json:"docker,omitempty"`

	// Optional flag to tell Polyaxon to connect to the control plan via the external host
	ExternalHost bool `json:"externalHost,omitempty"`

	// Optional log level
	LogLevel string `json:"logLevel,omitempty"`

	// Optional flag to mount the artifacts store to the main container
	MountArtifactsStore bool `json:"mountArtifactsStore,omitempty"`

	// Option Notifications: Deprecated
	Notifications []*V1Notification `json:"notifications"`

	// Optional flag to tell Polyaxon if it should set a shm context for the run, default false
	Shm bool `json:"shm,omitempty"`

	// Optional to override the sidecar's default config
	Sidecar *V1PolyaxonSidecarContainer `json:"sidecar,omitempty"`

	// Optional flag to tell Polyaxon to sync statuses
	SyncStatuses bool `json:"syncStatuses,omitempty"`
}

// Validate validates this v1 plugins
func (m *V1Plugins) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateNotifications(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSidecar(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Plugins) validateNotifications(formats strfmt.Registry) error {
	if swag.IsZero(m.Notifications) { // not required
		return nil
	}

	for i := 0; i < len(m.Notifications); i++ {
		if swag.IsZero(m.Notifications[i]) { // not required
			continue
		}

		if m.Notifications[i] != nil {
			if err := m.Notifications[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("notifications" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("notifications" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Plugins) validateSidecar(formats strfmt.Registry) error {
	if swag.IsZero(m.Sidecar) { // not required
		return nil
	}

	if m.Sidecar != nil {
		if err := m.Sidecar.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("sidecar")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("sidecar")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 plugins based on the context it is used
func (m *V1Plugins) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateNotifications(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSidecar(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Plugins) contextValidateNotifications(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Notifications); i++ {

		if m.Notifications[i] != nil {
			if err := m.Notifications[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("notifications" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("notifications" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1Plugins) contextValidateSidecar(ctx context.Context, formats strfmt.Registry) error {

	if m.Sidecar != nil {
		if err := m.Sidecar.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("sidecar")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("sidecar")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Plugins) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Plugins) UnmarshalBinary(b []byte) error {
	var res V1Plugins
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
