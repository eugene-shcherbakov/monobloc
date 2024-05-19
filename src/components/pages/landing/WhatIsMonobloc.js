import React, {useRef, useEffect} from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

const WhatIsMonobloc = () => {

  const sceneRef = useRef(null);

  useEffect(() => {

    window.particlesJS.load('whatis_background', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }, []);

  return (
    <Box 
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        backgroundColor: '#f7f8f7',
        borderTop: '1px solid #000',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundColor: '#f7f8f785',
        }
      }}
      ref={sceneRef}
    >

      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        id="whatis_background"
      />

      {/* Inner wrapper */}
      <Box sx={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        paddingBlock: '100px',
        display: 'flex',
        gap: '25px'
      }}>

        {/* Left column */}
        <Box sx={{
          width: '300px',
        }}>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Bold',
              fontWeight: 900,
              color: '#000',
              fontSize: '40px',
              marginBottom: '20px',
              lineHeight: '1.1',
              position: 'relative',
              zIndex: 2,
            }}
          >
            What is Monobloc?
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontWeight: 100,
              color: '#000',
              fontSize: '14px',
              position: 'relative',
              zIndex: 2,
              maxWidth: '800px',
              marginBottom: '15px',
              textAlign: 'justify'
            }}
          >
            Monobloc is a technology platform that operates in the intersection of education and technology, with a focus on disruptive technologies and AI-powered tools for job seekers and companies.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontWeight: 100,
              color: '#000',
              fontSize: '14px',
              position: 'relative',
              zIndex: 2,
              maxWidth: '800px',
              marginBottom: '15px',
              textAlign: 'justify'
            }}
          >
            The platform offers a wide range of courses and training programs aimed at helping students develop the necessary skills to succeed in the ever-evolving tech industry. Monobloc also offers a one-stop resource that connects job seekers with companies looking for talent.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontWeight: 100,
              color: '#000',
              fontSize: '14px',
              position: 'relative',
              zIndex: 2,
              maxWidth: '800px',
              // textAlign: 'center',
              textAlign: 'justify'
            }}
          >
            Monobloc is a forward-thinking company that leverages emerging technologies to provide innovative solutions for education and career development in the Web3 industry.
          </Typography>
            
        </Box>

        {/* Right column */}
        <Box 
          sx={{
            width: '800px',
            height: '450px',
            borderRadius: '10px',
            flex: 1,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <img 
            src="/images/mindmap.png"
            alt="mindmap"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transform: 'perspective(600px) rotateY(-10deg) scale(1.1)',
            }}
          />
        </Box>

      </Box>
    </Box>
  )

}

export default WhatIsMonobloc