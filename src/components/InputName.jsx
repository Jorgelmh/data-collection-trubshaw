import React from 'react'
import {
  IonButton, IonInput, IonItem, IonLabel, IonRow,
} from '@ionic/react'
import FormContainer from './FormContainer'

/**
 *  ============================
 *        INPUT NAME VIEW
 *  ============================
 */
const InputName = ({ input, handleChange, goNext }) => (
  <FormContainer>
    <IonItem>
      <IonLabel>What is your name?</IonLabel>
      <IonInput name='name' type='text' placeholder='Type your name' onIonChange={handleChange} value={input.name} />
    </IonItem>
    <IonRow className='ion-justify-content-end'>
      <IonButton disabled={input.name.length < 2 || input.name.length > 25} onClick={goNext}>Next</IonButton>
    </IonRow>
  </FormContainer>
)

export default InputName
