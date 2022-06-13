function sum(a, b) {
	return a + b
}

console.log(sum(25, 10))

function log(errInfo) {
	const date = new Date()
	console.log(`${date} -- [ERROR]: ${errInfo}`)
}

log('XXXXX')

const bodyEl = document.querySelector('body')
const div = document.createElement('div')
div.innerText = '哈哈'
bodyEl.appendChild(div)
