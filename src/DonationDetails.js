import { useSelector } from "react-redux";

const DonationDetails = () => {
    let donation = useSelector(state => state.selectedDonation)
    return (<div className="">
        פרטי התרומה הנבחרת
        <h1>{donation.donor}</h1>
        <h2>{donation.sum}</h2>
    
    </div>);
}

export default DonationDetails;