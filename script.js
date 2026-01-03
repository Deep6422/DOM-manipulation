// TASK 1
document.getElementById("readBtn").addEventListener("click", function () {
    alert(document.getElementById("message").textContent);
});

// TASK 2
document.getElementById("changeBtn").addEventListener("click", function () {
    document.getElementById("title").textContent = "Updated Title";
});

// TASK 3
document.getElementById("styleBtn").addEventListener("click", function () {
    const p = document.getElementById("para");
    p.style.color = "blue";
    p.style.fontSize = "20px";
});

// TASK 4
document.getElementById("toggleBtn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.style.display = box.style.display === "none" ? "block" : "none";
});

// TASK 5 + 6
document.getElementById("addBtn").addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = "New paragraph added!";
    p.addEventListener("click", function () {
        p.remove();
    });
    document.getElementById("container").appendChild(p);
});

// TASK 7
document.getElementById("showName").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    document.getElementById("output").textContent = "Hello " + name;
});

// TASK 8
let count = 0;

document.getElementById("plus").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
});

document.getElementById("minus").addEventListener("click", function () {
    count--;
    document.getElementById("count").textContent = count;
});
