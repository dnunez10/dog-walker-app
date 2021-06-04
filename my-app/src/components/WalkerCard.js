import React from 'react'
import { Menu } from "semantic-ui-react";

const WalkerCard = ({walker}) => {
    return(            
        <Menu.Item as={"a"}>
        <div>{walker.name}</div>
        </Menu.Item>
    )
}


export default WalkerCard
