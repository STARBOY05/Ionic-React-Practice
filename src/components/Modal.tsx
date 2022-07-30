import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonPage, IonRow, IonTitle, IonToggle, IonToolbar, useIonActionSheet } from '@ionic/react'
import React, { useState } from 'react'
import { settingsOutline } from "ionicons/icons";
import './Modal.css'

function Modal() {

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [present, dismiss] = useIonActionSheet();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding"><h2>Modal Working</h2>
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="end">
                                <IonButton onClick={() => { setShowModal(false) }}>Cancel</IonButton>
                            </IonButtons>
                            <IonTitle>
                                <h2 style={{ textAlign: "center", fontFamily: "Montserrat-B", color: "#002147", fontSize: "24px" }}>
                                    Settings
                                </h2>
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent class="ion-padding">
                        <IonItem style={{ marginTop: "30px" }}>
                            <IonInput type="text" placeholder="Enter your name" value={name} onIonChange={(e: any) => { setName(e.target.value) }}></IonInput>
                        </IonItem>
                        <IonItem style={{ marginTop: "30px" }}>
                            <IonInput type="password" placeholder="Enter your password" value={password} onIonChange={(e: any) => { setPassword(e.target.value) }}></IonInput>
                        </IonItem>
                        <IonList style={{ marginTop: "20px" }}>
                            <IonItemDivider>Checked Toggle</IonItemDivider>
                            <IonItem><IonToggle checked /></IonItem>
                            <IonItem>
                                <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                                <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                            </IonItem>
                            <IonItemDivider>Toggle Colors</IonItemDivider>
                            <IonItem><IonToggle color="primary" /></IonItem>
                            <IonItem><IonToggle color="secondary" /></IonItem>
                            <IonItem><IonToggle color="danger" /></IonItem>
                            <IonItem><IonToggle color="light" /></IonItem>
                            <IonItem><IonToggle color="dark" /></IonItem>

                            <IonItemDivider>Toggles in a List</IonItemDivider>
                            <IonItem>
                                <IonLabel>Pepperoni</IonLabel>
                                <IonToggle value="pepperoni" />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Sausage</IonLabel>
                                <IonToggle value="sausage" disabled={true} />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Mushrooms</IonLabel>
                                <IonToggle value="mushrooms" />
                            </IonItem>
                        </IonList>
                    </IonContent>
                    <IonFooter>
                        <button className='long-cta'>Save Changes</button>
                    </IonFooter>
                </IonModal>
                <IonRow>
                    <IonCol>
                        <IonCard
                            onClick={() => setShowModal(true)}>
                            <IonCardContent>
                                <IonRow className="ion-justify-content-between">
                                    <IonCardSubtitle>Settings</IonCardSubtitle>
                                    <IonIcon icon={settingsOutline} />
                                </IonRow>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent >
        </IonPage >
    )
}

export default Modal