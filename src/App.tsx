import React, { useState } from 'react';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import './App.css';
import Modal from './components/Modal';
import SearchModal from './components/SeachModal';
import Ioncard from './components/Ioncard';

function App() {

  return (
    <IonApp>
      {/* <Modal /> */}
      {/* <SearchModal /> */}
      <Ioncard />
    </IonApp>
  );
}

export default App;
