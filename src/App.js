// import logo from './logo.svg';
import './App.css';
import DonationList from './DonationList';
import DonationDetails from './DonationDetails';
import { useSelector } from 'react-redux';
import EditDonation from './EditDonation';


function App() {
  let selected = useSelector(state => state.selectedDonation)
  let selectedForEdit = useSelector(state => state.selectedDonationForEdit)

  return (<>
    <DonationList />
    {selected && <DonationDetails />}
    {selectedForEdit&&<EditDonation/>}
  </>
  );
}

export default App;
