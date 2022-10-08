console.log("Exercicio 3")

const validaSkill = skills => {
    if (skills.indexOf("Javascript") !== -1) {
      return console.log("Tem a skill");
    } else {
      console.log("Não tem a skill");
    }
  };
  var skills = ["Boostrap", "React", "CSS", "HTML"];
  validaSkill(skills);
  validaSkill([...skills, "Javascript"]);