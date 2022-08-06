import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import './SearchModal.css'
import catLogo from "../imgs/catLogo.png"

function SearchModal() {
    const [showSearchModal, setShowSearchModal] = useState(false)



    return (
        <IonPage>
            <IonButton onClick={() => { setShowSearchModal(true) }}>View All</IonButton>
            <IonModal isOpen={showSearchModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Trending Books</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setShowSearchModal(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className='search-area'>
                        <div className='category-area'>
                            <div className='category'>
                                <img src={catLogo} alt="ex" />
                                <p>All</p>
                            </div>
                            <div className='category'>
                                <img src={catLogo} alt="ex" />
                                <p>Health</p>
                            </div>
                            <div className='category'>
                                <img src={catLogo} alt="ex" />
                                <p>Love</p>
                            </div>
                            <div className='category'>
                                <img src={catLogo} alt="ex" />
                                <p>Horror</p>
                            </div>
                            <div className='category'>
                                <img src={catLogo} alt="ex" />
                                <p>Fiction</p>
                            </div>
                        </div>
                        <div className='trending-area'>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonCard className="trend-card">
                                            <img
                                                style={{
                                                    height: "150px",
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                }}
                                                alt="ex"
                                                src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
                                            ></img>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonCard className="trend-card">
                                            <img
                                                style={{
                                                    height: "150px",
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                }}
                                                alt="ex"
                                                src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
                                            ></img>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonCard className="trend-card">
                                            <img
                                                style={{
                                                    height: "150px",
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                }}
                                                alt="ex"
                                                src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
                                            ></img>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonCard className="trend-card">
                                            <img
                                                style={{
                                                    height: "150px",
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                }}
                                                alt="ex"
                                                src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
                                            ></img>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                </IonContent>
            </IonModal>

        </IonPage >
    )
}

export default SearchModal