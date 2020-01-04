function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Jerry Smith'
    };
    callback(data);
};

greet(function(data){
    console.log('Callback was invoked.');
    console.log(data);
    // This callback will invoke the full data object.
});

greet(function(data){
    console.log('A different Callback was invoked this time.');
    console.log(data.name);
    // This callback will invoke the name property from the data object
});

