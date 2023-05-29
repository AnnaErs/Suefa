function hasClass(element: Element, className: string) {
    return element.classList.contains(className);
}

function removeClass(el: Element, className: string) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
}

function addClass(el: Element, className: string) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}

export function moveToRightBlock() {
    let currentBlock = document.querySelector(".current-block");
    let blockToTheRight = currentBlock && currentBlock.nextElementSibling;
    if (
        blockToTheRight &&
        blockToTheRight.nodeType === 1 &&
        currentBlock &&
        blockToTheRight
    ) {
        removeClass(currentBlock, "current-block");
        console.log("удалил класс");
        addClass(blockToTheRight, "current-block");
    }
}
export function moveToLeftBlock() {
    const currentBlock = document.querySelector(".current-block");
    const blockToTheLeft = currentBlock && currentBlock.previousElementSibling;
    if (blockToTheLeft && blockToTheLeft.nodeType === 1) {
        removeClass(currentBlock, "current-block");
        addClass(blockToTheLeft, "current-block");
    }
}
export function moveToDownBlock() {
    const currentBlock = document.querySelector(".current-block");
    const blockBelow = currentBlock && currentBlock.nextElementSibling;
    if (blockBelow && blockBelow.nodeType === 1) {
        removeClass(currentBlock, "current-block");
        addClass(blockBelow, "current-block");
    }
}
// function moveToUpBlock() {
//     const currentBlock = document.querySelector(".current-block");
//     const blockAbove = if(currentBlock) {
//         currentBlock.previousElementSibling ||
//         currentBlock.previousSibling.previousElementSibling;
//     }
//     if (blockAbove && blockAbove.nodeType === 1) {
//         removeClass(currentBlock, "current-block");
//         addClass(blockAbove, "current-block");
//     }
// }
export function clickOnCurrentBlock() {
    const currentBlock = document.querySelector(
        ".current-block"
    ) as HTMLElement;
    currentBlock && currentBlock.click();
}
