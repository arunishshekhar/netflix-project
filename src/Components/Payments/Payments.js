import React,{useEffect, useState} from 'react'
import NavWhite from './Steps/NavWhite'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Step31 from './Steps/Step31'

function Payments() {
    const [step,setStep]=useState(0)
    const [userCredentials,setUserCredn] = useState({})

    const getUserData=(userData)=>{

      setUserCredn({...userCredentials,...userData})
    }
    
    
    const nextStep=(index)=>{
        setStep(index)
    }
    // useEffect(()=>{
    //   console.log(userCredentials.subscriptionType);
    // },[userCredentials.subscriptionType])
  return (
    <div>
        <NavWhite/>
      {step===0&&<Step1 nextStep={nextStep}/>}
      {step===1&&<Step2 nextStep={nextStep} getUserData={getUserData}/>}
      {step===2&&<Step3 nextStep={nextStep} />}
      {step===3&&<Step31 getUserData={getUserData} userCredentials={userCredentials}/>}
      {console.log(userCredentials)}
    </div>
  )
}

export default Payments