/* ================ ФУНКЦИЯ СОРТИРОВКИ ПО МИНИМАЛЬНОЙ ЦЕНЕ ПО ВОЗРАСТАНИЮ ========================== */
function sortByMinAsc(arr) {
    function sortByPrices() {
        return (a, b) => (a.prices[0] > b.prices[0]) || (a.prices[0] != null && b.prices[0] == null) ? 1 : -1;
    }
    let sortedCourses = arr.sort(sortByPrices());
    return sortedCourses;
};
/* ================ ФУНКЦИЯ СОРТИРОВКИ ПО МИНИМАЛЬНОЙ ЦЕНЕ ПО УБЫВАНИЮ ========================== */
function sortByMinDes(arr) {
    function sortByPrices() {
        return (a, b) => (a.prices[0] > b.prices[0]) || (a.prices[0] != null && b.prices[0] == null) ? -1 : 1;
    }
    let sortedCourses = arr.sort(sortByPrices());
    return sortedCourses;
};


/* ================ ФУНКЦИЯ СОРТИРОВКИ ПО МАКСИМАЛЬНОЙ ЦЕНЕ ПО ВОЗРАСТАНИЮ ========================== */
function sortByMaxAsc(arr) {
    function sortByPrices() {
        return (a, b) => (a.prices[1] > b.prices[1] || (a.prices[1] != null && b.prices[1] == null)) ? 1 : -1;
    }
    let sortedCourses = arr.sort(sortByPrices());
    return sortedCourses;
};
/* ================ ФУНКЦИЯ СОРТИРОВКИ ПО МАКСИМАЛЬНОЙ ЦЕНЕ ПО УБЫВАНИЮ ========================== */
function sortByMaxDes(arr) {
    function sortByPrices() {
        return (a, b) => (a.prices[1] > b.prices[1] || (a.prices[1] != null && b.prices[1] == null)) ? -1 : 1;
    }
    let sortedCourses = arr.sort(sortByPrices());
    return sortedCourses;
};


/* ============== ФУНКЦИЯ ФИЛЬТРА ПО ВЫБРАННОМУ ДИАПАЗОНУ ЦЕН ================================ */
function filterByPrice(arr, range) {
    if (range[0] != null & range[1] != null) {
        arr.forEach(function (item, i, arr) {

            if (item.prices[0] == null) {
                if (item.prices[1] > range[1]) {
                    delete arr[i];
                };
            } else if (item.prices[1] == null) {
                if (item.prices[0] < range[0]) {
                    delete arr[i];
                };
            } else if (item.prices[0] != null && item.prices[1] != null) {
                if (item.prices[0] >= range[0] && item.prices[1] <= range[1]) {
                    // console.log(`Keep arr${i}`)
                } else {
                    // console.log(`Del arr${i}`)
                    delete arr[i];
                }
            }
        })
    } else if (range[0] == null && range[1] != null) {
        arr.forEach(function (item, i, arr) {
            if (item.prices[1] > range[1] || item.prices[0] > range[1]) {
                delete arr[i];
            };
        })
    } else if (range[0] != null && range[1] == null) {
        arr.forEach(function (item, i, arr) {
            if (range[0] <= item.prices[1]) {
                // console.log(`Keep arr${i}`)
            } else if (item.prices[0] < range[0]) {
                delete arr[i];
            };
        })
    }
    return arr;
}


// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


// Варианты цен (фильтры), которые ищет пользователь
let requiredRange0 = [null, null];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [400, null];
let requiredRange5 = [null, 500];


/* ВВОД ВХОДНЫХ ДАННЫХ */
let res = filterByPrice(courses, requiredRange1);


/* СОРТИРОВКА */
res = sortByMinAsc(courses);
// res = sortByMinDes(courses);
// res = sortByMaxAsc(courses);
// res = sortByMaxDes(courses);


/* ВЫВОД РЕЗУЛЬТАТА В КОНСОЛЬ */
res.forEach(item => {
    console.log(`Price from ${item.prices[0]} to ${item.prices[1]}. ${item.name}`);
})