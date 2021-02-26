import { ADD_USER, DELETE_USER } from '../actions/types'

const initialState = {
    userList: [{
        address: "N/A",
        birthDate: "N/A",
        department: "N/A",
        email: "N/A",
        employeeID: "N/A",
        firstnameEN: "N/A",
        firstnameTH: "N/A",
        id: "N/A",
        idCard: "N/A",
        lastnameEN: "N/A",
        lastnameTH: "N/A",
        pass: "N/A",
        tel: "N/A",
    }],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: state.userList.concat(action.user)
            };

        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter((item) => item.id !== action.id)
            }

        default:
            return state;
    }
}

export default userReducer;