import React from 'react'
import { UserConsumer } from './UserContext'

const CompC = () => {
    return (
        <>

            <UserConsumer >
                {(el)=>
                <>
                   <h1>Name : {el.name}</h1>
                   <h3>Age : {el.age}</h3>
                </>}
            </UserConsumer>

        </>
    )
}

export default CompC
