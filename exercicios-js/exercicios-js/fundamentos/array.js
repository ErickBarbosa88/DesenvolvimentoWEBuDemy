const valores = [7.7, 8.9, 6.3, 9.2]// 0,1,2,3
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false,null, 'teste')
console.log(valores)

console.log(valores.pop()) // deleta o ultimo item da array
delete valores[0] // deleta um item selecionado
console.log(valores)

console.log(typeof valores)