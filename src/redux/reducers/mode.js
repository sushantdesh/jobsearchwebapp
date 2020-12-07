export function darkModeToggle(state = false, action) {
    switch (action.type) {
        case 'DARK_MODE_TOGGLE':
            return !state;
        default:
            return state;
    }
}