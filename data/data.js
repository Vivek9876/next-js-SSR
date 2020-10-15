export const concertData = [
    {
        _id: '1',
        name: 'Forstress Europe',
        date: 'SAT 01 AUG',
        city: 'FREIDA MARGOLIS',
        state: 'AUCKLAND',
        type: 'Folk',
        time: '8 pm',
        price: '$40.00',
        description: 'This is owesome concert',
        presentBy: 'LIFE IS NOICE',
        hold: 'R18',
        imageUrl: '../data/nextImag/Fortress Europe.png'
    },
    {
        _id: '2',
        name: 'Khailana',
        date: 'SAT 01 AUG',
        city: 'PONSON BY SOCIAL',
        state: 'AUCKLAND',
        type: 'Hip-hop',
        time: '8 pm',
        price: '$40.00',
        description: 'This is owesome concert',
        presentBy: 'LIFE IS NOICE',
        hold: 'R18',
        imageUrl: '../data/nextImag/Khaliana.png'
    }
]

export const eventTime = [
    {
        date: "SAT 01 AUG",
        concert: [concertData[0], concertData[1]]
    },
    {
        date: "SAT 02 AUG",
        concert: [concertData[0], concertData[1]]
    },
    {
        date: "SAT 03 AUG",
        concert: [concertData[0]]
    }
]
