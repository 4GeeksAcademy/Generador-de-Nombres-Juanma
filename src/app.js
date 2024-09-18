let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "pued"];
let extensions = [".com", ".net", ".us", ".io", ".es"]; // Agregar varias extensiones

function generateDomains(pronoun, adj, noun, extensions) {
  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          // Si es un "domain hack" como pued.es, formamos el dominio especial
          if (n === "pued" && ext === ".es") {
            domains.push(p + a + "pued.es"); // Hack: "puedes"
          } else {
            domains.push(p + a + n + ext); // Dominio normal con extensión
          }
        }
      }
    }
  }

  return domains;
}

let domainList = generateDomains(pronoun, adj, noun, extensions);

// Imprimir la lista de dominios generados
console.log(domainList.join("\n"));
