/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import './App.css'
import {
  IonPage,
  setupIonicReact,
} from '@ionic/react'
import InputName from './components/InputName'
import InputEmail from './components/InputEmail'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import InputThreat from './components/InputThreat'
import PreviewPage from './components/PreviewPage'

setupIonicReact()
/**
 *  ================================
 *          MAIN REACT APP
 *  ================================
 *
 *  Returns the form questions depending on the user's progress
 */
const App = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    threat: '',
  })
  const [question, setQuestion] = useState(0)

  /* Update states when user types in */
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.detail.value })
  }
  const moveToNext = () => setQuestion(question + 1)

  const moveBack = () => setQuestion(question - 1)

  return (
    <IonPage style={{ background: 'darkslategrey' }}>
      {
        question === 0 && (
          <InputName input={input} handleChange={handleChange} goNext={moveToNext} />
        )
      }
      {
        question === 1 && (
          <InputEmail input={input} goBack={moveBack} handleChange={handleChange} goNext={moveToNext} />
        )
      }
      {
        question === 2 && (
          <InputThreat input={input} goBack={moveBack} handleChange={handleChange} goNext={moveToNext} />
        )
      }
      {
        question === 3 && (
          <PreviewPage input={input} goBack={moveBack} setQuestion={setQuestion} />
        )
      }
    </IonPage>
  )
}

export default App
