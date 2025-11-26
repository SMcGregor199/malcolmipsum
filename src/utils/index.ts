import data from "../data";
import { shuffle } from "lodash";
import Chance from "chance";
const chance = new Chance();




function generateIpsum(numParagraphs: number) : Array<string>{
    const count = Math.max(1, Math.min(numParagraphs, 5));
    
    const randomIndex = chance.integer({ min: 0, max: data.length - 1 })
    const randomSpeech = data[randomIndex];
    const shuffledLines = shuffle(randomSpeech.lines);

    const ipsum : Array<string> = [];

    for(let i = 0; i < count; i++){
        ipsum.push(shuffledLines[i]);
    }

    return ipsum;
}

export default generateIpsum;