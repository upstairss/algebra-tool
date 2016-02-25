module.exports = {
    add_fractions: require('./transforms/add-fractions.js'),
    add_parens: require('./transforms/add-parens.js'),
    cancel_addtion: require('./transforms/cancel-addition.js'),
    cancel_factor: require('./transforms/cancel-factor.js'),
    cancel_subtraction: require('./transforms/cancel-subtraction.js'),
    collect_like_terms: require('./transforms/collect-like-terms.js'),
    commute: require('./transforms/commute'),
    distribute_backwards: require('./transforms/distribute-backwards'),
    distribute_forwards: require('./transforms/distribute-forwards'),
    eliminate_div_by_one: require('./transforms/eliminate-div-by-one.js'),
    eliminate_one: require('./transforms/eliminate-one.js'),
    eliminate_zero: require('./transforms/eliminate-zero.js'),
    evaluate: require('./transforms/evaluate.js'),
    factor: require('./transforms/factor.js'),
    multiply_fractions: require('./transforms/multiply-fractions.js'),
    prime_factorization: require('./transforms/prime-factorization.js'),
    remove_parens: require('./transforms/remove-parens.js'),
    replace_selection: require('./transforms/replace-selection.js'),
    rewrite_as_division: require('./transforms/rewrite-as-division.js'),
    rewrite_as_subtraction: require('./transforms/rewrite-as-subtraction'),
    rewrite_subtraction: require('./transforms/rewrite-subtraction'),
    swap_sides: require('./transforms/swap-sides'),
};
