function headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" +"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im51bWJlciI6Iis5MjMzMzkxODQxMzkifSwiaWF0IjoxNjE1NzIyODM3LCJleHAiOjE2MjM0OTg4Mzd9.7ZyE3IxTO7iCa4EXseW3fE6GN6qJ9Q8mRHsiJlGbz9Y",
      Connection: "close",
    };
}

export function profileData () {
    return fetch("http://localhost:5000/users/", {
        headers: headers(),
      }).then((response) => response.json());
}