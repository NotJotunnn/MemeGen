import { useState } from 'react';
import Memes from '../script/memes'


export default function Prompt() {

    var [ url, setUrl ] = useState('https://i.imgflip.com/26br.jpg')

    const memes = Memes.data.memes
    
    function buttonClick() {
        var rannum = Math.floor(Math.random() * memes.length)
        
        setUrl(memes[rannum].url)
    }

    function characterChange() {
        const input1 = document.getElementById('input1')
        const text1 = document.getElementById('topvalue')

        text1.textContent = input1.value
    }

    function characterChange2() {
        const input2 = document.getElementById('input2')
        const text2 = document.getElementById('bottomvalue')

        text2.textContent = input2.value
    }

    return(
        <main>
            <div className="input-group">
                <div className="input">
                    <input id='input1' onInput={characterChange} type="text" className="toptext" placeholder='Shut up'/>
                    <input id='input2' onInput={characterChange2} type="text" className="bottomtext" placeholder='and take my money'/>
                </div>
                <button onClick={buttonClick}>Get a new meme image 🖼</button>
                <div className="container">
                    <p id='topvalue'></p>
                    <img src={url} alt="The dna of the soul" />
                    <p id='bottomvalue'></p>
                </div>
            </div>
        </main>
    )
}