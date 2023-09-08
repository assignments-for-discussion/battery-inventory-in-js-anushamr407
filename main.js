function calculateSoH(presentCapacity, ratedCapacity) {
    return (presentCapacity / ratedCapacity) * 100;
}

function classifyBattery(soh) {
    if (soh > 80) {
        return "Healthy";
    } else if (soh >= 65) {
        return "Replace";
    } else {
        return "Failed";
    }
}

function countBatteryClassification(presentCapacities, ratedCapacity = 120) {
    const classifications = { Healthy: 0, Replace: 0, Failed: 0 };

    for (const capacity of presentCapacities) {
        const soh = calculateSoH(capacity, ratedCapacity);
        const classification = classifyBattery(soh);
        classifications[classification]++;
    }

    return classifications;
}

// Example usage:
const presentCapacities = [105, 95, 60, 110, 75, 100];
const classificationCounts = countBatteryClassification(presentCapacities);

console.log("Classification Counts:");
for (const classification in classificationCounts) {
    console.log(`${classification}: ${classificationCounts[classification]}`);
}
