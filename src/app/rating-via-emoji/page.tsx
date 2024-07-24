const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rate={0} />
    </div>
  )
}

export default Page;

type Props = {
  rate: number;
}

const EmojiRating = ({ rate }: Props) => {
  if(rate > 5) rate = 5;
  if(rate < 0) rate = 0;

  const rateInt = Math.floor(rate);
  const emojis = ["😶","😔","🙁","😐","🙂","😁"]

  const stars = `${emojis[rateInt]}`.repeat(rateInt) + "😶".repeat(5 - rateInt);

  return (
    <div className="flex items-center text-6xl">
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      <div className="ml-3">{stars}</div>
    </div>
  )
}