function noticia(nota) {
  if(nota >= 7) {
    console.log("Aprovado com " + nota)
  }
}

noticia(8)

function seForVerdadeiro(valor) {
  if (valor) {
    console.log('É verdade' + valor)
  }
  
}

seForVerdadeiro()
seForVerdadeiro(null)
seForVerdadeiro(undefined)
seForVerdadeiro(NaN)
seForVerdadeiro('')
seForVerdadeiro(0)
seForVerdadeiro('-1')
seForVerdadeiro(' ')
seForVerdadeiro('?')
seForVerdadeiro([])
seForVerdadeiro([1, 2])
seForVerdadeiro({})