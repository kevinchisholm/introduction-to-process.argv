if (process.argv[2] && process.argv[2] === '--v' ) {
    console.log('My Program - version 1.0.0');
} else {
    process.argv.forEach((val, index) => {
        console.log(`Argument ${index}: ${val}`);
    });
}