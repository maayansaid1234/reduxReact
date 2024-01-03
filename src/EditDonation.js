import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedDonation } from "./store/actions/donation";

const EditDonation=() => {
    let donationForEdit = useSelector(state => state.selectedDonationForEdit);
    let disp = useDispatch();
    let { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: donationForEdit
    })

    const saveDetails = (data) => {
       
        disp(saveEditedDonation(data))

    }
    return (<form onSubmit={handleSubmit(saveDetails)}>

        <label>תורם</label>
        <input {...register("donor", { minLength: 3 })} />
        {errors.donor && <span>שם לא תקין</span>}
<br/>

        <label>סכום</label>
        <input {...register("sum")} />

        <br/>

        <input type="submit" />

    </form>);
}

export default EditDonation;