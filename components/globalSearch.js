/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <><SearchIcon /><TextField {...params} placeholder="Try artist, date, genre or venue"></TextField></>}
        />
    );
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
]