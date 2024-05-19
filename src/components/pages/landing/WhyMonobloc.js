import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import {AiFillCheckCircle} from 'react-icons/ai'

const WhyItem = ({benefit}) => {

  return (
    <Box sx={{
      fontFamily: 'FKGrotesk-Regular',
      color: '#000',
      fontSize: '14px',
      display: 'flex',
    }}>
      <Box sx={{
        marginRight: '10px',
      }}>
        <AiFillCheckCircle
          color="rgb(0, 236, 151)"
          size={16}
        />
      </Box>
      {benefit}
    </Box>
  )

}

const WhyCard = ({
  title,
  points
}) => {

  return (
    <Box sx={{
      borderRadius: "10px",
      paddingBlock: '25px',
      backgroundColor: '#efefee',
      width: '100%',
      paddingInline: '25px',
      display: 'flex',
      flexDirection: 'column',
    }}>

      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Bold',
          color: '#000',
          fontSize: '16px',
          lineHeight: '28px',
        }}
      >
        {title}
      </Typography>

      {/* Why items wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {
          points.map(
            (benefit, index) => (
              <WhyItem
                key={index}
                benefit={benefit}
              />
            )
          )
        }
      </Box>
      
    </Box>
  );

}

const WhyMonobloc = () => {

  return (
    <Box sx={{
      backgroundColor: '#fff',
      backgroundImage: 'url(/images/light_bg_grid.png)',
      backgroundSize: '250px auto',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Inner wrapper */}
      <Box sx={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: '100px',
        position: 'relative',
        zIndex: 10,
      }}>

        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            fontWeight: 400,
            color: '#000',
            fontSize: '40px',
            marginBottom: '40px',
            // textAlign: "center"
          }}>
            Why Monobloc
        </Typography>

          {/* Why cards wrapper */}
          <Box sx={{
            display: 'flex',
            gap: '15px',
          }}>

            <WhyCard
              title="NFT Credential Integration"
              points={[
                "Secure, verifiable achievements",
                "Blockchain-powered certifications",
                "Showcase skills on professional networks",
              ]}
            />

            <WhyCard
              title="Expert Guidance"
              points={[
                "Industry-leading instructors",
                "Comprehensive resources",
                "Real-world applications"
              ]}
            />

            <WhyCard
              title="Career Advancement"
              points={[
                "Community & Networking",
                "Web3 Career Hub",
                "Industry partnerships",
              ]}
            />

            <WhyCard
              title="Eligibility Requirements"
              points={[
                "No fees",
                "No prior experience needed",
                "Active participation expected",
              ]}
            />
              
          </Box>

      </Box>
    </Box>
  )

}

export default WhyMonobloc