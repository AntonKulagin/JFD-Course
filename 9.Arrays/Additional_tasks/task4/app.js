const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const newMatrix = []

for (let i = 0; i < matrix.length; i++) {
	newMatrix.push(...matrix[i])
}

console.log(newMatrix)