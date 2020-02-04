# Conversor entre JSON e XML
Converta e salve vários arquivos de uma só vez.

## Como converter:

Primeiro instale as dependências:
---

```bash
npm i fs
npm install xml2js
```

Escolha o caminho das pastas de entrada e saída nas funções: 
---
```javascript
conversor_json_xml('string')
conversor_xml_json('string')
```
Argumentos para as funções: 

1º. O caminho da pasta em que se encontram os arquivos.(Obrigatório)

2º. A pasta para salvar os arquivos convertidos → Se não informado será a mesma de entrada

3º. E se preferir pode pôr o nome desejado do arquivo como 3º argumento. → Se não informado serão números(0.json, 1.json...)


Então execute com node:
---

```bash
node conversor_xml_json.js
node conversor_json_xml.js
```