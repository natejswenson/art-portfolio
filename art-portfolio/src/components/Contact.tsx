import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" required />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      <ContactInfo>
        <div>
          <h3>Get in Touch</h3>
          <p>I'd love to hear from you! Whether you're interested in my artwork, have a collaboration in mind, or just want to say hello, feel free to reach out.</p>
        </div>
        <div>
          <h3>Follow Me</h3>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </div>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact; 