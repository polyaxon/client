// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1MPIJob MPI Job specification
//
// swagger:model v1MPIJob
type V1MPIJob struct {

	// optional clean pod policy section
	CleanPodPolicy *V1CleanPodPolicy `json:"cleanPodPolicy,omitempty"`

	// Optional component kind, should be equal to 'mpijob'
	Kind *string `json:"kind,omitempty"`

	// Launcher replicas definition
	Launcher *V1KFReplica `json:"launcher,omitempty"`

	// optional scheduling policy section
	SchedulingPolicy *V1SchedulingPolicy `json:"schedulingPolicy,omitempty"`

	// Optional slots per worker
	SlotsPerWorker int32 `json:"slotsPerWorker,omitempty"`

	// Worker replicas definition
	Worker *V1KFReplica `json:"worker,omitempty"`
}

// Validate validates this v1 m p i job
func (m *V1MPIJob) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCleanPodPolicy(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateLauncher(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSchedulingPolicy(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateWorker(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1MPIJob) validateCleanPodPolicy(formats strfmt.Registry) error {
	if swag.IsZero(m.CleanPodPolicy) { // not required
		return nil
	}

	if m.CleanPodPolicy != nil {
		if err := m.CleanPodPolicy.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cleanPodPolicy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cleanPodPolicy")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) validateLauncher(formats strfmt.Registry) error {
	if swag.IsZero(m.Launcher) { // not required
		return nil
	}

	if m.Launcher != nil {
		if err := m.Launcher.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("launcher")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("launcher")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) validateSchedulingPolicy(formats strfmt.Registry) error {
	if swag.IsZero(m.SchedulingPolicy) { // not required
		return nil
	}

	if m.SchedulingPolicy != nil {
		if err := m.SchedulingPolicy.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("schedulingPolicy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("schedulingPolicy")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) validateWorker(formats strfmt.Registry) error {
	if swag.IsZero(m.Worker) { // not required
		return nil
	}

	if m.Worker != nil {
		if err := m.Worker.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("worker")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("worker")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 m p i job based on the context it is used
func (m *V1MPIJob) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateCleanPodPolicy(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateLauncher(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSchedulingPolicy(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateWorker(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1MPIJob) contextValidateCleanPodPolicy(ctx context.Context, formats strfmt.Registry) error {

	if m.CleanPodPolicy != nil {
		if err := m.CleanPodPolicy.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cleanPodPolicy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cleanPodPolicy")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) contextValidateLauncher(ctx context.Context, formats strfmt.Registry) error {

	if m.Launcher != nil {
		if err := m.Launcher.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("launcher")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("launcher")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) contextValidateSchedulingPolicy(ctx context.Context, formats strfmt.Registry) error {

	if m.SchedulingPolicy != nil {
		if err := m.SchedulingPolicy.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("schedulingPolicy")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("schedulingPolicy")
			}
			return err
		}
	}

	return nil
}

func (m *V1MPIJob) contextValidateWorker(ctx context.Context, formats strfmt.Registry) error {

	if m.Worker != nil {
		if err := m.Worker.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("worker")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("worker")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1MPIJob) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1MPIJob) UnmarshalBinary(b []byte) error {
	var res V1MPIJob
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
