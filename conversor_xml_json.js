let fs = require('fs')
xml2js = require('xml2js')
let parseString = require('xml2js').parseString
let count = 0


const conversor_xml_json = (caminho_entrada, pasta_saida = caminho_entrada, nome_arquivo = '') => {

  // Caminho da pasta será uma string do endereço da página em que se encontram os aruivos.
  let pasta = ler_pagina(caminho_entrada)

  // Não precisa modificar aqui, mas fique à vontade se quiser.
  let arquivos = pasta.map((item) => {
    return ler_arquivos(caminho_entrada, item)
  })

  // O 1º argumento será a pasta que deseja salvar o json, o 2º, de novo, não é necessário modificar.
  return arquivos.map(item => {
    salvar_na_pasta(pasta_saida, nome_arquivo, item)
  })
}
const ler_pagina = (caminho_entrada) => {
  return fs.readdirSync(caminho_entrada, 'utf8')
}
const ler_arquivos = (caminho_entrada, item) => fs.readFileSync(`${caminho_entrada}/${item}`, 'utf8')

const salvar_na_pasta = (pasta_saida, nome_arquivo, arquivo) => {
  parseString(arquivo, function (err, result) {

    fs.writeFileSync(`${pasta_saida}/${nome_arquivo}${count++}.json`, JSON.stringify(result))
  })
}




/* execute a função abaixo informando até 3 argumetos: //// todos sendo string
1• O caminho da pasta em que se encontram os arquivos XML, 
2• A pasta para salvar os arquivos convertidos(pode ser a mesma de entrada)  → se não informado será a mesma de entrada
3• E se preferir pode pôr o nome desejado do arquivo como 3º argumento. → se não informado serão números(0.json, 1.json...)
*/

conversor_xml_json('C:/Users/Dell/Desktop/Programming/Projetos/Producao/formatador_SEF/Arquivos SEF/autorizadas', 'C:/Users/Dell/Desktop/Programming/Projetos/Finalizados/Conversor JSON XML/Nova pasta', 'jsoninho')
