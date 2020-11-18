# weather-music

API de sugestão de músicas de uma playlist do spotify _(baseado no clima de uma cidade escolhida)_

## Tabela de conteúdo:

  1. [Executando a aplicação](#executando-a-aplicação)
      1. [NodeJs / yarn](#executando-com-nodejs-e-yarn)
      1. [Personalizando as portas](#personalizando-as-portas)
  1. [Visão geral da API](#visão-geral-da-api)
      1. [Como Usar](#como-usar)
      1. [Rotas](#rotas)
  1. [Executando os testes](#executando-os-testes)
  1. [Construído com](#construído-com)
  1. [Versionamento](#versionamento)
  1. [Autores](#autores)

## Executando a aplicação

#### Executando com NodeJs e Yarn

> Para executar a aplicação você precisa de:

* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com)

Clone o repositório

```sh
git clone https://github.com/hdusantos/weather-music
```

Instale as dependências
```sh
yarn install
```

Alguns parâmetro são experados pela aplicação, são eles o **token do openWeatherMap API**, **clientId e clientSecret do Spotify API**, basta configurar algumas variáveis de ambiente.

```sh
export OPEN_WEATHER_MAP_API_TOKEN=TOKEN_AQUI
export SPOTIFY_API_CLIENT_ID=CLIENT_ID_AQUI
export SPOTIFY_API_CLIENT_SECRET=CLIENT_SECRET_AQUI
```

Por fim, execute a aplicação

```sh
yarn start
```
Pronto! A aplicação está em execução, por padrão a aplicação está disponível na porta _3001_

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

#### Personalizando as portas

Para executar a aplicação em uma porta diferente da padrão(_3001_), basta configurar a variável de ambiente SERVER_PORT:

```sh
export SERVER_PORT_API=8080
# Agora a aplicação vai estar disponível na porta 8080
```

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

## Visão geral da API

A API retorna as informações no formato JSON

### Como Usar

#### Rotas:

_Listar tracks de uma playlist:_
```http
GET /playlist?city=brasilia HTTP/1.1
```
O parâmetro _city_ corresponde a cidade na qual será usada a temperatura para a escolha da playlist

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

## Executando os testes

Para executar os teste é importante lembrar de configurar as variáveis de ambiente na instância do terminal que irá executar os testes **token do openWeatherMap API**, **clientId e clientSecret do Spotify API**

```sh
export OPEN_WEATHER_MAP_API_TOKEN=TOKEN_AQUI
export SPOTIFY_API_CLIENT_ID=CLIENT_ID_AQUI
export SPOTIFY_API_CLIENT_SECRET=CLIENT_SECRET_AQUI
```

Execute os testes

```sh
yarn test
```

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**

## Construído com:

* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
#### APIs Uutilizadas
* [OpenWeatherMap API](https://openweathermap.org/)
* [Spotify API](https://developer.spotify.com/)


## Versionamento

Nós usamos [SemVer](http://semver.org/) para versionamento. Para mais versões Disponíveis, veja [Versões](https://github.com/hdusantos/weather-music/tags). 

## Autores

* [Hudson dos Santos](https://github.com/hdusantos)

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**