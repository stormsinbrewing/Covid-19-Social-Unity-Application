import React from 'react'
import discord from './discord.png'
import telegram from './telegram.png'
import form from './form.png'
import poster from './poster.png'

export default class SocialUnityPage extends React.Component {
    render () {
        return (
            <main>
                <div className="main-content">
                    <div className="social-unity">
    <p align='center'> <img height="400" src={poster} /> </p>
                        <p align='center'> Take Part in the Social Unity Cause </p>
                        
                        <p align='center'>
<code><a href="https://forms.gle/bkBCb9xBzbManWyL7"><figure><img height="100" width="140" src={form}/><figcaption>Register Yourself</figcaption></figure></a></code>
<code><a href="https://discord.gg/fdbUbUrRK7">
<figure><img height="100" width="140" src={discord}/><figcaption>Discord</figcaption></figure></a></code>
<code><a href="https://t.me/joinchat/Pmlf6hfeuU0VPTVAYlcqQg"><figure><img height="100" width="140" src={telegram}/><figcaption>Telegram</figcaption></figure></a></code>
</p>
                    </div>
                </div>
            </main>
        )
    }
}
