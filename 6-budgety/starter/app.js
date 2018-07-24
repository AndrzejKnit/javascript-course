
// Budget controller
var budgetControler = (function() {

    // some code

})();


 // UI controller
var UIControler = (function() {

    // Some code

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        console.log('test');
        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display he budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    })

})(budgetControler, UIControler);