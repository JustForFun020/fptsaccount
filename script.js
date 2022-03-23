$('#table__primary').DataTable({
    processing: true,
    ajax: "./data.json",
    columns: [
      {data: "name"},
      {data: "status"},
      {data: "request"},
      {data: "user"},
    ],
    pageLength: 3
  })