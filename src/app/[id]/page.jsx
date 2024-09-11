const Page = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${params.id}/full`
  );
  const full = await response.json();
  console.log(full);
  return (
    <>
      <div>My Post: {params.id}</div>
      <p>synopsis: {full.data.synopsis}</p>
    </>
  );
};
export default Page;
