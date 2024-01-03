//כל הפונקציות כאן מחזירות אובייקט פשוט של גאוה סקריםט
//action creatorsמקובל לקרוא להן 
//באובייקט יהיה שדה type
// שהערך שלו יבוא באותיות גדולות
//יכולים להיות שדות נוספים
//הרבה פעמים מקובל לקרוא למידע הנוסף 
//payload]
export const selectDonationToIntrouduce=(donation) => {
    return {
        type: "SELECT_DONATION_TO_INTRODUCE",
        payload: donation
    }
}


export const deleteDonation = (donationId) => {
    return {
        type: "DELETE_DONATION",
        payload: donationId
    }
}

export const addDonation = (donation) => {
    return {
        type: "ADD_DONATION",
        payload: donation
    }
}
export const selectDonationForEdit = (donation) => {
    return {
        type: "SELECT_DONATION_FOR_EDIT",
        payload: donation
    }
}

export const saveEditedDonation = (donation) => {
    return {
        type: "SAVE_EDITED_DONATION",
        payload: donation
    }
}