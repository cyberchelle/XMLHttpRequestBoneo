async function GetData(){
    const response = await fetch(" https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    const {setup, punchline} = data;

    document.getElementById('setup').textContent=setup;
    document.getElementById('punchline').textContent=punchline;

}

GetData();