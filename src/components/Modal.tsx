import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonLoading, IonModal, IonPage, IonRow, IonTitle, IonToast, IonToggle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { settingsOutline, createOutline } from "ionicons/icons";
import './Modal.css'

function Modal() {

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);
    const [showToast3, setShowToast3] = useState(false);
    const [showToast4, setShowToast4] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const [changeName, setChangeName] = useState("username");
    const [changeUsername, setChangeUsername] = useState("dummy");
    const [editName, setEditName] = useState(false);
    const [editUserName, setEditUserName] = useState(false);

    // Toggle Code
    const handleToggleChange1 = (e: any) => {
        setChecked1(e.detail.checked);
        setShowToast1(true);
    }
    const handleToggleChange2 = (e: any) => {
        setChecked2(e.detail.checked);
        setShowToast2(true);
    }
    const handleToggleChange3 = (e: any) => {
        setChecked3(e.detail.checked);
        setShowToast3(true);
    }
    const handleToggleChange4 = (e: any) => {
        setChecked4(e.detail.checked);
        setShowToast4(true);
    }
    const [text, setText] = useState<string>();
    // ---

    const [showLoading, setShowLoading] = useState(false);

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
                {/* <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton> */}
                {/* <IonToast
                    isOpen={showToast1}
                    onDidDismiss={() => setShowToast1(false)}
                    message="Your settings have been saved."
                    duration={200}
                />

                {/* <IonItem style={{ marginTop: "15px", width: "95%", fontFamily: "Montserrat-SB" }}>
                    <IonInput type="text" placeholder="Change Name" value={changeName} onIonChange={(e: any) => { setChangeName(e.target.value) }}></IonInput>
                    {editName ? (
                        <IonButton style={{ height: "25px" }} onClick={() => setEditName(false)}>{"Save"}</IonButton>
                    ) : (
                        <IonIcon
                            onClick={() => setEditName(true)}
                            icon={createOutline}
                            className="set-status"
                            color="dark"
                        ></IonIcon>
                    )}
                </IonItem> */}
                <IonToast
                    isOpen={showToast1}
                    onDidDismiss={() => setShowToast1(false)}
                    message={checked1 ? "Application Notifications has been enabled." : "Application Notifications has been disabled."}
                    position="top"
                    duration={250}
                />
                <IonToast
                    isOpen={showToast2}
                    onDidDismiss={() => setShowToast2(false)}
                    message={checked2 ? "SMS and Email Notification has been enabled." : "SMS and Email Notification has been disabled."}
                    position="top"
                    duration={250}
                />
                <IonToast
                    isOpen={showToast3}
                    onDidDismiss={() => setShowToast3(false)}
                    message={checked3 ? "Special Offer has been enabled." : "Special Offer has been disabled."}
                    position="top"
                    duration={250}
                />
                <IonToast
                    isOpen={showToast4}
                    onDidDismiss={() => setShowToast4(false)}
                    message={checked4 ? "Read Reminder has been enabled." : "Read Reminder has been disabled."}
                    position="top"
                    duration={250}
                />
                <IonAccordionGroup expand='inset' multiple={true}>
                    <IonAccordion value="first">
                        <IonItem slot="header" color="light">
                            <IonLabel>Notification Settings</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", padding: "10px" }}>
                                <IonLabel style={{ fontFamily: "Montserrat-SB" }}>Application Notifications</IonLabel>
                                <IonToggle value="AppNotify" checked={checked1} onIonChange={(e: any) => handleToggleChange1(e)} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", padding: "10px" }}>
                                <IonLabel style={{ fontFamily: "Montserrat-SB" }}>SMS and Email Notification</IonLabel>
                                <IonToggle value="SMSEmailNotify" checked={checked2} onIonChange={(e: any) => handleToggleChange2(e)} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", padding: "10px" }}>
                                <IonLabel style={{ fontFamily: "Montserrat-SB" }}>Special Offer</IonLabel>
                                <IonToggle value="SplOffer" checked={checked3} onIonChange={(e: any) => handleToggleChange3(e)} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0", padding: "10px" }}>
                                <IonLabel style={{ fontFamily: "Montserrat-SB" }}>Read Reminder</IonLabel>
                                <IonToggle value="ReadRemind" checked={checked4} onIonChange={(e: any) => handleToggleChange4(e)} />
                            </div>
                        </div>
                    </IonAccordion>
                    <IonAccordion value="second">
                        <IonItem slot="header" color="light">
                            <IonLabel>User Settings</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                            <div style={{ marginTop: "15px", fontFamily: "Montserrat-SB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <IonInput type="text" placeholder="Change Name" value={changeName} onIonChange={(e: any) => { setChangeName(e.target.value) }}></IonInput>
                                {editName ? (
                                    <IonButton style={{ height: "25px" }} onClick={() => setEditName(false)}>{"Save"}</IonButton>
                                ) : (
                                    <IonIcon
                                        onClick={() => setEditName(true)}
                                        icon={createOutline}
                                        className="set-status"
                                        color="dark"
                                    ></IonIcon>
                                )}
                            </div>
                            <div style={{ marginTop: "15px", fontFamily: "Montserrat-SB", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <IonInput type="text" placeholder="Change Username" value={changeUsername} onIonChange={(e: any) => { setChangeUsername(e.target.value) }}></IonInput>
                                {editUserName ? (
                                    <IonButton style={{ height: "25px" }} onClick={() => setEditUserName(false)}>{"Save"}</IonButton>
                                ) : (
                                    <IonIcon
                                        onClick={() => setEditUserName(true)}
                                        icon={createOutline}
                                        className="set-status"
                                        color="dark"
                                    ></IonIcon>
                                )}
                            </div>
                        </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                        <IonItem slot="header" color="light">
                            <IonLabel>Change Interest</IonLabel>
                        </IonItem>
                    </IonAccordion>
                </IonAccordionGroup>
                <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    duration={5000}
                    spinner={null}
                />
            </IonContent>

        </IonPage >
    )
}

export default Modal