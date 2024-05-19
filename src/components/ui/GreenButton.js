import {
  Button,
  Link
} from '@mui/material'

const GreenButton = ({href, children, sx, ...rest}) => {

  console.log('href', href)

  return (
    <Button
      component={href ? Link : Button}
      href={href}
      variant="outlined"
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
        textDecoration: 'none',
        ...sx,
        '&:hover': {
          backgroundColor: 'rgb(0, 236, 151)',
          border: 'none'
        },
      }}
      {...rest}
      >
        {children}
      </Button>
  )

}

export default GreenButton;