import Link from "next/link";

export default function ClinetPage() {
  const clients = [
    { id: "Max", name: "Num1" },
    { id: "Mini", name: "Num2" },
  ];

  return (
    <>
      <h1>Client Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: clients.id },
              }}
            >
              {clients.name}
            </Link>
            //OR THis works
            {/* <Link href={"/clients/${clients.id}"}>{clients.name}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
