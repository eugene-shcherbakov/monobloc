import {
  Box, Typography,
} from '@mui/material';

function ComingSoon() {

  return (
    <Box
      sx={{
        height: "80vh",
        maxHeight: "700px",
        backgroundImage: "url(/images/white_star_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: '64px',
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
          paddingBlock: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '50px',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      > 

        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '400px',
        }}>

          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: 'FKGrotesk-Bold',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >
            Coming Soon 
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
            }}
          >
            We are pleased to inform you that our team is currently developing a new product that we believe will be of interest to you. Our team of experts is working diligently to create a revolutionary new product that we are confident will meet your needs.
          </Typography>

        </Box>

      </Box>

    </Box>
  );

}

export default ComingSoon;