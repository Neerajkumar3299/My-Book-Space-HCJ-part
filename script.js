
api_url="https://mypersonalbookstore2022.herokuapp.com/book_list"

function printData(data){
    let table=document.getElementById('tbody')
    var output_str=""
    for(let i=0;i<data.length;i++){
        output_str=output_str+`<tr>`
        output_str=output_str+`<td> <img src='${data[i]['book_image_link']}' alt=book-image></td>`
        output_str=output_str+`<td> ${data[i]['book_name']}</td>`
        output_str=output_str+`<td> ${data[i]['sub_name']}</td>`
        output_str=output_str+`<td> ${data[i]['author']}</td>`
        output_str=output_str+`<td> <a href='${data[i]['download_link']}'>download</a></td>`
        output_str=output_str+`<td><a href="https://neerajkumar3299.github.io/My-Book-Space-HCJ-part/edit.html?id=${data[i]._id}"><i class="fas fa-pen"></i></a><button onclick=deleteData('${data[i]._id}')><i class="fas fa-trash-alt" ></i></button></td>`
        output_str=output_str+`</tr>`
    }
    table.innerHTML=output_str
}
function getData(){
    console.log("Hello Neeraj kumar How are you!!")
    fetch(api_url)
    .then((data)=>data.json())
    .then((data)=>{
        printData(data)
    })
}
getData()
function insertData(){
    let image_link=document.getElementById("image_link").value
    let book_name=document.getElementById("book_name").value
    let sub_name=document.getElementById("sub_name").value
    let author_name=document.getElementById("author_name").value
    let download_link=document.getElementById("download_link").value
    
    data={
        book_image_link:image_link,
        book_name:book_name,
        sub_name:sub_name,
        author:author_name,
        download_link:download_link
    }
    options={
        "method":"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
    }
    fetch(api_url,options)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
            window.location.href='https://neerajkumar3299.github.io/My-Book-Space-HCJ-part/book_list'
    })
}

function deleteData(id){
    options={
        method:"DELETE",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({'_id':id})
    }
    fetch(api_url,options)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        window.location.reload(true);
    })
}

function getDataById(id){
    fetch(api_url).then((response)=>response.json()).then((data)=>{
        var elem=''
        var temp=0
        for(let i=0;i<data.length;i++){
            if(data[i]['_id']==id){
                elem=data[i]
                temp=1
                break
            }
        }
        editData(elem)
    })

}
function editData(elem){
    if(elem){
        document.getElementById("id").value=elem['_id']
        document.getElementById('image_link').value=elem['book_image_link']
        document.getElementById('book_name').value=elem['book_name']
        document.getElementById('sub_name').value=elem['sub_name']
        document.getElementById('author_name').value=elem['author']
        document.getElementById('download_link').value=elem['download_link']
    }
    else{
        console.log(elem)
    }
}

function putData(){
        let id=document.getElementById("id").value
        let image_link=document.getElementById('image_link').value
        let book_name=document.getElementById('book_name').value
        let sub_name=document.getElementById('sub_name').value
        let author_name=document.getElementById('author_name').value
        let download_link=document.getElementById('download_link').value
        data={
            _id:id,
            book_image_link:image_link,
            book_name:book_name,
            sub_name:sub_name,
            author:author_name,
            downlaod_link:download_link
        }
        options={
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        }
        fetch(api_url,options).then((response)=>response.json()).then((data)=>{
            console.log(data)
            window.location.href='https://neerajkumar3299.github.io/My-Book-Space-HCJ-part/book_list'
        })
}
// for links sliding purpose
var prev=0
function slide(){
    if(prev==0){
       document.getElementById("ul").style.top='0px' 
       prev=1
    }
    else{
       document.getElementById("ul").style.top='-500px' 
       prev=0
    }
}