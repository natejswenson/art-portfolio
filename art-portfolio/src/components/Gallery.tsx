import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ArtworkCard = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 1;
    }
    img {
      transform: scale(1.05);
    }
  }
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ArtworkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 48, 71, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  color: white;
`;

const ArtworkTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ArtworkDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  opacity: 0.9;
`;

// Sample artwork data - replace with your own artwork
const sampleArtwork = [
  {
    id: 1,
    title: "the world of color",
    description: "a fun thing to do with paint",
    imageUrl: "/IMG_3806.jpeg"
  },
  {
    id: 2,
    title: "flower land",
    description: "made at my sisters birthday party with paint",
    imageUrl: "/IMG_3805.jpeg"
  },
  {
    id: 3,
    title: "the random magnets",
    description: "fun to add magnets to the collection with markers and perl beads",
    imageUrl: "/IMG_3807.jpeg"
  },
  {
    id: 4,
    title: "the landscape",
    description: "something fun to do when I was bored with colored pencils",
    imageUrl: "/IMG_3808.jpeg"
  }
];

const Gallery = () => {
  return (
    <GalleryGrid>
      {sampleArtwork.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArtworkImage src={artwork.imageUrl} alt={artwork.title} />
          <ArtworkOverlay className="overlay">
            <ArtworkTitle>{artwork.title}</ArtworkTitle>
            <ArtworkDescription>{artwork.description}</ArtworkDescription>
          </ArtworkOverlay>
        </ArtworkCard>
      ))}
    </GalleryGrid>
  );
};

export default Gallery; 