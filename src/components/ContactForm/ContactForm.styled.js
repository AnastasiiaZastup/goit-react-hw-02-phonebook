import {Form, Formik } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid blue;
  max-width: 320px;
  padding: 12px;
`;

export const FormikForm= styled(Formik)`
  max-width: 50%;
  font-size: 20px;
  font-weight: 500;
`;

export const ErrorMessage = styled(Error)`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  max-width: 40%;
  color: blue;
`;