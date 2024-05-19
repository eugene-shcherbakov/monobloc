import React, { useState } from 'react';

import { 
  Box,
  TextField, 
  MenuItem, 
  FormControl, 
} from '@mui/material';

import GreenButton from '../../ui/GreenButton';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import CustomSelect from '../../ui/CustomSelect';
import Textarea from '../../ui/Textarea';

const NewJobForm = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [applicationLink, setApplicationLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: "10px",
        padding: "25px",
        border: "1px rgba(0, 0, 0, 0.1) solid",
        maxWidth: "600px",
      }}
    >

      {/* Job title */}
      <FormControl>
        <Label>Job Title</Label>
        <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required/>
      </FormControl>

      {/* Company name */}
      <FormControl>
        <Label>Company Name</Label>
        <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required/>
      </FormControl>

      {/* Company logo */}
      {/* TODO: implement input */}
      {/* <FormControl>
        <input type="file" accept="image/*" />
      </FormControl> */}

      <Box sx={{
        display: 'flex',
        gap: '20px',
        width: '100%',
      }}>

        {/* Employment type */}
        <FormControl
          sx={{
            flex: 1
          }}
        >
          <Label>Employment type</Label>
          <CustomSelect
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <MenuItem value={'full-time'}>Full-Time</MenuItem>
            <MenuItem value={'part-time'}>Part-Time</MenuItem>
            <MenuItem value={'contract'}>Contract</MenuItem>
          </CustomSelect>
        </FormControl>

        {/* Job category */}
        <FormControl
          sx={{
            flex: 1
          }}
        >
          <Label>Job Category</Label>
          <CustomSelect
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
            required
          >
            <MenuItem value={'blockchain-development'}>Blockchain Development</MenuItem>
            <MenuItem value={'smart-contract-engineering'}>Smart Contract Engineering</MenuItem>
            <MenuItem value={'decentralized-finance'}>Decentralized Finance</MenuItem>
          </CustomSelect>
        </FormControl>

      </Box>

      {/* Job location */}
      <FormControl>
        <Label>Job Location</Label>
        <Input value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required/>
      </FormControl>

      {/* Job Description */}
      <FormControl>
        <Label>Job Description</Label>
        <Textarea 
          value={jobDescription} 
          onChange={(e) => setJobDescription(e.target.value)} 
          required 
        />
      </FormControl>

      {/* Required Skills */}
      <FormControl>
        <Label>Required Skills</Label>
        <Textarea 
          value={requiredSkills} 
          onChange={(e) => setRequiredSkills(e.target.value)} 
          required 
        />
      </FormControl>

      {/* Salary Range */}
      <FormControl>
        <Label>Salary Range</Label>
        <Input value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} required/>
      </FormControl>

      {/* Application Link */}
      <FormControl>
        <Label>Application Link</Label>
        <Input value={applicationLink} onChange={(e) => setApplicationLink(e.target.value)} required/>
      </FormControl>

      {/* Submit button */}
      <GreenButton 
        type="submit"
        sx={{
          width: 'fit-content'
        }}
      >Submit</GreenButton>

    </Box>
  );
}

export default NewJobForm;