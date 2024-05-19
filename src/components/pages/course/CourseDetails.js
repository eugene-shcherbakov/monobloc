import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';

const DetailItem = ({title, value}) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginBottom: '25px',
      }}
    >
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
      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Regular',
          fontWeight: 100,
          color: '#000',
          fontSize: '14px',
        }}
      >
        {value}
      </Typography>
    </Box>
  )

}

function CourseDetails({details}){

  return (

    <Box
      sx={{
        marginLeft: '25px'
      }}
    >
      
      {details.map((detail, index) => (
        <DetailItem

          key={index}
          title={detail.title}
          value={detail.value}
        />
      ))}
      
    </Box>

  );

}

export default CourseDetails;