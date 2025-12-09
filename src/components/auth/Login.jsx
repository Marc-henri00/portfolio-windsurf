import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Button, Input, VStack, Text, Box, useToast, HStack, Divider } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

export default function Login({ onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Connexion réussie',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erreur de connexion',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast({
        title: 'Erreur avec la connexion Google',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="100%" maxW="md" p={6} borderRadius="md" boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
        Connexion
      </Text>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            isLoading={loading}
            loadingText="Connexion..."
          >
            Se connecter
          </Button>
        </VStack>
      </form>

      <HStack my={4}>
        <Divider />
        <Text fontSize="sm" color="gray.500">OU</Text>
        <Divider />
      </HStack>

      <Button
        leftIcon={<FaGoogle />}
        variant="outline"
        width="full"
        onClick={signInWithGoogle}
        mb={4}
      >
        Continuer avec Google
      </Button>

      <Text textAlign="center" mt={4}>
        Pas encore de compte ?{' '}
        <Button
          variant="link"
          colorScheme="blue"
          onClick={onSwitchToSignup}
        >
          S'inscrire
        </Button>
      </Text>
    </Box>
  );
}
