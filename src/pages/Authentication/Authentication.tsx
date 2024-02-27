import React from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import {CardStyles} from './styles';
import Typography  from '@mui/material/Typography';

const Authentication:React.FC = () => {

  const getHeader = () => {
    const handleChange = (value: string) => {
      console.log(value)
    }
    return (
      <SearchBar 
        placeholder= "Search by email, phone number or user UID"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        headerStyles={CardStyles.headerStyles}
        TextFieldStyles={CardStyles.textField}
      />
    )
  }

  const getContent = () => {
    return (
      <Typography>
        No users for this project yet
      </Typography>
    )
  }

  return (
    <Grid item xs={8} sx={{marginLeft:"320px"}}>
      <BasicCard 
        header={getHeader}
        sx={CardStyles.bodyStyles}
        childrenStyles={CardStyles.cardChildrenContainer}
      >
         {getContent()}
      </BasicCard>
    </Grid>
  )
}

export default Authentication
