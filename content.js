console.log("Hi, I'm the random IMEI extension!")

const selectors = ['input[type=text][name*="imei"]', 'input[type=text][class*="imei"]']

imeiInputs = document.querySelectorAll(selectors.join(", "))

imeiInputs.forEach(element => {
  var parent = element.parentNode
  var icon = document.createElement('IMG')
  icon.src =  chrome.runtime.getURL('dice.png');

  var size = 20
  icon.style.width = size + "px";
  icon.style.height = size + "px";
  icon.style.margin = "5px";
  icon.style.float = "right";
  icon.style.cursor = "pointer";
  icon.title = "Genera IMEI random";
  icon.alt = "Genera un IMEI random";

  icon.addEventListener('click', function (e) {
    fakeImeiForInput(element)
  })

  parent.classList.contains('input-group') ? parent.before(icon) : element.before(icon)
});

function fakeImeiForInput(input) {
  input.value = generateFakeImei()
  // Trigger event onchange
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    input.dispatchEvent(evt);

    evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", false, true);
    input.dispatchEvent(evt);
  } else {
    input.fireEvent("onchange");
    input.fireEvent("oninput");
  } 
}

function generateFakeImei() {
  digits = []
  for(var i = 0; i < 14; i++) {
    digits.push(Math.floor(Math.random() * 10))
  }
  console.log("Digits:", digits)

  var sum = 0
  digits.forEach((digit, index) => {
    var value = index % 2 === 0 ? digit : digit * 2
    sum += value >= 10 ? (value % 10) + 1 : value
  })
  console.log("Sum:", sum)
  
  var rounded = Math.ceil(sum / 10) * 10

  console.log("Rounded:", rounded)

  digits.push(rounded-sum)

  return digits.join("")

}

