/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactText = styled.div`
  font-family: Roboto, sans-serif;
  width: 50%;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  margin: 24px 0 24px 0;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: Josefin Slab, serif;
  width: 50%;
  margin-bottom: 1em;
`;

const FormInput = styled.input`
  height: 2em;
`;

const FormSelect = styled.select`
  height: 2em;
  width: 100%;
  border-radius: 0px;
`;

const FormTextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0.5em;
  font-family: Roboto Slab, sans-serif;
  font-size: 1em;
`;

const FormSubmit = styled.button`
  height: 45px;
  width: 33%;
  background-color: white !important;
  border: 1px grey solid;
  text-decoration: none;
`;

const Contact = () => {
  return (
    <Root>
      <PageTitle>Contact Us</PageTitle>
      <ContactText>
        For reservations, please call us at (123) 456-7890. For other inquiries, kindly use the form below.
      </ContactText>
      <ContactForm action="/" target="_blank">
        <FormLabel htmlFor="firstname">
          First name
          <FormInput id="firstname" type="text" />
        </FormLabel>
        <FormLabel htmlFor="lastname">
          Last name
          <FormInput id="lastname" type="text" />
        </FormLabel>
        <FormLabel htmlFor="commenttype">
          Type of comment
          <FormSelect>
            <option value="compliment">Compliment</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="other">Other</option>
          </FormSelect>
        </FormLabel>
        <FormLabel htmlFor="commenttext" style={{ width: '100%' }}>
          Add a comment
          <FormTextArea maxLength="500" rows="10" />
        </FormLabel>
        <FormSubmit>
          Submit
        </FormSubmit>
      </ContactForm>
    </Root>
  );
};

export default Contact;
