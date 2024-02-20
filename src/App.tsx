import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const {mutate} = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [secondname, setSecondname] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName:firstname,
      lastName:secondname
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
          value={firstname} onChange={event => setFirstname(event.target.value)} 
          name="firstname"
          label="Nome"
          placeholder='Tyago'
          />
          <PrimaryInput 
          value={secondname} onChange={event => setSecondname(event.target.value)} 
          name="secondname"
          label="Sobrenome"
          placeholder='Wiesner'
          />
        </div> 
      <Spacer height="4"/> 
      <PrimaryInput 
        value={email} onChange={event => setEmail(event.target.value)} 
        name="email"
        label="Digite seu e-mail"
        placeholder='fulano@email.com'
        />
        <Spacer height="4"/> 
        <Button colorScheme='green' width="100%" onClick={submit}>Enviar</Button>
      </form>
      <Spacer width="6" maxWidth="6"/> 
      <div className='product-detail'>
      <h2>Assinatura Mensal</h2>
      <Spacer height="4"/>
      <p>Você irá pagar</p>
      <span>R$250</span>
      <Spacer height="4"/>
      <h3>Após o pagamento o acesso será liberado 
      automaticamente e cobrado todos 
      os meses nessa mesma data
      </h3>
    </div>  
    </div>
  )
}

export default App
