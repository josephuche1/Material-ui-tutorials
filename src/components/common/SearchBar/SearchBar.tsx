import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';

interface ISearchBarProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    headerStyles?: object;
    TextFieldStyles: object;
    buttonOnClick?: () => void;
}


const SearchBar: React.FC<ISearchBarProps> = (props) => {
  return (
    <Box sx={props.headerStyles}>
        <SearchIcon />
        <Input
                placeholder={props.placeholder}
                onChange={props.onChange}
                sx={props.TextFieldStyles}
                disableUnderline
            />
        <CommonButton
            color="primary"
            variant="contained"
            size= "small"
            onClick={props.buttonOnClick}
         > 
            Add User
        </CommonButton>
        <Tooltip title="Refresh">
          <RefreshIcon />
        </Tooltip>
    </Box>
  )
}

export default SearchBar
