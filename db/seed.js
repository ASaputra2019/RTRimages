const db = require('./index')

const seed = () => {
    db.insertMany([
    {
    "product_id": 0,
    "images": [
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/Free+People1.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/Free+People2.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/Free+People3.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/Free+People4.jpg'
    ],
    "reviewImages":[
        'https:s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/Free+People+review.JPG',
        'https:s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/FPmodal1.JPG',
        'https:s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/FPmodal2.JPG',
        'https:s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/FPmodal3.JPG',
        'https:s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+3/FPmodal4.JPG'
    ]
    },
    {
    "product_id": 1,
    "images": [
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/Badgley+Mischka1.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/Badgley+Mischka2.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/Badgley+Mischka3.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/Badgley+Mischka4.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/Badgley+Mischka5.jpg'
    ],
    "reviewImages":[
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/BadgleyMischka+review.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/BMmodal1.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/BMmodal2.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/BMmodal3.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+2/BMmodal4.JPG'
    ]
    },
    {
    "product_id": 2,
    "images": [
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+1.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper2.jpg',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper3.jpg'

    ],
    "reviewImages":[
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+review.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Nmodal1.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Nmodal2.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Nmodal3.JPG',
        'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Nmodal4.JPG'
    ]
    },
])
}

seed()












/*
stars: faker.random.number(),
        reviewTitle: faker.commerce.productMaterial(),
        userInfo: {
            height: faker.random.number(),
            weight: faker.random.number(),
            bust: faker.random.number(),
            bodyType: faker.lorem.word(),
            age: faker.random.number(),
            sizeWorn: faker.commerce.productName(),
            usualSize: faker.random.number(),
            wornTo: faker.commerce.department()
        },
        comment: faker.lorem.sentences(),
        reviewImages: faker.image.fashion()
*/