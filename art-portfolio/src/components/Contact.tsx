import styled from '@emotion/styled';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  min-height: 150px;
  font-family: ${props => props.theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactForm>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" required />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact; 