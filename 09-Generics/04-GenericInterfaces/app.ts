export {}

interface Tuple<K, V> {
    key: K;
    value: V;
}

const tuple1: Tuple<string, number> = { key: "age", value: 30 };
console.log(tuple1);

const tuple2: Tuple<number, boolean> = { key: 123, value: true };
console.log(tuple2);

const tuple3: Tuple<string, string> = { key: "name", value: "Max" };
console.log(tuple3);


console.log("--------------------------------------------------");


interface FetchResponse<T> {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    data: T;
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {}

    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();
    return {
        status: response.status,
        statusText: response.statusText,
        headers,
        data: data as T
    };
}

(async () => {
    const response = await fetchJson<{ title: string }>('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);
    console.log(response.data.title);
})();