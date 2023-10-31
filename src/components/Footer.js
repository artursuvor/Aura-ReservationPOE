import React from "react"
import git from '../img/git.png'
import discord from '../img/discord.png'

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/Fallougin" target="_blank" rel="noreferrer">
                <img src={git} alt="git" width="50px" height="50px"/>
            </a>
            <a href="https://discordapp.com/users/141596787302465537/" target="_blank" rel="noreferrer">
                <img src={discord} alt="dis" width="50px" height="50px"/>
            </a>
        </footer>
    )
}