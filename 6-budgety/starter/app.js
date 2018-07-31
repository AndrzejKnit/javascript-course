
// Budget controller
var budgetControler = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;  //id for new item: last ID + 1
            } else {
                ID = 0;
            }


            // Create new item based o 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        testing: function() {
            console.log(data);
        }
    };

})();



 // UI controller
var UIControler = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtb: '.add__btn'
    };
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMstrings: function() {   //metoda umozliwia dostęp publiczny do DOMStrings
            return DOMStrings;
        }
    };

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtb).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem();
                }
        });
    };



    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the filed input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display he budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListners();
        }
    };
})(budgetControler, UIControler);

controller.init();