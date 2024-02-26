import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';

interface ISearchBarProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    headerStyles?: object;
    TextFieldStyles: object;
}


const SearchBar: React.FC<ISearchBarProps> = (props) => {
  return (
    <Box sx={props.headerStyles}>
        <SearchIcon />
        <TextField
                placeholder={props.placeholder}
                onChange={props.onChange}
                variant="standard"
                sx={props.TextFieldStyles}
            />
        <CommonButton
            color="primary"
            variant="contained"
            size= "small"
         > 
            Add User
        </CommonButton>
        <RefreshIcon />
    </Box>
  )
}

export default SearchBar
