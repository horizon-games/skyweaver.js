import { SkyweaverAPIClient, GameMode } from 'skyweaver'

const main = async () => {

  // Hi :) In order to access the Skyweaver API, you will need a Developer API key, please
  // request one at https://developers.skyweaver.net
  const apiAccessToken = ''

  const apiClient = new SkyweaverAPIClient(apiAccessToken)

  const wee = await apiClient.listLeaderboard({
    req: {
      gameMode: GameMode.RANKED_CONSTRUCTED
    }
  })

  console.log(wee)
}

main()
