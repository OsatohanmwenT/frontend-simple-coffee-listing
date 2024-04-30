import React from "react";

const buttonFilter = [
    {
        id: 1,
        value:"All Products"
    },
    {
        id: 2,
        value:"Avaiable Now"
    }
]

export default function Filter({ filter , setFilter }) {
    function isClicked (id) {
        setFilter(id)
        console.log(filter)
    }

    return(
        <div className="filter">
            {buttonFilter.map((item) => (
                <button key={item.id} className={filter === item.id ? "active" : ""} onClick={() => isClicked(item.id)}>{item.value}</button>
            ))}
        </div>
    )
}