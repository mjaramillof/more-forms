import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Register = ()=>{
   
    const signupSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(2, 'El username debe contener mas de 2 caracteres')
            .required('Este campo es oblogatorio'),
        lastname: Yup.string()
            .min(2, 'El username debe contener mas de 2 caracteres')
            .required('Este campo es oblogatorio'),
        email: Yup.string()
            .email('Debe ingresar un email válido')
            .required('Este campo es obligatorio'),
        password: Yup.string()
            .min(6, 'No puede tener menos de 6 caracteres')
            .max(10, 'No puede contener mas de 8 caracteres')
            .oneOf([Yup.ref('confirmPassword'), null], 'Ambas contraseñas deben coincidir')
            .required('Este campo es obligatorio'),
        confirmPassword: Yup.string()
            .min(6, 'No puede tener menos de 6 caracteres')
            .max(10, 'No puede contener mas de 8 caracteres')
            .oneOf([Yup.ref('password'), null], 'Ambas contraseñas deben coincidir')
            .required('Este campo es obligatorio')
        }
    );

    return(
        <div>
        <h1>Ingresa tus datos</h1>
        <Formik
            initialValues={{
            firstname: '',
            lastname:'',
            email: '',
            password: '',
            confirmPassword: '',
        }}
        validationSchema={signupSchema}
        onSubmit={values => {
            console.log(values);
        }}
        >
           {({ errors, touched }) => (
            <Form>
                <label htmlFor="firstname">Nombre: </label>
                <Field name="firstname" />
                {errors.firstname && touched.firstname ? (
                    <div>{errors.firstname}</div>
                ) : null}
                <label htmlFor="firstname">Apellido: </label>
                 <Field name="lastname" />
                {errors.lastname && touched.lastname ? (
                    <div>{errors.lastname}</div>
                ) : null}
                <label htmlFor="email">Email: </label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (<div>{errors.email}</div>
                ) : null}
                <label htmlFor="password">Password: </label>
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                ) : null}
                 <label htmlFor="confirmPassword">Confirme Password: </label>
                <Field name="confirmPassword" type="password" />
                {errors.confirmPassword && touched.confirmPassword ? (
                    <div>{errors.confirmPassword}</div>
                ) : null}
                <button type="submit">Submit</button>
            </Form>
       )}
        </Formik>
    </div>
    );
};
export default Register;