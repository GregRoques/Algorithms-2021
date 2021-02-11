// Write a program implementing a queue, a First-In-First-Out (FIFO) data structure.
// The queue should have enqueue and dequeue methods:
// - The enqueue method must insert a given element to the back of the queue.
// - The dequeue method must remove the element from the front of the queue.
// - The queue must have a certain capacity which is the maximum number of elements in the data structure. 
// - The enqueue method must do nothing if the queue is full. 
// - And similarly, the dequeue method must do nothing if the queue is empty.
// You will be asked to perform a sequence of operations with integers and then print out the state of the queue.
// Input:
// - The first line of input contains a positive integer defining the capacity of the queue.
// - Each additional line of input contains a string naming the operation to be performed: enqueue or dequeue.
// - The enqueue string will be followed by an integer that must be inserted into the queue.

class Queue{
    constructor(){
        this._queueList = [];
        this._max;
    }
   
    setMax = max => {
        this._max = max
    }

    enqueue = newNum => {
        if (this._queueList.length !== this._max){
            this._queueList.push(newNum)
        }
    }

    dequeue = () => {
        if(this._queueList.length > 0){
            this._queueList.shift()
        }
    }

    finalQueue = () => {
        if(this._queueList.length > 0){
            return this._queueList.join(' ')
        }
        return 'Empty'
    }
}


function returnQueue(list){
    let q = new Queue();
    const max = Number(list.shift()); // use Number() function in case value is passed as string
    q.setMax(max);
    list.map(item =>{
        const functionAndNumber = item.split(' ');
        switch(functionAndNumber[0]){
            case 'enqueue':
                q.enqueue(functionAndNumber[1])
                break;
            case 'dequeue':
                q.dequeue();
                break;
        }
    })
    return q.finalQueue();
}

const testArray_1 = [
    5,
    'enqueue 5',
    'enqueue 6',
    'enqueue 1',
    'dequeue',
    'enqueue 2',
    'dequeue',
    'enqueue 3'
]; 
console.log(returnQueue(testArray_1)) // expected output: 1 2 3

const testArray_2 = [
    '3',
    'dequeue',
    'enqueue 91',
    'enqueue 30',
]; 
console.log(returnQueue(testArray_2)) // expected output: 91 30

const testArray_3 = [
    10, 
    'enqueue -57',
    'dequeue',
    'dequeue',
    'enqueue -51',
    'dequeue',
    'dequeue',
    'dequeue',
    'enqueue -43',
    'enqueue 13',
    'enqueue -93',
    'dequeue',
    'enqueue 71',
    'enqueue -46',
    'enqueue 40',
    'dequeue'
]; 
console.log(returnQueue(testArray_3)) // expected output: -93 71 -46 40

const testArray_4 = [
'3',
'enqueue 7',
'enqueue 15',
'enqueue -2',
'enqueue -11',
'enqueue -13',
'dequeue',
'dequeue',
'enqueue 0',
'enqueue 15',
'enqueue 19',
'enqueue 12'
];
console.log(returnQueue(testArray_4)) // expected output: -2 0 15
