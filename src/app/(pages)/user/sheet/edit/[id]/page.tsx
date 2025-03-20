

export default async function Page({
    params,
  }: {
    params: { id: string };
  }) {
    const id = Number(params.id); 
  
    return <div>id edit: {id}</div>;
  }