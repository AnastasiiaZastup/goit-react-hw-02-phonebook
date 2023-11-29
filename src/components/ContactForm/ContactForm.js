import { Field, ErrorMessage, Button} from 'formik';
import * as Yup from 'yup';
import {StyledForm, FormikForm} from './ContactForm.styled';


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
        
        <FormikForm
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
                <StyledForm>
                    <label>Name
                    <Field name="name" />
                    <ErrorMessage name="name" component = "span"/>
                    </label>
                    

                    <label>Number
                    <Field name="number" />
                     <ErrorMessage name="number" component = "span" />
                    </label>
                   
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </FormikForm>
        
    );
};