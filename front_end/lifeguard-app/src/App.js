import * as React from 'react';
import Modal from '@mui/material/Modal';
import './App.css';
import './FLOODWATER-NORMAL.otf';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    const handleClick = () => {
        setOpen(true);
    }

  return (
    <div className="App">
      <header className="App-header">
        <span className="game-title">
            LifeGuard
        </span>
        <button onClick={handleClick} className="start-btn">PRESS START</button>
        <Modal open={open}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Name your character:
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   Choose your gender
                </Typography>
                <Button variant="outlined" onClick={() => {alert('clicked');}}>Male</Button>
                <Button variant="outlined" onClick={() => {alert('clicked');}}>Female</Button>
                <Button variant="outlined" onClick={() => {alert('clicked');}}>Nonbinary</Button>
                <div>
                <IconButton aria-label="arrow-backward">
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton aria-label="arrow-forward">
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
