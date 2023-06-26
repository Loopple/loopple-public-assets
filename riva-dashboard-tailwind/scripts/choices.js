
if (document.querySelector("select[choices-select-sidebar]")) {
  var choices = document.querySelectorAll("select[choices-select-sidebar]");
  choices.forEach(choice => {
    let search = choice.hasAttribute("choices-search");
    const example = new Choices(choice, {
      searchEnabled: search,
      shouldSort: false,
    });
  });
}
if (document.querySelector("select[choices-select-sidebar-dark]")) {
  var choices = document.querySelectorAll("select[choices-select-sidebar-dark]");
  choices.forEach(choice => {
    let search = choice.hasAttribute("choices-search");
    const example = new Choices(choice, {
      searchEnabled: search,
      shouldSort: false,
    });
  });
}

if (document.querySelector("select[choices-select-table]")) {
  var choices = document.querySelectorAll("select[choices-select-sidebar]");
  choices.forEach(choice => {
    let search = choice.hasAttribute("choices-search");
    const example = new Choices(choice, {
      searchEnabled: search,
      shouldSort: false,
    });
  });
}

if (document.querySelector("select[choices-select]")) {
  var choices = document.querySelectorAll("select[choices-select]");
  choices.forEach(choice => {
    let search = choice.hasAttribute("choices-search");
    // console.log(choice);
    const example = new Choices(choice, {
      searchEnabled: search,
      shouldSort: false,
      placeholder: true,
      placeholderValue: 'Select Option',
    });
  });
}
if (document.querySelector("select[choices-select-dropdown]")) {
  var choices = document.querySelectorAll("select[choices-select-dropdown]");
  choices.forEach(choice => {
    let search = choice.hasAttribute("choices-search");
    const example = new Choices(choice, {
      searchEnabled: search,
      shouldSort: false,
      placeholder: true,
      placeholderValue: 'Select Option',
    });
  });
}
