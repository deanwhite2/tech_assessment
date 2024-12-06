// added reusable function to generate numbers
// @param limit specifies the amount of numbers to generate
export function generateNumbers(limit: number): number[] {
	return Array.from({ length: limit }, (_, i) => i + 1);
}

// added reusable function to shuffle numbers
// slice to avoid unexpected mutation to original array
export function shuffleNumbers(numbers: number[]): number[] {
	return numbers.slice().sort(() => Math.random() - 0.5);
}