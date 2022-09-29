//ocultar imagen de carga
const loading =$('img').hide();
$('#success').hide();
//funcion ver amigos reutilizable
const getAmigos = () =>{
    loading.show()
    const lista =$('#lista');
    lista.empty();
    $.get('http://localhost:5000/amigos', function(data){
   
        for(let i=0;i<data.length;i++){

            var numero = document.createElement('p');
            numero.innerHTML= data[i].id;
           
            let nombre= document.createElement('h2');
            nombre.textContent= data[i].name;
    
            let edad= document.createElement('h3');
            edad.textContent= data[i].age;
    
            let email= document.createElement('h4');
            email.textContent= data[i].email;

            lista.append(`${numero.innerHTML}  <br/> ${nombre.innerHTML}  
                -  ${edad.innerHTML} <br/> ${email.innerHTML} <br/><br/>`)
            
        }
        loading.hide();
    });
}
// TRAER LISTA DE AMIGOS
$('#boton').click(getAmigos);
// BUSCAR AMIGO POR ID

$('#search').click(function(){
    let index = $('input').val()
    $.get('http://localhost:5000/amigos/'+index, function(data){
        var numero = document.createElement('p');
        numero.innerHTML= data.id;
       
        let nombre= document.createElement('h2');
        nombre.textContent= data.name;

        let edad= document.createElement('h3');
        edad.textContent= data.age;

        let email= document.createElement('h4');
        email.textContent= data.email;

        $('#amigo').append(`<br/> ${numero.innerHTML}  <br/> ${nombre.innerHTML}  
        -  ${edad.innerHTML} <br/> ${email.innerHTML} <br/><br/>`)
    })
})

//ELIMINAR A UN AMIGO 
$('#delete').click(function(){
    let index = $('#inputDelete').val()
    $.ajax({
        method:'DELETE',
        url:'http://localhost:5000/amigos/'+index,
        success:()=>{    
            $('#success').show();
            getAmigos();  
        }
    })
    $('#success').hide();
    $('#inputDelete').val('')
})