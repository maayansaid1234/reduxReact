const initialState = {
    arr: [
        { id: 1,sum:30,donor:"ggg" },
        { id: 2, sum:800,donor:"sss" },
        { id: 3, sum:90,donor:"uuu"},
    ],
    selectedDonation: null,
    selectedDonationForEdit: null
}
//הפונקצי הזו היא קובעת מה יהיה הסטייט באתר
//כלומר מה שהיא מחזירה זה היהי הסטייט הכללי מהרגע הזה והלאה
//עד הפעם הבאה שיעשו איזושהי פעולה באתר 
//כל פעם באופן אוטומטי תקבל א הסטייט כפי שהיה עד עכשיו
//ואת הפעולה שקרתה באתר
//ותחזיר סטייט חדש עם שינויים על פי הפעולה שקרתה
//פעם ראשונה הפוקנציה מופעלת בעת טעינת האתר

export const donationReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_DONATION":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_DONATION_TO_INTRODUCE":
            return {
                ...state,
                selectedDonation: action.payload,
            }
        case "DELETE_DONATION":
            return {
              ...state,
                arr: state.arr.filter(item => item.id !== action.payload)
            }
        case "SELECT_DONATION_FOR_EDIT":
         return {
          ...state,
          selectedDonationForEdit: action.payload
        }
        case "SAVE_EDITED_DONATION":
            let b = state.arr.map(item => {
                if (item.id == action.payload.id)
                    return action.payload;
                return item;
            })
            return {
               ...state,
                selectedDonationForEdit: null,
                arr: b
            }
        default: return state;
    }



}