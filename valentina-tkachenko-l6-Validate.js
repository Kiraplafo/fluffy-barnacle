function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } // установка CSS класса 
    else {
        elem.className = "valid";
    }
}

// обработчики событий изменения текста в окне.
function nameOnChange(_this) {
    var pattern = /\S/;
    validate(_this, pattern);
}

function emailOnChange(_this) {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(_this, pattern);
}

function zipcodeOnChange(_this) {
    var pattern = /\d{5}/;
    validate(_this, pattern);
}

// событие при отправке формы на сервер.
function onsubmitHandler(event) {

    for (var i = 0; i < form1.elements.length; ++i) {
        if (form1.elements[i].type === "text")
            form1.elements[i].className = "valid";
    }

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var elem = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (elem.type == "text" && elem.onchange) {
            elem.onchange(); // запуск события onchange
            if (elem.className == "invalid") invalid = true;
        }
        return elem;
    }
    
    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
        return false; // отмена отправки формы.
    }
}

