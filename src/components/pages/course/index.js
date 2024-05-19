import {
  Box,
} from '@mui/material';

import CurriculumOverview from './CurriculumOverview';
import LeftSide from './LeftSide';

function Course({
  caption="Monobloc Web3",
  title="Blockchain for business",
  description=[
    "The \"Blockchain for Business\" course is designed to be accessible to participants with non-technical backgrounds. The course typically emphasizes the business applications and implications of blockchain technology. ",
    "Real-world examples to explain technical concepts in a way that is easy to understand. For example, they may compare blockchain technology to a digital ledger or a distributed database. They may also provide examples of blockchain use cases in industries such as finance, supply chain management, and healthcare.",
    "Participants will also have access to support resources, such as online tutorials and technical assistance, to help them navigate the technical aspects of the course. The course is designed to empower participants with the knowledge and skills needed to leverage blockchain technology for business purposes."
  ],
  skills=[
    'The basics of Blockchain technology and how it works.',
    'How cryptocurrencies are created, traded and stored.',
    'Potential applications for Blockchain that will impact the new economy.',
    'Challenges involved in adopting a digital currency.',
    'Understand how blockchain is applied to different aspects of business.',
  ],
  details=[
    {
      title: 'Course Duration',
      value: '3 weeks',
    },
    {
      title: 'Teaching Method',
      value: 'Blended - Live Streaming',
    },
    {
      title: 'Background',
      value: 'No technical knowledge required',
    },
  ],
  weeks=[

    // Week 1
    <>
      Introduction and Context<br/>
      Impact of technology<br/>
      FinTech vs Traditional Banking<br/>
      FinTech Features
    </>,
    
    // Week 2
    <>
      Open Banking<br/>
      Economic Impact<br/>
      FinTech vs Banks<br/>
      Big Tech and Telecos
    </>,

    // Week 3
    <>
      Overview<br/>
      Crowdfunding<br/>
      Crowdlending<br/>
    </>,

    // Week 4
    <>
      Wealthtech<br/>
      Payments<br/>
      New Business Models<br/>
    </>,
    
  ],
}) {

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
          justifyContent: 'space-between',
          gap: '50px',
        }}
      > 

        <LeftSide
          caption={caption}
          title={title}
          description={description}
          details={details}
          skills={skills}
        />

        <CurriculumOverview
          weeks={weeks}
        />

      </Box>

    </Box>
  );

}

export default Course;