// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1Tuner Tuner definition
//
// swagger:model v1Tuner
type V1Tuner struct {

	// Component name to use
	HubRef string `json:"hubRef,omitempty"`

	// Optional namespace to use, uses agent's namespace by default
	Namespace string `json:"namespace,omitempty"`

	// Optional dict of params
	Params map[string]V1Param `json:"params,omitempty"`

	// Optional list of presets to use for running this tuner
	Presets []string `json:"presets"`

	// Optional queue to use for scheduling the tuner
	Queue string `json:"queue,omitempty"`
}

// Validate validates this v1 tuner
func (m *V1Tuner) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateParams(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Tuner) validateParams(formats strfmt.Registry) error {
	if swag.IsZero(m.Params) { // not required
		return nil
	}

	for k := range m.Params {

		if err := validate.Required("params"+"."+k, "body", m.Params[k]); err != nil {
			return err
		}
		if val, ok := m.Params[k]; ok {
			if err := val.Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("params" + "." + k)
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("params" + "." + k)
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this v1 tuner based on the context it is used
func (m *V1Tuner) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateParams(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Tuner) contextValidateParams(ctx context.Context, formats strfmt.Registry) error {

	for k := range m.Params {

		if val, ok := m.Params[k]; ok {
			if err := val.ContextValidate(ctx, formats); err != nil {
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Tuner) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Tuner) UnmarshalBinary(b []byte) error {
	var res V1Tuner
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
