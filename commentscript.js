let tweet=document.querySelector("#tweet");
let chatscontainer =document.getElementById("chat-section");

// let deletecomment =document.querySelector("#delete");
tweet.addEventListener("submit", function(e){
    e.preventDefault();
    e.stopPropagation();

    let username=tweet.elements.username;
    let comment=tweet.elements.comment;
  
    addcomments(username.value,comment.value);
    username.value ='';
    comment.value= '';

});


let addcomments = (username,comment ) => {

let li =document.createElement("li");
let li1 =document.createElement("li");
let btag =document.createElement("b");
let br =document.createElement("br");
// let button =document.createElement("button");
// button.innerText="delete post";
btag.append(username);
li.append(btag);
li.append("     --  has commented --   ");
li1.append(comment);

chatscontainer.append(li);

chatscontainer.append(li1);
chatscontainer.append(br);



}
button.addEventListener("click",function(e){
   
    e.target.nodeName ==="LI" && e.target.remove();
    
})