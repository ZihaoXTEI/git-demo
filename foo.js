function foo(...args) {
	return args.reduce((prevalue, item) => {
		return prevalue + item
	}, 0)
}

console.log(foo(1, 2, 3, 4, 5))
