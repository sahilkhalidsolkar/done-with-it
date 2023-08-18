import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, width, ...otherProps }) => {

  const { touched, errors, handleChange, setFieldTouched } = useFormikContext()

  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}

      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />

    </>
  )
}

export default AppFormField
