import React, {useEffect, useRef} from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import Parallax from 'parallax-js';

const NftCard = () => {

  const sceneRef = useRef(null);
  const outerSceneRef = useRef(null);

  useEffect(() => {

    new Parallax(sceneRef.current);
    new Parallax(outerSceneRef.current);

  }, []);

  return (
    <Box 
      sx={{
        position: 'relative',
        filter: 'drop-shadow(0px 5px 15px #000)',
      }}
      ref={outerSceneRef}
    >
      <Box 
        sx={{
          position: 'absolute !important',
          top: 0,
          left: 0,        
          width: '100%',
          height: '100%',
          display: 'flex !important',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          overflow: 'hidden',
        }}
        data-depth="-0.1"
      >
        <img 
          src="/images/glow_cube.png" 
          alt="nft card front" 
          style={{
            width: "150px",
            filter: 'drop-shadow(0px 5px 10px #4d5aa8)',
          }}
        />
      </Box>
      {/* QR-code */}
      <Box 
        sx={{
          position: 'absolute !important',
          left: 'calc(100% - 50px) !important',
          top: 'calc(100% - 50px) !important',
          width: '75px',
          height: '75px',
          backgroundColor: '#FFFFFF',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0px 5px 10px #000000',
          zIndex: 1,
          border: '2px solid #6FD404',
        }}
        data-depth="0.25"
      >
        <img 
          src="/images/monobloc_qr_code.png" 
          alt="monobloc qr code"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',

          }}
        />
      </Box>
      <Box 
        sx={{
          position: 'relative !important',
        }}
        ref={sceneRef}
      >
        <img src="/images/nft_card_body.png" alt="nft card body" 
          style={{
            position: 'relative !important',
            zIndex: 1,
            width: "250px"
          }}
          data-depth="0.05"
        />
        <img src="/images/nft_card_background.png" alt="nft card background" 
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            top: 0,
            width: '100%',
            transform: 'scale(0.85)'
          }}
          data-depth="0.15"
        />
      </Box>
    </Box>
  )

}

const PoapNft = () => {

  return (
    <Box sx={{
      // backgroundColor: '#FFF',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: "url(/images/white_star_background.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>

      {/* Inner wrapper */}
      <Box sx={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        position: 'relative',
        gap: '50px',
        paddingBlock: '100px',
        justifyContent: 'space-between',
      }}>
        <Box sx={{
          paddingBlock: '100px',
        }}>

          <Box sx={{
            maxWidth: '750px',
            padding: '25px',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: '1px solid #e3e1df',
            boxShadow: '0px 5px 10px #e3e1df75',
          }}>
            <Typography
            sx={{
              fontFamily: 'FKGrotesk-Bold',
              color: '#000000',
              fontSize: '36px',
              marginBottom: '20px',
            }}>
            POAP NFT (Proof of Attendance)
          </Typography>
          <Typography
            sx={{
              fontFamily: 'EloquiaDisplay-ExtraLight',
              color: '#000000',
              fontSize: '16px',
              marginBottom: '15px',
              textAlign: "left"
            }}>
              At Monobloc, we believe in recognizing and rewarding your achievements. That's why we use POAP NFTs to certify completion of our courses. A POAP NFT is a unique, blockchain-based token that serves as proof of your attendance and completion of a Monobloc course. With a POAP NFT, you can showcase your skills and expertise in Web3 technologies and stand out to potential employers.
            </Typography>
          </Box>
          
        </Box>
        <Box 
          sx={{
            padding: '50px',
            backgroundColor: 'black',
            borderRadius: "10px",
            position: 'relative',
          }}
        >        
          <NftCard/>
        </Box>
      </Box> 
    </Box>
  )

}

export default PoapNft