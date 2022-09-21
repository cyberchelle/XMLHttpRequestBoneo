async function GetData(){
    const response = await fetch(" https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    const {setup, punchline} = data;

    document.getElementById('set').textContent=setup;
    document.getElementById('punch').textContent=punchline;

}

GetData();