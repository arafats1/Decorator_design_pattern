// Using the decorator pattern to add functionality to an object.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 6000;
    };
    SimpleCoffee.prototype.getIngredients = function () {
        return "Coffee";
    };
    return SimpleCoffee;
}());
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(decoratedCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    CoffeeDecorator.prototype.getCost = function () {
        return this.decoratedCoffee.getCost();
    };
    CoffeeDecorator.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients();
    };
    return CoffeeDecorator;
}());
var Latte = /** @class */ (function (_super) {
    __extends(Latte, _super);
    function Latte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Latte.prototype.getCost = function () {
        return this.decoratedCoffee.getCost() + 2000;
    };
    Latte.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients() + ", plus light foam to the coffee gives us Latte";
    };
    return Latte;
}(CoffeeDecorator));
var Capuccino = /** @class */ (function (_super) {
    __extends(Capuccino, _super);
    function Capuccino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Capuccino.prototype.getCost = function () {
        return this.decoratedCoffee.getCost() + 2500;
    };
    Capuccino.prototype.getIngredients = function () {
        return this.decoratedCoffee.getIngredients() + ", plus half a cup of foam to the coffee gives us Capuccino";
    };
    return Capuccino;
}(CoffeeDecorator));
var coffee = new SimpleCoffee();
console.log(coffee.getCost());
console.log(coffee.getIngredients());
var latte = new Latte(coffee);
console.log(latte.getCost());
console.log(latte.getIngredients());
var capuccino = new Capuccino(coffee);
console.log(capuccino.getCost());
console.log(capuccino.getIngredients());
