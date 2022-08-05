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
          nickname: "Alex",
          country: "Brazil",
          state: "Rio Grande do Sul",
          city: "Rio Grande",
          distance: "NaN km",
          country_code: "BR",
        },
        {
          ranking: 2,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          nickname: "Felipe",
          country: "Brazil",
          state: "Pernambuco",
          city: "Recife",
          distance: "NaN km",
          country_code: "BR",
        },
        {
          ranking: 3,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          nickname: "Ana",
          country: "Brazil",
          state: "Santa Catarina",
          city: "Florianópolis",
          distance: "NaN km",
          country_code: "BR",
        },
        {
          ranking: 4,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          nickname: "Bruna",
          country: "Brazil",
          state: "Pernambuco",
          city: "Recife",
          distance: "NaN km",
          country_code: "BR",
        },
        {
          ranking: 5,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          nickname: "Heitor",
          country: "Brazil",
          state: "Paraná",
          city: "Curitiba",
          distance: "NaN km",
          country_code: "BR",
        },
        {
          ranking: 6,
          profile_img:
            "https://dgalywyr863hv.cloudfront.net/pictures/athletes/105002046/25114068/1/large.jpg",
          nickname: "Lívia",
          country: "Brazil",
          state: "Minas Gerais",
          city: "Belo Horizonte",
          distance: "NaN km",
          country_code: "BR",
        },
      ],
      total: 12,
      limit: 6,
      offset: 0,
      offsets: 2,
    },
  };
}
