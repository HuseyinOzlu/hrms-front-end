import React from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'


export default function SignOut({signOut}) {
    return (
        <div>
            <Menu.Item>
            <Image avatar spaced="right" src="https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg"/>
                <Button primary onClick={signOut}>Sign Out</Button>
            </Menu.Item>
        </div>
    )
}
