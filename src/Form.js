import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components'

const Label = styled.label `
font-style: italic;
`
const Input = styled.input `
padding: 3px;
margin: 10px;
`
const StyledForm = styled.form `
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`

export default function Form (props) {

    const handleChange = (evt) => {
        const {name, value} = evt.target

        props.Change(name, value)
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.Submit()
    }

return (

    <StyledForm>

        <Label>Name
            <Input
            placeholder='first, last'
            name='name'
            onChange={handleChange}
            />
        </Label>

        <Label>Email
            <Input
            placeholder='enter your email'
            name='email'
            onChange={handleChange}
            />
        </Label>

        <Label>Role
            <Input
            placeholder='what is your role'
            name='role'
            onChange={handleChange}
            />
        </Label>

        <Button 
            onClick={handleSubmit} 
            style={ {alignSelf: 'stretch'}}
            color='success'
            outline
            >
            Add Member
        </Button>


    </StyledForm>

)
}




{/* <Label>Gender
<select style={ {margin: '10px', padding: '5px'}}>
    <option value={1}>Male</option>
    <option value={2}>Female</option>
</select>

</Label> */}