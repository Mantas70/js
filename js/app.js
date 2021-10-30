"use strict"


let books  = [
    {
        'Fantastine':[
    {
        'ISBN': '1',
        'Leidimo metai': '2021',
        'Pavadinimas': 'Metai',
        'Puslapiu skaicius': '165'
    },
    {
        'ISBN': '2',
        'Leidimo metai': '2014',
        'Pavadinimas': 'Metai',
        'Puslapiu skaicius': '165'
    },
    {
        'ISBN': '3',
        'Leidimo metai': '2013',
        'Pavadinimas': 'Metai',
        'Puslapiu skaicius': '165'
    },
    {
        'ISBN': '4',
        'Leidimo metai': '2012',
        'Pavadinimas': 'Metai',
        'Puslapiu skaicius': '165'
    }
    ],
        'Kriminaline':[
        {
            'ISBN': '5',
            'Leidimo metai': '2021',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '6',
            'Leidimo metai': '2011',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '7',
            'Leidimo metai': '2010',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '8',
            'Leidimo metai': '2008',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        }
    ],
        'Grozine':[
        {
            'ISBN': '9',
            'Leidimo metai': '2009',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '10',
            'Leidimo metai': '2001',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '11',
            'Leidimo metai': '2001',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        },
        {
            'ISBN': '12',
            'Leidimo metai': '2019',
            'Pavadinimas': 'Metai',
            'Puslapiu skaicius': '165'
        }
                ]
    }
]
let item = []
for (let object of books) for (let multiObject in object) {
    console.log(multiObject + ' Literatura' + ' (' + object[multiObject].length + ')')
    for (let number in object[multiObject]) {
        console.log(': ')
        for (let property in object[multiObject][number]) {
                if(object[multiObject][number][property] === '2021'){
                    console.log(property+": "+object[multiObject][number][property]+" (Nauja knyga)")
            }else{
                    console.log(property+": "+object[multiObject][number][property])
                }
        }
    }
}
