// lab_6.3
// Гринчук Тарас
// Лабораторна робота № 6.3
// Опрацювання одновимірних масивів ітераційним способом
// Варіант №4

function generateArray(size, min, max, currentIndex = 0, array = []) {
   if (currentIndex === size) {
      return array;
   }

   const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
   array[currentIndex] = randomValue;

   return generateArray(size, min, max, currentIndex + 1, array);
}

function printElements(array, currentIndex = 0, elements = []) {
   if (currentIndex === array.length) {
      return elements;
   }

   elements.push(array[currentIndex]);

   return printElements(array, currentIndex + 1, elements);
}

const array = generateArray(10, 1, 100);
console.log("Сформований масив: " + array.join(", "));
const elements = printElements(array);
console.log('--------------------------------');

function printArrayRecursively(array, currentIndex = 0) {
   if (currentIndex === array.length) {
      console.log('--------------------------------');
      return;
   }

   console.log(array[currentIndex]);
   printArrayRecursively(array, currentIndex + 1);
}

printArrayRecursively(elements);
