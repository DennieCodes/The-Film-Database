const filmData = [
  {
      title: "Synchronic",
      img_url: "https://m.media-amazon.com/images/M/MV5BYWVlNjUxNzctZTI3NC00MDMzLWFlMjAtYmI2NWE5ZWJhYjZmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR1,0,182,268_AL_.jpg",
      rating: "6.2",
      length: "1h 42min",
      release_date: "10/23/1995",
      id: "tt9016974",
      description: "Two New Orleans paramedics' lives are ripped apart after they encounter a series of horrific deaths linked to a designer drug with bizarre, otherworldly effects."
  },
  {
      title: "Se7en",
      img_url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.6",
      length: "2h 7min",
      release_date: "09/22/1995",
      id: "tt0114369",
      description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
      title: "Interstellar",
      img_url: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.6",
      length: "2h 49min",
      release_date: "11/07/2014",
      id: "tt0816692",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
      title: "The Martian",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.0",
      length: "2h 24min",
      release_date: "10/02/2015",
      id: "tt3659388",
      description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."
  },
  {
      title: "Avengers: Endgame",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.4",
      length: "3h 1min",
      release_date: "04/26/2019",
      id: "tt4154796",
      description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  },
  {
      title: "Gladiator",
      img_url: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.5",
      length: "2h 35min",
      release_date: "05/05/2000",
      id: "tt0172495",
      description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  },
  {
      title: "Excalibur",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTQ3OTA5NjY3OV5BMl5BanBnXkFtZTcwNjAxOTI3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "7.4",
      length: "2h 20min",
      release_date: "04/10/1981",
      id: "tt0082348",
      description: "Merlin the magician helps Arthur Pendragon unite the Britons around the Round Table of Camelot, even as dark forces conspire to tear it apart."
  },
  {
      title: "Star Wars: Episode IV - A New Hope",
      img_url: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.6",
      length: "2h 1min",
      release_date: "05/25/1977",
      id: "tt0076759",
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
  },
  {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      img_url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "8.8",
      length: "2h 58min",
      release_date: "12/19/2001",
      id: "tt0120737",
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
      title: "Ghost",
      img_url: "https://m.media-amazon.com/images/M/MV5BMTU0NzQzODUzNl5BMl5BanBnXkFtZTgwMjc5NTYxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rating: "7.1",
      length: "2h 7min",
      release_date: "07/13/1990",
      id: "tt0099653",
      description: "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic."
  },      
];

export default filmData;