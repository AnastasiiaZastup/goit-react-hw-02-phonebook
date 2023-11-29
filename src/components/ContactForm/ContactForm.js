import { Formik, Field, Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';


const phoneExample = /^\d{3}-\d{2}-\d{2}$/;
 const ContactSchema = Yup.object().shape({
     name: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!'),
     number: Yup.string()
    .matches(phoneExample, 'Enter the similar number 000-00-00')
    .required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return (
        
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                onAdd(values);
                    actions.resetForm();
                }}
            >
                <Form>
                    <label>Name
                    <Field name="name" />
                    <ErrorMessage name="name" component = "span"/>
                    </label>
                    

                    <label>Number
                    <Field name="number" />
                     <ErrorMessage name="number" component = "span" />
                    </label>
                   
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        
    );
};