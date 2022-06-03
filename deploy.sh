#!/bin/bash

usage(){
    echo "Usage: ./deploy.sh <app>"
    echo ""
    echo "Currently avaiable apps:"
    echo "expense_calc - Calculation utility for shared expenses."
}

deployMainpage () {
    echo "Unimplemented!"
}

deployExpenseCalc () {
    git clone https://github.com/Cordain/expense-calc.git $1_build
    cd expense_calc_build
    wasm-pack build --target web --out-dir ./www/pkg
    sh -c "cd ./www/pkg && rm -rf .gitignore package.json README.md"
    rm -r ../$1 > /dev/null 2>&1
    mv ./www ../$1
    cd ../ && rm -rf $1_build
    echo ""
    echo "Site for $1 generated."
}

if test $(pwd | grep -o Cordain.github.io$ | wc -l) -eq 1 ; then
    case $1 in
    main)
        deployMainpage;;
    expense_calc)
        deployExpenseCalc "expense_calc";;
    *)
        usage;;
    esac
else
    echo "Error: not in the project root folder." >&2
    echo ""
    usage
fi;
echo ""
