if (document.getElementById("datatable-basic")) {
  const dataTableBasic = new simpleDatatables.DataTable("#datatable-basic", {
    searchable: false,
    fixedHeight: true
  });
}

if (document.getElementById("datatable-search")) {
  const dataTableSearch = new simpleDatatables.DataTable("#datatable-search", {
    paging: false,
    ordering: false,
    sortable: false,
    info: false,
    searchable: true,
    fixedHeight: false
  });
}

if (document.getElementById("datatable-pagination")) {
  console.log("datatable-pagination");
  const dataTableSearch = new simpleDatatables.DataTable("#datatable-pagination", {
    paging: true,
    prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"w-5 h-5\"><path fill-rule=\"evenodd\" d=\"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z\" clip-rule=\"evenodd\" /></svg>",
    nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"w-5 h-5\"><path fill-rule=\"evenodd\" d=\"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z\" clip-rule=\"evenodd\" /></svg>",
    ordering: false,
    sortable: false,
    info: false,
    searchable: false,
    fixedHeight: true,
    perPage: 5,

  });
}

// document.querySelector(".dataTable-input").classList.add("focus:shadow-primary-outline", "float-end", "dark:text-white/80", "ease", "focus:outline-none", "focus:transition-shadow");


