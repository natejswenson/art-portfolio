import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>About the Artist</AboutTitle>
        <AboutText>
          Hi, I'm Bailey Swenson. I like to draw and paint. I love my dogs Luna and Rufus, and I have one sister named Kenzie.
        </AboutText>
        <AboutText>
          My work is driven by my passion for art and the joy I find in creating. Each piece I create is an invitation to explore
          the boundaries between reality and imagination, encouraging viewers to find their own meaning in the work.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 