import * as React from 'react';
import Modal from '@mui/material/Modal';
import './App.css';
import './FLOODWATER-NORMAL.otf';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  bgcolor: '#CCFCFA',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
    const [open, setOpen] = React.useState(false);

    const [setAlignment] = React.useState('left');

    const [isActive, setActive] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const toggleClass = () => {
        setActive(isActive);
    };

  return (
    <div className="App">
      <header className="App-header">
        <span className="game-title">
            LifeGuard
        </span>
        <button onClick={handleClick} className="start-btn">PRESS START</button>
        <Modal open={open}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                  Name your character:
                </Typography>
                <TextField style={{transform: 'translate(107%, 0%)'}} id="outlined-basic" label="Name" variant="outlined" />
                <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
                   Choose your gender:
                </Typography>
                <Button style={{transform: 'translate(290%, 0%)'}} variant="outlined" onClick={() => {alert('clicked');}}>Male</Button>
                <Button style={{transform: 'translate(240%, 0%)'}} variant="outlined" onClick={() => {alert('clicked');}}>Female</Button>
                <Button style={{transform: 'translate(190%, 0%)'}} variant="outlined" onClick={() => {alert('clicked');}}>Nonbinary</Button>
                <div>
                    <IconButton style={{ transform: 'translate(1300%, 300%' }} aria-label="arrow-forward">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </Box>
        </Modal>
      </header>
    </div>
  );
}

export default App;
