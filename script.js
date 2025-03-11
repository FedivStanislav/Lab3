(function () {
    let names = ["John", "Alice", "Jacob", "Emma", "James", "Olivia", "Jack", "Sophia"];

    for (let i = 0; i < names.length; i++) {
        let firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodbyeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    // Додатковий спосіб селекції - перевірка останньої літери
    console.log("\nДодатковий фільтр (імена, що закінчуються на 'a'):");
    for (let i = 0; i < names.length; i++) {
        let lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
        if (lastLetter === 'a') {
            console.log("Особливе ім'я: " + names[i]);
        }
    }
})();
