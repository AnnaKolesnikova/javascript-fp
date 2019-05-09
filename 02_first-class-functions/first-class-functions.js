{ //объявление
    42;
    { };
    function func() { }
}

{ //создание
    new Number(42);
    new Object();
    new Function();
}

{ //присваивание
    let val = 42;
    let obj = {};
    let func = function() { }; //() => {} 
}

{ //элементы массива
    let array = [val, obj, func];
}

{ //свойства объекта
    let stuff = {
        val: 42,
        obj: {},
        func: function() {} //() => {}
    }
}

{ //аргументы
    сonsole.log(val);
    сonsole.log(obj);
    сonsole.log(func);
}

{ //возврат из функции
    function pass(value) {
        return value;
    }

    pass(val);
    pass(obj);
    pass(func);
}

//свойства
let obj = {};
obj.foo = '';

function foo() { };

foo.bar = '';