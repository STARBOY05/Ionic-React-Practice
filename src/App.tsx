import { IonApp, IonContent } from '@ionic/react';
import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Test from './components/Test';

function App() {
  return (
    <IonApp>
      <IonContent>
        <Test />
        <Modal />
      </IonContent>
    </IonApp>
  );
}

export default App;
