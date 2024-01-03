import { useDispatch } from "react-redux";
import { deleteDonation, selectDonationForEdit, selectDonationToIntrouduce } from "./store/actions/donation";

const ListItem = ({ one }) => {
    //useSelector מיועד לשליפת נתונים מהסטייט הכללי

    let dispatch = useDispatch()//מיועד לשליחת פעולה שקרתה באתר לרידוסר


    return (<div>
        <h3>{one.donor}</h3>
    
        <input type="button" onClick={() => { dispatch(deleteDonation(one.id)) }} value="מחק אותי" />
        <input type="button" onClick={() => { dispatch(selectDonationForEdit(one)) }} value="ערוך" />
        <input type="button" onClick={() => {dispatch(selectDonationToIntrouduce(one))}} value="הצג פרטים" />

    </div>);
}

export default ListItem;