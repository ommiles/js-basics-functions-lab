let hq = 42

function distanceFromHqInBlocks(blockDestination) {
    return Math.abs(hq-blockDestination)
}

function distanceFromHqInFeet(feetDestination) {
    return Math.abs(distanceFromHqInBlocks(feetDestination) * 264)
}

function distanceTravelledInFeet(departureBlock, arrivalBlock) {
    return(Math.abs(departureBlock-arrivalBlock)) * 264
}

function calculatesFarePrice(departure, arrival) {
    let fare = 0
    if (distanceTravelledInFeet(departure, arrival) < 400) {
        fare = 0
    } if ((distanceTravelledInFeet(departure, arrival) >= 400) && (distanceTravelledInFeet(departure, arrival) <= 2000)) {
        fare = (distanceTravelledInFeet(departure, arrival)-400) * .02
    } if ((distanceTravelledInFeet(departure, arrival) >= 2000) && (distanceTravelledInFeet(departure, arrival) <= 2500)) {
        fare = 25
    } if (distanceTravelledInFeet(departure, arrival) > 2500) {
        fare = `cannot travel that far`
    }
    return fare
}

/* 

The first function takes in a blockDestination and calculates the difference from HQ to blockDestination. Math.abs is used in lieu of an if...else statement to convert the difference to an absolute value. 

The second function converts the value from the first function into feet, still as an absolute value.

The third function calculates the number of feet a passenger travels given a departure block and an arrival block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.

The fourth function calculates fare price.  It accepts departure and arrival values and depending on their range, changes the ride fare. 

*/