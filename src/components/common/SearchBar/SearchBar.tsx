import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';

interface ISearchBarProps {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // TODO: Change any to the type of the event
}


const SearchBar: React.FC<ISearchBarProps> = (props) => {
  return (
    <div>
        <SearchIcon />
        <TextField
                placeholder={props.placeholder}
                onChange={props.onChange}
                variant="standard"
            />
    </div>
  )
}

export default SearchBar
