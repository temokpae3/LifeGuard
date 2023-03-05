import * as React from 'react';
import Modal from '@mui/material/Modal';
import './App.css';
import './FLOODWATER-NORMAL.otf';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                  Name your character:
                </Typography>
                <TextField style={{transform: 'translate(107%, 0%)'}} id="outlined-basic" label="Name" variant="outlined" />
                <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
                   Choose your gender:
                </Typography>
                <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      <ToggleButton style={{transform: 'translate(340%, 0%)'}} value="male">Male</ToggleButton>
                      <ToggleButton style={{transform: 'translate(263%, 0%)'}} value="female">Female</ToggleButton>
                      <ToggleButton style={{transform: 'translate(196.5%, 0%)'}} value="nonbinary">Nonbinary</ToggleButton>
                    </ToggleButtonGroup>
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
