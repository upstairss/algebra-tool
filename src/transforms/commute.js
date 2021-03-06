function canTransform(selections) {
    if (selections.length !== 1) return false;
    let selection = selections[0];

    if (selection.length === 1 && ['Expression', 'Product'].includes(selection.first.type)) {
        selection = selection.first.children;
    }
    if (selection && selection.length === 3) {
        const [first, operator, ] = selection;

        if (operator.type !== 'Operator') {
            return false;
        }
        if (operator.operator === '-') {
            return false;
        }
        if (operator.operator === '+' && first.prev && first.prev.operator === '-') {
            return false;
        }
        return true;
    }
    return false;
}

function doTransform(selections) {
    if (canTransform(selections)) {
        let selection = selections[0];

        if (selection.length === 1 && ['Expression', 'Product'].includes(selection.first.type)) {
            selection = selection.first.children;
        }
        const { first, last } = selection;
        const operator = first.next;
        const parent = operator.parent;
        parent.remove(first);
        parent.remove(last);
        parent.insertAfter(first, operator);
        parent.insertBefore(last, operator);
    }
}

module.exports = {
    label: 'commute',
    canTransform,
    doTransform
};
