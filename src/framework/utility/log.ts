let colorjs = require("colors");



interface TermColors {
    title:string;
    text:string,
    indent:string;
    aos:string;
    error:string;
}

export const Colors:TermColors = {
	title   : 'magenta',
    text    : 'white',
	indent  : 'grey',
    aos     : 'bold',
	error   : 'red'
};

colorjs.setTheme(Colors);


export function log(...colorTextPairs):void {
    
    if (colorTextPairs.length % 2 != 0)
        throw new Error("Called log with non-even number of arguments");
    
    let result:string = "";

    for (let i:number = 0; i < colorTextPairs.length; i += 2) {
        const color = colorTextPairs[i];
        const text:string = colorTextPairs[i + 1];
        
        result += colorjs[color](text);
    }

    console.log(result);
}