My application has a number of components. My main component is FilteredList. This
contains all of the app's logic and state. All methods that change the site's state
live here and are passed to other components. Each food item contains an id, price, size, and type. 
My state contains an active size, type, sort parameter, and food items in the cart.

We had components for each navbar (one for each filtering and one for sort). These components
were passed functions that updated the state of the respective filter / sort. Thus, when the filtering
option was selected, the function would be triggered, the components would re-render, and the items
would reflect the updated state.

I also had a componenet that displays the list. This received the sorted, filtered list as a prop from
its parent component (FilteredList). The job of this component was just to render each item. It also
received a function as a prop that would add the item to the cart. This function updates the state of
the cart in the FilteredList. It is triggered via the 'Add to cart' item.

Finally, I had a cart component. Similar to the DisplayList, the Cart received functions to update the
state of its cart (both increasing and decreasing quantity and removing the item entirely). All of these
functions were triggered by buttons, and would update the state in FilteredList. This would then re-render
the page.

The user triggers state change by hitting any button. The site is designed so that anything that
can be clicked on has purpose and will update this visual of the site (either in the cart of catalog
of items).

In sum, all state and major functionality is in FilteredList. The functions that update this state are passed as props to its children.