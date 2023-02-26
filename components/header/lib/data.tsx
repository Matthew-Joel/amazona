  import bcrypt from 'bcryptjs'

  const data = {
    users:[
        {
            name:'John',
            email:'admin@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name:'Jane',
            email:'admin@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false,
        }, 
    ],
  products:[
    {
        name:'Free Shirt',
        slug:'free-shirt',
        category:'Shirts',
        image:'/images/shirt1.jpg',
        price:50,
        brand:'Nike',
        rating:4.5,
        numReviews:8,
        countInStock:20,
        description:'A popular shirt',
        isFeatured:true,
        banner:'/images/banner1.jpg' 
    },
    {
        name:'Fit Shirt',
        slug:'fit-shirt',
        category:'Shirts',
        image:'/images/shirt2.jpg',
        price:80,
        brand:'Addida',
        rating:3.5,
        numReviews:6,
        countInStock:20,
        description:'A popular shirt',
        isFeatured:true,
        banner:'/images/banner2.jpg' 
    },
    {
        name:'Slim Shirt',
        slug:'slim-shirt',
        category:'Shirts',
        image:'/images/shirt3.jpg',
        price:90,
        brand:'Joelly',
        rating:4.5,
        numReviews:18,
        countInStock:20,
        description:'A popular shirt',
        isFeatured:true,
        banner:'/images/banner1.jpg' 
    },
    {
        name:'Golf Pants',
        slug:'golf-pants',
        category:'Pants',
        image:'/images/pants1.jpg',
        price:50,
        brand:'Nike',
        rating:4.5,
        numReviews:8,
        countInStock:20,
        description:'smart looking pant',
        isFeatured:true,
    },
    {
        name:'Fit Pants',
        slug:'fit-pants',
        category:'Pants',
        image:'/images/pants2.jpg',
        price:50,
        brand:'Zara',
        rating:4.5,
        numReviews:8,
        countInStock:20,
        description:'smart looking pant',
        isFeatured:true,
    },
  ]  
}
export default data