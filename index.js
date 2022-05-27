// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstFavoriteRestaurantArray = [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
]

const firstFavoriteColorArray = ["Yellow", "Pink", "White", "Purple"]

const firstFavoriteRestaurant = [...new Set(firstFavoriteRestaurantArray)]

const firstFavoriteColor = [...new Set(firstFavoriteColorArray)]


const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: firstFavoriteColor,
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },
        {
            name: "SMA 03",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: firstFavoriteRestaurant,
}

const secondFavoriteRestaurantArray = [
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
]

const secondFavoriteColorArray = ["Blue", "Black", "Gray"]

const secondFavoriteRestaurant = [...new Set(secondFavoriteRestaurantArray)]

const secondFavoriteColor = [...new Set(secondFavoriteColorArray)]


const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: secondFavoriteColor,
    isHavePet: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016,
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: secondFavoriteRestaurant,
}

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = []
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size)
    console.log(users)
}

main()

module.exports = {
    users,
}