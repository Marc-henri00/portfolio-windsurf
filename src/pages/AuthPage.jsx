import { useState } from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={bgColor}
      p={4}
    >
      <Box 
        bg={cardBg} 
        borderRadius="xl" 
        p={8} 
        boxShadow="xl"
        w="100%"
        maxW="md"
      >
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </Box>
    </Flex>
  );
}
