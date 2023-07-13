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

// V1SparkJobType v1 spark job type
//
// swagger:model v1SparkJobType
type V1SparkJobType string

func NewV1SparkJobType(value V1SparkJobType) *V1SparkJobType {
	return &value
}

// Pointer returns a pointer to a freshly-allocated V1SparkJobType.
func (m V1SparkJobType) Pointer() *V1SparkJobType {
	return &m
}

const (

	// V1SparkJobTypeJava captures enum value "java"
	V1SparkJobTypeJava V1SparkJobType = "java"

	// V1SparkJobTypeScala captures enum value "scala"
	V1SparkJobTypeScala V1SparkJobType = "scala"

	// V1SparkJobTypePython captures enum value "python"
	V1SparkJobTypePython V1SparkJobType = "python"

	// V1SparkJobTypeR captures enum value "r"
	V1SparkJobTypeR V1SparkJobType = "r"
)

// for schema
var v1SparkJobTypeEnum []interface{}

func init() {
	var res []V1SparkJobType
	if err := json.Unmarshal([]byte(`["java","scala","python","r"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		v1SparkJobTypeEnum = append(v1SparkJobTypeEnum, v)
	}
}

func (m V1SparkJobType) validateV1SparkJobTypeEnum(path, location string, value V1SparkJobType) error {
	if err := validate.EnumCase(path, location, value, v1SparkJobTypeEnum, true); err != nil {
		return err
	}
	return nil
}

// Validate validates this v1 spark job type
func (m V1SparkJobType) Validate(formats strfmt.Registry) error {
	var res []error

	// value enum
	if err := m.validateV1SparkJobTypeEnum("", "body", m); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// ContextValidate validates this v1 spark job type based on context it is used
func (m V1SparkJobType) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}
