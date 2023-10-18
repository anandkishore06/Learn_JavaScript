const API_URL = 'https://api.github.com/users/anandkishore06'

async function handlePromise(){

    try{

    const data = await fetch(API_URL)

    // fetch() => Response.json() => jsonValue

    const jsonValue = await data.json()

    console.log(jsonValue);

    }catch(error){
        console.log(error);
    }

}
handlePromise();