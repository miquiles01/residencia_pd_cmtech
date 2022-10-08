console.log("Exercicio 5")

var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
  ];
  
  const showMessage = usuarios => {
    for (const user of usuarios) {
      const { nome, habilidades } = user;
      console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`);
    }
  };