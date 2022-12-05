//방법1
function solution(id_pw, db) {
  let result = "";
  const idTrue = db.filter((e) => e[0] === id_pw[0]);

  if (idTrue.length !== 0) {
    idTrue.forEach((e) => {
      if (e[1] === id_pw[1]) return (result = "login");
    });
    if (result.length === 0) result = "wrong pw";
  } else {
    result = "fail";
  }

  return result;
}

//방법2
function solution(id_pw, db) {
  const idTrue = db.filter((e) => e[0] === id_pw[0]);

  if (!idTrue.length) return "fail";

  for (let login of idTrue) if (login[1] === id_pw[1]) return "login";

  return "wrong pw";
}
