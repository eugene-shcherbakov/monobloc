import {
  Box, Typography,
} from '@mui/material';

function ComingSoon() {

  return (
    <Box
      sx={{
        minHeight: "80vh",
        // backgroundImage: "url(/images/white_cubes_bg_3.png)",
        backgroundColor: "#fff",
        // backgroundSize: "auto 90vh",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 50%",
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
          zIndex: 1,
        },
      }}
    >

      {/* Megacube image */}
      <img 
        src="/images/megacube_2.png" 
        alt="megacube" 
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '10vw',
          width: 'auto',
          height: '55vh',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

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
          maxWidth: '600px',
          zIndex: 2,
          // backdropFilter: 'blur(5px)',
          // border: '1px rgba(0, 0, 0, 0.1) solid',
          // borderRadius: '5px',
          // padding: '25px',
        }}>

          <Box sx={{
            // backgroundColor: "#f7f6ff",
            // padding: "30px",
            // borderRadius: "10px",
          }}>

          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: 'FKGrotesk-Bold',
              fontSize: '18px',
              marginBottom: '10px',
              textAlign: 'justify'
            }}
          >
            ABOUT
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
              textAlign: 'justify'
            }}
          >
            Monobloc is a technology platform that is committed to creating economic opportunity by empowering individuals who are seeking to work and financially thrive in the digital economy and new technologies. Our platform provides the necessary know-how and upskilling to adjust to a constantly changing business environment.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
              marginTop: "15px",
              textAlign: 'justify'
            }}
          >
            We operate at the intersection of education and technology, with a focus on disruptive technologies and AI-powered tools for job seekers and companies. Our platform offers a wide range of courses and training programs designed to help students develop the necessary skills to succeed in the ever-evolving tech industry.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
              marginTop: "15px",
              textAlign: 'justify'
            }}
          >
            Monobloc is a one-stop resource that connects job seekers with companies looking for talent. We believe that the best way to create economic opportunity is by connecting people with the right job opportunities, and we do that by leveraging emerging technologies to provide innovative solutions for education and career development in the Web3 industry.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
              marginTop: "15px",
              textAlign: 'justify'
            }}
          >
            At Monobloc, we are dedicated to providing the tools and resources necessary for success in the digital economy. Our forward-thinking approach and commitment to emerging technologies ensure that our users are always at the forefront of the latest developments in the industry.
          </Typography>

          <Typography
            sx={{
              fontFamily: 'FKGrotesk-Regular',
              fontSize: '14px',
              marginTop: "15px",
              textAlign: 'justify'
            }}
          >
            Join us today and take the first step towards a successful career in the tech industry.
          </Typography>

          </Box>

        </Box>

      </Box>

    </Box>
  );

}

export default ComingSoon;