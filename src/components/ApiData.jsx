import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const PAGE_SIZE = 10;

function ApiData() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setFiltered(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
    setPage(1); // Reset to first page on search
  }, [search, data]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) return <Card>Loading...</Card>;
  if (error) return <Card className="text-red-500">{error}</Card>;

  return (
    <Card>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <h2 className="text-2xl font-bold">API Data</h2>
        <input
          className="border px-2 py-1 rounded dark:bg-gray-700"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid gap-4">
        {paginated.map((item) => (
          <div key={item.id} className="p-4 border rounded dark:border-gray-700">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="px-2 py-1">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default ApiData;