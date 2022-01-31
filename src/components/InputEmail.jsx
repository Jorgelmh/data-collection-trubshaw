import React from 'react'
import {
  IonButton, IonInput, IonItem, IonLabel, IonRow,
} from '@ionic/react'
import FormContainer from './FormContainer'

/**
 *  ==============================
 *        INPUT EMAIL VIEW
 *  ==============================
 */
const validateEmail = (email) => email.match(/\S+@\S+\.\S+/)

const InputEmail = ({
  input, handleChange, goNext, goBack,
}) => (
  <FormContainer>
    <IonItem>
      <IonLabel>What is your email?</IonLabel>
      <IonInput name='email' type='email' placeholder='Type your name' onIonChange={handleChange} value={input.email} />
    </IonItem>
    <IonRow className='ion-justify-content-between'>
      <IonButton onClick={goBack}>Back</IonButton>
      <IonButton disabled={!validateEmail(input.email)} onClick={goNext}>Next</IonButton>
    </IonRow>
  </FormContainer>
)

export default InputEmail
