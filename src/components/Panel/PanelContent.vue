<template>
  <div class="input">
    <label for="radio" class="input__label text--white bg--black">
      <h3 class="input__label--text">Selecione a moeda para conversão:</h3>
      <form name="form" id="form">
        <input type="radio" id="BRL" name="moeda"  checked v-on:click="click()">
        <label for="BRL">BRL</label>
        <input type="radio" id="USD" name="moeda"  v-on:click="click()">
        <label for="USD">USD</label>
        <input type="radio" id="EUR" name="moeda"  v-on:click="click()">
        <label for="EUR">EUR</label>
      </form>
    </label>

    <label for="input" class="input__label text--white bg--black">
      <div id="title">
        <h3 class="text--white bg--black">Digite o valor a ser convertido:</h3>
      <div id="value"></div>
        <input
          id="input"
          type="text"
          class="input__input"
          autofocus
          v-model.lazy="value"
          v-money="money"
          v-on:change="change"
        >
        <select id="moeda" class="choose text--white bg--black" v-on:click="click()">
          <option value=" "> Selecione uma moeda</option>
          <option value="BRL" >BRL - Real</option>
          <option value="USD" >USD - Dólar</option>
          <option value="EUR" >EUR - Euro</option>
        </select>
      </div>
    </label>

    <label class="input__label text--white bg--black">
      <label class="screen">Moeda: <label id="coin" class="text--white bg--black" ></label></label>
      <label class="screen">IOF (1,10%): <label id="iof" class="text--white bg--black" ></label></label>
      <label class="screen">Taxa administrativa (1%): <label id="fx" class="text--white bg--black" ></label></label>
      <label class="screen">Valor convertido: <label id="result" class="text--white bg--black" ></label></label>
    </label>
  </div>
</template>

<script>

  import {VMoney} from 'v-money'

  const getValue = () => {

    let valor = document.querySelector("#input");

    valor.addEventListener('change', function (e) {
      let valor_dig = ('value:', e.target.value);

      selectCoin();
    }, true);
  };

  const selectCoin = () => {
    let moeda = document.querySelector("#moeda");
    let moedaEsc = moeda.options[moeda.selectedIndex].value;
    let texto = '';
    let cambio = '';
    let fx_rate = 0;
    let iof_value = 0;
    let fx_value = 0;
    let converted_value = 0;
    let valor_1 = (document.querySelector("#input").value);
    let valor_ins = parseFloat((valor_1).replace(/\./g, ""));

    if ((document.getElementById("BRL").checked) && (moedaEsc === "BRL")) {
      iof_value = 0;
      fx_value = 0;
      valor_ins = 0;

      cleanScreen();
      alert('Impossível converter');
    };

    if ((document.getElementById("BRL").checked) && (moedaEsc === "USD")) {
      texto= "R$ ";
      fx_rate = 5.2164;
      cambio = "USD 1 = BRL 5.2164";
    };

    if ((document.getElementById("BRL").checked) && (moedaEsc === "EUR")) {
      texto= "R$ ";
      fx_rate = 6.3970;
      cambio = "EUR 1 = BRL 6.3970";
    };

    if ((document.getElementById("USD").checked) && (moedaEsc === "USD")) {
      iof_value = 0;
      fx_value = 0;
      valor_ins = 0;

      cleanScreen();
      alert('Impossível converter');
    };

    if ((document.getElementById("USD").checked) && (moedaEsc === "BRL")) {
      texto= "U$ ";
      fx_rate = 0.1917;
      cambio = "BRL 1 = USD 0,1917";
    };

    if ((document.getElementById("USD").checked) && (moedaEsc === "EUR")) {
      texto= "U$ ";
      fx_rate = 1.2206;
      cambio = "EUR 1 = USD 1,2206";
    };

    if ((document.getElementById("EUR").checked) && (moedaEsc === "EUR")) {
      iof_value = 0;
      fx_value = 0;
      valor_ins = 0;

      cleanScreen();
      alert('Impossível converter');
    };

    if ((document.getElementById("EUR").checked) && (moedaEsc === "BRL")) {
      texto = "€ ";
      fx_rate = 0.1563;
      cambio = "BRL 1 = EUR 0,1563";
    };

    if ((document.getElementById("EUR").checked) && (moedaEsc === "USD")) {
      texto= "€ ";
      fx_rate = 0.86;
      cambio = "USD 1 = EUR 0,86"
    };

    iof_value = parseFloat((valor_ins * 1.1 / 100).toFixed(2));
    fx_value = parseFloat((valor_ins * 1 / 100).toFixed(2));

    let coin = document.getElementById("coin");
    coin.innerHTML = (cambio);

    let iof = document.getElementById("iof");
    iof.innerHTML = (texto + (iof_value).toLocaleString('pt-BR',{}));

    let fx = document.getElementById("fx");
    fx.innerHTML = (texto + (fx_value).toLocaleString('pt-BR',{}));

    converted_value = parseFloat(((valor_ins - iof_value - fx_value) * fx_rate).toFixed(2));

    let result = document.getElementById("result");
    result.innerHTML = (texto + (converted_value).toLocaleString('pt-BR',{}));

  };

  function cleanScreen() {
    coin.innerHTML = '';
    iof.innerHTML = '';
    fx.innerHTML = '';
    result.innerHTML = '';
  }

  export default {
    name: 'PanelContent',
      data() {
        return {
          value: 0.00,
          money: {
            decimal: ',',
            thousands: '.',
            precision: 2,
            masked: false
          }
        }
      },

      methods: {
        change() {
          getValue();
        },
        click() {
          selectCoin();
        }
      },
      directives: {money: VMoney}
    };
</script>

<style lang="scss" scoped>
  .choose {
    display: flex;
    flex-direction: inherit;
    justify-content: center;
    height: 40px;
    font-size: 17px;
    font-weight: bold;
    border: 0px;
    outline: 0;
    padding-top: 5px;
  }

  #form {
    input {
      margin-top: 30px;
      margin-right: 5px;
      font-size: 20px;
    }

    label {
      margin-right: 50px;
    }

  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 2;

      &__label {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        height: 50%;
        padding: 6px 12px 12px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border: 5px solid white;
        border-radius: 10px;
      }

      &__input {
        margin-top: 10px;
        color: inherit;
        background: transparent;
        border: none;
        border-bottom: 2px solid color(white);
        padding: 4px 8px;
        outline: 0;
        text-align: right;
      }
  }

  #title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height:100px;
    width: 100%;
    flex: 2;

    h3 {
      margin-top: 50px;
    }
  }

  #value {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    height:50%;
    width: 100%;
    flex: 1;
  }

  .screen {
    font-weight: bold;
    font-size: 17px;
  }

</style>
