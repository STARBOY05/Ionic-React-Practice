import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from "@ionic/react"


function Test() {
    const [count, setCount] = useState(0);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ textAlign: "center" }}>
                    <h1>Hello World</h1>
                    <h1>{count}</h1>
                    <IonButton onClick={() => { setCount(count - 1) }}>
                        Decrement
                    </IonButton>
                    <IonButton onClick={() => { setCount(count + 1) }}>
                        Increment
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Test