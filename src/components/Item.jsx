import { IonCard } from "@ionic/react";
import React from "react";
import "./itemStyle.css";

const Item = ({ name, category }) => (
    <IonCard className="item-container">
        <div>
            <span className="item-label">Name:</span>
            {name}
        </div>
        <div>
            <span className="item-label">Category:</span>
            {category}
        </div>
    </IonCard>
);

export default Item;