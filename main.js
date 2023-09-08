class CountsBySoH {
    constructor() {
        this.healthy = 0;
        this.exchange = 0;
        this.failed = 0;
    }
}

function countBatteriesByHealth(presentCapacities) {
    const counts = new CountsBySoH();

    for (const capacity of presentCapacities) {
        const soh = (capacity / 120) * 100; // Assuming rated capacity is 120 Ah

        if (soh > 80) {
            counts.healthy++;
        } else if (soh >= 65) {
            counts.exchange++;
        } else {
            counts.failed++;
        }
    }

    return counts;
}

function testBucketingByHealth() {
    console.log("Counting batteries by SoH...\n");
    const presentCapacities = [115, 118, 80, 95, 91, 77];
    const counts = countBatteriesByHealth(presentCapacities);

    console.assert(counts.healthy === 2);
    console.assert(counts.exchange === 3);
    console.assert(counts.failed === 1);

    console.log("Done counting :)\n");
}

testBucketingByHealth();
