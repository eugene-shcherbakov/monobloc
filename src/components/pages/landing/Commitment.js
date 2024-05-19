import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material'

const Commitment = () => {

  return (
    <Box sx={{
      backgroundImage: "url(/images/introduction_gradient.jpg)",
      position: "relative",
      backgroundPosition: "center",
      backgroundSize: "cover",
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.75)',
        zIndex: 0,
        backdropFilter: 'blur(10px)',
      },
    }}>
      {/* Inner wrapper */}
      <Box sx={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: '75px',
        position: 'relative',
        zIndex: 10,
      }}>
        <Typography
          sx={{
            // fontFamily: 'Mulish',
            fontFamily: 'FKGrotesk-Regular',
            fontWeight: 400,
            color: '#FFFFFF',
            fontSize: '22px',
            marginBottom: '15px',
            textAlign: "center"
          }}>
            Our commitment to equality of opportunity and shared prosperity means that we prioritize the development of all individuals, regardless of background or circumstance. At Monobloc, we believe that education should not only be accessible, but transformational.
          </Typography>
      </Box>
    </Box>
  )

}

export default Commitment