import { IonCard } from '@ionic/react';
import React, { useEffect, useMemo, useState } from 'react'
import './ioncard.css'

import Item from './Item';
function Ioncard2() {

    // const [sportList, setSportList] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState();

    // var defaultSports = [
    //     { name: "Table Tennis", category: "Indoor" },
    //     { name: "Football", category: "Outdoor" },
    //     { name: "Swimming", category: "Aquatics" },
    //     { name: "Chess", category: "Indoor" },
    //     { name: "BaseBall", category: "Outdoor" }
    // ];

    // function handleCategoryChange(event) {
    //     setSelectedCategory(event.target.value);
    // }

    // function getFilteredList() {
    //     if (!selectedCategory) {
    //         return sportList;
    //     }
    //     return sportList.filter((item) => item.category === selectedCategory);
    // }

    // var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    // useEffect(() => {
    //     setSportList(defaultSports);
    // }, []);

    const [bookList, setBookList] = useState();
    const [selectedCategory, setSelectedCategory] = useState();

    function handleCategoryChange(e) {
        console.log(e.target.value)
        setSelectedCategory(e.target.value);
    }

    var defaultBooks = [
        { name: "The Alchemist", category: "Fiction" },
        { name: "Dracula", category: "Horror" },
        { name: "The Alchemist", category: "Fiction" },
        { name: "Dracula", category: "Horror" },
        { name: "The Alchemist", category: "Fiction" },
        { name: "The Proposal", category: "Love" },
        { name: "Atomic Habits", category: "Health" },
        { name: "The Proposal", category: "Love" },
    ]

    if (selectedCategory === "All") {
        var filteredList = defaultBooks
    }
    else {
        var filteredList = defaultBooks.filter((item) => item.category === selectedCategory);
    }

    useEffect(() => {
        setBookList(defaultBooks);
    }, []);

    return (
        <div className="filter-container" style={{ display: "flex", flexDirection: "column" }}>
            <div>Filter by Category:</div>

            <button value="Fiction" onClick={(e) => handleCategoryChange(e)}>Fiction</button>
            <button value="All" onClick={(e) => handleCategoryChange(e)}>All</button>
            <div className="sport-list">
                {filteredList.map((item, index) =>
                    <IonCard key={index} className="item-container">
                        <div>
                            <span className="item-label">Name:</span>
                            {item.name}
                        </div>
                        <div>
                            <span className="item-label">Category:</span>
                            {item.category}
                        </div>
                    </IonCard>
                )}
            </div>

            <button class="dabutton">Click Me</button>



        </div>
    )
}

export default Ioncard2