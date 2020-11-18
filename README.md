# weather-music

API de sugestão de músicas de uma playlist do spotify _(baseado no clima de uma cidade escolhida)_

> Disponível em http://54.174.128.162:3001/playlist?city=campinas

## Tabela de conteúdo:

  1. [Executando a aplicação](#executando-a-aplicação)
      1. [Docker](#executando-a-aplicação-com-o-docker)
      1. [NodeJs / yarn](#executando-com-nodejs-e-yarn)
      1. [Personalizando as portas](#personalizando-as-portas)
  1. [Visão geral da API](#visão-geral-da-api)
      1. [Como Usar](#como-usar)
      1. [Rotas](#rotas)
      1. [Mensagem de Erro](#mensagem-de-erro)
  1. [Executando os testes](#executando-os-testes)
  1. [Construído com](#construído-com)
  1. [Versionamento](#versionamento)
  1. [Autores](#autores)

## Executando a aplicação
Há duas formas disponíveis de executar a aplicação, via docker ou usando o NodeJS com yarn:

#### Executando a aplicação com o docker

Clone o repositório

```sh
git clone https://github.com/hdusantos/weather-music
```

Construa a imagem

```sh
docker build -t weather-music .
```

Alguns parâmetro são esperado pela aplicação, são eles o **token** do openWeatherMap API, **clientId e clientSecret** do Spotify API, basta passar os valores como variáveis de ambiente para o container.

```sh
docker run --name weather-music -p 3001:3001 -e "OPEN_WEATHER_MAP_API_TOKEN=TOKEN_AQUI" -e "SPOTIFY_API_CLIENT_ID=CLIENT_ID_AQUI" -e "SPOTIFY_API_CLIENT_SECRET=CLIENT_SECRET_AQUI" -d weather-music
```

Pronto! A aplicação está em execução, por padrão a aplicação está disponível na porta _3001_

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

Alguns parâmetro são esperado pela aplicação, são eles o **token** do openWeatherMap API, **clientId e clientSecret** do Spotify API, basta configurar algumas variáveis de ambiente.

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

_Listar tracks de uma playlist usando o **nome** da cidade:_
```http
GET /playlist?city=brasilia HTTP/1.1
```

_Listar tracks de uma playlist usando a **latitude e longitude** da cidade:_
```http
GET /playlist?lat=55.751244&lon=37.618423 HTTP/1.1
```

#### Mensagem de Erro:

Os error são retornados no seguinte formato:

```http
GET /playlist?city=brasiliaaaa HTTP/1.1
```
```json
{
  "error": {
    "statusCode": "404",
    "message": "city not found"
  }
}
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

## Autor

* [Hudson dos Santos](https://github.com/hdusantos)

**[⬆ Voltar para o topo](#tabela-de-conteúdo)**