import React from 'react'
import { Box, Text, Tab, Tabs, TabPanels, TabPanel, TabList } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
import Dashproj from './p1'
import LuzVerde from './p2'
import PyDa from './p3'





function Projects() {
  return (
    <Box h='100%' mx='10'>

      <ScaleFade initialScale={0.5} in={true}> 
      <Box as='h1'textAlign='center' fontWeight="bold" alignContent="center" mb='20'>
          <Text
            bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'   
          >
          Projects
          </Text>
      </Box>
      </ScaleFade>


      <Tabs isFitted isLazy>
      <SlideFade in={true} offsetY='20px'>
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
              PyDa
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
        </SlideFade>
        <TabPanels>
          <TabPanel>
            <SlideFade in={true} offsetY='20px'>
              <Dashproj />
            </SlideFade>
          </TabPanel>
          <TabPanel>
            <SlideFade in={true} offsetY='20px'>
              <LuzVerde />
            </SlideFade>
          </TabPanel>
          <TabPanel>
            <SlideFade in={true} offsetY='20px'>
              <PyDa />
            </SlideFade>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Projects