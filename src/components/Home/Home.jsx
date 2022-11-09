import React from 'react'
import {Box, Code, Spacer, Flex, Text, Image, Button, ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Textarea
 } from '@chakra-ui/react'
import {EmailIcon, DownloadIcon} from '@chakra-ui/icons'
import bg from './bg.gif'
import resume from './Resume-Jorge-Ortiz2022.pdf'
import { Fade, ScaleFade, Slide, SlideFade} from '@chakra-ui/react'



function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Flex justifyContent="center" flex='1' justify='space-between' mx='100' >
          <SlideFade in={true} offsetY='20px'>
            <Box as='div' alignItems='center' justifyContent='space-between'>
              <Image src={bg} alt='bg' borderRadius='full' />
            </Box>
          </SlideFade>
            <Spacer />

            <Box as="h1" fontWeight="bold" alignContent="center" w='50%' py='25px' px='5'>
              <ScaleFade initialScale={0.5} in={true}>
              <Text
                as='sub'
                bgGradient='linear(to-t, #2B6CB0, #63B3ED)'
                bgClip='text'
                fontSize='lg'
                fontWeight='extrabold'                
              >
                Software Engineer
              </Text>
              </ScaleFade>
              <ScaleFade initialScale={0.5} in={true}>
              <Text
                bgGradient='linear(to-t, #2B6CB0, #63B3ED)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'              
              >
                Hey, I'm Jorge Ortiz 
              </Text>
              </ScaleFade>
              <ScaleFade initialScale={0.5} in={true}>
              <Text
                as='sub'
                bgGradient='linear(to-t, #2B6CB0, #63B3ED)'
                bgClip='text'
                fontSize='lg'
                fontWeight='extrabold'                
              >
                Currently Software Engineering Student on my 5th year at University of Puerto Rico Mayaguez Campus.
                Specializing in full-stack web development and Data Science.
              </Text>
              </ScaleFade>
              <Spacer />
              <SlideFade in={true} offsetY='20px'>
              <ButtonGroup pt='10' spacing='6'>
                <Button colorScheme='blue' variant='solid' size='xl' leftIcon={<EmailIcon />} onClick={onOpen} bgGradient='linear(to-t, #2B6CB0, #63B3ED)'>
                  Email
                </Button>
                <a href={resume} download>
                <Button colorScheme='blue' variant='solid' size='xl' leftIcon={<DownloadIcon />} bgGradient='linear(to-t, #2B6CB0, #63B3ED)'>
                  Download resume
                </Button>
                </a>
              </ButtonGroup>
              </SlideFade>
            </Box>

            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size='xl'
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Contact me</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='email'/>
                  </FormControl>

                  <FormControl mt={4} isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder='subject' />
                  </FormControl>

                  <FormControl mt={4} isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder='Write message here' />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Send
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
      </Flex>
    </Box>
  )
}

export default Home