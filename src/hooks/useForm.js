import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const resetForm = () => {
    setInputValues(initialState);
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
  };

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  return { inputValues, handleInputChange, resetForm, setForm };
};
