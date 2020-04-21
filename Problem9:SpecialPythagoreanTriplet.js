function specialPythagoreanTriplet(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let k = n - i - j
            if (k > 0) {
                if ((k * k) == (i * i) + (j * j)) {
                    return i * j * k;
                }
            }
        }
    }
    return null;
}

specialPythagoreanTriplet(1000);
