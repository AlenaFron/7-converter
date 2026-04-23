function convertCurrency(amount, fromCurrency, toCurrency) {
    // Объект с курсами валют
    const rates = {
        'руб-$': 0.011, // 1 рубль = 0.011 доллара
        '$-руб': 90.0,  // 1 доллар = 90 рублей
        'руб-€': 0.010, // 1 рубль = 0.010 евро
        '€-руб': 98.0,  // 1 евро = 98 рублей
        '$-€': 0.93,    // 1 доллар = 0.93 евро
        '€-$': 1.07     // 1 евро = 1.07 доллара
    };

    // Создаем ключ для поиска в объекте (например, "руб-$")
    const pair = `${fromCurrency}-${toCurrency}`;

    // Если валюты одинаковые, возвращаем ту же сумму
    if (fromCurrency === toCurrency) {
        return amount;
    }

    // Проверяем, есть ли такой курс в нашей базе
    if (rates[pair]) {
        const result = amount * rates[pair];
        
        // Округляем до 2 знаков после запятой, так как это валюта
        // Но возвращаем число, как и требуется в условии
        return Number(result.toFixed(2));
    } else {
        // Если пара валют не найдена
        return null;
    }
}

// Примеры использования:
console.log(convertCurrency(1000, 'руб', '$')); // 11
console.log(convertCurrency(100, '$', 'руб'));  // 9000
console.log(convertCurrency(50, '€', '$'));    // 53.5
console.log(convertCurrency(1000, 'руб', '¥')); // null (не поддерживается)