const baseUrl = process.env.NEXT_PUBLIC_URL ?? "http://localhost:8000/api";

function requestFetch({
  url,
  method,
  body,
}: {
  url: string;
  method: string;
  body?: Object;
}) {
  return new Promise<{ response: Array<any> }>(
    async (resolve: Function, reject) => {
      try {
        const res = await fetch(`${baseUrl}/${url}`, {
          method: method,
          body: JSON.stringify(body),
        }).then((res) => res.json());
        resolve(res);
      } catch (err) {
        reject(err);
      }
    }
  );
}

export const FetchService = {
  get: (url: string) => requestFetch({ url, method: "GET" }),
  post: (url: string, body: Object) =>
    requestFetch({ url, method: "POST", body }),
};
