## Objetivo

Através desse repositório será possível.

- Verifica se existe algum erro de sintaxe no arquivo JavaScript.
- Acompanha em tempo real enquanto o arquivo é desenvolvido através do comando `watcher`.

## Install

`yarn install`

## Usage

- Os arquivos JavaScript devem estar na pasta `scripts`

Comandos:

- `yarn checkjs` para verificar arquivos JavaScript.
  - Procura os arquivos JavaScript na pasta `filestocheck/scripts`.
  - Verifica erros no JavaScript.
  - Minimifica o JavaScript.
  - Exporta para a pasta `assets/scripts`
  - Caso apresente erro de JavaScript que deseja ignorar ou fazer alguma cofiguração, utilize o arquivo `.eslintrc`. Verifique a lista de exclusões no seguinte [website](https://github.com/adametry/gulp-eslint)

- `yarn watcher`
  - Acompanha em tempo real o desenvolvimento do arquivo JavaScripts.

- `yarn default`
  - Executa o comando checkjs como padrão.

Caso deseja verificar a documentação do GULP em que essa documentação foi baseada verifique os seguintes websites [GULP](https://github.com/gulpjs/gulp) e [ESLINT](https://github.com/adametry/gulp-eslint)