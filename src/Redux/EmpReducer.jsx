import { ADDEMP, DELETEEMP, EDITEMP, VIEWEMP } from "./action"

let initialState = {
    employee: [
        {
            empid: 1,
            name: 'YASH',
            email: 'yash@gmail.com',
            department: 'IT',
            hoby: ['Reading', 'Coding'],
            gender: 'Male'
        },
        {
            empid: 2,
            name: 'Vidhi',
            email: 'vidhi@gmail.com',
            department: 'Account',
            hoby: ['Reading', 'Coding'],
            gender: 'Female'
        }
    ]
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDEMP:
            return { ...state, employee: [...state.employee, action.payload] }
        case VIEWEMP:
            return state;
        case DELETEEMP:
            state.employee = state.employee.filter((emp) => emp.empid != action.payload)
            return state;
        case EDITEMP:
            {
                console.log(action.payload)
                state.employee = state.employee.map((emp) => {
                    if (emp.empid == action.payload.empid) {
                        return emp = action.payload
                    }
                    return emp
                })
                return state
            }
        default:
            return state;
    }
}

export default EmpReducer;