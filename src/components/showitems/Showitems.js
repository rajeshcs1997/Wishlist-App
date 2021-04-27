import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Showitems.css';

const Showitems = () => {
  const [items, setItems] = useState ([]);
  const [open, setOpen] = useState(false);
  const [wish, setWish] = useState("")
  const [wishid, setWishid] = useState("");
  useEffect(() => {
    let recievedata = JSON.parse(localStorage.getItem('items')) || [];
    setItems(recievedata)
  },[]);
  const handleChange = (e) =>{
    setWish(e.target.value)
  }
  const handleDelete = (e, res) =>{
    console.log(res,"res")
    let aftervalues=items?.filter((i,key)=> key !== res)
    setItems(aftervalues)
    localStorage.setItem('items', JSON.stringify(aftervalues));
  }
  const handleEdit = (value,res) =>{
    setOpen(true);
    setWish(value)
    setWishid(res)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    let data1 = items
    data1[wishid]=wish;
    setItems(data1);
    let data2=items;
    setItems(data2);
    localStorage.setItem('items', JSON.stringify(items));
    setOpen(false);
  };
  console.log("wjksdfjkfkjf",items)
  return (
    <div>
      <h1 style={{color: "blue"}}>Your Wishlist</h1>
      <ul className="list">
        {items?.map((value, res) =>
          <li>
            <div className="showitem">
              <div className="item">
                {value}
              </div>
              <div>
                <Button variant="contained" color="primary" className="edit" onClick={(e)=>handleEdit(value,res)}>
                  Edit
                </Button>
                <Button variant="contained" color="primary" className="delete" onClick={(e)=>handleDelete(e,res)}>
                  Delete
                </Button>
              </div>
            </div>
          </li>
        )}
      </ul>
      {items.length===0 && <h1 style={{color:"green"}}>You have no wishlist</h1>
      }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdate}>
          <TextField
            autoFocus
            label="Edit"
            defaultValue={wish}
            onChange={handleChange}
            fullWidth
          /><br/><br/>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Showitems;