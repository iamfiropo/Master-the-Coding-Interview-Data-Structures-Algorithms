function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let currentIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[currentIndex] > array[j]) {
        currentIndex = j;
      }
    }

    swap(array, i, currentIndex);
  }
}

function swap(array, i, currentIndex) {
  let temp = array[i];
  array[i] = array[currentIndex];
  array[currentIndex] = temp;
}

const numbers = [22, 2, 33, 1, 42, 89, 5, 3];

selectionSort(numbers);
console.log(numbers);
