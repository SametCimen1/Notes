const textContainer = document.querySelector(".container");



const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let word = "";

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  


const getText = async() => {
for(let i = 0; i< alphabet.length; i ++){
    await sleep(500)

    word += alphabet[i]; 
    for(let i = 0; i< alphabet.length; i ++){
        await sleep(500)
        word += alphabet[i];
        for(let i = 0; i< alphabet.length; i ++){
            await sleep(20)
            word += alphabet[i];
            
            for(let i = 0; i< alphabet.length; i ++){
                await sleep(100)
                word += alphabet[i];
                for(let i = 0; i< alphabet.length; i ++){
                    await sleep(100)
                    word += alphabet[i];// aaaaa
                    for(let i = 0; i< alphabet.length; i ++){
                        await sleep(100)
                        word += alphabet[i]; //aaaaaa

                        const text = document.createElement("p");
                        text.textContent = word;
                        const element = document.createElement("span")
                        element.appendChild(text)
                        textContainer.appendChild(element);
                    }
                    word = word.substring(0,4);//aaaaa
                
                }
                word = word.substring(0,3);

            }
            word = word.substring(0,2);
        }

        word = word.substring(0,1);
    }
    word = "";

}
}

getText();