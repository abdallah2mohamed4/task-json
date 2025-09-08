function getApi(){
    var xhttp = new XMLHttpRequest; 
 
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var result = this.responseText; // string
            var mohamed = JSON.parse(result) // string to json (array of object)
            var abod = mohamed.products;
            var myText='';
            for(var i=0; i<abod.length; i++){
                var cartona = ` <div class="col-md-4 text-center mb-5">
                                <img src="${abod[i].images[0]}" class='w-100' style="height:350px">
                                <h4>${abod[i].title}</h4>
                                <h5>${abod[i].category}</h5>
                                <h6>${abod[i].rating[10]}</h6>
                                <h5>$${abod[i].price}</h5>
                          </div>
                         `;
                    myText = myText + cartona;
                 }
            
                document.querySelector(".test").innerHTML = myText;

        }
    }

    xhttp.open("GET","https://dummyjson.com/products",true);
    xhttp.send();


} 

getApi();