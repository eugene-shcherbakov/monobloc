import React from 'react'
import {
  Box,
  Typography,
  Link
} from '@mui/material'

import {AiOutlineArrowRight} from 'react-icons/ai'

const CourseCardHashTag = ({hashtag}) => {

  return (
    <Box sx={{
      borderRadius: '5px',
      padding: '5px 10px',
      backgroundColor: 'rgb(0, 236, 151)',
      color: '#000',
      fontSize: '12px',
      display: 'inline-block',
      marginRight: '10px',
      marginTop: '10px',
      '&:last-child': {
        marginRight: 0,
      }
    }}>
      {hashtag}
    </Box>
  )

}

const CourseCard = ({
  title="Course title",
  description="Course description",
  hashtags=["#hashtag", "#hashtag", "#hashtag"],
  link
}) => {

  return (
    <Box sx={{
      borderRadius: "10px",
      paddingBlock: '25px',
      backgroundColor: 'white',
      width: '100%',
      paddingInline: '25px',
      display: 'flex',
      flexDirection: 'column',
      // border: '2px #6FD404 solid',
    }}>

      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Bold',
          color: '#000000',
          fontSize: '16px',
          lineHeight: '28px',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Regular',
          color: '#000000',
          fontSize: '14px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        {description}
      </Typography>
      {/* Hashtags on the left and arrow on the right*/}
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          paddingTop: '20px',
          marginTop: 'auto',
        }}
      >
        {/* Hashtags wrapper */}
        <Box
          sx={{
            marginTop: "5px",
            flex: "1"
          }}
        >
          {
            hashtags.map(
              (hashtag, index) => (
                <CourseCardHashTag
                  key={index}
                  hashtag={hashtag}
                />
              )
            )
          }
        </Box>
        {/* Arrow */}
        <Link
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #000',
            width: '40px',
            height: '40px',
            borderRadius: '5px',
            marginTop: '15px',
          }}
          href={link}
        >
          <AiOutlineArrowRight
            color="#000"
          />
        </Link>
      </Box>
      
    </Box>
  );

}

const EarlyAccessCard = () => {

  return (

    <Box 
      sx={{
        padding: '50px',
        backgroundColor: 'black',
        backgroundImage: "url(/images/blue_cube.jpg)",
        zIndex: 2,
        backgroundSize: '400px auto',
        backgroundPosition: '120% 58%',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.60)',
          borderRadius: '10px',
          backdropFilter: 'blur(5px)',
        },

        // TODO: Temporary hardcoded width
        width: '650px',
        height: 'fit-content',
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: '10px',
      }}
    >  
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            color: '#FFF',
            fontSize: '22px',
            lineHeight: '28px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Early Access Pass
        </Typography>
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Regular',
            color: '#FFF',
            fontSize: '14px',
            lineHeight: '22px',
            position: 'relative',
            zIndex: 1,
            marginTop: '10px',
          }}
        >
          Get access to our exclusive early access program
        </Typography>
      {/* Link */}
      <Link
        href="#"
        sx={{
          color: '#FFF',
          borderRadius: '25px',
          border: '2px solid #FFF',
          position: 'relative',
          zIndex: 1,
          paddingInline: '25px',
          paddingBlock: '10px',
          fontFamily: 'FKGrotesk-Bold',
          fontSize: '14px',
          textDecoration: 'none',
          display: 'flex',
          width: 'fit-content',
          alignItems: 'center',
          marginTop: '25px',
          gap: '5px',
          '&:hover': {
            backgroundColor: '#FFF',
            color: '#000',
            '& svg': {
              color: '#000 !important',
            }
          }
        }}
      >
        Apply for Early Access Pass
        {/* Arrow right */}
        <AiOutlineArrowRight
          color="#FFF"
        />
      </Link>

    </Box>

  );

}

const Courses = () => {

  return (
    <Box sx={{
      // Bacgkround color of the whole section
      // backgroundColor: '#f2f1ea',
      backgroundColor: '#f7f6ff',
      position: 'relative',
      overflow: 'hidden',
      // borderBottom: '1px solid #000000',
    }}>
      {/* Inner wrapper */}
      <Box sx={{
        // Styles for the inner wrapper
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        paddingBlock: '100px',
      }}>
        
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Bold',
            color: '#000000',
            fontSize: '40px',
            lineHeight: '32px',
          }}
        >
          Skills development
        </Typography>
        <Typography
          sx={{
            fontFamily: 'FKGrotesk-Regular',
            color: '#000000',
            fontSize: '18px',
            marginBottom: '50px',
            marginTop: '20px',
          }}
        >
          Take advantage of our free programs to begin your web3 journey
        </Typography>
        {/* Colums wrapper */}
        <Box sx={{
          display: 'flex',
          gap: '25px',
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            width: '650px',
          }}
          >
            {/* Early access card */}
            <EarlyAccessCard />

            {/* image laptop_with_monobloc_landing */}
            <img 
              src="/images/laptop_with_monobloc_landing.png"
              alt="laptop_with_monobloc_landing"
              style={{
                width: '50%',
                height: 'auto',
                position: 'relative',
                left: '150px'
              }}
            />
          </Box>

          {/* Courses cards wrapper */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '50%',
          }}>
            {/* Row */}
            <Box sx={{
              display: 'flex',
              gap: '15px',
            }}>
              <CourseCard 
                title={"Blockchain for Business"}
                description={'Blockchain technology has the potential to fundamentally change the way in which business is conducted and to transform the bases of our economic and social systems.'}
                hashtags={['#DLT', '#BlockchainTechnology', '#Blockchain101']}
                link={'/course/blockchain-for-business'}
              />
              <CourseCard 
                title={"FinTech Innovation"}
                description={'Fintech has disrupted traditional financial institutions by creating innovative solutions that are faster, more efficient, and often less expensive than traditional banking methods.'}
                hashtags={['#DigitalPayments', '#FinancialServices', '#OpenBanking']}
                link={'/course/fintech-innovation'}
              />
            </Box>
            {/* Row */}
            <Box sx={{
              display: 'flex',
              gap: '15px',
            }}>
              <CourseCard 
                title={"DeFi (Decentralized Finance)"}
                description={'DeFi is an umbrella term for applications and projects in the public blockchain space geared toward disrupting the traditional finance world.'}
                hashtags={['#SmartContracts', '#LendingProtocol', '#DEX']}
                link={'/course/defi'}
              />
              <CourseCard 
                title={"Decentralized Autonomous Organizations (DAOs)"}
                description={'DAOs are typically designed to be autonomous, meaning they operate with little or no human intervention, and decentralized, meaning there is no central authority or single point of control.'}
                hashtags={['#Web3', '#DecentralizedVoting', '#DecentralizedVoting']}
                link={'/course/daos'}
              />
            </Box>
          </Box>

        </Box>
      </Box> 
    </Box>
  )

}

export default Courses