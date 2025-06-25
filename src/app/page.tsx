import { GameProps } from "../utils/types/game";
import HomeContent from "../components/homeContent/HomeContent";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } },
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const data: GameProps[] = await getGamesData();

  return <HomeContent dalyGame={dalyGame} data={data} />;
}
