document.querySelector("#submit").addEventListener("click", function () {
    let contentArr = document.querySelector("#text").value.split('\n');
    let contentSet = new Set(contentArr);
    let contentSetArr = []
    for (const i of contentSet.values()) {
        contentSetArr.push(i);
    }
    document.querySelector('#modText').value = contentSetArr.join('\n');
});
