# Buscante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# RxJs e Angular: Programando de forma reativa

De acordo com a documentação do Angular, os pipes podem ser usados para transformar strings, valores monetários, datas e outros dados para exibição.

Pipes são funções simples que aceitam um valor de entrada e retornam um valor transformado para ser usado em expressões no template. Os pipes são úteis porque você pode usá-los em toda a sua aplicação, enquanto declara cada pipe apenas uma vez.

O Angular possui vários pipes prontos para uso, conheça alguns deles:

DatePipe: formata um valor de data de acordo com as regras de localidade.
UpperCasePipe: transforma o texto em letras maiúsculas.
LowerCasePipe: transforma o texto em letras minúsculas.
CurrencyPipe: transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.
DecimalPipe: transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.
PercentPipe: transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.

## Primeira parte: Programação reativa

- Utilizar a arquitetura de componentes de apresentação e componentes inteligentes;
- Lidar com a biblioteca RxJS;
- Aplicar o padrão Observer.

## Segunda parte: Ciclo do Observable

- Utilizar os métodos next, error e complete;
- Desinscrever-se do observable através do unsubscribe;
- Adequar a resposta da API para o formato necessário.

## Terceira parte: Operadores RxJs

- Utilizar o operador pipe para agrupar múltiplos operadores;
- Utilizar o operador tap para fazer debugging na aplicação;
- Transformar o fluxo de dados com o operador map.

## Quarta parte: Pipes do Angular

- Transformar dados com pipes;
- Passar parâmetros e utilizar pipes encadeados;
- Criar um pipe customizado.

