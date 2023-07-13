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
	"github.com/go-openapi/validate"
)

// V1CompiledOperation CompiledOperation specification
//
// swagger:model v1CompiledOperation
type V1CompiledOperation struct {

	// Optional build process
	Build *V1Build `json:"build,omitempty"`

	// Optional flag to disable cache validation and force run this component
	Cache *V1Cache `json:"cache,omitempty"`

	// An optional template containing conditions to check before starting the run
	Conditions string `json:"conditions,omitempty"`

	// Optional outputs definition
	Contexts []*V1IO `json:"contexts"`

	// Optional field to assign cost to this Component
	Cost float32 `json:"cost,omitempty"`

	// Optional graph dependencies of this op
	Dependencies []string `json:"dependencies"`

	// Optional component description
	Description string `json:"description,omitempty"`

	// Optional events section, must be a valid List of EventTrigger option (Run/Git/Alert/Webhook/Dataset)
	Events []*V1EventTrigger `json:"events"`

	// Optional hooks section
	Hooks []*V1Hook `json:"hooks"`

	// Optional inputs definition
	Inputs []*V1IO `json:"inputs"`

	// Optional flag to mark this specification requires approval before running
	IsApproved bool `json:"isApproved,omitempty"`

	// Optional dict of joins
	Joins map[string]V1Join `json:"joins,omitempty"`

	// Optional component kind, should be equal to 'operation'
	Kind string `json:"kind,omitempty"`

	// Optional matrix section, must be a valid matrix option (Random/Grid/BO/Hyperband/Hyperopt/Mapping/Iterative)
	Matrix interface{} `json:"matrix,omitempty"`

	// Optional component name, should a valid slug
	Name string `json:"name,omitempty"`

	// Optional outputs definition
	Outputs []*V1IO `json:"outputs"`

	// Optional plugins to enable
	Plugins *V1Plugins `json:"plugins,omitempty"`

	// Optional presets to use for running this component
	Presets []string `json:"presets"`

	// Optional queue to use for running this component
	Queue string `json:"queue,omitempty"`

	// Run definition, should be one of run composition: Container/Spark/Ray/Dask/Kubeflow/Dask/Dag
	Run interface{} `json:"run,omitempty"`

	// Optional schedule section, must be a valid Schedule option (Cron/Interval/Repeatable/ExactTime)
	Schedule interface{} `json:"schedule,omitempty"`

	// Optional flag to skip this run if upstream was skipped
	SkipOnUpstreamSkip bool `json:"skipOnUpstreamSkip,omitempty"`

	// Optional component tags
	Tags []string `json:"tags"`

	// optional termination section
	Termination *V1Termination `json:"termination,omitempty"`

	// Optional trigger policy
	Trigger *V1TriggerPolicy `json:"trigger,omitempty"`

	// Spec version
	Version float32 `json:"version,omitempty"`
}

// Validate validates this v1 compiled operation
func (m *V1CompiledOperation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBuild(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateCache(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateContexts(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateEvents(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateHooks(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateInputs(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateJoins(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateOutputs(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validatePlugins(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTermination(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTrigger(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1CompiledOperation) validateBuild(formats strfmt.Registry) error {
	if swag.IsZero(m.Build) { // not required
		return nil
	}

	if m.Build != nil {
		if err := m.Build.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("build")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("build")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) validateCache(formats strfmt.Registry) error {
	if swag.IsZero(m.Cache) { // not required
		return nil
	}

	if m.Cache != nil {
		if err := m.Cache.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) validateContexts(formats strfmt.Registry) error {
	if swag.IsZero(m.Contexts) { // not required
		return nil
	}

	for i := 0; i < len(m.Contexts); i++ {
		if swag.IsZero(m.Contexts[i]) { // not required
			continue
		}

		if m.Contexts[i] != nil {
			if err := m.Contexts[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("contexts" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("contexts" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validateEvents(formats strfmt.Registry) error {
	if swag.IsZero(m.Events) { // not required
		return nil
	}

	for i := 0; i < len(m.Events); i++ {
		if swag.IsZero(m.Events[i]) { // not required
			continue
		}

		if m.Events[i] != nil {
			if err := m.Events[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("events" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("events" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validateHooks(formats strfmt.Registry) error {
	if swag.IsZero(m.Hooks) { // not required
		return nil
	}

	for i := 0; i < len(m.Hooks); i++ {
		if swag.IsZero(m.Hooks[i]) { // not required
			continue
		}

		if m.Hooks[i] != nil {
			if err := m.Hooks[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("hooks" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("hooks" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validateInputs(formats strfmt.Registry) error {
	if swag.IsZero(m.Inputs) { // not required
		return nil
	}

	for i := 0; i < len(m.Inputs); i++ {
		if swag.IsZero(m.Inputs[i]) { // not required
			continue
		}

		if m.Inputs[i] != nil {
			if err := m.Inputs[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("inputs" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("inputs" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validateJoins(formats strfmt.Registry) error {
	if swag.IsZero(m.Joins) { // not required
		return nil
	}

	for k := range m.Joins {

		if err := validate.Required("joins"+"."+k, "body", m.Joins[k]); err != nil {
			return err
		}
		if val, ok := m.Joins[k]; ok {
			if err := val.Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("joins" + "." + k)
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("joins" + "." + k)
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validateOutputs(formats strfmt.Registry) error {
	if swag.IsZero(m.Outputs) { // not required
		return nil
	}

	for i := 0; i < len(m.Outputs); i++ {
		if swag.IsZero(m.Outputs[i]) { // not required
			continue
		}

		if m.Outputs[i] != nil {
			if err := m.Outputs[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("outputs" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("outputs" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) validatePlugins(formats strfmt.Registry) error {
	if swag.IsZero(m.Plugins) { // not required
		return nil
	}

	if m.Plugins != nil {
		if err := m.Plugins.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("plugins")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("plugins")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) validateTermination(formats strfmt.Registry) error {
	if swag.IsZero(m.Termination) { // not required
		return nil
	}

	if m.Termination != nil {
		if err := m.Termination.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("termination")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("termination")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) validateTrigger(formats strfmt.Registry) error {
	if swag.IsZero(m.Trigger) { // not required
		return nil
	}

	if m.Trigger != nil {
		if err := m.Trigger.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 compiled operation based on the context it is used
func (m *V1CompiledOperation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateBuild(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateCache(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateContexts(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateEvents(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateHooks(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateInputs(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateJoins(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateOutputs(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidatePlugins(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTermination(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateTrigger(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1CompiledOperation) contextValidateBuild(ctx context.Context, formats strfmt.Registry) error {

	if m.Build != nil {
		if err := m.Build.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("build")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("build")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) contextValidateCache(ctx context.Context, formats strfmt.Registry) error {

	if m.Cache != nil {
		if err := m.Cache.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("cache")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("cache")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) contextValidateContexts(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Contexts); i++ {

		if m.Contexts[i] != nil {
			if err := m.Contexts[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("contexts" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("contexts" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidateEvents(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Events); i++ {

		if m.Events[i] != nil {
			if err := m.Events[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("events" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("events" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidateHooks(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Hooks); i++ {

		if m.Hooks[i] != nil {
			if err := m.Hooks[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("hooks" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("hooks" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidateInputs(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Inputs); i++ {

		if m.Inputs[i] != nil {
			if err := m.Inputs[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("inputs" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("inputs" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidateJoins(ctx context.Context, formats strfmt.Registry) error {

	for k := range m.Joins {

		if val, ok := m.Joins[k]; ok {
			if err := val.ContextValidate(ctx, formats); err != nil {
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidateOutputs(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Outputs); i++ {

		if m.Outputs[i] != nil {
			if err := m.Outputs[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("outputs" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("outputs" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1CompiledOperation) contextValidatePlugins(ctx context.Context, formats strfmt.Registry) error {

	if m.Plugins != nil {
		if err := m.Plugins.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("plugins")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("plugins")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) contextValidateTermination(ctx context.Context, formats strfmt.Registry) error {

	if m.Termination != nil {
		if err := m.Termination.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("termination")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("termination")
			}
			return err
		}
	}

	return nil
}

func (m *V1CompiledOperation) contextValidateTrigger(ctx context.Context, formats strfmt.Registry) error {

	if m.Trigger != nil {
		if err := m.Trigger.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("trigger")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("trigger")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1CompiledOperation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1CompiledOperation) UnmarshalBinary(b []byte) error {
	var res V1CompiledOperation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
