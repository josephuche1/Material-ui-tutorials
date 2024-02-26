import React from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const Authentication:React.FC = () => {
  const getHeader = () => {
    const headerStyles = {
       main: {
          width: "100%",
          border: "1px solid #E0E0E0",
          display: "flex",
          gap: "10px",
          padding: "5px",
          alignItems: "center",
       },
       textField: {
          backgroundColor: "transparent",
          width: "80%",
          border: "none",
       }

    }

    const handleChange = (value: string) => {
      console.log(value)
    }
    return (
      <SearchBar 
        placeholder= "Search by email, phone number or user ID"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        headerStyles={headerStyles.main}
        TextFieldStyles={headerStyles.textField}
      />
    )
  }
  const cardStyles = {
    marginTop:"20px",
    paddingBottom:"20px", 

  }

  return (
    <Grid item xs={8} sx={{marginLeft:"320px"}}>
      <BasicCard 
        header={getHeader}
        sx={cardStyles}
      />
    </Grid>
  )
}

export default Authentication
