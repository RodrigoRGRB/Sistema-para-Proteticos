class FotoHelper{

    static pegaFoto(){
    var pokemonView = document.querySelector('#armazenaFoto');

        
        //    var preview = document.querySelector('img'); //selects the query named img
        var file    = document.querySelector('input[type=file]').files[0]; //sames as here
        console.log(file);
        var reader  = new FileReader();

        reader.onloadend = function () {
            pokemonView.value = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
            
        } else {
            //preview.src = "";
        }

        
        


        
    }
     


    
}