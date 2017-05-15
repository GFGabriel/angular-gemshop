ng-app - attach the Application Module to the page.

ng-controller - attach the Controller function to the page.

ng-show/ng-hide - display a section based on an Expression.

ng-repeat - repeat a section for each item in an Array.

ng-src - allows you to choose the source of the image.

ng-click - does something on click

ng-class - sets a class based on an expression

ng-model - binds the form element value to the property

ng-submit - allows us to call a function when the form is submitted


** Filters
{{ data | filter:options }} - basic format

** Filter types
currency:
{{product.price | currency}}

date:
{{'1388123412323' | date: 'MM/dd/yyyy @ h:mma'}}

uppercase/lowercase:
{{'octagon gem' | uppercase}}

limitTo:
<li ng-repeat='product in store.products | limitTo:3'>

orderBy:
<li ng-repeat='products in store.products | orderBy:"-price"''
