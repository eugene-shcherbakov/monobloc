import {
  Box,
  Typography,
  Button
} from '@mui/material';

const ModuleItem = ({number, description}) => {

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
          fontSize: '12px',
          lineHeight: '18px',
        }}
      >
        Module {number}
      </Typography>
      <Typography
        sx={{
          // fontFamily: 'FKGrotesk-Monospaced',
          fontFamily: 'FKGrotesk-Regular',
          fontWeight: 100,
          color: '#000',
          fontSize: '12px',
        }}
      >
        {description}
      </Typography>
    </Box>
  )

}

function CurriculumOverview({
  weeks,
}){

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
        paddingBottom: '0',
        borderRadius: '10px',
        // transform: 'perspective(600px) rotateY(-10deg)',
        backgroundColor: '#efefee75',
        width: '700px',
        boxSizing: 'border-box',
        border: '1px rgba(0, 0, 0, 0.1) solid',
        height: 'fit-content',
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: 'FKGrotesk-Bold',
          fontWeight: 900,
          color: '#577bf0',
          fontSize: '12px',
          marginBottom: '20px',
          lineHeight: '1.1',
          position: 'relative',
          zIndex: 2,
        }}
      >
        CURRICULUM
      </Typography>

      {/* Modules */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {
          weeks.map((description, index) => {
            return (
              <ModuleItem
                key={index}
                number={index+1}
                description={description}
              />
            );
          })
        }
      </Box>
      
    </Box>
  );

}

export default CurriculumOverview;