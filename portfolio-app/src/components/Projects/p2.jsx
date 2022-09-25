import React from 'react'
import { VStack, Box, Text, Image, HStack, Link} from '@chakra-ui/react'
import { ArrowUpIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import dash from './assets/luz-verde.png'
import fire from './assets/fire.gif'
import sysarch from './assets/sysarch.jpg'
import records from './assets/records.png'
import dashb from './assets/12m.png'

function LuzVerde() {
  return (
    <Box>
    <HStack spacing='200' align='initial'>
    <Box as='h1'textAlign='start' mt='20'>
      <Text
        bgGradient='linear(to-t, #276749, #48BB78)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'
      >
        Proyecto Luz Verde
      </Text>
      <Text
        bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
        bgClip='text'
        fontSize='md'
        fontWeight='extrabold'
      >
        Veteran SE(student) · Web Development · 2021-22
      </Text>
      <Text
        bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
        bgClip='text'
        fontSize='md'
        fontWeight='extrabold'
      >
        (WordPress, React, Flask, MySQL)
      </Text>
    </Box>
    <Box>
      <Image src={dash} alt='dash' pl='200'/>
    </Box>
    </HStack>
    <VStack spacing='10' align='center' mt='10' px='40'>
        <Text
          bgGradient='linear(to-t, #276749, #48BB78)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          The Goal
        </Text>
        <Text
          bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
          bgClip='text'
          fontSize='lg'
          fontWeight='extrabold'
          align='start'
        >
          The goal of this projecct is to create a web application that will allow the user to know more about the Luz Verde project. 
          Luz Verde plans to establish a solar powered gazebo in my college, University of Puerto Rico Mayaguez.
          The gazebo will be used to charge electronic devices and provide a place for students to study.
          The web application will be used to inform the user about the project, the benefits of the project, and the progress of the project.
          <br></br>
          <br></br>
          A second web-app is under development to monitor data aabout the solar powered batteries.
          The data will be collected from the batteries and displayed in a dashboard.
          
        </Text>

        <Text
          bgGradient='linear(to-t, #276749, #48BB78)'
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
          The solution entailed creating a simple component based web-app using React and Bootsrap.
          (Currently switching to WordPress for integration with official college website).
          We plan on using React for the dashboard web-app. 
          This includes connecting to the microcontroller, implementing the app logic, and connect to database to store the data.
          We have coordinated with the multiple disciplines to create a blueprint of the solar powered gazebo.
          We have also coordinated with the college IT team to integrate de web apps with the college domain and make
          necessary arrangements for the gazebo to have internet access in case of power outage.
        </Text>
        <Text
          bgGradient='linear(to-t, #276749, #48BB78)'
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
           The web-app is currently under development, but we have a working prototype of the informational webpage. 
        </Text>
        <Text
          bgGradient='linear(to-t, #276749, #48BB78)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='extrabold'
        >
          Additional Info
        </Text>
        <Box as='flex' align='center' justify='center' w='50%' bgColor='gray.600' borderRadius='xl'>
          <HStack spacing='10'>
            <Box w='50%' h='400px' align='center' p='10'>
              <Text
                bgGradient='linear(to-t, #276749, #48BB78)'
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
                mb='5'
              >
                Private Repo
              </Text>
              
    
              <Text
                bgGradient='linear(to-t, #276749, #48BB78)'
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
                bgGradient='linear(to-t, #276749, #48BB78)'
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
                <Link href='https://pesupr.wixsite.com/website' isExternal>IEEE Power and Energy Society(UPRM Chapter)<ExternalLinkIcon mx='2px' /></Link>
              </Text>
              <Text
                bgGradient='linear(to-t, #276749, #48BB78)'
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
                2021
              </Text>
            </Box>
          </HStack>
        </Box>
    </VStack>
    </Box>
  )
}

export default LuzVerde