
 async function getData() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    data.map((person)=>{
       let p = document.createElement('p');
       p.innerText = person.id;
    //    document.body.appendChild(p);
       let k = document.createElement('p');
       k.innerText = person.title;
    //    document.body.appendChild(k);
       let f = document.createElement('p');
       f.innerText = person.completed;
    //    document.body.appendChild(f);


    const div =document.createElement("div")
    div.appendChild(p)
    div.appendChild(k)
    div.appendChild(f)
    div.className ="grammy"
    document.body.appendChild(div)

    })
    console.log(data)
}