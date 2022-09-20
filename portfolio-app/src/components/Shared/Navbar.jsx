import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    Tooltip,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
  import { ColorModeSwitcher } from './ColorModeSwitcher';
  import {Link} from 'react-router-dom'


  
  
  function Navbar() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '12', md: '14' }}>
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="50" justify="space-between" width="100%">
            <Link to='/'><Button variant='ghost' size='md'>Home</Button></Link>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="ghost" spacing="8">
                    <Link to='/about'><Button  size='md'>About me</Button></Link>
                    <Link to='/projects'><Button  size='md'>Projects</Button></Link>
                    <Link to='/skills'><Button size='md'>Skills</Button></Link>
                  </ButtonGroup>
                  <HStack spacing="1">
                    <ColorModeSwitcher />
                    <Tooltip hasArrow label='My LinkedIn Profile' fontSize='md'>
                      <IconButton
                      variant="ghost"
                      icon={<AiFillLinkedin w={8} h={8}/>}
                      onClick={() => window.open('https://www.linkedin.com/in/jorgeaortizramirez/')}
                      />
                    </Tooltip>
                    <Tooltip hasArrow label='My GitHub Profile' fontSize='md'>
                      <IconButton
                      variant="ghost"
                      icon={<AiFillGithub fontSize="1.25rem" />}
                      onClick={() => window.open('https://github.com/jorgeortiz41')}
                      />
                    </Tooltip>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }

  export default Navbar