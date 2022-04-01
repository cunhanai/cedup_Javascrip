let nome_aluno = 'Ana'
let nota1 = 6
let nota2 = 5
let nota3 = 4

let media = 6
let media_aluno = (nota1 + nota2 + nota3)/3

if (media_aluno >= media){
    media = true
}else{
    media = false
}

if (media == true){
    console.log(`${nome_aluno} passou de ano com media de ${media_aluno}`)
}else{
    console.log(`${nome_aluno} não passou de ano, sua média foi ${media_aluno}`)
}