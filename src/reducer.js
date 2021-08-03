const initialState ={
    todoList:[
        {
            name: 'pray',
            checked: false,
            ide:1
        },
        {
            name: 'study',
            checked: false,
            ide:2
        },
        {
            name: 'eat',
            checked: false,
            ide:3
        }
    ]
}

export default function reducer(state=initialState, action) {
    //switch case
    return state;
}