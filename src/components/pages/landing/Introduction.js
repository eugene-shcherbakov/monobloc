import React, {useRef, useEffect} from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

import GreenButton from '../../ui/GreenButton';

import styled, { keyframes } from 'styled-components';
import Parallax from 'parallax-js';

const RightStatisticsItem = ({ title, description }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginBottom: '25px',
      }}
    >
    {
      title && (
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            fontWeight: 600,
            color: '#000',
            fontSize: '14px',
            lineHeight: '18px',
          }}
        >
          {title}
        </Typography>
      )
    }
    
      <Typography
      sx={{
        fontFamily: 'EloquiaDisplay-ExtraLight',
        fontWeight: 100,
        color: '#000',
        fontSize: '14px',
      }}>
        {description}
      </Typography>
    </Box>
  );


}

const RightStatistics = ({...rest}) => {

  return (
    <Box sx={{
      height: 'calc(100% - 80px)',
      marginTop: '80px',
      //!important is used to override the parallax.js styles
      display: 'flex !important',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '50px',
      position: 'relative !important',
      zIndex: 10,
      width: '350px',
      pointerEvents: 'all !important'
    }}
    {...rest}
    >
      {/* Inner wrappper */}
      <Box sx={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        borderRadius: '10px',
        transform: 'perspective(600px) rotateY(-10deg)',
        position: 'relative',
        backgroundColor: '#efefee75',
        border: '1px rgba(0, 0, 0, 0.1) solid',
        
      }}>
        <RightStatisticsItem
          title="1000+ Subscribers"
          description="Join our Web3 community"
        />
        <RightStatisticsItem
          title="25+ Industry experts"
          description="Learn from experienced professionals"
        />
        <RightStatisticsItem
          title="120+ Companies"
          description="Career hub network"
        />
        <RightStatisticsItem
          title="Experience the Future"
          description="Upcoming in-person, virtual, or hybrid events and conferences"
        />
      </Box>

    </Box>
  );

}

const sparkleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-800%);
  }
  `;

const SparkleImg = styled.img`
  animation: ${sparkleAnimation} 10s linear infinite;
  position: absolute;
  animation-delay: ${() => `${Math.random() * 2}s`};
`;

const MovingSparkle = (
  {
    //X coord relative to the parent
    startX, 
    //Y coord relative to the parent
    startY
  }
) => {

  return (
    <SparkleImg
      src="/images/sparkle.png"
      style={{
        left: startX,
        bottom: startY,
        width: "7px"
      }}
    />
  );

}

const SparklesAnimation = () => {

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
        zIndex: 2
      }}
    >
      <MovingSparkle startX={"10%"} startY={300+"px"} />
      <MovingSparkle startX={"50%"} startY={200 + "px"} />
      <MovingSparkle startX={"85%"} startY={150 + "px"} />
      <MovingSparkle startX={"65%"} startY={350 + "px"} />
      <MovingSparkle startX={"35%"} startY={200 + "px"} />
    </Box>
  );

}

const Introduction = () => {

  const sceneRef = useRef(null);
  const centerImageRef = useRef(null);

  useEffect(() => {

    new Parallax(sceneRef.current);
    new Parallax(centerImageRef.current);

    // TODO: clean up parallax instance after unmount
    // return () => parallaxInstance.disable();

  }, []);

  return (
    <Box
      sx={{
        height: "95vh",
        // maxHeight: "700px",
        backgroundImage: "url(/images/white_star_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        },
      }}
    >
      {/* Inner wrapper */}
      <Box sx={{
          maxWidth: '1400px',
          width: '90%',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        ref={sceneRef}
      >
        {/* Left text */}
        <Box
          sx={{
            position: "relative",
            width: '700px',
            zIndex: 10,
            marginRight: '50px',
            pointerEvents: 'all'

          }}
          data-depth="-0.1"
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: 'FKGrotesk-Bold',
              fontWeight: 600,
              color: '#000000',
              fontSize: '56px',
            }}
          >
            Web3 education and career growth platform
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              margin: 0,
              color: '#000000',
              fontFamily: 'EloquiaDisplay-ExtraLight',
              fontWeight: '100',
              fontSize: '16px',
              marginTop: '35px',
              letterSpacing: '1px',
              lineHeight: '22px',
            }}>
              Embark on your web3 career with Monobloc. There are abundant chances to engage in this rapidly evolving space, regardless of your background or experience level.
            </Typography>
          {/* Buttons */}
          <Box sx={{
            display: 'flex',
            marginTop: '25px',
            gap: '15px',
          }}>
            <GreenButton
              href={'/contact'}
            >
              Get Started
            </GreenButton>
          </Box>
            
        </Box>
        {/* Center image */}
        <Box
          sx={{
            flex: 1,
            height: '100%',
            width: '25vw',
            display: 'flex !important',
            alignItems: 'end',
            position: 'relative !important',
            '&>img': {
              // Need to override parallax.js inline style
              top: "auto !important"
            },
            //blur overlay
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }
          }}
          data-depth="-0.05"
          ref={centerImageRef}
        >
          <img 
            src="/images/glow_cube.png" 
            alt="glow cube"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "325px",
              zIndex: 10,
              bottom: "75px",
              fitler: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.5))'
            }}
          />
          <SparklesAnimation/>
          <img 
            src="/images/cube_background_stripe_5.png"
            alt="cube background stripe"
            style={{
              position: "absolute",
              bottom: "-50px",
              left: 0,
              height: "110%",
              width: "100%",
              zIndex: 0,
            }}
            data-depth="-0.25"
          />
        </Box>
        {/* Right statistics */}
        <RightStatistics
          data-depth="0.05"
        />
      </Box>
    </Box>
  )

}

export default Introduction;