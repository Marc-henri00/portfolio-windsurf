import { Box, Spinner, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      bottom={0} 
      display="flex" 
      flexDirection="column"
      alignItems="center" 
      justifyContent="center"
      bg="rgba(0, 0, 0, 0.5)"
      zIndex={9999}
    >
      <Spinner size="xl" color="white" />
      <Text mt={4} color="white">Chargement de l'application...</Text>
    </Box>
  );
}
