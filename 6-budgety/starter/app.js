
// Budget controller
var budgetControler = (function() {

    // some code

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

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display he budget on the UI
    }

    document.querySelector(DOM.inputBtb).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    })

})(budgetControler, UIControler);