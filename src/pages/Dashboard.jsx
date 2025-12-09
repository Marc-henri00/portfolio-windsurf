import { Box, Flex, Heading, Button, useColorMode, useColorModeValue, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, Text, VStack } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const { currentUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      {/* En-tête */}
      <Box bg={bg} px={4} boxShadow="sm">
        <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
          <Flex alignItems="center">
            <HamburgerIcon boxSize={6} mr={4} display={{ base: 'block', md: 'none' }} />
            <Heading size="md" color={useColorModeValue('brand.600', 'brand.300')}>
              TaskMaster
            </Heading>
          </Flex>
          
          <Flex alignItems="center">
            <IconButton
              mr={4}
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Changer de thème"
              variant="ghost"
            />
            
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar
                  size="sm"
                  name={currentUser?.displayName || 'Utilisateur'}
                  src={currentUser?.photoURL}
                />
              </MenuButton>
              <MenuList>
                <VStack px={4} py={2} align="start" spacing={1} mb={2} borderBottomWidth="1px">
                  <Text fontWeight="bold">{currentUser?.displayName || 'Utilisateur'}</Text>
                  <Text fontSize="sm" color="gray.500">{currentUser?.email}</Text>
                </VStack>
                <MenuItem icon={<FaSignOutAlt />} onClick={handleSignOut}>
                  Déconnexion
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      {/* Contenu principal */}
      <Box maxW="7xl" mx="auto" py={8} px={4}>
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Heading size="lg" mb={2}>
              Bonjour, {currentUser?.displayName?.split(' ')[0] || 'Bienvenue'} 👋
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              Voici un aperçu de vos tâches
            </Text>
          </Box>
          
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            size="md"
            onClick={() => console.log('Nouvelle tâche')}
          >
            Nouvelle tâche
          </Button>
        </Flex>

        {/* Section des tâches */}
        <Box
          bg={bg}
          borderRadius="lg"
          p={6}
          boxShadow="sm"
          minH="60vh"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Text textAlign="center" color="gray.500" py={10}>
            Votre tableau de bord des tâches sera bientôt disponible ici
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
