export type BookType = {
  title: string
  image: string
  author: string
  link: string
  current?: boolean
}

export const books: BookType[] = [
  {
    title:"El despertar del leviatán",
    author:"James S.A. Corey",
    image:"/assets/images/books/expanse1.jpg",
    link: "https://www.goodreads.com/book/show/32023743-el-despertar-del-leviat-n",
    current: true
  },
  {
    title:" Cómo ganar amigos e influir sobre las personas",
    author:"Dale Carnegie",
    image:"/assets/images/books/amigos.jpg",
    link: "https://www.goodreads.com/book/show/18954937-c-mo-ganar-amigos-e-influir-sobre-las-personas",
    current: true
  },
  {
    title:"Simplify Testing with React Testing Library",
    author:"Scottie Crump",
    image:"/assets/images/books/testing.jpg",
    link: "https://www.goodreads.com/book/show/58052469-simplify-testing-with-react-testing-library",
    current: true
  },
  {
    title:"Esbozos Filosóficos",
    author:"Damián Pachón Soto",
    image:"/assets/images/books/esbozos.jpg",
    link: "https://www.iberlibro.com/servlet/BookDetailsPL?bi=30789360307",
    current: false
  },
  {
    title:"Atomic Habits",
    author:"James Clear",
    image:"/assets/images/books/atomic.jpg",
    link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
  },
  {
    title:"La viajera del tiempo",
    author:"Lorena Franco",
    image:"/assets/images/books/viajera.jpg",
    link: "https://www.goodreads.com/book/show/35415895-la-viajera-del-tiempo",
  },
  {
    title:"A Short History of Nearly Everything",
    author:"Bill Bryson",
    image:"/assets/images/books/book.jpg",
    link: "https://www.goodreads.com/book/show/42895.Una_breve_historia_de_casi_todo",
  },
  {
    title:"La muerte: Una reflexión filosófica",
    author:"Todd May",
    image:"/assets/images/books/muerte.jpg",
    link: "https://www.goodreads.com/book/show/25315499-la-muerte",
  },
  {
    title:"The Tibetan Book of Life and Death",
    author:"Sogyal Rinpoche",
    image:"/assets/images/books/tibetano.jpg",
    link: "https://www.goodreads.com/book/show/1386055.El_Libro_Tibetano_De_La_Vida_Y_La_Muerte_the_Tibetan_Book_of_Life_and_Death",
  },
  {
    title:"El poder del ahora",
    author:"Eckhart Tolle",
    image:"/assets/images/books/ahora.jpg",
    link: "https://www.goodreads.com/book/show/19092908-el-poder-del-ahora",
  },
  {
    title:"El tatuador de Auschwitz",
    author:"Heather Morris",
    image:"/assets/images/books/tatuador.jpg",
    link: "https://www.goodreads.com/book/show/41570495-el-tatuador-de-auschwitz",
  },
  {
    title:"Reiniciados",
    author:"Amy Tintera",
    image:"/assets/images/books/reiniciados1.jpg",
    link: "https://www.goodreads.com/book/show/43535303-reiniciados",
  },
  {
    title:"Rebeldes",
    author:"Amy Tintera",
    image:"/assets/images/books/reiniciados2.jpg",
    link: "https://www.goodreads.com/book/show/15769788-rebel",
  },
  {
    title:"Man's Search for Meaning",
    author:"Viktor E. Frankl",
    image:"/assets/images/books/sentido.jpg",
    link: "https://www.goodreads.com/book/show/19306508-man-s-search-for-meaning",
  },
  {
    title:"De animales a dioses",
    author:"Yuval Noah Harari",
    image:"/assets/images/books/animales.jpg",
    link: "https://www.goodreads.com/book/show/23212883-de-animales-a-dioses",
  },
  {
    title:"Días de terror",
    author:"Diana Shaw",
    image:"/assets/images/books/terror.jpg",
    link: "https://www.goodreads.com/book/show/6112961-d-as-de-terror",
  },
]