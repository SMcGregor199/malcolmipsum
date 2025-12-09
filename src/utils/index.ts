import {data, type Speech} from "../data";
import shuffle  from "lodash/shuffle";
import Chance from "chance";
const chance = new Chance();



function generateIpsum(numParagraphs: number) : string[]{
    if(data.length === 0){
        throw new Error("No speech data available");
    }
    const normalized = Number.isFinite(numParagraphs) ? Math.floor(numParagraphs) : 1;

    const maxParagraphs: number = Math.max(1, Math.min(normalized, 5));
    
    const randomIndex: number = chance.integer({ min: 0, max: data.length - 1 })
    const randomSpeech: Speech = data[randomIndex];
    const shuffledLines: string[] = shuffle(randomSpeech.lines);
    const availableLines: number = shuffledLines.length;
    const count: number = Math.min(maxParagraphs, availableLines);

    const ipsum : string[] = shuffledLines.slice(0,count);

    return ipsum;
}

export default generateIpsum;