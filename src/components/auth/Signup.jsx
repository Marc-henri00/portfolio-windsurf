import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Button, Input, VStack, Text, Box, useToast, FormControl, FormLabel } from '@chakra-ui/react';

export default function Signup({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: 'Erreur',
        description: 'Les mots de passe ne correspondent pas',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Mettre à jour le nom d'affichage de l'utilisateur
      await updateProfile(user, { displayName });
      
      toast({
        title: 'Compte créé avec succès',
        description: 'Bienvenue sur TaskMaster !',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      let errorMessage = 'Une erreur est survenue lors de la création du compte';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Un compte avec cet email existe déjà';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Adresse email invalide';
      }
      
      toast({
        title: 'Erreur',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100%" maxW="md" p={6} borderRadius="md" boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
        Créer un compte
      </Text>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Nom d'affichage</FormLabel>
            <Input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Votre nom"
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Confirmer le mot de passe</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </FormControl>
          
          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            mt={4}
            isLoading={loading}
            loadingText="Création du compte..."
          >
            S'inscrire
          </Button>
        </VStack>
      </form>

      <Text textAlign="center" mt={4}>
        Déjà un compte ?{' '}
        <Button
          variant="link"
          colorScheme="blue"
          onClick={onSwitchToLogin}
        >
          Se connecter
        </Button>
      </Text>
    </Box>
  );
}
