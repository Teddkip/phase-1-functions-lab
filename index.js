// Function to calculate the number of blocks from Scuber headquarters
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

// Function to convert blocks to feet
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate the distance in feet between two blocks
function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264;
}

// Function to calculate the fare price based on distance
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25
    } else {
        return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
}
