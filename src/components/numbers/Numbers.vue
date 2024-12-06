<script setup lang="ts">
// included ref to allow amount of numbers to be changed dynamically
import { ref } from 'vue';
import { generateNumbers, shuffleNumbers } from './number_utils/numbers_util';

import './number_styling/numbers_styling.css'; 

// removed uneccesary numbers array
// capitalized const for best practice
const LIMIT = ref<number>(100);

// renamed function for tranparency (n not descriptive)
// created numbers_utils folder with numbers_util file for reusable number operations
function generateAndShuffleNumbers() {
	return shuffleNumbers(generateNumbers(LIMIT.value));
}

function highlightNumbersOnHover(number: number) {
	// added HTMLDivElement for typesafety
	const elements = document.querySelectorAll<HTMLDivElement>('.number');

	// updated verbose for loop to forEach
	elements.forEach((element) => {
		// convert text to int (base 10), or use 0 if null
		const num = parseInt(element.textContent || '0', 10);
		if (number % num === 0) {
			element.classList.add('active');
			// removed console.log (bad practice + bad for production if forgotten)
		}
	});
}

// renamed function for clarity
function resetHighlighting() {
	// added HTMLDivElement for typesafety
	const elements = document.querySelectorAll<HTMLDivElement>('.number');
	elements.forEach(element => element.classList.remove('active'))
}
</script>

<!-- if template was bigger would extract into its own file -->
<template>
	<div>
		<input type="number" v-model="LIMIT" /><br /><br />
		<div class="number" :id="'number-' + number" v-for="number in generateAndShuffleNumbers()" :key="number"
			@mouseover="highlightNumbersOnHover(number)" @mouseout="resetHighlighting">
			{{ number }}
		</div>
	</div>
</template>

<!-- extracted styling into its own file: numbers.css -->