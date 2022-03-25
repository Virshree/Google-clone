import React from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { action } from '../reducer';
import UseGoogleSearch from '../UseGoogleSearch';


function Search({hidebuttons}) {
  const [input,setInput]=useState(" ");
   // eslint-disable-next-line no-empty-pattern
   const [{}, dispatch] = useStateValue()
    const {searchResult} =UseGoogleSearch(input)
    console.log(searchResult);
  const navigate=useNavigate();
  // eslint-disable-next-line no-empty-pattern

  const search=(e)=>{
    e.preventDefault();
      navigate('/search');
 dispatch({
            type: action.SET_SEARCH_TERM,
            term: input
        })
        setInput('')
  
  }
  return (
    <form className='search'>
        <div className='search-input'>
            <SearchIcon className='search-icon'/>
            <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}/>
            <MicIcon/>
        </div>
        {!hidebuttons &&  <div className='search-buttons'>
            <Button onClick={search} type="submit" variant='outlined'>Google Search</Button>
            <Button  variant='outlined'>I'm feeling lucky</Button>
        </div>}
       
    </form>
  )
}

export default Search