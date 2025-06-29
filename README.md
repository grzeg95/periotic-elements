# Atipera – Angular Recruitment Task

## Comments
The task was supposed to be solved using Angular 20 but the @ngrx/signals library was only available in version 19 so it was not possible to install version 20 of Angular but 19.

## Task

An interface displaying a table of chemical elements with the following features:

- Ability to edit any table field (popup form dialog)
- Filtering data across all fields with debouncing (2-seconds)

The task was implemented using **Angular 19** with:

- `signalStore` (`@ngrx/signals@^19.2.1`)
- `Angular Material` (`@angular/material@^19.2.18`)
- `Signals` (`computed`)
