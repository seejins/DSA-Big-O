//#1 
O(1)
O(n)

//#2 Even or Odd
O(1) // because no matter what the value is the algorithm takes the same amount of time

//#3 Are you here?
O(n^2) // because of the nested for loop

//#4 Doubler
O(n) // when the input increases in size the amount of times the for loop runs increases

//#5 naive search
O(n) // when the input size increases the run time increases

//#6 Creating pairs:
O(n^2) // because of the nested for loop

//#7 Compute the sequence
//Computes the fibonacci sequence. Runtime complexity is O(n) because as the input size increases the loop runs longer

//#8 An efficient search
O(logN) // because the index gets smaller with each iteration and the array is sorted

//#9 Random element
O(1) // always takes the same amount of time no matter the input

//#10 What Am I?
O(n) // input size increase the time in a linear fashion

//#11 Tower of Hanoi
O(2^n)

function solveHanoi(disks, origin, temp, destination){
    if (disks === 1){
        console.log(`${disks} moving ${origin} -> ${destination} count:${++count}`)
    }
    else{
        solveHanoi(disks - 1, origin, destination, temp);
        console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`);
        solveHanoi(disks - 1, temp, origin, destination)
    }
  
  }
  console.log(solveHanoi(3, 'a', 'b,', 'c'))



