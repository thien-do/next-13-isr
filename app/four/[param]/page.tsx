const Four = (): JSX.Element => {
  return <div>Four</div>;
};

export default Four;

export const revalidate = 60;

export const dynamic = "force-static";

export const fetchCache = "only-cache";
