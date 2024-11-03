## Atoms are Recoil specific concept

Atoms are same as useState it lets you change variable from any component .

step 1 : npm install recoil

step 2 : wrap the component inside recoil root

step 3 : create atom inside store -> atom -> counter.js

step 4 : for subscribing to the value useRecoilValue

step 5 : for getting the setter and getter function useSetRecoilState

## what did react said ?

React said anytime the component re-renders all its childrens re-renders

## what is useMemo Hook ?

use Memo hook is used to memoize a function so that it only renders when something changes or passed as a prop. useMemo is a function which accepts a function

Note : If you are using recoil you don't need to use Memo.

## Now what is selector in recoil ?

Selectors are derived state from atoms

step 1 : Create a selector it is like a function same as creating atom .
step 2 : Selector function destructure two things

1. key --> name of the selector
2. get --> Logic how the items from the atom will be derived.
