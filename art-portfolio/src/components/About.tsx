import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutContent = styled.div`
  font-family: ${props => props.theme.fonts.body};
`;

const AboutTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContent>
        <AboutTitle>About the Artist</AboutTitle>
        <AboutText>
          Welcome to my art portfolio! I am a passionate artist dedicated to creating
          unique and meaningful pieces that capture the beauty of the world around us.
        </AboutText>
        <AboutText>
          My work explores various mediums and techniques, always pushing the boundaries
          of traditional art forms to create something truly special.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 