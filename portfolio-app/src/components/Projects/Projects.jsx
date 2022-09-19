import React from 'react'
import {
  Box, Badge, Spacer, Flex, Text, Image, 
  Button, ButtonGroup, 
  Tab, Tabs, TabPanels, TabPanel, TabList,
  HStack, VStack,
 } from '@chakra-ui/react'
import dash from './monitor-overlay.png'




function Projects() {
  return (
    <Box h='100%' mx='10'>
      <Box as='h1'textAlign='center' fontWeight="bold" alignContent="center" mb='20'>
        <Text
          bgGradient='linear(to-t, #805AD5, #B794F4)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'   
        >
          Projects BOI
        </Text>
      </Box>
      <Tabs isFitted >
        <TabList>
          <Tab>
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'  
            >
              12m Dashboard
            </Text>
          </Tab>
          <Tab>
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'  
            >
              Luz Verde
            </Text>
          </Tab>
          <Tab>
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'  
            >
              dengAI
            </Text>
          </Tab>
          <Tab>
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'  
            >
              PyData
            </Text>
          </Tab>
          <Tab>
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'  
            >
              Small projects
            </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack spacing='10' align='initial'>
            <Box as='h1'textAlign='start' mt='20'>
              <Text
                bgGradient='linear(to-t, #805AD5, #B794F4)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'
              >
                12m Radio Telescope Dashboard
              </Text>
              <Text
                bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
                bgClip='text'
                fontSize='md'
                fontWeight='extrabold'
              >
                Software Engineer Intern · Web Development · 2022
              </Text>
              <Text
                bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
                bgClip='text'
                fontSize='md'
                fontWeight='extrabold'
              >
                (React, Node.js, Express, MongoDB)
              </Text>
            </Box>
            <Box>
              <Image src={dash} alt='dash' pl='200'/>
            </Box>
            </HStack>
            <VStack spacing='10' align='center' mt='10' px='40'>
                <Text
                  bgGradient='linear(to-t, #805AD5, #B794F4)'
                  bgClip='text'
                  fontSize='3xl'
                  fontWeight='extrabold'
                >
                  The Problem
                </Text>
                <Text
                  bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
                  bgClip='text'
                  fontSize='lg'
                  fontWeight='extrabold'
                  align='start'
                >
                  The Arecibo Observatory has many instruments around the island, one of these instruments is the 12-meter radio telescope.
                  Most of the data about the status of the 12m telescope is accessed using VNC software or 
                  Linux machines in order to show the output of certain terminal commands. 
                  The previous logging tool for the 305m telescope was a really useful tool for tracking events related to the antenna. 
                  This could be done for the 12m too.
                  So the general problem my project aims to work on is, how can we improve the data accessibility, data collection, 
                  and user experience of the operations related to the 12m radio telescope?
                </Text>
            </VStack>
          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Projects