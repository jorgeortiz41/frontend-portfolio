import React from 'react'
import {Box, Spacer, Flex, Text, Image, Button, ButtonGroup,
 } from '@chakra-ui/react'
 import profile from './profile4.png'


function About() {
  return (
    <Box>
      <Flex justifyContent="center" flex='1' justify='space-evenly' mx='100' >
        <Box as="h1" fontWeight="bold" alignContent="center" w='70%' py='25px' px='5'>
          <Text
            bgGradient='linear(to-t, #C05621, #F6AD55)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'              
          >
            &lt;About Me&gt;
          </Text>
          <Text
            as='sub'
            bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
            bgClip='text'
            fontSize='lg'
            fontWeight='extrabold'
            mb='20'                
          >
            Hi, I'm Jorge Ortiz and I am based in Puerto Rico. I love solving problems, puzzles, and rising up to the challenge.
            During my free time I enjoy playing video games, watching movies, and going to the beach. 
            Always seeking continuous improvement in my work and personal life.
            I believe in the growth mindset and that we can always learn something new.
            Currently participating in extracurricular projects to hone my skills, learn new technologies, and impact my community.
          </Text>
          <br></br>
          <Spacer p='4' />
          <Text
            as='sub'
            bgGradient='linear(to-t, #A0AEC0, #CBD5E0)'
            bgClip='text'
            fontSize='lg'
            fontWeight='extrabold'                
          >
            Software engineering student with 5 years of software development experience and 3 years in full-stack web development. 
            Well-versed in python data science frameworks, MERN stack for web development, and documentation for the software development lifecycle. 
            Increased data accessibility and improved user experienceat the Arecibo Observatory with a full-stack web app. 
            Using exploratory data analysis I uncovered the most critical regions and demographics affected by the 2020 earthquakes in Puerto Rico.
          </Text>
        </Box>
            <Spacer />
            <Box as='div' bgGradient='linear(to-t, #C05621, #F6AD55)' borderRadius='full'>
              <Image src={profile} alt='bg' borderRadius='full' h='400px' pt='10'/>
            </Box>
      </Flex>
    </Box>
  )
}

export default About