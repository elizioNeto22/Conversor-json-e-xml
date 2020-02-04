let fs = require('fs')
xml2js = require('xml2js')
let count = 0
var builder = new xml2js.Builder()


const conversor_json_xml = (caminho_da_pasta, pasta_saida = caminho_da_pasta, nome_arquivo = '') => {

  // Caminho da pasta será uma string do endereço da página em que se encontram os aruivos.
  let pasta = ler_pagina_json(caminho_da_pasta)

  // Não precisa modificar aqui, mas fique à vontade se quiser.
  let arquivos = pasta.map((item) => {
    return ler_arquivos_json(caminho_da_pasta, item)
  })
  return arquivos.map(item => {
    // let parsed = JSON.parse(item)
    salvar_na_pasta_xml(pasta_saida, nome_arquivo, JSON.parse(item))
  })
}
const ler_pagina_json = (caminho_da_pasta) => {
  return fs.readdirSync(caminho_da_pasta, 'utf8')
}
const ler_arquivos_json = (caminho_da_pasta, item) => fs.readFileSync(`${caminho_da_pasta}/${item}`, 'utf8')
const salvar_na_pasta_xml = (pasta_saida, nome_arquivo, arq_json) => {

  let xml = builder.buildObject(arq_json)

  fs.writeFileSync(`${pasta_saida}/${nome_arquivo}-${count++}.xml`, xml)
}




/* execute a função abaixo informando até 3 argumetos: //// todos sendo string
1• O caminho da pasta em que se encontram os arquivos JSON, 
2• A pasta para salvar os arquivos convertidos(pode ser a mesma de entrada) → se não informado será a mesma de entrada
3• E se preferir pode pôr o nome desejado do arquivo como 3º argumento. → se não informado serão números(0.xml, 1.xml...)
*/

conversor_json_xml('C:/Users/Dell/Desktop/Programming/Projetos/Finalizados/Conversor JSON XML/Nova pasta', 'C:/Users/Dell/Desktop/Programming/Projetos/Finalizados/Conversor JSON XML/Nova pasta', 'xmlinho')


