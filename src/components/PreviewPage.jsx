/* eslint-disable no-restricted-globals */
import { Icon } from '@iconify/react'
import {
  IonButton, IonCol, IonList, IonListHeader, IonRow,
} from '@ionic/react'
import React from 'react'
import FormContainer from './FormContainer'

/**
 *  ============================
 *        PREVIEW PAGE
 *  ============================
 */

const PreviewPage = ({ input, setQuestion, goBack }) => (
  <FormContainer>
    <IonList>
      <IonListHeader> <h1 style={{ margin: '0' }}> Review </h1> </IonListHeader>
      <IonRow>
        <IonCol style={{ color: 'cornflowerblue' }} size={3}>What is your name?</IonCol>
        <IonCol size={7}>{ input.name }</IonCol>
        <IonCol size={2}><IonButton onClick={() => setQuestion(0)}><Icon icon='akar-icons:edit' /></IonButton></IonCol>
      </IonRow>
      <IonRow>
        <IonCol style={{ color: 'cornflowerblue' }} size={3}>What is your email?</IonCol>
        <IonCol size={7}>{ input.email }</IonCol>
        <IonCol size={2}><IonButton onClick={() => setQuestion(1)}><Icon icon='akar-icons:edit' /></IonButton></IonCol>
      </IonRow>
      <IonRow>
        <IonCol style={{ color: 'cornflowerblue' }} size={3}>What level of threat are you reporting?</IonCol>
        <IonCol size={7}>{ input.threat }</IonCol>
        <IonCol size={2}><IonButton onClick={() => setQuestion(2)}><Icon icon='akar-icons:edit' /></IonButton></IonCol>
      </IonRow>
    </IonList>
    <IonRow className='ion-justify-content-between'>
      <IonButton onClick={goBack}>Back</IonButton>
      <IonButton disabled={!input.threat} onClick={() => location.reload()}>Submit</IonButton>
    </IonRow>
  </FormContainer>
)

export default PreviewPage
