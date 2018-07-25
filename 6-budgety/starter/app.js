
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
    }

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

        // 1. Get the filed input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

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