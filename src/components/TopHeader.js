import React from 'react'
import style from 'styled-components'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GeeksforGeeks from '../images/geeksforgeeks.png';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import {mobile, tablet, laptop,desktop,tv} from '../responsive';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Container = style.div`
position: -webkit-sticky;
  position: sticky;
  top:0px;
  background-color:white;
  z-index:1;
`
const Wrapper = style.div`
height:80px;
width: 95%;
margin-left: auto;
margin-right: auto;
display:flex;
align-items:center;
`;

const Left = style.div`
flex:1.3;
justify-content: left;

${laptop({display: 'none'})};
${mobile({display: 'none'})};
${tablet({display: 'none'})};

`;

const ThreeLine =style.div`
${desktop({display: 'none'})};
${tv({display: 'none'})};

`

const Button1 = style(Button)`
color:black !important;
font-weight:550 !important;
&:hover
{
  color:green !important;
  background-color: white;
}
`;

const Button2 = style(Button)`
background-color:white !important;
color:black !important;
font-weight: 550 !important;

&:hover
{
  color:green !important;
  background-color: white;
}
`;

const Center = style.div`
flex:1;
display:flex;
gap:10px;
justify-content: center;
align-items:center;

${tablet({justifyContent:'end'})};
${laptop({justifyContent:'end'})};
`;

const Logo = style.img`
width:30px;
height:30px;


`;

const LogoName = style.h1`

${mobile({display:'none'})};
${tablet({display:'none'})};
`;

const Right = style.div`
flex:1;
display:flex;
justify-content:right;
gap:20px;
align-items:center;

${mobile({justifyContent:'left', gap:'10px'})};
${tablet({justifyContent:'right', gap:'10px'})};
`;

const RightBtn = style(Button)`
background-color: black !important;
color:white !important;


&:hover
{
  background-color:green !important;
}

${mobile({display:'none'})};
`;
const TopHeader = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
         <Wrapper>
         <ThreeLine>
           
           
         <Button2
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
         
      >
       <ReorderOutlinedIcon></ReorderOutlinedIcon>
      </Button2>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Jobs
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Tutorials
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Events
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Courses
        </MenuItem>
      </StyledMenu>


           
           
           
           </ThreeLine>
             <Left>
             <Button2
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
         
      >
       Jobs
      </Button2>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>

      <Button2
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
       Tutorials
      </Button2>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>

             <Button1>Events</Button1>
             <Button1>Courses</Button1>
             </Left>
             <Center>
             <Logo src={GeeksforGeeks}></Logo>
             <LogoName>GeeksforGeeks</LogoName>
             </Center>
             <Right>
              <SearchIcon></SearchIcon>
              <AppsIcon></AppsIcon>
              <GTranslateIcon></GTranslateIcon>
              <RightBtn>Sign In</RightBtn>
             </Right>
         </Wrapper>
        </Container>
  )
}

export default TopHeader
