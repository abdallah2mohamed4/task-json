function getApi(){
    var xhttp = new XMLHttpRequest; 
 
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var result = this.responseText; // string
            var mohamed = JSON.parse(result) // string to json (array of object)
            var abod = mohamed.recipes;
            var myText='';
            for(var i=0; i<abod.length; i++){
                var cartona = ` <div class="col-md-4 text-center mb-5">
                                <img src="${abod[i].image_url}" class='w-100' style="height:350px">
                                <h5>${abod[i].title}</h5>
                                <h6>${abod[i].publisher}</h6>
                          </div>
                         `;
                    myText = myText + cartona;
                 }
            
                document.querySelector(".test").innerHTML = myText;

        }
    }

    xhttp.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza",true);
    xhttp.send();


} 

getApi();