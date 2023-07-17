new SheetToHtml({
  scriptUrl: "https://script.google.com/macros/s/AKfycbz3Cn6900c9_d9KK7rXUU4w_CuCd98wt87oCn25gUr7COjTVx1DeZ5gRH84BHEqRxhz/exec",
  callBack: showData
});

function showData(content){
  let heading = document.getElementById("heading");
  let cellA2 = document.getElementById("cellA2");
  let cellB2 = document.getElementById("cellB2");
  let content = document.getElementById("content");

  heading.innerText = content.getData("A1");
  cellA2.innerText = content.getData("A2");
  cellB2.innerText = content.getData("B2");


}