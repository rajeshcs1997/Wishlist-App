import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25%',
    },
  },
}));

const Additems = () => {
  const classes = useStyles();
  const [item, setItem] = useState("");
  const [items, setItems] = useState ([]);
  useEffect(() => {
    let recievedata = JSON.parse(localStorage.getItem('items')) || [];
    setItems(recievedata)
  },[]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setItems((prev)=>[...prev,item]);
    setItem("");
    let data = items;
    data.push(item)
    setItems(data)
    localStorage.setItem('items', JSON.stringify(items));
  }

  return (
    <div>
      <h1 style={{color: "blue"}}>Add Wish</h1>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
      id="standard-basic"
      label="Add Items"
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      /><br />

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
    </div>
  );
};

export default Additems;