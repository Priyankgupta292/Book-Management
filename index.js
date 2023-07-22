let title=document.querySelector("#title")
let author=document.querySelector("#author")
let isbn=document.querySelector("#isbn")
let form=document.querySelector("#book-form")
let tbody=document.querySelector("#book-list")
// console.log(title,author,isbn);

function getfromlocalstorage(){
    let books;
    if(localStorage.getItem('books')==null)
    {
        books=[];
    }
    else{
        books=JSON.parse(localStorage.getItem('books'))
    }
    return books;
}


function adddetails(e){
    e.preventDefault();
    // console.log(e);
    // console.log(title.value,author.value, isbn.value );
    addinlocalstorage(title.value,author.value,isbn.value);
    adddetailstolist(title.value,author.value,isbn.value);
    title.value="";
    author.value="";
    isbn.value="";

}



function adddetailstolist(title,author,isbn){
    // let a=getfromlocalstorage();
    let tr=document.createElement("tr");
    tr.innerHTML= `<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#" class="btn btn-danger btn-right">X</a></td>
    `
    tbody.appendChild(tr);
    

                    
}

function addinlocalstorage(title,author,isbn){
    let a=getfromlocalstorage();
    a.push({title,author,isbn});
    // console.log(a);
    localStorage.setItem('books',JSON.stringify(a));
    
}

form.addEventListener("submit",e=>adddetails(e));

window.addEventListener("DOMContentLoaded",()=>{
    let a=getfromlocalstorage();
    // console.log(a);
    // a.forEach(item=>console.log(item))
    a.forEach(item=>adddetailstolist(item.title,item.author,item.isbn));
})



 