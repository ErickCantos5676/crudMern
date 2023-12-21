import React from 'react';
import { Form, Formik, useFormik } from 'formik';
import { createTaskRequest } from '../api/task.api.js';

export default function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: ""
        }}
        onSubmit={ async (values) => {
          console.log(values)
          try {
            const response = await createTaskRequest(values)
            console.log(response);
            Formik.actions.resetForm();
          } catch (error) {
            console.error(error)
          }
        } }
      >
        {({handleChange, values, isSubmitting }) => (
          <Form onSubmit={Formik.handleSubmit}>

          <label>title</label>

          <input type="text"
                 name="title"
                 placeholder="Write a title"
                 onChange={handleChange}
                 values={values.title} />

          <label >Desccription</label>

          <textarea name="description"
                    rows="3"
                    placeholder='Escribe una descripcion'
                    onChange={handleChange}
                    values={values.description}>
          </textarea>

          <button type='submit'>
            {isSubmitting ? "Guardando.." : "Guardar"}
          </button>
        </Form>
        )}
      </Formik>
    </div>
  )
}
