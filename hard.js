function data() {
    let pii = {
    name: 'Octevion',
    ssn: 123456789
    }
    return {
    getName: function () {
    return `Hi my name is ${pii.name}`
    }
    }
    
    }
    
    let x = data();
    console.log(x.getName());