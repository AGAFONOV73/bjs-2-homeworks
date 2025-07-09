function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {
      min: null,
      max: null,
      avg: null 
    };
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const sum = arr.reduce((accumulator, current) => accumulator + current, 0);

  const avg = sum / arr.length;
  const avgRounded = Number(avg.toFixed(2));

  return { 
    min: min,
    max: max,
    avg: avgRounded 
  };
}



function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
}
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else{
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0; 
  }

  return sumEvenElement / countEvenElement;
}



function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
}
  return maxWorkerResult;
}
