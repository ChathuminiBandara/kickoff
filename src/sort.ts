console.log("Hello sort");

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function printSorted(arr: number[]): void{
    const sorted = mergeSort(arr);
    console.log(sorted);
}

if (require.main === module) {
    const args = process.argv.slice(2).map(Number);
    if (args.length === 0 || args.some(isNaN)) {
        process.exit(0);
    }
    printSorted(args);
}
