import React, { useState } from 'react';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import './App.css';
import Modal from './components/Modal';
import SearchModal from './components/SeachModal';
import Ioncard from './components/Ioncard';
import Ioncard2 from './components/Ioncard2';

function App() {

  return (
    <IonApp>
      {/* <Modal /> */}
      {/* <SearchModal /> */}
      {/* <Ioncard /> */}
      <Ioncard2 />
    </IonApp>
  );
}

export default App;
