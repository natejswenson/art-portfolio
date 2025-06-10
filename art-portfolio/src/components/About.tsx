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
          Hi! I'm Bailey, a 4th grade artist who loves creating art! I keep all my art supplies in my room where I can let my creativity flow. I have a sister who's going into 7th grade, and I live with my mom Angie and dad Nate.
        </AboutText>
        <AboutText>
          When I'm not making art, I love spending time with my two dogs - Rufus (my boy dog) and Luna (my girl dog). They're my best buddies and sometimes even inspire my artwork!
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 