const pixelsInput = document.getElementById("pixels")
const remInput = document.getElementById("rem")

const inputs = document.getElementsByClassName("input")

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value)

        switch (e.target.name) {
            case "pixels":
                remInput.value = value / 16                
                break
            case "rem":
                pixelsInput.value = value * 16
                break
        }   
    })
}

