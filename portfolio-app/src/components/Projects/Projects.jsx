import React from 'react'
import { Box, Text, Tab, Tabs, TabPanels, TabPanel, TabList } from '@chakra-ui/react'
import Dashproj from './p1'





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
          Projects
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
            <Dashproj />
          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Projects