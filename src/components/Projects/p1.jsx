import React from 'react'
import { VStack, Box, Text, Image, HStack, Link} from '@chakra-ui/react'
import { ArrowUpIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import dash from './assets/monitor-overlay.png'
import fire from './assets/fire.gif'
import sysarch from './assets/sysarch.jpg'
import records from './assets/records.png'
import dashb from './assets/12m.png'

function Dashproj() {
  const colorGradient = 'linear(to-t, #2B6CB0, #63B3ED)'

  return (
    <Box>
    <HStack spacing='10' align='initial'>
    <Box as='h1'textAlign='start' mt='20'>
      <Text
        bgGradient={colorGradient}
        bgClip='text'
        fontSize='4xl'
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
          bgGradient={colorGradient}
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
        <HStack textAlign='center' spacing='10' mb='5' w='100%'>
          <Box w='25%' align='center'>
            <Image src={fire} h='300' w='200'/>
          </Box>
          <Box w='50%' align='center'>
            <Image src={sysarch} h='300' w='200' borderRadius='xl' />
          </Box>
          <Box w='25%' align='center'>
            <Image src={fire} h='300' w='200'/>
          </Box>
        </HStack>
        <Text
          bgGradient={colorGradient}
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          The Solution
        </Text>
        <Text
          bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
          bgClip='text'
          fontSize='lg'
          fontWeight='extrabold'
          align='start'
        >
          The solution was to create a tool for observing the 12m telescope data 
          in real-time along with other resources in order to increase data accessibility and visibility. 
          The second tool is for keeping track of operations related to the 12m antenna for the same purposes. 
          The time frame for the documentation, design and implementation of this prototype was 2 months.
          With Express and Node we created a RESTful API server to get the 12m telescope status data, fill the operator’s app log fields, 
          and get the logged events for the Records view. With MongoDB a NoSQL database we stored all our data from the 12m status,  
          events, and schedules in JSON format which makes it easier to query, access, and manipulate. 
          With React(JavaScript Framework) we developed the frontend side of the web application, 
          the visual content of the website the users see and interact with,  which allowed us to easily connect the 3rd party weather API 
          from OpenWeatherMap, create the different views, and code each page’s behavior using components.
        </Text>
        <HStack textAlign='center' spacing='10' mb='5' w='100%'>
          <Box w='50%' align='center'>
            <Image src={dashb} h='300' w='200' borderRadius='xl' />
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'
              fontSize='sm'
              fontWeight='extrabold'
              align='center'
              pt='5'
            >
              12m Dashboard<ArrowUpIcon color='#CBD5E0'/>
            </Text>
          </Box>
          <Box w='50%' align='center'>
            <Image src={records} h='300' w='200' borderRadius='xl' />
            <Text
              bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
              bgClip='text'
              fontSize='sm'
              fontWeight='extrabold'
              align='center'
              pt='5'
            >
              Operator's App(Logging tool)<ArrowUpIcon color='#CBD5E0'/>
            </Text>
          </Box>
        </HStack>
        <Text
          bgGradient={colorGradient}
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          Results
        </Text>
        <Text
          bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
          bgClip='text'
          fontSize='lg'
          fontWeight='extrabold'
          align='start'
        >
           The created tool showed promise by eliminating the need of logging into a VNC and searching through the terminal 
           to find the status of the 12m radio telescope and increasing the readability of this information. 
           The information was laid out in a manner that is more organized by the different command outputs and in the case of the 
           “pointing requested position” command contains a short description of each parameter.  
           The dashboard also integrated weather information, a live feed of the telescope, 12m telescope schedule, projects, 
           and telescope angles all resulting in a one-stop shop for all things related to the 12m radio telescope. 
           The project successfully increases data accessibility and visibility by the creation of a web app that is more accessible 
           to the general public, AO Staff, and people that aren’t well versed in terminal commands or dont have access to the internal network. 
        </Text>
        <Text
          bgGradient={colorGradient}
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          Additional Info
        </Text>
        <Box as='flex' align='center' justify='center' w='80%' bgColor='gray.600' borderRadius='xl' p=''>
          <HStack spacing='10'>
            <Box w='50%' h='400px' align='center' p='10'>
              <Text
                bgGradient={colorGradient}
                bgClip='text'
                fontSize='xl'
                fontWeight='extrabold'
                align='start'
              >
                Github
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                <Link href='https://github.com/jorgeortiz41/12m-dashboard-frontend' isExternal>Front-end repo <ExternalLinkIcon mx='2px' /></Link>
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
                mb='5'
              >
                <Link href='https://github.com/jorgeortiz41/12m--dashboard-backend' isExternal>Back-end repo <ExternalLinkIcon mx='2px' /></Link>
              </Text>
              <Text
                bgGradient={colorGradient}
                bgClip='text'
                fontSize='xl'
                fontWeight='extrabold'
                align='start'
              >
                Documentation
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e4dc16c7-0a37-3e70-9d6a-ed632eecbbe1' isExternal>Scope of Work <ExternalLinkIcon mx='2px'/></Link>
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:56c1bb4a-2890-37ab-b0c1-0563f8ade5ae' isExternal>Requirements Specifications <ExternalLinkIcon mx='2px'/></Link>
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:27668228-0d89-3b85-b0bc-a2f69b94ea03' isExternal>Final Presentation <ExternalLinkIcon mx='2px'/> </Link>
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                <Link href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:a3320986-00be-3db5-b2b5-6ceb5af1ceeb' isExtrenal>Final Report <ExternalLinkIcon mx="2px"/></Link>
              </Text>
              
            </Box>
            <Box w='50%' h='400px' align='center' p='10'>
              <Text
                bgGradient={colorGradient}
                bgClip='text'
                fontSize='xl'
                fontWeight='extrabold'
                align='start'
              >
                Work
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                Front-end development
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                Back-end development
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
                mb='5'
              >
                Software documentation
              </Text>
              <Text
                bgGradient={colorGradient}
                bgClip='text'
                fontSize='xl'
                fontWeight='extrabold'
                align='start'
              >
                Organization
              </Text>
              <Text
                color='#CBD5E0'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
                mb='5'
              >
                <Link href='https://www.naic.edu/' isExternal>The Arecibo Observatory <ExternalLinkIcon mx='2px' /></Link>
              </Text>
              <Text
                bgGradient={colorGradient}
                bgClip='text'
                fontSize='lg'
                fontWeight='semibold'
                align='start'
              >
                Year
              </Text>
              <Text
                bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
                bgClip='text'
                fontSize='lg'
                fontWeight='extrabold'
                align='start'
              >
                2022
              </Text>
            </Box>
          </HStack>
        </Box>
    </VStack>
    </Box>
  )
}

export default Dashproj