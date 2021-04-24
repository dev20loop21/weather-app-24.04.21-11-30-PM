const apiKey = "aa37668a34d26cc94878185f0092556d";

const apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";

const zipCodeElement = 
document.getElementById("zip");

const feelingsCodeElement = 
document.getElementById("feelings");

const dateElement = 
document.getElementById("date");

const tempElement = 
document.getElementById("temp");

const contentElement = 
document.getElementById("content");

const catchError = (error)=> console
.error("some Error Has Been =>", error);

//EventListener
document.getElementById("generate").
addEventListener("click",onGenerate);

function onGenerate (){
    let data={
        zipCode: zipCodeElement,
        content: feelingsCodeElement,
        date: new Date ()
    }

    getZipCodeInformation(data.zipCode)
    .then(zipInfo=> {
     if (zipInfo.cod !=200)
     return alert (zipInfo.message)
     data.temp = zipInfo.list[0].
     main.temp;   
    }).catch(catchError);
};

async function getZipCodeInformation
(zipCode){
    return await(await (await 
        fetch(`http://api.openweathermap.
        org/data/2.5/forecast?zip=${zipCode}
    ${apiKey}`)).json())
};

async function postDateToServer(data){
    let response = await fetch(`${apiUrl}
    postData`,{ method:'POST',
    headers: {'content-type':
    'application/json'},
    body: JSON.stringify(data),
    });
    try {
        response.json().then(data =>{
            if (response.ok)
            updateUI();
            elsealert 
            ('process Not Successfuly');
        }).catchError(error);
    } catch (error) {
        catchError (error);
    }
}

//UpdateUI
async function updateUI (){
    let response = await fetch (
        `${apiUrl}getAll`);
        try {
            response.json().then(
                data=> {
                dateElement.innerHTML=
                `Date IS: ${data.Date}`;
                tempElement.innerHTML=
                `Temp Is: ${data.temp}`;
                contentElement.innerHTML=
                `My Feeling IS: ${data.content}`;    
                }).catch(catchError);
        } catch (error){
            catchError(error)
        }
}

