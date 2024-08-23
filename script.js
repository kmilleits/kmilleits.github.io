const url="https://api.hgbrasil.com/weather?format=json-cors&key=85861a01"

consumirAPI()

async function consumirAPI() {
  const resultado = await fetch(url)
  const dados = await resultado.json()

  let condicao = dados['results']['description']
  let cidade = dados['results'] ['city']
  let data_hora = dados['results'] ['date'] + " - " + dados['results']['time']
  let umidade = dados['results'] ['humidity']
  let vento = dados['results'] ['windy_speedy']
  let temperatura = dados['results'] ['temp']

  span_description.innerText = condicao
  span_city.innerText = cidade
  span_date_time.innerText = data_hora
  span_temp.innerText = temperatura
  span_humidity.innerText = umidade
  span_windy_speedy.innerText = vento
  
  //*********************************************** */
  let condicao2 = dados['results']['forecast'][1]['description']
  let data_hora2 = dados['results']['forecast'][1]['date']
  let umidade2 = dados['results']['forecast'][1]['humidity']
  let vento2 = dados['results']['forecast'][1]['windy_speedy']
  
  let maxima2 = dados['results']['forecast'][1]['max']
  let minima2 = dados['results']['forecast'][1]['min']

  span_description2.innerText = condicao2
  span_date_time2.innerText = data_hora2
  span_humidity2.innerText = umidade2
  span_windy_speedy2.innerText = vento2
  span_temp_max.innerText = maxima2
  span_temp_min.innerText = minima2
}