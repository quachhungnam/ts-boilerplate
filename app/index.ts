function main() {
    const user = {
        name: 'Taylor',
        age: 18
    }
    if (user.age > 18) {
        console.log('adult')
    }

}

(() => {
    console.log('server starting')
    main()
})()
