import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  styled,
  alpha,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import LogoutModal from '../pages/LogoutModal';

const statesWithDistricts = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kadapa", "Anantapur", "Kurnool", "Rajahmundry", "Eluru"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat", "Roing", "Bomdila", "Tezu", "Changlang", "Daporijo", "Aalo"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon", "Tinsukia", "Barpeta", "Bongaigaon", "Sivasagar"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bettiah", "Saharsa", "Ara", "Chapra"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Durg", "Bilaspur", "Korba", "Jagdalpur", "Ambikapur", "Raigarh", "Dhamtari", "Rajnandgaon"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanguem", "Canacona", "Sanquelim"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Navsari"],
  "Haryana": ["Chandigarh", "Faridabad", "Gurgaon", "Ambala", "Hisar", "Panipat", "Rohtak", "Karnal", "Yamunanagar", "Bhiwani"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Kangra", "Solan", "Chamba", "Kullu", "Bilaspur", "Hamirpur", "Una", "Kinnaur"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Giridih", "Deoghar", "Ramgarh", "Dumka", "Chaibasa"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore", "Dharwad", "Gulbarga", "Bijapur", "Bellary", "Tumkur"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad", "Kottayam", "Malappuram", "Kannur"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Satna", "Rewa", "Ratlam", "Chhindwara"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Latur", "Dhule"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Senapati", "Ukhrul", "Tamenglong", "Kakching", "Jiribam", "Chandel"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara", "Williamnagar", "Resubelpara", "Mawkyrwat", "Ampati", "Khliehriat"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib", "Saiha", "Mamit", "Lawngtlai"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Zunheboto", "Wokha", "Mon", "Phek", "Kiphire", "Longleng"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Balasore", "Puri", "Jeypore", "Bhadrak", "Baripada"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Pathankot", "Mohali", "Firozpur"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Alwar", "Bharatpur", "Sikar", "Pali"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Tirunelveli", "Vellore", "Thoothukudi", "Dindigul"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahbubnagar", "Adilabad", "Suryapet", "Jagtial"],
  "Tripura": ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Belonia", "Ambassa", "Kamalpur", "Khowai", "Melaghar", "Sonamura"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Haldwani", "Rishikesh", "Roorkee", "Almora", "Pithoragarh", "Tehri", "Rudrapur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Malda", "Kharagpur", "Haldia", "Medinipur"]
};


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('sm')]: { width: 'auto', minWidth: '300px' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
}));

const Navbar = ({ toggleDrawer }) => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [priority, setPriority] = useState('');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" edge="start" sx={{ mr: 1 }}>
            <HomeIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
            RoadCare
          </Typography>
          
          <FormControl size="small" sx={{ minWidth: 150, backgroundColor: 'white', mr: 2 }}>
            <Select value={state} onChange={(e) => { setState(e.target.value); setDistrict(''); }} displayEmpty>
              <MenuItem value="">All States</MenuItem>
              {Object.keys(statesWithDistricts).map((stateName) => (
                <MenuItem key={stateName} value={stateName}>{stateName}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150, backgroundColor: 'white', mr: 2 }}>
            <Select value={district} onChange={(e) => setDistrict(e.target.value)} displayEmpty disabled={!state}>
              <MenuItem value="">All Districts</MenuItem>
              {state && statesWithDistricts[state].map((districtName) => (
                <MenuItem key={districtName} value={districtName}>{districtName}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150, backgroundColor: 'white', mr: 2 }}>
            <Select value={priority} onChange={(e) => setPriority(e.target.value)} displayEmpty>
              <MenuItem value="">All Priorities</MenuItem>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="body1" sx={{ color: 'white', mr: 2 }}>
            Roop Biswal
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>

          <IconButton color="inherit" onClick={() => setIsLogoutModalOpen(true)}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;