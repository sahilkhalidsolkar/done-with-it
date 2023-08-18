import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const AppForm = ({initialValues,validationSchema,onSubmit,children}) => {
  return (
    <Formik
    initialValues={initialValues}  
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {()=>(<>{children}</>)}
    </Formik>
  )
}

export default AppForm

const styles = StyleSheet.create({})