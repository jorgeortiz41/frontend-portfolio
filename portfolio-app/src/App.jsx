import React from 'react';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  Home  from "./components/Home/Home";
import  About  from "./components/About/About";
import  Projects  from "./components/Projects/Projects";
import  Skills  from "./components/Skills/Skills";
import  Navbar  from "./components/Shared/Navbar";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

function App() {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors},
    },
    theme,
    config,
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Router>
        <Container h='100%' maxW='100%' px='0'>
          <Navbar />
          <main style={{height: '100%'}}>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/skills" element={<Skills/>}/>
          </Routes>
          </main>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
