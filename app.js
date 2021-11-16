const defaultValues = {
  sesameCost: 100,
  jaggerCost: 65,
  pressingCost: 16,
  tip: 2,
  cakePrice: 15
}

function getOilPrice() {
  const sesameCost = document.getElementById('sesame-cost').value
  const jaggerCost = document.getElementById('jaggery-cost').value
  const pressingCost = document.getElementById('pressing-cost').value
  const tip = document.getElementById('tip').value
  const cakePrice = document.getElementById('cake-price').value
  console.log(sesameCost);
  let baseOilPrice = Math.ceil(((sesameCost * 10) + (jaggerCost * 1.5) + (pressingCost * 10) + (tip * 10) - (cakePrice * 6)) / 4)
  console.log(baseOilPrice);
  return baseOilPrice
}
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('sesame-cost').value = defaultValues.sesameCost
  document.getElementById('jaggery-cost').value = defaultValues.jaggerCost
  document.getElementById('pressing-cost').value = defaultValues.pressingCost
  document.getElementById('tip').value = defaultValues.tip
  document.getElementById('cake-price').value = defaultValues.cakePrice

  document.getElementById('oil-price').value = getOilPrice()

})

document.getElementById('input').addEventListener('keyup', (e) => {
  document.getElementById('oil-price').value = getOilPrice()
})

