import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:"Tokiagoo",
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is a road-and-foot-traffic bridge over the River Thames in London, linking Westminster on the west side and Lambeth on the east side.The bridge is painted predominantly green, the same colour as the leather seats in the House of Commons which is on the side of the Palace of Westminster nearest to the bridge, but a natural shade similar to verdigris. This is in contrast to Lambeth Bridge, which is red, the same colour as the seats in the House of Lords and is on the opposite side of the Houses of Parliament. In 2005–2007, it underwent a complete refurbishment, including replacing the iron fascias and repainting the whole bridge. It links the Palace of Westminster on the west side of the river with County Hall and the London Eye on the east and was the finishing point during the early years of the London Marathon.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:"Liaproo",
    price: 99,
    maxGroupSize: 8,
    desc: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. The provincial capital, Denpasar,[9] is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. The upland town of Ubud in Greater Denpasar is considered Bali's cultural centre. The province is Indonesia's main tourist destination, with a significant rise in tourism since the 1980s.[10] Tourism-related business makes up 80% of its economy. Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism. It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The Indonesian International Film Festival is held every year in Bali. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:"Hiiokiou",
    price: 99,
    maxGroupSize: 8,
    desc: "Snowy Mountain stands within the watershed of the Hudson River, which drains into New York Bay. The south end of the northwest side of Snowy Mountain drains into Little Squaw Brook, thence into the Cedar River, and the Hudson River. The north side of Snowy Mountain drains into Squaw Brook, thence into Indian Lake, Lake Abanakee, the Indian River, and the Hudson River. The northeast end of Snowy Mountain drains into Beaver Brook, thence into Indian Lake. The southeast slopes of Snowy Mountain drain into Indian Lake via Griffin Brook, Forks Brook, Willow Brook, and Falls Brook.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:"Tokiagoo",
    price: 99,
    maxGroupSize: 8,
    desc: "any luxury hotels in Bangkok provide breakfast on the terrace so that their guests could enjoy the sunrise in Bangkok in the comfort of their own stays. If you do not want to get ready so early and travel across the city, some of the hotels also have east-facing rooms for you to enjoy the sunrise from the luxurious confines of your bed. All that one has to keep in mind while booking the hotel is to book a hotel near the Chao Phraya River.Sunrise in Bangkok is one of the most beautiful parts of the day and if you are in the city, make sure that you wake up early enough to see it.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    address:"Tokiagoo",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Nusa Penida (Balinese: ᬦᬸᬲᬧᭂᬦᬶᬤ), romanized: nusapĕnida, lit. 'Penida Island') is an island located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. The Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a maximum altitude of 524 metres. It is drier than the nearby island of Bali. It is one of the major tourist attractions among the three Nusa islands.There are thirteen small islands nearby – Nusa Lembongan, Nusa Ceningan and eleven even smaller – which are included within the administrative district (kecamatan), which has the same name s the main island. It had a population of 45,110 at the 2010 census, covering 202.84 km2,[1] and the official estimate as at mid 2022 was 59,900.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:"Tokiagoo",
    price: 99,
    maxGroupSize: 8,
    desc: "Cherry blossom spring is an island located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. The Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a maximum altitude of 524 metres. It is drier than the nearby island of Bali. It is one of the major tourist attractions among the three Nusa islands.There are thirteen small islands nearby – Nusa Lembongan, Nusa Ceningan and eleven even smaller – which are included within the administrative district (kecamatan), which has the same name s the main island.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Harman cafe street, France",
    city: "France",
    distance: 500,
    address:"Tokiagoo",
    price: 99,
    maxGroupSize: 8,
    desc: "Haraman cafe is an cafe located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. The Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a maximum altitude of 524 metres. It is drier than the nearby island of Bali. It is one of the major tourist attractions among the three Nusa islands.There are thirteen small islands nearby – Nusa Lembongan, Nusa Ceningan and eleven even smaller – which are included within the administrative district (kecamatan), which has the same name s the main island.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Rusian Tikelas",
    city: "Thailand",
    distance: 500,
    address:"Tokiagoo",
    price: 99,
    maxGroupSize: 8,
    desc: "Rusian located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. The Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a maximum altitude of 524 metres. It is drier than the nearby island of Bali. It is one of the major tourist attractions among the three Nusa islands.There are thirteen small islands nearby – Nusa Lembongan, Nusa Ceningan and eleven even smaller – which are included within the administrative district (kecamatan), which has the same name s the main island.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
