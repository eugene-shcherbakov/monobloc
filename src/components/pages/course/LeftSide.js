import React from 'react';

import {
  Box,
  Button,
  Typography,
  Link
} from '@mui/material';

import CourseDetails from './CourseDetails';

import {AiOutlineCheckSquare} from 'react-icons/ai';

function SkillItem({
  children
}) {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        borderRadius: '5px',
        marginTop: '20px',
        fontFamily: 'FKGrotesk-Regular',
        fontSize: '14px',
      }}
    >
      <Box sx={{
        width: '18px',
        marginRight: '10px',
      }}>
        <AiOutlineCheckSquare
          color='rgb(0, 0, 0)'
          size='18px'
        />
      </Box>

      {children}
    </Box>
  );

}

function DownButton ({children, href, ...rest}){ 

  return (
    <Button
      variant="outlined"
      component={href ? Link : Button}
      href={href}
      sx={{
        color: '#000',
        fontFamily: 'EloquiaDisplay-ExtraLight',
        fontWeight: 800,
        fontSize: '14px',
        textTransform: 'none',
        padding: '15px 30px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'rgb(0, 236, 151)',
        lineHeight: '1.75',
        paddingBlock: '6px',
        paddingInline: '16px',
        '&:hover': {
          backgroundColor: 'rgb(0, 236, 151)',
          border: 'none'
        }
      }}
      {...rest}
      >
        {children}
      </Button>
    )

}

function LeftSide({
  caption,
  title,
  description,
  details,
  skills
}) {

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* Course title */}  
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px', 
        }}
      >
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Regular',
            fontSize: '14px',
            lineHeight: '18px',
            marginBottom: '15px',
            // backgroundColor: 'rgb(0, 236, 151)',
            borderLeft: '2px solid #577bf0',
            color: '#000',
            padding: '5px 15px',
            // borderRadius: '5px',
            width: 'fit-content',
          }}
        >
          {caption}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            color: '#000000',
            fontSize: '40px',
            lineHeight: '32px',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Inner sides wrapper */}
      <Box 
        sx={{
          display: 'flex',
        }}
      >

        {/* Inner left side */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >

          {/* About the course */}
          <Box sx={{
            marginTop: '40px',
          }}>

            <Typography
              sx={{
                fontFamily: 'FKGrotesk-Bold',
                color: '#577bf0',
                fontSize: '12px',
                lineHeight: '32px',
              }}
            >
              INSIGHTS
            </Typography>

            {
              description.map((item, index) => (
                <Typography
                  sx={{
                    fontFamily: 'FKGrotesk-Regular',
                    color: '#000000',
                    fontSize: '14px',
                    lineHeight: '32px',
                    marginTop: '15px',
                    textAlign: 'justify',
                  }}
                >
                  {item}
                </Typography>
              ))
            }

          </Box>

          {/* Skills you learn */}
          <Box sx={{
            marginTop: '40px',
          }}>

            <Typography
              sx={{
                fontFamily: 'FKGrotesk-Bold',
                color: '#577bf0',
                fontSize: '12px',
                lineHeight: '32px',
              }}
            >
              WHAT YOU WILL LEARN
            </Typography>

            <Box 
              sx={{

              }}
            >
              {skills.map((skill, index) => (
                <SkillItem key={index}>
                  {skill}
                </SkillItem>
              ))}

            </Box>

          </Box>

          {/* Down buttons */}
          <Box sx={{
            marginTop: '40px',
            display: 'flex',
            gap: '10px',
          }}>

            <DownButton 
              href="/contact"
            >Enroll Now</DownButton>

          </Box>

        </Box>

        {/* Inner right side */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '40px',
            marginTop: '40px',
            width: '300px',
          }}
        >

          {/* Course details */}
          <CourseDetails
            details={details}
          />

        </Box>

      </Box>

    </Box>
  )

}

export default LeftSide;