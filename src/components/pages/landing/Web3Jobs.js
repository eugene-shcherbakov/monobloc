import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

import GreenButton from '../../ui/GreenButton'

const Web3Jobs = () => {

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("/images/web3_girl.jpg")',
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
            Access Web3 Jobs and Internships
          </Typography>
          <Typography
            sx={{
              fontFamily: 'EloquiaDisplay-ExtraLight',
              color: '#FFFFFF',
              fontSize: '18px',
              marginBottom: '15px',
              textAlign: "left"
            }}>
              Gain hands-on experience in the field. Many companies in the Web3 space offer internships to students and recent graduates.
            </Typography>
            <Typography
            sx={{
              fontFamily: 'EloquiaDisplay-ExtraLight',
              color: '#FFFFFF',
              fontSize: '18px',
              marginBottom: '15px',
              textAlign: "left"
            }}>
              Internships can help you learn new skills, make connections in the industry, and gain valuable work experience.
            </Typography>

            {/* Buttons wrapper */}
            <Box sx={{
              marginTop: '30px',
            }}>
              <GreenButton
                href={'/contact'}
              >
                Find Web3 Jobs
              </GreenButton>
            </Box>

            {/* Lower text wrapper */}
            <Box sx={{
              marginTop: '15px',
              width: 'fit-content'
            }}>
              <Typography
                sx={{
                  fontFamily: 'EloquiaDisplay-ExtraLight',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  textAlign: "left"
                }}>
                    Discover over 200 exciting career opportunities available now
                </Typography>
              </Box>

          </Box>
      </Box> 
    </Box>
  )

}

export default Web3Jobs