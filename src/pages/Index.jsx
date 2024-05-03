import { Box, Flex, Grid, Image, Text, Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcxNDc0NTE3NHww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "A timeless tee for all occasions.",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3MTQ3NDUxNzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Perfect for those chilly evenings.",
  },
  {
    id: 3,
    name: "Leather Boots",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1613673720017-56e42d90fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHN8ZW58MHx8fHwxNzE0NzQ1MTc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Stylish and durable boots for all seasons.",
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={5} bg={bg}>
      <Heading mb={10} textAlign="center">
        Welcome to Our Clothing Store
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px" rounded="md" bg="white">
            <Image src={product.image} alt={product.name} borderRadius="md" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              {product.name}
            </Text>
            <Text mt={2}>${product.price.toFixed(2)}</Text>
            <Text fontSize="sm" color="gray.500">
              {product.description}
            </Text>
            <Flex align="center" justify="space-between" mt={3}>
              <Button leftIcon={<FaShoppingCart />} colorScheme="blue" size="sm">
                Add to Cart
              </Button>
              <Button colorScheme="pink" size="sm">
                <FaHeart />
              </Button>
              <Button colorScheme="teal" size="sm">
                <FaSearch />
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
