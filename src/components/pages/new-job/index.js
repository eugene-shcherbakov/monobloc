import React from 'react';

import {Box, Typography} from '@mui/material';
import NewJobForm from './NewJobForm';

function NewJob(){

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        minHeight: '95vh',
        paddingTop: '64px',
      }}
    >

      {/* Inner wrapper */}
      <Box sx={{
          maxWidth: '1400px',
          width: '90%',
          margin: '0 auto',
          height: '100%',
          paddingBlock: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >   

        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            color: '#000000',
            fontSize: '40px',
            lineHeight: '32px',
          }}
        >
          Post a new job
        </Typography>

        {/* NewJobForm */}
        <NewJobForm />

      </Box>

    </Box>
  );

}

export default NewJob;