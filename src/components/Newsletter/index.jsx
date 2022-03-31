import React,{ useState } from 'react'
import { NewsStyle } from './styled'
import mailIcon from  '../../img/mail.svg'
const Newsletter = () => {
  const [email, setEmail] = useState('')
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const formSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <NewsStyle onSubmit={formSubmit}> 
      <label><img src={mailIcon} alt="Icone de email" /></label>
      <input type="email" value={email} onChange={handleEmail}/>
      <button>Assinar Newsletter</button>
    </NewsStyle>
  )
}

export default Newsletter