// var myArr = []
// var total = 0

// var addNumbers = function(string){
// 	var loop = string.split('')
// 	for (var i = 0; i < loop.length; i++) {
// 		if ((loop[i] === '3') || (loop[i] === '8')){
// 			myArr.push(Number(loop[i]))
// 		}
// 	};
// 	myArr.forEach(function(element){
// 		total += element
// 		return total
// 	})
// 		console.log(total)
// }

// addNumbers('88hello 3world')



var maxLength = 0

var longestWord = function(strings){
	var strings = strings.split(' ')	
	strings.forEach(function(element){
		maxLength = Math.max(maxLength, element.length)
	})
	console.log(maxLength)	
}

longestWord('this is a message')





