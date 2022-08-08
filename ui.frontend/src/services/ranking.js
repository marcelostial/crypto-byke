import axios from "axios";

export async function getRankings() {
  // TODO: Get api data

  // Temporary data for testing
  return {
    data: {
      ranking: [
        {
          ranking: 1,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Alex",
          nickname: "@alex",
          country: "Brazil",
          state: "Rio Grande do Sul",
          city: "Rio Grande",
          distance: "888 km",
          country_code: "BR",
        },
        {
          ranking: 2,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Felipe",
          nickname: "@felipe",
          country: "Estados Unidos",
          state: "Pernambuco",
          city: "Recife",
          distance: "617 km",
          country_code: "US",
        },
        {
          ranking: 3,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Ana",
          nickname: "@ana",
          country: "França",
          state: "Santa Catarina",
          city: "Florianópolis",
          distance: "941 km",
          country_code: "FR",
        },
        {
          ranking: 4,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Bruna",
          nickname: "@bruna",
          country: "Espanha",
          state: "Pernambuco",
          city: "Recife",
          distance: "554 km",
          country_code: "ES",
        },
        {
          ranking: 5,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Heitor",
          nickname: "@heitor",
          country: "Italia",
          state: "Paraná",
          city: "Curitiba",
          distance: "324 km",
          country_code: "IT",
        },
        {
          ranking: 6,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          name: "Lívia",
          nickname: "@livia",
          country: "Japão",
          state: "Minas Gerais",
          city: "Belo Horizonte",
          distance: "123 km",
          country_code: "JP",
        },
      ],
      total: 12,
      limit: 6,
      offset: 0,
      offsets: 2,
    },
  };
}
