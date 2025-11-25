export const sample_foods: any[] = [
  {
    id:'1',
    name: 'pizza',
    price:10,
    cookTime:'10-20',
    favorite:false,
    origins:['italy'],
    stars:4.5,
    imageUrl:'/assets/pizza.jpg',
    tags:['FastFood','Pizza','Lunch'],
  },

  {
    id:'2',
    name: 'burger',
    price:20,
    cookTime:'20-30',
    favorite:true,
    origins:['persia','middle east','china'],
    stars:4.7,
    imageUrl:'/assets/burger.jpg',
    tags:['SlowFood','Lunch'],
  },

  {
    id: '3',
    name: 'dhosa',
    price:3,
    cookTime:'10-15',
    favorite:false,
    origins:['germany','us'],
    stars:3.5,
    imageUrl:'/assets/dhosa.jpg',
    tags:['FastFood','Lunch'],
  },

  {
    id: '4',
    name: 'french-fries',
    price:2,
    cookTime:'15-20',
    favorite:true,
    origins:['belgium','france','india'],
    stars:3.3,
    // FIXED filename (no space)
    imageUrl:'/assets/french-fries.jpg',
    tags:['FastFood','Fry'],
  },

  {
    id: '5',
    name: 'sandwich',
    price:2,
    cookTime:'40-50',
    favorite:false,
    origins:['asia','india'],
    stars:3.3,
    imageUrl:'/assets/sandwich.jpg',
    tags:['SlowFood','Fry'],
  },

  {
    id:'6',
    name: 'Schezwan-noodles',
    price:9,
    cookTime:'40-50',
    favorite:false,
    origins:['italy'],
    stars:4.0,
    imageUrl:'/assets/sezwan.jpg',
    tags:['SlowFood','Fry'],
  },

  {
    id: '7',
    name: 'soup',
    price:10,
    cookTime:'20-30',
    favorite:false,
    origins:['india'],
    stars:4.0,
    imageUrl:'/assets/soup.jpg',
    tags:['SlowFood','Fry'],
  },

  {
    id: '8',
    name: 'manchurian',
    price:5,
    cookTime:'10-15',
    favorite:true,
    origins:['india'],
    stars:4.0,
    imageUrl:'/assets/manchurian2.jpg',
    tags:['FastFood','Fry','Pizza'],
  },
];


export const sample_tags: any[] = [
  { name: 'All', count: 8 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 3 },
  { name: 'Fry', count: 3 },
  { name: 'Soup', count: 1 },
];


export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
