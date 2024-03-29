import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import {CardStyles} from './styles';
import Typography  from '@mui/material/Typography';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';


const Authentication:React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    if (open === false) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

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
        buttonOnClick={handleOpen}
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
      <NewUserModal 
        open={open}
        onClose={handleOpen}
        title="New User"
        subtitle='Please fill in the details of the new user'
      />
    </Grid>
  )
}

export default Authentication
