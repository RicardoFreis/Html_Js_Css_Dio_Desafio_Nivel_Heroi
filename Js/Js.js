function Calcular() {

  document.getElementById("box-4").style.display = "block";
  document.querySelector("#ResNome").textContent =
    document.querySelector("#Nome").value;
  let Qtde = document.querySelector("#Qtde").value;

  document.querySelector("#ResNome").style.textShadow = "1px 1px 1px black";
  document.querySelector("#ResNivel").style.textShadow = "1px 1px 1px black";

  if (Qtde <= 1000) {
    document.querySelector("#ResNivel").textContent = "Ferro";
    document.querySelector("#ResNome").style.color = "#8a8a7d";
    document.querySelector("#ResNivel").style.color = "#8a8a7d";
  } else if (Qtde >= 1001 && Qtde <= 2000) {
    document.querySelector("#ResNivel").textContent = "Bronze";
    document.querySelector("#ResNome").style.color = "#cd7f32";
    document.querySelector("#ResNivel").style.color = "#cd7f32";
  } else if (Qtde >= 2001 && Qtde <= 5000) {
    document.querySelector("#ResNivel").textContent = "Prata";
    document.querySelector("#ResNome").style.color = "#c0c0c0";
    document.querySelector("#ResNivel").style.color = "#c0c0c0";
  } else if (Qtde >= 5001 && Qtde <= 7000) {
    document.querySelector("#ResNivel").textContent = "Ouro";
    document.querySelector("#ResNome").style.color = "#ffd700";
    document.querySelector("#ResNivel").style.color = "#ffd700";
  } else if (Qtde >= 7001 && Qtde <= 8000) {
    document.querySelector("#ResNivel").textContent = "Platina";
    document.querySelector("#ResNome").style.color = "#a0b2c6";
    document.querySelector("#ResNivel").style.color = "#a0b2c6";
  } else if (Qtde >= 8001 && Qtde <= 9000) {
    document.querySelector("#ResNivel").textContent = "Ascendente";
    document.querySelector("#ResNome").style.color = "#008000";
    document.querySelector("#ResNivel").style.color = "#008000";
  } else if (Qtde >= 9001 && Qtde <= 10000) {
    document.querySelector("#ResNivel").textContent = "Imortal";
    document.querySelector("#ResNome").style.color = "#00FFFF";
    document.querySelector("#ResNivel").style.color = "#00FFFF";
  } else {
    document.querySelector("#ResNivel").textContent = "Radiante";
    document.querySelector("#ResNome").style.color = "#0000ff";
    document.querySelector("#ResNivel").style.color = "#0000ff";
  }
}
