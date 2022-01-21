
api_url="https://mypersonalbookstore2022.herokuapp.com/book_list"

function printData(data){
    let table=document.getElementById("tbody");
    var output_str=""
    for(let i=0;i<data.length;i++){
        output_str=output_str+`<tr>`
        output_str=output_str+`<td> <img src='${data[i]['book_image_link']}' alt=book-image/></td>`
        output_str=output_str+`<td> ${data[i]['book_name']}</td>`
        output_str=output_str+`<td> ${data[i]['sub_name']}</td>`
        output_str=output_str+`<td> ${data[i]['author']}</td>`
        output_str=output_str+`<td> <a href='${data[i]['download_link']}'>download</a></td>`
        output_str=output_str+`<td><button onclick=updateData('${data[i]._id}')><i class="fas fa-pen"></i></button><button onclick=deleteData('${data[i]._id}')><i class="fas fa-trash-alt" ></i></button></td>`
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
        alert("Book Added Successfully..")
        window.location.href = "https://neerajkumar3299.github.io/My-Book-Space-HCJ-part/book_list.html";
        
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
        alert("Book deleted successfully..")
        window.location.reload(true);
    })
}

function updateData(id){
    console.log(id+"Update")
}
