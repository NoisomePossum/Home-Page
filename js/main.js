
function toggleDisplay (element) {
    var childElement = element.querySelector(".pulldownDiv");
    var isHidden = window.getComputedStyle(childElement, null).getPropertyValue('display') == "none";
    if (isHidden) {
        childElement.style.display = "block";
    }
    else {
        childElement.style.display = "none";
    }
}
