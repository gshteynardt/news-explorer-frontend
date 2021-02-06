import { useState, useCallback } from "react";

export const useFormWithValidation = ({...keyObj}, callback) => {
  const [values, setValues] = useState(keyObj);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  let isFormValid = Object.values(isValid).every(Boolean);

  const handleChange = (event) => {
    const { name, value, validationMessage, validity } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validationMessage,
    });

    setIsValid({
      ...isValid,
      [name]: validity.valid,
    });
  };

  const resetForm = useCallback(
    (newValues = keyObj, newErrors = {}, newIsValid = keyObj) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    callback({...values});
  }

  return { values, handleChange, errors, isValid, resetForm, isFormValid, handleSubmit };
}
