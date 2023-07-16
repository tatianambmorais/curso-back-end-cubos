const numeroCartao = '1111222233334444';

function formatarNumeroCartao(numeroCartao) {
  const digitosVisiveis = `${numeroCartao.slice(0, 4)}****${numeroCartao.slice(-4)}`;
  return digitosVisiveis;
}

const numeroCartaoFormatado = formatarNumeroCartao(numeroCartao);
console.log(numeroCartaoFormatado);
