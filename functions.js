function read_url_vars(){
        let url = window.location.href;
        url = decodeURIComponent(url);
        let read_url = url.split("?");
        //console.log(read_url[1]);
        let get_vars = read_url[1].split("&");
        let vars_array = [];
        for(let i = 0; get_vars[i] != null; i++){
        //      console.log(get_vars[i]);
                vars_array.push(get_vars[i]);
        }
        console.log("vars_array", vars_array);
        return(vars_array);
}

function read_replace_vars(){
        let vars_array = [];
        vars_array = read_url_vars();

        for(let i = 0;i < vars_array.length;i++){
                console.log("element:", vars_array[i]);
                let product = vars_array[i].split("=");
                let ele = document.getElementById(product[0]);
                ele.textContent = product[1];
        }
}






