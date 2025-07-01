import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe( prompt : string ){
        
        const result = streamText({
            model: openrouter('nvidia/llama-3.3-nemotron-super-49b-v1:free'),
            prompt,
            system:'Responde como un bartender experimentado',
            temperature: 1 // 0 -> respuesta exacta, 1 -> respuesta random
        })
        //console.log(result.textStream)
        return result.textStream
    }
}