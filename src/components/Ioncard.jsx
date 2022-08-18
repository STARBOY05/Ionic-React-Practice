import { IonCol, IonContent, IonHeader, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import "./ioncard.css"

function Ioncard() {
    const vals = [false, false, false, false, false, false];
    const [pickedInterests, setPickedInterests] = useState(vals);
    const [cards, setCards] = useState(vals);
    const toggleSelection = (id) => {
        var val = pickedInterests;
        val[id] ? (val[id] = false) : (val[id] = true)
        console.log(val)
        setPickedInterests(val);
        setCards(val)
    };

    const interests = [
        {
            id: 0,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
        {
            id: 1,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
        {
            id: 2,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
        {
            id: 3,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
        {
            id: 4,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
        {
            id: 5,
            name: "history",
            src: "http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png",
        },
    ];
    return (
        <>
            <div style={{ height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column", padding: "10px" }}>
                <IonRow>
                    <IonCol className={vals[0] ? "pickInterestCard scale" : "pickInterestCard"} onClick={() => toggleSelection(interests[0].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[0].name}
                            src={interests[0].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                    <IonCol className={vals[1] ? "pickInterestCard-clicked" : "pickInterestCard"} onClick={() => toggleSelection(interests[1].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[1].name}
                            src={interests[1].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className={vals[2] ? "pickInterestCard-clicked" : "pickInterestCard"} onClick={() => toggleSelection(interests[2].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[2].name}
                            src={interests[2].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                    <IonCol className={vals[3] ? "pickInterestCard-clicked" : "pickInterestCard"} onClick={() => toggleSelection(interests[3].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[3].name}
                            src={interests[3].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className={vals[4] ? "pickInterestCard-clicked" : "pickInterestCard"} onClick={() => toggleSelection(interests[4].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[4].name}
                            src={interests[4].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                    <IonCol className={vals[5] ? "pickInterestCard-clicked" : "pickInterestCard"} onClick={() => toggleSelection(interests[5].id)}>
                        <p style={{ fontSize: "16px" }}>Text</p>
                        <img
                            alt={interests[5].name}
                            src={interests[5].src}
                            style={{ width: "50%", height: "120px" }}
                        ></img>
                    </IonCol>
                </IonRow>
            </div>
        </>
    )
}

export default Ioncard