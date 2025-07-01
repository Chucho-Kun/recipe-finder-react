import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe( prompt : string ){
        
        const result = streamText({
            model: openrouter('nvidia/llama-3.3-nemotron-super-49b-v1:free'),
            prompt,
            //system:'a manera de respuesta redacta un breve saludo inspirado en el personaje de anime que se te va a proporcionar en name: y en anime: encerrandolo entre los caracteres ##',
            system: 'sin notas, sin presentar, sin explicar, solo genera un json y en el campo famous_phrase: coloca una frase popular del personaje traducida al español que se te va a proporcionar en name: y en anime:',
            temperature: 0 // 0 -> respuesta exacta, 1 -> respuesta random
        })
        /**
        name:"Madoka Kaname", anime:"Puella Magi Madoka Magica", 
        */

        /**const result = streamText({
            model: openrouter('nvidia/llama-3.3-nemotron-super-49b-v1:free'),
            prompt,
            system:'Eres un bartender experimentado',
            temperature: 1 // 0 -> respuesta exacta, 1 -> respuesta random
        }) */
        //console.log(result.textStream)
        return result.textStream
    }
}