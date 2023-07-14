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

// V1SparkJob Spark specification
//
// swagger:model v1SparkJob
type V1SparkJob struct {

	// Arguments is a list of arguments to be passed to the application.
	Arguments []string `json:"arguments"`

	// Optional connections section
	Connections []string `json:"connections"`

	// Mode is the deployment mode of the Spark application.
	DeployMode *SparkJobDeployMode `json:"deployMode,omitempty"`

	// Optional spark driver definition
	Driver *V1SparkReplica `json:"driver,omitempty"`

	// Optional spark executor definition
	Executor *V1SparkReplica `json:"executor,omitempty"`

	// HadoopConf carries user-specified Hadoop configuration properties as they would use the  the "--conf" option
	// in spark-submit.  The SparkApplication controller automatically adds prefix "spark.hadoop." to Hadoop
	// configuration properties.
	HadoopConf map[string]string `json:"hadoopConf,omitempty"`

	// HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml.
	// The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.
	HadoopConfigMap string `json:"hadoopConfigMap,omitempty"`

	// Kind of runtime, should be equal to "sparkjob"
	Kind *string `json:"kind,omitempty"`

	// MainFile is the path to a bundled JAR, Python, or R file of the application.
	MainApplicationFile string `json:"mainApplicationFile,omitempty"`

	// MainClass is the fully-qualified main class of the Spark application.
	// This only applies to Java/Scala Spark applications.
	MainClass string `json:"mainClass,omitempty"`

	// Spark version is the version of Spark the application uses.
	PythonVersion string `json:"pythonVersion,omitempty"`

	// HadoopConf carries user-specified Hadoop configuration properties as they would use the  the "--conf" option
	// in spark-submit.  The SparkApplication controller automatically adds prefix "spark.hadoop." to Hadoop
	// configuration properties.
	SparkConf map[string]string `json:"sparkConf,omitempty"`

	// SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties.
	// The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.
	SparkConfigMap string `json:"sparkConfigMap,omitempty"`

	// Spark version is the version of Spark the application uses.
	SparkVersion string `json:"sparkVersion,omitempty"`

	// Type tells the type of the Spark application.
	Type *V1SparkJobType `json:"type,omitempty"`

	// Volumes is a list of volumes that can be mounted.
	Volumes []V1Volume `json:"volumes"`
}

// Validate validates this v1 spark job
func (m *V1SparkJob) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDeployMode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDriver(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateExecutor(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateType(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1SparkJob) validateDeployMode(formats strfmt.Registry) error {
	if swag.IsZero(m.DeployMode) { // not required
		return nil
	}

	if m.DeployMode != nil {
		if err := m.DeployMode.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("deployMode")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("deployMode")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) validateDriver(formats strfmt.Registry) error {
	if swag.IsZero(m.Driver) { // not required
		return nil
	}

	if m.Driver != nil {
		if err := m.Driver.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("driver")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("driver")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) validateExecutor(formats strfmt.Registry) error {
	if swag.IsZero(m.Executor) { // not required
		return nil
	}

	if m.Executor != nil {
		if err := m.Executor.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("executor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("executor")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) validateType(formats strfmt.Registry) error {
	if swag.IsZero(m.Type) { // not required
		return nil
	}

	if m.Type != nil {
		if err := m.Type.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("type")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("type")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 spark job based on the context it is used
func (m *V1SparkJob) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateDeployMode(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateDriver(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateExecutor(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateType(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1SparkJob) contextValidateDeployMode(ctx context.Context, formats strfmt.Registry) error {

	if m.DeployMode != nil {
		if err := m.DeployMode.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("deployMode")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("deployMode")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) contextValidateDriver(ctx context.Context, formats strfmt.Registry) error {

	if m.Driver != nil {
		if err := m.Driver.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("driver")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("driver")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) contextValidateExecutor(ctx context.Context, formats strfmt.Registry) error {

	if m.Executor != nil {
		if err := m.Executor.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("executor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("executor")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkJob) contextValidateType(ctx context.Context, formats strfmt.Registry) error {

	if m.Type != nil {
		if err := m.Type.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("type")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("type")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1SparkJob) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1SparkJob) UnmarshalBinary(b []byte) error {
	var res V1SparkJob
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
