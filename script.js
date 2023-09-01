var profileList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYvpDeASgQCC9kht60gDxgVhLjwNq6sOBQQ&usqp=CAU", "https://static.toiimg.com/thumb/msid-101852230,width-1280,resizemode-4/101852230.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AkocdZWluRMAH8i0SuaV8wmfC-nTtaYDsA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Xxsssx71o7LkEduuOTpvSGXw0i80ai2vyA&usqp=CAU",""]
var names = ["Neil Patel","Burak Obama","Mark Zukerberg","Bill Gates",]
var about = ["NEIL PATEL is the co-founder of Crazy Egg and Hello Bar. He helps companies like NBC, GM, HP, and Viacom grow their revenue.",
"Barack Hussein Obama II is an American politician who served as the 44th president of the United States from 2009 to 2017. A member of the ",
"Mark Elliot Zuckerberg is an American business magnate, computer programmer, internet entrepreneur, and philanthropist. He co-founded the ",
"William Henry Gates III is an American business magnate, investor, and philanthropist best known for co-founding the software giant Microsoft"]
for (var i = 0; i < profileList.length; i++) {
    var row = document.getElementById("row");
    var container = document.getElementById("container");
    var card = document.createElement("div");
    var col = document.createElement("div");
    var img = document.createElement("img");
    var cardBody = document.createElement("div");
    var cardTitle = document.createElement("h5");
    var cardText = document.createElement("p");
    var link = document.createElement("a");


    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);


    container.setAttribute("class", "container-fluid");
    card.setAttribute("class", "card");
    card.style.width = "18rem";
    col.setAttribute("Justifycontent","spacebetween");
    card.style.width = "100%"
    card.style.height = "100%"
    col.style.padding = "5px"
    if(profileList[i] === ""){
        img.setAttribute("src","https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1")
    }
    else{
        img.setAttribute("src", profileList[i]);
    }
    img.setAttribute("class", "card-img-top");
    cardBody.setAttribute("class", "card-body");
    cardTitle.setAttribute("class", "card-title");
    if(names === ""){
        cardTitle.innerHTML = "Unknown"
    }else{
        cardTitle.innerHTML = names[i]
    }
    cardText.setAttribute("class", "card-text");
    if(about === ""){
        cardText.innerHTML = "This Users data is not available"
    }else{
        cardText.innerHTML = about[i]
    }
    link.setAttribute("href", "#");
    link.setAttribute("class", "btn btn-primary");
    link.innerHTML = "Learn More";
    col.setAttribute("class", "col-xxl-2 col-lg-3 col-md-4 col-sm-5 col-6");
}

// cardTitle.innerHTML = "Donald Trump";
// cardText.innerHTML = "Donald John Trump is an American politician, media personality, and businessman who served as the 45th president of the United States";









