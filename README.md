# CrudAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

<p align="center">
  <img alt="Layout da aplicação" width="70%" src="https://github.com/frankmagalhaes/yahoofinance/blob/master/src/assets/prototype/prototype.jpg" />
</p>
<p align="center">
  <img alt="Layout da aplicação" width="70%" src="https://github.com/frankmagalhaes/yahoofinance/blob/master/src/assets/prototype/chart.jpg" />
</p>

## Sobre o Projeto

O projeto consiste em consultar a variação do preço de um ativo  nos últimos 30 pregões. Com essa consulta, deverá apresentar o percentual de variação de preço de um dia para o outro e o percentual desde o primeiro pregão apresentado.
Os valores estrão estruturados em vetores, desta forma, o projeto casou a data do pregão (chart.result.timestamp) com o valor de abertura (chart.result.indicators.quote.open) através do indice do vetor.

Para este desafio, iremos utilizar a API do Yahoo Finance https://finance.yahoo.com/.




### Notas
https://futurofinanceiro.org/127/onde-posso-encontrar-a-documentacao-da-api-do-yahoo-finance
Coletando algumas evidências temos a informaçao sobre a API do Yahoo Finance ser descontinuada, porém continua funcional.Sendo possível o acesso dos dados:
https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA.
No projeto atual coletei os dados do histórico intraday do periodo de 22/06/2022 a 03/08/2022 do ativo TSLA.
https://query1.finance.yahoo.com/v8/finance/chart/TSLA?period1=1655904600&period2=1659619800&interval=1d

Dados acima foram armazenados numa JSON e utilizado para renderizar os valores da variaçao do ativo na tabela e grafico.
https://jsonformatter.curiousconcept.com/
Biblioteca do grafico.
https://www.chartjs.org/


Os valores estrão estruturados em vetores, desta forma, o projeto casou a data do pregão (chart.result.timestamp) com o valor de abertura (chart.result.indicators.quote.open) através do indice do vetor.



## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
