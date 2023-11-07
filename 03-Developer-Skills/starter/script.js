// Remember, we're gonna use strict mode in all scripts now!

// in console do live-server to open lie server
('use strict');
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`max = ${max} & min =  ${min}`);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 23, 50]);
const amplitude = calcTempAmplitude(temperatures);

//programm should deal with 2 arrays now.
// how to merge to arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`max = ${max} & min =  ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

*/

// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsius:'),
  };

  //   const measurementInt = parseInt(measurement.value);
  const kelvin = parseInt(measurement.value) + 273;
  return kelvin;
};
console.log(`metod 1: ${measureKelvin()}`);

const measureKelvin2 = function () {
  const measurement2 = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  //   const measurementInt = parseInt(measurement.value);
  const kelvin2 = measurement2.value + 273;
  return kelvin2;
};
console.log(`method 2: ${measureKelvin2()}`);
