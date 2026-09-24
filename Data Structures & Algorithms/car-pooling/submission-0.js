class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
         let changes = new Array(1001).fill(0);

    for (let [passengers, from, to] of trips) {
        changes[from] += passengers;
        changes[to] -= passengers;
    }

    let currentPassengers = 0;

    for (let i = 0; i <= 1000; i++) {
        currentPassengers += changes[i];

        if (currentPassengers > capacity) {
            return false;
        }
    }

    return true;
    }
}
