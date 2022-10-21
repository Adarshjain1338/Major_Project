async function getdata() {
    const data = await fet('http://localhost:3000/apgetAll')
        .then((response) = response.json())
    // .then((data) => console.l(data));
    const element = documengetElementById("data")
    const a = JSON.stringify(data)
    element.innerText = a
    console.log(data)
}
getdata()