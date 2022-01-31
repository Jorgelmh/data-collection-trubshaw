import React from 'react'
import {
  IonButton, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow,
} from '@ionic/react'
import FormContainer from './FormContainer'

/**
 *  =============================
 *        INPUT THREAT VIEW
 *  =============================
 */
const InputThreat = ({
  input, handleChange, goNext, goBack,
}) => (
  <FormContainer>
    <IonLabel>What level of threat are you reporting?</IonLabel>
    <IonRadioGroup value={input.threat} name='threat' onIonChange={handleChange}>
      <IonItem>
        <IonLabel>Low</IonLabel>
        <IonRadio value='low' />
      </IonItem>
      <IonItem>
        <IonLabel>Medium</IonLabel>
        <IonRadio value='medium' />
      </IonItem>
      <IonItem>
        <IonLabel>High</IonLabel>
        <IonRadio value='high' />
      </IonItem>
    </IonRadioGroup>
    <IonRow className='ion-justify-content-between'>
      <IonButton onClick={goBack}>Back</IonButton>
      <IonButton disabled={!input.threat} onClick={goNext}>Next</IonButton>
    </IonRow>
  </FormContainer>
)

export default InputThreat
