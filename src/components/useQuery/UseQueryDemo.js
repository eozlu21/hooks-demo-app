import { useQuery } from "@tanstack/react-query";

function UseQueryDemo() {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
}

export default UseQueryDemo;
