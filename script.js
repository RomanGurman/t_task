  const URL = 'http://localhost:3000';

  const request = (endpoint, method = "GET", data = {}) => {
  const body = method === "GET" ? void 0 : JSON.stringify(data);
    return fetch(`${URL}/${endpoint}`, {
    method,
    body,
    headers: {
    "Content-Type": "application/json"
  }
})
    .then((res) => res.json())
    .catch((err) => {
    console.error(err);
});
};

  const setContent = (content) => {
    document.body.innerHTML += content;
}

  const getDigraph = async () => {
    try {
  const digraph = await request('digraph/');
    setContent(JSON.stringify(digraph));
    } catch(err) {
    alert(err);
}
}
  getDigraph();

  function click() {
    var x = document.getElementById("myTable").table.length;
      document.getElementById("check").innerHTML = "Found " + x + "elements in the table.";
  }

  function removeTable() {
      document.getElementById("myTable").deleteRow(0);
}

 