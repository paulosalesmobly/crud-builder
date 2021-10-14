# CRUD - Builder - GoF - Design pattern example

Um exemplo de uso do design pattern Builder em um cenário
de CRUD (Create, Read, Update and Delete).

> Este repositório somente é para fins acadêmicos

## Resumo

Imagine que em um codigo exista uma classe que receba
inumeros parametros em seu construtor, este eh um
caso muito comum, mas que dificulta muito saber a ordem
de cada parametro passado no construtor desta classe.

Neste exemplo temos, no arquivo index.js, duas classes.
Sendo uma delas, a CrudService, exatamente um exemplo de 
classe que recebe inumeros parametros em seu construtor.

A outra classe implementa o design pattern Builder para
resolver o problema de errar a ordem dos parametros passados
no construtor e isolar a forma como um objeto eh instanciado
desta classe.

## Executando

```sh
node index.js
```