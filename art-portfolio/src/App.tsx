import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Gallery from './components/Gallery';
import About from './components/About';
import { theme } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`;

const Section = styled(motion.section)`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled(Section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    to right,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8b00ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow 8s linear infinite;
  background-size: 200% auto;

  @keyframes rainbow {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Nav>
          <Logo>Art Portfolio</Logo>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#about">About</NavLink>
          </NavLinks>
        </Nav>

        <Hero id="home">
          <div>
            <Title>Welcome to My Art World</Title>
            <Subtitle>
              explore the world of art through the eyes of Bailey Swenson
            </Subtitle>
          </div>
        </Hero>

        <Section id="gallery">
          <Title>Gallery</Title>
          <Gallery />
        </Section>

        <Section id="about">
          <Title>About</Title>
          <About />
        </Section>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
