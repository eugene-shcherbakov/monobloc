import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import {AiFillCheckCircle} from 'react-icons/ai'
import GreenButton from '../../ui/GreenButton'

const BenefitItem = ({benefit}) => {

  return (
    <Box sx={{
      fontFamily: 'FKGrotesk-Regular',
      color: '#fff',
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

const BenefitCard = ({
  title,
  benefits
}) => {

  return (
    <Box sx={{
      borderRadius: "10px",
      paddingBlock: '25px',
      backgroundColor: '#efefee25',
      border: '1px rgba(255, 255, 255, 0.25) solid',
      backdropFilter: 'blur(5px)',
      width: '100%',
      paddingInline: '25px',
      display: 'flex',
      flexDirection: 'column',
    }}>

      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Bold',
          color: '#FFF',
          fontSize: '16px',
          lineHeight: '28px',
        }}
      >
        {title}
      </Typography>
      
      {/* Benefits wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {
          benefits.map(
            (benefit, index) => (
              <BenefitItem
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

const AiAnalytics = () => {

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("/images/ai_girl.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderBottom: '1px solid #000000',
    }}>
      {/* Inner wrapper */}
      <Box sx={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        paddingBlock: '100px',
      }}>
        <Box sx={{
          width: '650px'
        }}>
          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Bold',
              color: '#FFFFFF',
              fontSize: '40px',
              marginBottom: '20px',
              lineHeight: '64px',
            }}
          >
            AI-Powered analytics
          </Typography>
          <Typography
            sx={{
              fontFamily: 'EloquiaDisplay-ExtraLight',
              color: '#FFFFFF',
              fontSize: '18px',
              marginBottom: '15px',
              textAlign: "left"
            }}>
              Monobloc digital platform leverages AI and analytics to benefit job seekers and companies.
            </Typography>
            {/* Benefits cards */}
            <Box sx={{
              display: 'flex',
              gap: '20px',
              marginTop: '30px',              
            }}>
              <BenefitCard
                title="Job seekers"
                benefits={[
                  "AI-powered job matching",
                  "Resume analysis",
                  "Interview preparation",
                  "Analytics-driven insights",
                ]}
              />
              <BenefitCard
                title="Companies"
                benefits={[
                  "Time and cost savings",
                  "Improved candidate quality",
                  "Increased diversity and inclusivity",
                  "Data-driven insights",
                ]}
              />
            </Box>
            {/* Buttons */}
            <Box sx={{
              marginTop: '30px',
            }}>
              <GreenButton
                href={'/contact'}
              >
                Find Web3 Jobs
              </GreenButton>
            </Box>
          </Box>
      </Box> 
    </Box>
  )

}

export default AiAnalytics