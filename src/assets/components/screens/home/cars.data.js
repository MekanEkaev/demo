export const cars = [
    {
        id: 1,
        name: "Tayota Camry",
        price: 19970,
        image: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/20/FotoJetToyotCamry-2440374078.jpg",
    },
    {
        id: 2,
        name: "Hondo Accord",
        price: 18978,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRxb15nRKwe6deNYJU-1GHZD_numM4sHMq6mFI0tYLursfqAHEyTtqpsFBYNatnKOZNk&usqp=CAU",
    },
    {
        id: 3,
        name: "Hondo Civic",
        price: 16850,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0a0EE8CHO2MxqwVBfEykLEWny5mN0WNivYlxzkMnBgdoYUIZNdNLUCcPcfX8Kj0Xogc&usqp=CAU",
    },

    {
        id: 4,
        name: "Land Cruiser 300",
        price: 100000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png/640px-2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png",
    },
    {
        id: 5,
        name: "Lexus GX 2024",
        price: 145000,
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtsR5SdlKtaTvB67GfsgTUxYz2UwNkJOZgA&usqp=CAU",
    },

    {
        id: 6,
        name: "Tayota Tocoma",
        price: 60000,
        image: "data:image/jpeg;base64,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 ",
    },
    {
        id: 7,
        name: "RAM 1500 TRX",
        price: 120000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7MGhaBtwvPtYUnasqsUE3yV-GAi1G9EczN0N6got3LJjwoQ7UkdCUW7sKbrQBThoiIM&usqp=CAU",
    },
];
