let questionBox = document.getElementById('question-box');
let responseContainer = document.getElementById('responseContainer');


let apiKey = `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`;

function askGpt() {
    const question = questionBox.value
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {


    method:'POST',
    headers: {
        'Content-Type':'application/json',
        Authorization: ` Bearer ${apiKey}`
    },
    body: JSON.stringify({
        prompt: `${question}`,
        temperature: 0.7,
        n:1,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        max_tokens: 4000
    }),


}).then((response) => response.json())
.then((resp) => {
    responseContainer.textContent = resp?.choices[0]?.text
    console.log(resp?.choices[0]?.text)
})
.catch((err) => console.log('err on callback', err))


    
}


async function askGpt2 () {
    const question = questionBox.value;
    console.log(question);
    try {
        let fetchResp = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: ` Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: `${question}`,
                temperature: 0.7,
                n:1,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
                max_tokens: 4000
            }),
        
        
        })
        let parsejson = await fetchResp.json();

        responseContainer.innerHTML = parsejson?.choices[0]?.text;
    }catch(err) {
        console.log('error on await', e)
    }
    
    
    
}
