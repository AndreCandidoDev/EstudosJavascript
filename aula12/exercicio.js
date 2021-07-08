let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//solução com uso de variável temporaria
let varMem = varA;
varA = varB;
varB = varC;
varC = varMem;
console.log(`${varA} ${varB} ${varC}`);

//solução moderna
varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A
[varA, varB, varC] = [varB, varC, varA]
console.log(`${varA} ${varB} ${varC}`);
