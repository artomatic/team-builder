import React from 'react';
import { useState } from 'react';
import { Button } from 'reactstrap';


export default function Formm (props) {

return (

    <form>

        <label>Name
            <input
            placeholder='first, last'
            />

        </label>

        <label>Email
            <input
            placeholder='enter your email'
            />

        </label>

        <label>Role
            <input
            placeholder='what is your role'
            />

        </label>

        <label>Gender
            <select>
                <option>Male</option>
                <option>Female</option>
            </select>

        </label>


    </form>

)
}