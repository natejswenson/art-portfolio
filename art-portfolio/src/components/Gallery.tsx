import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
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

const ItemDescription = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), transparent);
  color: white;
  margin: 0;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;
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

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const galleryItems = [
    {
      id: 1,
      title: "The World of Color",
      image: "/art-portfolio/IMG_3806.jpeg",
      description: "A fun thing to do with paint"
    },
    {
      id: 2,
      title: "Flower Land",
      image: "/art-portfolio/IMG_3805.jpeg",
      description: "Made at my sister's birthday party with paint"
    },
    {
      id: 3,
      title: "The Random Magnets",
      image: "/art-portfolio/IMG_3807.jpeg",
      description: "Fun to add magnets to the collection with markers and pearl beads"
    },
    {
      id: 4,
      title: "The Landscape",
      image: "/art-portfolio/IMG_3808.jpeg",
      description: "Something fun to do when I was bored with colored pencils"
    },
    {
      id: 5,
      title: "The trees",
      image: "/art-portfolio/IMG_3813.jpeg",
      description: "i wanted to paint something"
    },
    {
      id: 6,
      title: "the swensons",
      image: "/art-portfolio/IMG_3809.jpeg",
      description: "i  was with my mom and i wanted to draw something out of sharpie with her"
    },
    {
      id: 7,
      title: "happy valentine's day",
      image: "/art-portfolio/IMG_3814.jpeg",
      description: "it was valentine's day and i wanted to make something out of paint"
    },
  
    {
      id: 9,
      title: "the dolphin",
      image: "/art-portfolio/IMG_3810.jpeg",
      description: "when i was in my room and wanted to draw somthing with colered pencils"
    },
    {
      id: 10,
      title: "the pizza",
      image: "/art-portfolio/IMG_3812.jpeg",
      description: "i was with my sister and we had who could draw the best pizza"
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
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img src={item.image} alt={item.title} />
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDescription style={{ opacity: hoveredId === item.id ? 1 : 0 }}>
            {item.description}
          </ItemDescription>
        </GalleryItem>
      ))}
    </GalleryGrid>
  );
};

export default Gallery; 