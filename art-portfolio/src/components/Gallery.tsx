import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ItemTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  margin: 0;
  font-family: ${props => props.theme.fonts.heading};
`;

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "The World of Color",
      image: "/IMG_3806.jpeg",
      description: "A fun thing to do with paint"
    },
    {
      id: 2,
      title: "Flower Land",
      image: "/IMG_3805.jpeg",
      description: "Made at my sister's birthday party with paint"
    },
    {
      id: 3,
      title: "The Random Magnets",
      image: "/IMG_3807.jpeg",
      description: "Fun to add magnets to the collection with markers and pearl beads"
    },
    {
      id: 4,
      title: "The Landscape",
      image: "/IMG_3808.jpeg",
      description: "Something fun to do when I was bored with colored pencils"
    }
  ];

  return (
    <GalleryGrid>
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={item.image} alt={item.title} />
          <ItemTitle>{item.title}</ItemTitle>
        </GalleryItem>
      ))}
    </GalleryGrid>
  );
};

export default Gallery; 