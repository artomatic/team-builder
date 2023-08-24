import './App.css';
import React, {useState} from 'react';
import Form from './Form'
import styled from 'styled-components'


const Title = styled.h1 `
  font-size: large;
  text-align: center;
  color: white;
  border: solid black;
  background-color: green;
`
const AppContainer = styled.div `
  height: 100%;
  display: flex; 
  height: 100%; 
  flex-direction: column;
`
const MembersList = styled.div `
  display: flex; 
  flex-grow: 1; 
  flex-direction: column;
  align-content: center; 
  justify-content: center;
  flex-wrap: wrap;
`
const StyledMember = styled.h2 `
  
  background-color: mintcream;
  padding: 1em;
  border: 2px dashed green;
  border-radius: 3em;
  text-align: center;
  font-size: large;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
`

const Button = styled.button `
  border-radius: 1em;
  margin: 1em;
  font-family: 'Courier New', Courier, monospace;
  border: none;
  background-color: lightgray;
  font-size: small;
`
const Detail = styled.p `
  margin: 1.5em;
  margin-bottom: 0em;
  font-size: x-small;
  color: gray;
`

function App() {

  const [members, setMembers] = useState ([])
  const [member, setMember] = useState ( { name: '', email: '', role: ''})
  const [isClicked, setIsClicked] = useState(false)

  const Change = (name, value) => {
    setMember( {...member, [name]: value  } )
  }

  const Submit = () => {
    setMembers ([member, ...members])
    setMember({ name: '', email: '', role: ''})
  }

  const toggleIsClicked = () => {
    setIsClicked(!isClicked)
  }

  return (
    <AppContainer>
      <Title>
        Team Members App
      </Title>

      <Form Change = {Change} Submit={Submit}>

      </Form>

      <MembersList>
      <Button onClick={toggleIsClicked}>details</Button>
        {
        members.map ( (mem, index) => {
          return <StyledMember key = {index}>{mem.name}

            
            <div key={index}>
              <Detail> {isClicked && `email: ${mem.email}`}</Detail>
              <Detail> {isClicked && `role: ${mem.role}`}</Detail>
            </div>

          </StyledMember>
        })
        }
      </MembersList>



    
    </AppContainer>
  );
}

export default App;
