
const pets = require('./funcoes')
console.log(pets)

function vacinarPet(pets, vacina) {
   
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].nome == pet) {
      pets[i].vacinas.push(vacina);
          }
        }
      }
vacinarPet("Frederico", 
  {
    nome: "Raiva",
    data: "05/10/2020"
  })

console.log(pets[1]);


  function castrarPet(pets) {
    for(let i =0; i< pet.length; i++)  {

    if (pets[i].castrado == true){
          console.log("esse pet já é castrado, não posso castra-lo de novo");
      } else{
        console.log("Seu Cão foi castrado, Obrigado!")
      }
    }
}
  
 function adicionarPet(pets) {

   pets.push(pet);
      adicionarPet(
    {
      nome: "Frederico",
      raca: "Siames",
      peso: 5,
      idade: 1.8,
      cor: "Marrom",
      porte: "Pequeno",
      sexo: "M",
      dono: "Inglide",
      alergias: ["AAS", "AntiInflamatório"],
      castrado: true,
      vacinas: [{ nome: "v10", data: "20/02/2019" }],
    })

    console.log(pets)
}
  
 function darBanhoPet(pets) {
  for(let i=0; i < pets.length; i++){
    if(pets[i].nome == pet){
    return "${pet} tomou banho hoje" 
    // eu colocaria como console.log mas da erro pra return
    }
  }
}

  
  function listarPets(pets) {
     
  let lista = []
  pets.forEach( (pet) => {
    
    lista.push([pet.nome, pet.raca, pet.dono])
      
    })
    return lista
  }

console.log(listarPets(pets))

module.exports = (listarPets, darBanhoPet, 
  adicionarPet, castrarPet,vacinarPet)