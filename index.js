button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length + 1)
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}

