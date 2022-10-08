console.log("Exercicio 4")


const calcExp = age => {
    switch (true) {
      case age >= 0 && age <= 1:
        console.log(`Você tem ${age} anos de exp, seu nível é: Iniciante`);
        break;
      case age >= 1 && age <= 3:
        console.log(`Você tem ${age} anos de exp, seu nível
  é: Intermediário`);
        break;
      case age >= 3 && age <= 6:
        console.log(`Você tem
  ${age} anos de exp, seu nível é: Avançado`);
        break;
      default:
        console.log(`Você
  tem ${age} anos de exp, seu nível é: Jedi Master `);
        break;
    }
  };
  calcExp(7);