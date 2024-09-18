let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'pued']; 
let extensions = ['.com', '.net', '.us', '.io', '.es']; 

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let ext = 0; ext < extensions.length; ext++) {
        
        if (noun[c] === 'pued' && extensions[ext] === '.es') {
          console.log(pronoun[a] + adj[b] + 'pued.es'); 
        } else {
          console.log(pronoun[a] + adj[b] + noun[c] + extensions[ext]);
        }
      }
    }
  }
}