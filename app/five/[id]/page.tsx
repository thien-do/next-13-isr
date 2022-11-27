export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 15 } }
  );
  const data = await res.json();
  return data;
}

const Five = async (props: any): Promise<JSX.Element> => {
  const data = await fetchData(props.params);

  return (
    <div>
      <div>{new Date().toLocaleTimeString()}</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Five;
